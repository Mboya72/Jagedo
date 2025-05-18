"use client";
import React, { useState } from "react";
import Layout from "../../components/layout";

const initialFeedItems = [
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
  const [feedItems, setFeedItems] = useState(initialFeedItems);
  const [searchTerm, setSearchTerm] = useState("");
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
    imageUrl: "",
    profileImageUrl: "/images/default-profile.jpg",
  });

  const filteredItems = feedItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !newPost.title.trim() ||
      !newPost.content.trim() ||
      !newPost.author.trim()
    )
      return;

    const post = {
      ...newPost,
      id: Date.now(),
      likes: 0,
      comments: 0,
    };

    setFeedItems([post, ...feedItems]);

    setNewPost({
      title: "",
      content: "",
      author: "",
      imageUrl: "",
      profileImageUrl: "/images/default-profile.jpg",
    });
  };

type FeedItem = typeof initialFeedItems[0];

const [selectedPost, setSelectedPost] = useState<FeedItem | null>(null);

const closeModal = () => setSelectedPost(null);

const PostModal = ({ post }: { post: typeof feedItems[0] }) => {
  if (!post) return null;

  return (
   <div
  className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50"
  onClick={closeModal}
>
     <div
  className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative overflow-hidden"
  onClick={(e) => e.stopPropagation()}
>
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-700 text-xl hover:text-black"
        >
          &times;
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src={post.profileImageUrl}
                  alt={post.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.title}</p>
                </div>
              </div>
              <p className="text-gray-800 mb-4">{post.content}</p>
            </div>

            <div className="mt-auto">
              <div className="flex space-x-4 mb-2">
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
              <p className="text-sm text-gray-600">{post.likes} Likes</p>
              <p className="text-sm text-gray-600">{post.comments} Comments</p>
              <div className="text-xs text-gray-400 mt-2">2 hours ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

  return (
    <Layout>
      <div className="min-h-screen ml-11 bg-[url('/jagedoback2.png')] bg-cover bg-no-repeat p-6 text-white">
        <div className="p-6 mb-6 text-black">
          <h2 className="text-5xl font-bold mb-4">Feed</h2>

          {/* 🔍 Search Bar */}
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* 📝 New Post Form */}
          <form
            onSubmit={handlePostSubmit}
            className="bg-white p-4 mb-8 rounded-lg shadow"
          >
            <h3 className="text-xl font-semibold mb-2">Create a new post</h3>
            <input
              type="text"
              placeholder="Title"
              className="w-full mb-2 px-4 py-2 border border-gray-300 rounded"
              value={newPost.title}
              onChange={(e) =>
                setNewPost((prev) => ({ ...prev, title: e.target.value }))
              }
            />
            <textarea
              placeholder="Content"
              className="w-full mb-2 px-4 py-2 border border-gray-300 rounded"
              value={newPost.content}
              onChange={(e) =>
                setNewPost((prev) => ({ ...prev, content: e.target.value }))
              }
            />
            <input
              type="text"
              placeholder="Author"
              className="w-full mb-2 px-4 py-2 border border-gray-300 rounded"
              value={newPost.author}
              onChange={(e) =>
                setNewPost((prev) => ({ ...prev, author: e.target.value }))
              }
            />
            <input
              type="text"
              placeholder="Image URL (optional)"
              className="w-full mb-2 px-4 py-2 border border-gray-300 rounded"
              value={newPost.imageUrl}
              onChange={(e) =>
                setNewPost((prev) => ({ ...prev, imageUrl: e.target.value }))
              }
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Post
            </button>
          </form>

          {/* 📰 Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
            <div
  key={item.id}
  onClick={() => setSelectedPost(item)}
  className="cursor-pointer rounded-4xl shadow-md bg-white overflow-hidden hover:shadow-lg transition"
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
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-40 sm:w-[440px] w-[250px] object-cover place-self-center rounded-2xl m-2"
                  />
                )}
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
                  <p className="text-xs text-gray-500">Just now</p>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-sm">{item.likes} Likes</p>
                  <p className="text-sm text-gray-600">
                    {item.comments} Comments
                  </p>
                  <p className="mt-2 text-gray-800">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedPost && <PostModal post={selectedPost} />}
      </div>
    </Layout>
  );
};

export default FeedPage;
