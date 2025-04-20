import React from 'react';
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { RiDashboardLine, RiUserLine, RiSettingsLine } from "react-icons/ri";

const menuItems = [
  { title: "Dashboard", icon: RiDashboardLine, href: "/dashboard" },
  { title: "Profile", icon: RiUserLine, href: "/dashboard/profile" },
  { title: "Settings", icon: RiSettingsLine, href: "/dashboard/settings" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside 
      className={`
        fixed top-0 left-0 z-40 h-screen transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
        w-64 bg-white shadow-lg
      `}
    >
      <div className="flex items-center justify-between p-4 pb-9 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>
        <button 
          className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
          onClick={onClose}
        >
          <IoMdClose className="w-6 h-6" />
        </button>
      </div>
      
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
