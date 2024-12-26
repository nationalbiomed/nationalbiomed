"use client";

import { useState } from "react";
import Link from "next/link";
import { HandCoins, Layers2, Menu, Sparkles, User, Wallpaper } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  LayoutGrid,
  ImagePlay,
  Flag,
  CircleUserRound,
  UsersRound,
  UserPen,
  ScanSearch,
  Images,
  ClipboardCopy,
  BookOpenText,
  LogOut,
  UserCircle,
  Handshake,
  Users,
} from "lucide-react";
import { useSession } from "next-auth/react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession({
    required: false,
  });

  const handleClose = () => setOpen(false);

  const links = [
    { href: "/admin", label: "Home", icon: LayoutGrid },
    { href: "/admin/banner", label: "Banner", icon: ImagePlay },
    { href: "/admin/customer", label: "Customer", icon: User },
    { href: "/admin/teams", label: "Teams", icon: Users },
    { href: "/admin/sole-distributor", label: "Sole Distributor", icon: HandCoins },
    { href: "/admin/blog", label: "Blog", icon: Wallpaper },
    { href: "/admin/product-category", label: "Product Category", icon: LayoutGrid },
    { href: "/admin/brand", label: "Brand", icon: Sparkles },
    { href: "/admin/product", label: "Products", icon: Layers2 },
    { href: "/admin/careers", label: "Careers", icon: ScanSearch },
    // { href: "/admin/document", label: "Document", icon: BookOpenText },
    { href: "/api/auth/signout?callbackUrl=/", label: "Logout", icon: LogOut },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[320px] pt-2 sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <div className="img-wrapper w-[25%] py-[1%] mb-[2%]">
            <img
              src="/logo.png"
              alt="Central Capital Service"
              className="w-full h-auto"
            />
          </div>
        </SheetHeader>
        <div>
          <Link
            href={"/admin"}
            className="w-full  py-2 flex lg:justify-start lg:pl-6 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600 "
            onClick={handleClose}
          >
            <LayoutGrid />
            <span className="lg:block">Home</span>
          </Link>

          <Link
            href={"/admin/banner"}
            className="w-full py-2  flex lg:justify-start lg:pl-6 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600 "
            onClick={handleClose}
          >
            <ImagePlay />
            <span className="lg:block">Products</span>
          </Link>
{/* 
          <Link
            href={"/admin/country"}
            className="w-full py-2  flex lg:justify-start lg:pl-6 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600 "
            onClick={handleClose}
          >
            <Flag />
            <span className="lg:block">Country</span>
          </Link> */}

          {/* <Link
            href={"/admin/client"}
            className="w-full py-2  flex lg:justify-start lg:pl-6 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600 "
            onClick={handleClose}
          >
            <UserCircle />
            <span className="lg:block">Client</span>
          </Link> */}

          {/* <Link
            href={"/admin/client-list"}
            className="w-full py-2  flex lg:justify-start lg:pl-6 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600 "
            onClick={handleClose}
          >
            <UsersRound />
            <span className="lg:block">Client List</span>
          </Link> */}

          {/* <Link
            href={"/admin/sister_concern"}
            className="w-full py-2 flex lg:justify-start lg:pl-6 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600 "
            onClick={handleClose}
          >
            <Handshake />
            <span className="lg:block">Sister Concern</span>
          </Link> */}

          {/* <Link
            href={"/admin/testimonials"}
            className="w-full py-2 flex lg:justify-start lg:pl-6 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600 "
            onClick={handleClose}
          >
            <UserPen />
            <span className="lg:block">Testimonials</span>
          </Link> */}

          <Link
            href={"/admin/demands"}
            className="w-full py-2 flex lg:justify-start lg:pl-6 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600 "
            onClick={handleClose}
          >
            <ScanSearch />
            <span className="lg:block">Career</span>
          </Link>

          <Link
            href={"/admin/blog"}
            className="w-full py-2 flex lg:justify-start lg:pl-6 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600 "
            onClick={handleClose}
          >
            <ClipboardCopy />
            <span className="lg:block">Blogs</span>
          </Link>

          {session?.token?.email === "admin@nepaltech.com" && (
            <Link
              href="/admin/users"
              className="w-full py-2 flex lg:justify-start lg:pl-6 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600 "
              onClick={handleClose} // Close the sheet for admin-specific link
            >
              <CircleUserRound />
              <span className="lg:block">Users</span>
            </Link>
          )}
          {/* <Link
            href={"/admin/teams"}
            className="w-full py-2 flex lg:justify-start lg:pl-6 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600 "
            onClick={handleClose}
          >
            <UsersRound />
            <span className="lg:block">Teams</span>
          </Link> */}

          {/* <Link
            href={"/admin/gallery"}
            className="w-full py-2  flex lg:justify-start lg:pl-6 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600 "
            onClick={handleClose}
          >
            <Images />
            <span className="lg:block">Gallery</span>
          </Link> */}
{/* 
          <Link
            href={"/admin/document"}
            className="w-full py-2 flex lg:justify-start lg:pl-6 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600 "
            onClick={handleClose}
          >
            <BookOpenText />
            <span className="lg:block">Document</span>
          </Link> */}

          <Link
            href={"/api/auth/signout?callbackUrl=/"}
            className="w-full py-2 flex lg:justify-start lg:pl-6 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600 "
            onClick={handleClose}
          >
            <LogOut />
            <span className="lg:block">Logout</span>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
