// components/Navbar.tsx
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="bg-transparent fixed top-5 left-0 right-0 z-20">
      <nav className="container mx-auto flex items-center justify-between px-4 py-1">
        {/* Left Navigation Links */}
        <ul className="flex items-center space-x-6">
          <li>
            <Link
              href="/models"
              className="text-sm font-medium text-white hover:text-gray-900 transition"
            >
              LA MARQUE
            </Link>
          </li>
          <li>
            <Link
              href="/brand"
              className="text-sm font-medium text-white hover:text-gray-900 transition"
            >
              HYPER SPORTS CARS
            </Link>
          </li>
          <li>
            <Link
              href="/experience"
              className="text-sm font-medium text-white hover:text-gray-900 transition"
            >
              LIFESTYLE
            </Link>
          </li>
        </ul>

        {/* Center Logo (Full screen and centered) */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <text className="text-4xl font-bold text-white">BUGATTI</text>
        </div>

        {/* Right Navigation Links */}
        <ul className="flex items-center space-x-6">
          <li>
            <Link
              href="/news"
              className="text-sm font-medium text-white hover:text-gray-900 transition"
            >
              NEWSROOM
            </Link>
          </li>
          <li>
            <Link
              href="/ownership"
              className="text-sm font-medium text-white hover:text-gray-900 transition"
            >
              STORE
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
