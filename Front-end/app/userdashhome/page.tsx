"use client";
import React, { useState } from "react";
import Layout from "../../components/layout";
import PerformanceGraph from "../../components/PerformanceGraph";

const UserDashHome = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const summaryStats = [
    { label: "Requests", count: 12, color: "bg-blue-500" },
    { label: "Quotations", count: 5, color: "bg-purple-500" },
    { label: "Active", count: 3, color: "bg-yellow-500" },
    { label: "Completed", count: 20, color: "bg-green-500" },
    { label: "Reviews", count: 8, color: "bg-pink-500" },
  ];

  return (
    <Layout isSidebarOpen={isSidebarOpen}>
      <div className="min-h-screen ml-12 bg-[url('/jagedoback2.png')] bg-cover bg-no-repeat p-6 text-white">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {summaryStats.map((stat) => (
            <div
              key={stat.label}
              className={`p-4 rounded-lg shadow-md ${stat.color} bg-opacity-80`}
            >
              <p className="text-lg font-semibold">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.count}</p>
            </div>
          ))}
        </div>

        {/* Jobs Section */}
        <div className="bg-white/80 p-6 rounded-lg shadow-md mb-6 text-black">
          <h2 className="text-xl font-bold mb-4">Jobs</h2>
          <ul className="space-y-2">
            <li className="p-3 rounded bg-gray-100 shadow-sm">• Fix kitchen plumbing</li>
            <li className="p-3 rounded bg-gray-100 shadow-sm">• Paint living room</li>
            <li className="p-3 rounded bg-gray-100 shadow-sm">• Repair electrical wiring</li>
          </ul>
        </div>

        {/* Chart.js Performance Graph */}
        <div className="bg-white/80 p-6 rounded-lg shadow-md text-black">
          <h2 className="text-xl font-bold mb-4">Performance Graph</h2>
          <PerformanceGraph />
        </div>
      </div>
    </Layout>
  );
};

export default UserDashHome;
