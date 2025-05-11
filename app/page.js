import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-600 text-white flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="text-center max-w-2xl p-6">
        <h1 className="text-5xl font-bold mb-4">Welcome to Chat-App</h1>
        <p className="text-lg text-gray-200 mb-6">
          Connect, chat, and share with friends in real-time. Experience seamless messaging like never before.
        </p>
        <div className="flex justify-center">
          <Link href="/signup" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
            Get Started
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl text-center">
        <div className="p-6 bg-white text-indigo-700 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Instant Messaging</h3>
          <p className="text-gray-600">Chat with friends and family in real time with secure messaging.</p>
        </div>
        <div className="p-6 bg-white text-indigo-700 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Group Chats</h3>
          <p className="text-gray-600">Create and join group conversations effortlessly.</p>
        </div>
        <div className="p-6 bg-white text-indigo-700 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Media Sharing</h3>
          <p className="text-gray-600">Easily share images, videos, and documents with others.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

export const metadata= {
  title : 'WebChat',
  description : 'It will help you to connect with the people of your choice',
}