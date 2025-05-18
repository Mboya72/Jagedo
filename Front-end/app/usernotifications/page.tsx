"use client";
import React, { useState } from "react";
import Layout from "../../components/layout";

const sampleNotifications = [
  {
    id: 1,
    type: "like",
    user: "Alice",
    message: "liked your post.",
    avatar: "/images/profile1.jpg",
    time: "2 minutes ago",
  },
  {
    id: 2,
    type: "comment",
    user: "Bob",
    message: 'commented: "Nice photo!"',
    avatar: "/images/profile2.jpg",
    time: "10 minutes ago",
  },
  {
    id: 3,
    type: "follow",
    user: "Charlie",
    message: "started following you.",
    avatar: "/images/profile3.jpg",
    time: "1 hour ago",
  },
  {
    id: 4,
    type: "mention",
    user: "Diana",
    message: "mentioned you in a comment.",
    avatar: "/images/profile4.jpg",
    time: "3 hours ago",
  },
];

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(sampleNotifications);

  return (
    <Layout>
      <div className="min-h-screen ml-11 bg-[url('/jagedoback2.png')] bg-cover bg-no-repeat p-6 text-white">
        <div className="bg-white rounded-xl shadow p-6 max-w-3xl mx-auto text-black min-h-[75vh] flex flex-col">
          
          {/* Top Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Notifications</h2>
            <span className="text-2xl text-blue-600">
              <i className="fas fa-bell"></i>
            </span>
          </div>

          {/* Notification List or Empty State */}
          {notifications.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-gray-500">
              <img
                src="/images/party.png"
                alt="All caught up"
                className="w-32 mb-4 opacity-80"
              />
              <p className="text-lg font-semibold">You're all caught up 🎉</p>
              <p className="text-sm">Check back later for new notifications.</p>
            </div>
          ) : (
            <>
              <ul className="space-y-4 overflow-y-auto max-h-[60vh] pr-2">
                {notifications.map((notification) => (
                  <li
                    key={notification.id}
                    className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition cursor-pointer"
                  >
                    <img
                      src={notification.avatar}
                      alt={notification.user}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <p className="text-sm">
                        <span className="font-semibold">
                          {notification.user}
                        </span>{" "}
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500">
                        {notification.time}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Optional bottom filler if list is short */}
              {notifications.length < 5 && (
                <div className="mt-20 text-center text-gray-500">
                  <img
                    src="/images/party.png"
                    alt="Celebration"
                    className="w-20 mx-auto mb-2 opacity-70"
                  />
                  <p className="text-sm">Nothing more for now — stay tuned!</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default NotificationsPage;
