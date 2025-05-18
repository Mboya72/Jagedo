"use client";

import React, { useState } from "react";
import clsx from "clsx";
import Layout from "../../components/layout";
import PerformanceGraph from "../../components/PerformanceGraph";

const SUMMARY_STATS = [
  { label: "Requests", count: 12, color: "bg-blue-500" },
  { label: "Quotations", count: 5, color: "bg-purple-500" },
  { label: "Active", count: 3, color: "bg-yellow-400" },
  { label: "Completed", count: 20, color: "bg-green-500" },
  { label: "Reviews", count: 8, color: "bg-pink-500" },
];

const JOBS = [
  "Fix kitchen plumbing",
  "Paint living room",
  "Repair electrical wiring",
];

const SummaryCard = ({
  label,
  count,
  color,
}: {
  label: string;
  count: number;
  color: string;
}) => (
  <div
    className={clsx(
      "p-5 rounded-xl shadow-md bg-opacity-90 transition-transform hover:scale-105 backdrop-blur",
      color,
      "text-white"
    )}
  >
    <p className="text-base md:text-lg font-medium">{label}</p>
    <p className="text-3xl md:text-4xl font-bold">{count}</p>
  </div>
);

const JobsList = ({ jobs }: { jobs: string[] }) => (
  <ul className="space-y-3">
    {jobs.map((job, i) => (
      <li
        key={i}
        className="p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors shadow-sm text-sm md:text-base"
      >
        • {job}
      </li>
    ))}
  </ul>
);

const QuickLinks = () => {
  const links = [
    { label: "Fundi", href: "/userfundi", icon: "🛠️" },
    { label: "Professional", href: "/userprofessional", icon: "👷‍♂️" },
    { label: "Contractor", href: "/usercontractor", icon: "🏗️" },
    { label: "Shop", href: "/usershop", icon: "🛒" },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
      {links.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          className="flex flex-col items-center justify-center p-6 bg-white/30 backdrop-blur-xl text-black rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform"
        >
          <div className="text-5xl mb-4">{icon}</div>
          <span className="text-lg md:text-xl font-semibold">{label}</span>
        </a>
      ))}
    </section>
  );
};
const WelcomeSection = () => (
  <section className="mb-10">
    <div className="bg-white/20 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, <span className="text-yellow-300">User</span> 👋</h1>
      <p className="text-lg md:text-xl text-white/90">
        Manage your service requests, monitor your performance, and explore our marketplace with ease.
      </p>
    </div>
  </section>
);

const UserDashHome = () => {
  const [isSidebarOpen] = useState(true);

  return (
    <Layout isSidebarOpen={isSidebarOpen}>
      <main className="min-h-screen ml-12 bg-[url('/jagedoback2.png')] bg-cover bg-no-repeat p-6 md:p-10 text-white font-sans">

        {/* Welcome Message */}
        <WelcomeSection />

        {/* Summary Stats */}
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {SUMMARY_STATS.map((stat) => (
            <SummaryCard key={stat.label} {...stat} />
          ))}
        </section>

        {/* Navigation Links */}
        <QuickLinks />

        {/* Job List */}
        <section className="bg-white/30 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-lg mb-10 text-black transition">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Jobs</h2>
          <JobsList jobs={JOBS} />
        </section>

        {/* Performance Graph */}
        <section className="bg-white/30 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-lg text-black">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Performance Graph</h2>
          <PerformanceGraph />
        </section>

      </main>
    </Layout>
  );
};


export default UserDashHome;
