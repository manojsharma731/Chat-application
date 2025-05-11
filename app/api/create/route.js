import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";
// const user_id="user_2w0M6o9pWlSI47cXfWOUIAxP3eI";

const api_key="2wcq8ub7c47j";
const api_secret="xk9enb9wkgd6rberhdhcekjqfk3djz9mzc3zquqgvjjw8ah6few79b97awx7yeg5";
export async function POST(request){
    const serverClient =StreamChat.getInstance(api_key,api_secret);
    const user=await request.json()
    const token=serverClient.createToken(user.data.id);
    console.log("New User has been created",token)
    const client=await clerkClient()
    await serverClient.upsertUser({id : user.data.id})
    await client.users.updateUserMetadata(user.data.id,{ 
        publicMetadata :{
            token : token
        },
    })
    // Give excess to this user for all chats
    const slugs=["python-discussion-new","js-discussion-new","cplus-discussion-new","dsa-discussion-new","oops-discussion-new","ai-discussion-new"]
    slugs.forEach(async (item)=>{
        const channel=serverClient.channel('messaging',item, {
            name: String(item),
            created_by_id:user.data.id
        });
        await channel.create()
        channel.addMembers([user.data.id])
    })
    return Response.json({ message: 'Hello World'})
}
// --update
// import { StreamChat } from 'stream-chat';
// import { clerkClient } from '@clerk/nextjs/server';

// const api_key="2wcq8ub7c47j";
// const api_secret="xk9enb9wkgd6rberhdhcekjqfk3djz9mzc3zquqgvjjw8ah6few79b97awx7yeg5";

// export async function POST(request) {
//   const serverClient = StreamChat.getInstance(api_key, api_secret);
//   const user = await request.json();

//   const userId = user.data.id;

//   // 1. Generate Token
//   const token = serverClient.createToken(userId);
//   console.log("New User has been created", token);

//   // 2. Upsert user
//   await serverClient.upsertUser({
//     id: userId,
//     name: user.data.name || "Anonymous", // Optional, safer
//   });

//   // 3. Save token to Clerk public metadata
//   const client = clerkClient;
//   await client.users.updateUserMetadata(userId, {
//     publicMetadata: {
//       token: token,
//     },
//   });

//   // 4. Create channels and add user as member
//   const slugs = [
//     "python-discussion-new",
//     "js-discussion-new",
//     "cplus-discussion-new",
//     "dsa-discussion-new",
//     "oops-discussion-new",
//     "ai-discussion-new"
//   ];

//   for (const slug of slugs) {
//     const channel = serverClient.channel("messaging", slug, {
//       name: slug,
//       created_by_id: userId,
//       members: [userId], // ✅ Add member here
//     });

//     try {
//       await channel.create();
//       // ❌ Do NOT call `addMembers()` after `create()` if members already passed
//     } catch (err) {
//       if (err.message.includes("already exists")) {
//         console.log(`Channel '${slug}' already exists, skipping creation.`);
//       } else {
//         console.error(`Error creating channel '${slug}':`, err.message);
//       }
//     }
//   }

//   return Response.json({ token }); // ✅ Return token if needed
// }
// // ---new chatgpt--
