"use client";

import { Popover } from "@headlessui/react";
import Link from "next/link";
import SignInSession from "../SignInSession";
import { useState, useEffect } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AdminNavbar({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "bg-white shadow-sm lg:static lg:overflow-y-visible"
          )
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              {loading ? (
                <div className="h-8 w-8 bg-gray-300 rounded-md animate-pulse"></div>
              ) : (
                <span className="text-xl font-semibold text-gray-800 hidden sm:block">
                  Admin Dashboard
                </span>
              )}
            </div>

            <div className="flex items-center space-x-4">
              {loading ? (
                <>
                  <div className="h-10 w-32 bg-gray-300 rounded-md animate-pulse"></div>
                  <div className="h-10 w-20 bg-gray-300 rounded-md animate-pulse"></div>
                </>
              ) : (
                <>
                  <Link
                    href="/"
                    prefetch={false}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition"
                  >
                    Back to Main Page
                  </Link>
                  <SignInSession />
                </>
              )}
            </div>
          </div>
        </div>
      </Popover>

      <main className="p-6 bg-gray-50 min-h-screen rounded-t-3xl shadow-inner">
        {children}
      </main>
    </>
  );
}
