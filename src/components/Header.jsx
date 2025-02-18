"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { title } from "process";

const MENU_ITEMS = [
  { title: "Home", href: "/" },
  { title: "Our Products", href: "/pages/products" },
  // {
  //   title: "Products & Solutions",
  //   megaMenu: [
  //     { title: "Product A", href: "/pages/product-and-services/products" },
  //     { title: "Product B", href: "/products/b" },
  //     { title: "Solutions", href: "/solutions" },
  //   ],
  // },
  { title: "About Us", href: "/pages/about-us" },
  // { title: "Career", href: "/pages/careers" },
  { title: "Teams", href: "/pages/team" },
  { title: "Contact Us", href: "/pages/contact" },
];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-1px 0px 0px 0px",
  });

  useEffect(() => {
    setIsSticky(!inView);
  }, [inView]);

  return (
    <>
      <div ref={ref} className="h-1 absolute top-0 left-0 right-0" />
      <header
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isSticky ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <TopNav isSticky={isSticky} />
        <NavBar isSticky={isSticky} />
      </header>
    </>
  );
}

function TopNav({ isSticky }) {
  return (
    <div className="border-b-1 border-gray-300 ">
      <div className="container max-w-7xl mx-auto flex justify-end bg-white bg-opacity-50 lg:bg-transparent ">
        <div className="text-xs px-3 py-2">
          <ul className="flex space-x-3">
            <li>
              <Link
                href="/pages/contact"
                className={`hover:text-primary transition-colors ${
                  isSticky ? "text-gray-800" : "text-gray-800 lg:text-white"
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function NavBar({ isSticky }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false); // State to manage sheet open/close

  const toggleDropdown = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const closeSheet = () => {
    setIsSheetOpen(false); // Close sheet
  };

  const handleItemClick = (item) => {
    if (item.megaMenu) {
      // If the item has a mega menu, do not close the sheet
      setActiveDropdown(activeDropdown === item.title ? null : item.title);
    } else {
      // If the item doesn't have a mega menu, close the sheet
      closeSheet();
    }
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isSticky ? "bg-white shadow-md" : "bg-transparent top-8"
      }`}
    >
      <div className="container max-w-7xl mx-auto flex justify-between items-center px-8 py-3 bg-white bg-opacity-50 lg:rounded-full">
        <div className="">
          <Link href="/">
            <Image
              src="/nationallogo.png"
              alt="logo"
              width={120}
              height={120}
              className="w-full h-auto object-contain"
            />
          </Link>
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-6 text-sm">
            {MENU_ITEMS.map((item) => (
              <li
                key={item.title}
                className={`relative group${
                  !isSticky && item.title === "Contact Us" ? " hidden" : ""
                }`}
              >
                {item.megaMenu ? (
                  <>
                    <button
                      className={`flex items-center hover:text-primary font-semibold transition-colors py-2 ${
                        isSticky ? "text-gray-800" : "text-gray-800"
                      }`}
                      onClick={() => toggleDropdown(item.title)}
                    >
                      {item.title}
                      <ChevronDown
                        className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {/* Mega Menu */}
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                      {item.megaMenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 font-semibold hover:bg-gray-100 transition-colors"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`hover:text-primary transition-colors font-semibold py-2 block ${
                      isSticky ? "text-gray-800" : "text-gray-800"
                    }`}
                    onClick={() => handleItemClick(item)} // Close sheet on click
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/pages/login"
            className={`hover:text-primary transition-colors ${
              isSticky ? "text-gray-800" : "text-gray-800"
            }`}
          >
            <User className="w-6 h-6" />
          </Link>
          {/* Mobile menu */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button
                className={`md:hidden hover:text-primary transition-colors ${
                  isSticky ? "text-gray-800" : "text-gray-800"
                }`}
                aria-label="Open menu"
                onClick={() => setIsSheetOpen(true)} // Open the sheet
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="">
                <Link href="/">
                  <Image
                    src="/nationallogo.png"
                    alt="logo"
                    width={64}
                    height={64}
                    className="w-full h-auto object-contain"
                  />
                </Link>
              </div>
              <nav className="flex flex-col space-y-4 mt-10">
                {MENU_ITEMS.map((item) => (
                  <div key={item.title}>
                    {item.megaMenu ? (
                      <div>
                        <button
                          className="flex items-center justify-between font-semibold w-full py-2 hover:text-primary transition-colors"
                          onClick={() => toggleDropdown(item.title)}
                          aria-expanded={activeDropdown === item.title}
                        >
                          {item.title}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              activeDropdown === item.title ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <ul
                          className={`pl-4 mt-1 space-y-1 overflow-hidden font-semibold transition-all duration-300 ${
                            activeDropdown === item.title
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          {item.megaMenu.map((subItem) => (
                            <li key={subItem.title}>
                              <Link
                                href={subItem.href}
                                className="block py-1 hover:text-primary font-semibold transition-colors"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-2 hover:text-primary font-semibold transition-colors"
                        onClick={() => closeSheet()} // Close the sheet when no mega menu
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}