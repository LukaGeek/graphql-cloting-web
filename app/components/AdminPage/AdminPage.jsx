"use client";

import { Menu, Popover } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import SignInSession from "../SignInSession";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AdminPageMain({ children }) {
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
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
              <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/admin">
                    <Image
                      className="block h-8 w-auto"
                      width={50}
                      height={50}
                      src="/Admin/panel.png"
                      alt="Workflow"
                    />
                  </Link>
                </div>
              </div>
              <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                  <div className="w-full">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                {/* Mobile menu button */}
                <SignInSession />
              </div>
              <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                <Menu as="div" className="flex-shrink-0 relative ml-5">
                  <div className="flex flex-row items-center">
                    <button
                      type="submit"
                      className="bg-indigo-600 text-white text-sm font-medium py-2 px-2 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 mr-4"
                    >
                      <Link href="/">Back to Main Page</Link>
                    </button>
                    <SignInSession />
                  </div>
                </Menu>
              </div>
            </div>
          </div>
        </>
      </Popover>
      <main className="p-6">{children}</main>
    </>
  );
}
