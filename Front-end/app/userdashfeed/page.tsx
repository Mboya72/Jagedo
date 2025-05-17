"use client";
import React, { useState } from "react";
import Layout from "../../components/layout";

const feedItems = [
  {
    id: 1,
    title: "Post 1",
    content: "This is the first post content. I hope you like it!",
    author: "User 1",
    imageUrl: "/login.png",
    profileImageUrl: "/images/profile1.jpg",
    likes: 120,
    comments: 5,
  },
  {
    id: 2,
    title: "Post 2",
    content: "This is the second post content. Check this out!",
    author: "User 2",
    imageUrl: "/images/post2.jpg",
    profileImageUrl: "/images/profile2.jpg",
    likes: 85,
    comments: 3,
  },
  {
    id: 3,
    title: "Post 3",
    content: "Another amazing post! Stay tuned for more.",
    author: "User 3",
    imageUrl: "/images/post3.jpg",
    profileImageUrl: "/images/profile3.jpg",
    likes: 200,
    comments: 10,
  },
  {
    id: 4,
    title: "Post 4",
    content: "Fourth post content is here!",
    author: "User 4",
    imageUrl: "/images/post4.jpg",
    profileImageUrl: "/images/profile4.jpg",
    likes: 50,
    comments: 1,
  },
];

const FeedPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Layout>
      <div className="min-h-screen ml-11 bg-[url('/jagedoback2.png')] bg-cover bg-no-repeat p-6 text-white">
        <div className=" p-6  mb-6 text-black">
          <h2 className="text-5xl font-bold mb-4">Feed</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {feedItems.map((item) => (
              <div
                key={item.id}
                className="rounded-lg shadow-md bg-white overflow-hidden"
              >
                <div className="flex items-center p-4">
                  <img
                    src={item.profileImageUrl}
                    alt={item.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="font-semibold">{item.author}</p>
                    <p className="text-sm text-gray-500">{item.title}</p>
                  </div>
                </div>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4 flex justify-between items-center">
                  <div className="flex space-x-4">
                    <button className="text-gray-600 hover:text-red-500">
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="text-gray-600 hover:text-blue-500">
                      <i className="fas fa-comment-alt"></i>
                    </button>
                    <button className="text-gray-600 hover:text-green-500">
                      <i className="fas fa-share-alt"></i>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-sm">{item.likes} Likes</p>
                  <p className="text-sm text-gray-600">{item.comments} Comments</p>
                  <p className="mt-2 text-gray-800">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FeedPage;
