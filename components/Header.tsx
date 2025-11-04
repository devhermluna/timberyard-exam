"use client";

import Link from "next/link";
import Typography from "./Typography";
import { useState } from "react";
import Logo from "./Logo";
import clsx from "clsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto py-4 px-4 sm:px-0 sm:py-6 relative">
      <header className="bg-gray-900 text-white shadow-md rounded-xl">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="shrink w-full sm:w-auto sm:shrink-0 flex items-center justify-between">
              <Link href="/">
                <Logo className="text-4xl!" />
              </Link>
              <button
                className="flex flex-col gap-1.5 sm:hidden"
                onClick={onToggle}
              >
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
              </button>
            </div>
            <nav className="hidden sm:flex space-x-8">
              <Link
                href="/blogs"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Blogs
              </Link>
              <Link
                href="/events"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Upcoming Events
              </Link>
            </nav>
            <div
              className={clsx(
                "sm:hidden fixed inset-0 bg-black z-50 flex flex-col items-center justify-center p-10 gap-6 transition-opacity duration-300",
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            >
              <button
                className="flex flex-col gap-1.5 cursor-pointer text-3xl"
                onClick={onToggle}
              >
                &#10005;
              </button>
              <Link
                href="/blogs"
                className="hover:text-gray-300 transition-colors duration-200 text-3xl"
                onClick={onCloseMenu}
              >
                Blogs
              </Link>
              <Link
                href="/events"
                className="hover:text-gray-300 transition-colors duration-200 text-3xl"
                onClick={onCloseMenu}
              >
                Upcoming Events
              </Link>
              <Logo className="text-6xl! mt-20" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
