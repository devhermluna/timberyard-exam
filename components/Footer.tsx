// components/Footer.js
"use client";

import Link from "next/link";
import Typography from "./Typography";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto py-10 px-4 sm:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-2">
          <div className="md:col-span-2">
            <Typography variant="h3" className="font-semibold mb-2">
              Pedal&Stride
            </Typography>
            <Typography variant="body" className="opacity-50">
              Your trusted source for cycling and running insights, training
              tips, news, and event updates to help athletes and enthusiasts
              perform at their best.
            </Typography>
          </div>
          <div className="md:col-start-4">
            <h3 className="text-xl font-semibold mb-2">Navigation</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-white transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-white transition-colors"
                >
                  Upcoming Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-gray-300">herman@pedalandstride.com</p>
            <p className="text-gray-300 mt-1">+63 956 270 1751</p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-4 text-gray-400 text-sm text-center md:text-left">
          &copy; 2025 Pedal&Stride. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
