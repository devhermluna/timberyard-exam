"use client";

import Link from "next/link";
import Typography from "./Typography";

const Header = () => {
  return (
    <div className="container mx-auto py-4 px-4 sm:px-0 sm:py-6">
      <header className="bg-gray-900 text-white shadow-md rounded-xl">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="shrink-0">
              <Link href="/">
                <Typography variant="h4" className="font-bold cursor-pointer">
                  Pedal&Stride
                </Typography>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
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
            <div className="md:hidden"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
