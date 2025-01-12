"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="w-full fixed top-0 left-0 right-0 z-50 bg-white"
      >
        {/* <TopNav /> */}
        <NavBar />
      </header>
      <div style={{ height: `${headerHeight}px` }} />
    </>
  );
}

function NavBar() {
  return (
    <nav className="w-full bg-white shadow-md transition-all duration-300">
      <div className="container max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
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
              <li key={item.title} className="relative group">
                {item.megaMenu ? (
                  <>
                    <button className="flex items-center hover:text-primary transition-colors font-semibold py-2 text-gray-800">
                      {item.title}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    {/* Mega Menu */}
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
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
                    className="hover:text-primary transition-colors py-2 font-semibold block text-gray-800"
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
            className="hover:text-primary transition-colors text-gray-800"
          >
            <User className="w-6 h-6" />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

function MobileNav() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <div className="py-4">
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
      <ul className="space-y-2 ">
        {MENU_ITEMS.map((item) => (
          <li key={item.title}>
            {item.megaMenu ? (
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 font-semibold hover:text-primary transition-colors"
                  onClick={() => toggleDropdown(item.title)}
                  aria-expanded={activeDropdown === item.title}
                >
                  {item.title}
                  <ChevronRight
                    className={`w-4 h-4 transition-transform  duration-300 ${
                      activeDropdown === item.title ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <ul
                  className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
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
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
