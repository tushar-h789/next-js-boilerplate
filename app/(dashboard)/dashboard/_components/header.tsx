import React, { useState, useRef, useEffect } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
            onClick={onMenuClick}
          >
            <HiMenuAlt3 className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Overview</h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
            <IoNotificationsOutline className="w-6 h-6" />
          </button>
          <div className="relative" ref={dropdownRef}>
            <div 
              className="flex items-center gap-3 p-2 rounded-full hover:bg-gray-100 cursor-pointer transition-colors duration-200"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <FaRegUser className="w-4 h-4 text-gray-600" />
              </div>
              <span className="hidden md:block">Katie Sims</span>
            </div>

            {/* Dropdown Menu with enhanced smooth transition */}
            <div className={`
              absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50
              transition-all duration-200 ease-out
              transform origin-top-right
              ${isDropdownOpen 
                ? 'translate-y-0 scale-100 opacity-100 visible' 
                : 'translate-y-2 scale-95 opacity-0 invisible pointer-events-none'}
            `}>
              <div className="px-4 py-3 border-b border-gray-200">
                <p className="text-sm font-medium transition-colors duration-200">Katie Sims</p>
                <p className="text-sm text-gray-500 transition-colors duration-200">katie@example.com</p>
              </div>
              
              <div className="py-1">
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2 transition-colors duration-200">
                  <RiUserLine className="w-4 h-4" />
                  Profile
                </button>
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2 transition-colors duration-200">
                  <IoSettingsOutline className="w-4 h-4" />
                  Settings
                </button>
                <div className="border-t border-gray-200 my-1"></div>
                <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2 transition-colors duration-200">
                  <IoLogOutOutline className="w-4 h-4" />
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
