'use client'

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        if (currentScrollY > 50) {
          setVisible(false);
        }
      } else {
        // Scrolling up
        setVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  return (
    <nav className={`
      fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm
      transition-all duration-300 ease-in-out z-50
      ${visible ? 'translate-y-0 shadow-md' : '-translate-y-full'}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold hover:text-blue-500 transition-all duration-200">
              Logo
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-gray-600 hover:text-blue-500 transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-blue-500 transition-all duration-200">
              Login
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 hover:shadow-md">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              <div className="transition-all duration-300 transform">
                {isMobileMenuOpen ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenuAlt3 className="h-6 w-6" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`
          md:hidden transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          overflow-hidden
        `}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-500 hover:bg-blue-50 transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <button className="w-full px-3 py-2 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-md transition-all duration-200">
                Login
              </button>
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
