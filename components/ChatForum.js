"use client";
// import { useState, useEffect } from 'react';
// import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
// import { useUser } from '@clerk/nextjs';
// const CharForum = (clerkUser,slug) => {
//   const ClerkUser=useUser()
  
//   const userId = ClerkUser.user?.id;
// const userName = ClerkUser.user?.firstName;
//   const user= {
//     id: userId,
//     name:  userName,
//     image: `https://getstream.io/random_png/?name=${userName}`,
//   };
//   function toTitleCase(str){
//     return str.replace(
//       /\b[a-z]/g,
//       (char) => char.toUpperCase()
//     );
//   }
//   const [channel, setChannel] = useState();
//   const client = useCreateChatClient({
//     apiKey,
//     tokenOrProvider: userToken,
//     userData: user,
//   });

//   useEffect(() => {
//     if (!client) return;
//     const channel = client.channel('messaging', slug, {
//       image: 'https://getstream.io/random_png/?name=react',
//       name: toTitleCase((String(slug)).replace(/-/g," ")) +'Discussion',
//       members: [userId],
//     });

//     setChannel(channel);
//   }, [client]);

//   if (!client) return <div>Setting up client & connection...</div>;

//   return (
//     <Chat client={client}>
//       <Channel channel={channel}>
//         <Window>
//           <ChannelHeader />
//           <MessageList />
//           <MessageInput />
//         </Window>
//         <Thread />
//       </Channel>
//     </Chat>
//   );
// };

// export default CharForum;

// //-- New--//
"use client";
import React from "react";
import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';

const ChatForum=({clerkUser,slug})=>{
  const apiKey='';
  const userId=clerkUser.id;
  const userName=clerkUser.name;
  const userToken=clerkUser.token;
  const user={
    id :userId,
    name:userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };
  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', slug, {
      // image: 'https://getstream.io/random_png/?name=react',
      name: slug.toUpperCase(),
      members: [userId],
    });

    setChannel(channel);
    channel.addMembers([userId])
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}
export default ChatForum