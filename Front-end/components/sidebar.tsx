"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../public/jagedologoo.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Import SVG icons as image sources
import HomeIcon from '../assets/icons/home.svg';
import FeedIcon from '../assets/icons/feed.svg';
import BookmarksIcon from '../assets/icons/bookmark.svg';
import NotificationsIcon from '../assets/icons/notifications.svg';
import FundiIcon from '../assets/icons/Fundi.svg';
import ProfessionalIcon from '../assets/icons/Professional.svg';
import ContractorIcon from '../assets/icons/Contractor.svg';
import ShopIcon from '../assets/icons/shop.svg';
import ProjectsIcon from '../assets/icons/project.svg';
import JobsIcon from '../assets/icons/jobs.svg';
import OrdersIcon from '../assets/icons/orders.svg';

// Sidebar items with icon image, label, and route
const sidebarItems = [
  { icon: HomeIcon, label: "Home", route: "/userdashhome" },
  { icon: FeedIcon, label: "Feed", route: "/userdashfeed" },
  { icon: BookmarksIcon, label: "Bookmarks", route: "/bookmarks" },
  { icon: NotificationsIcon, label: "Notifications", route: "/notifications" },
  { icon: FundiIcon, label: "Fundi", route: "/fundi" },
  { icon: ProfessionalIcon, label: "Professional", route: "/professional" },
  { icon: ContractorIcon, label: "Contractor", route: "/contractor" },
  { icon: ShopIcon, label: "Shop", route: "/shop" },
  { icon: ProjectsIcon, label: "Projects", route: "/projects" },
  { icon: JobsIcon, label: "Jobs", route: "/jobs" },
  { icon: OrdersIcon, label: "Orders", route: "/orders" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={`fixed top-0 left-0 z-50 h-screen bg-[#003B63] backdrop-blur-[10px] text-white font-medium p-3 transition-all duration-300 ease-in-out ${
        isOpen ? "w-[200px]" : "w-[60px]"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center py-4 border-b border-[#ccff00]">
        <Image
          src={logo}
          alt="Logo"
          width={isOpen ? 80 : 40}
          height={40}
          className="transition-all duration-300"
        />
      </div>

      {/* Toggle Button Positioned at Edge */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-12 -right-4 bg-[#88DA27] text-black p-1 rounded-full shadow-md z-50"
      >
        {isOpen ? <FiChevronLeft /> : <FiChevronRight />}
      </button>

      {/* Sidebar Items */}
      <div className="mt-5 flex flex-col gap-6 items-start">
        {sidebarItems.map((item, index) => {
          const isActive = pathname === item.route;

          return (
            <Link href={item.route} key={index} className="w-full">
              <div
                className={`flex items-center gap-3 w-full py-2 px-2 rounded-full cursor-pointer text-[18px] transition-colors duration-200 ${
                  isActive
                    ? "text-[#003B63] bg-[#88DA27]"
                    : "text-white hover:text-[#E31937] hover:bg-white/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <div
                  className={`transition-all duration-200 flex items-center justify-center ${
                    isActive ? "bg-[#88DA27] rounded-full " : ""
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={isActive ? 20 : 20}
                    height={isActive ? 20 : 20}
                  />
                </div>
                {isOpen && <span className="whitespace-nowrap">{item.label}</span>}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
