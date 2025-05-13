"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { ReactNode } from "react";
import Sidebar from "./sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Sidebar overlays the content */}
      <Sidebar />

      {/* Main content stays behind or around the sidebar */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
