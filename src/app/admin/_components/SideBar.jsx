"use client";
import { ChartNoAxesCombined } from "lucide-react";

import { useSession } from "next-auth/react";
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
import Image from "next/image";
import Link from "next/link";
export default function Sidebar() {
  const { data: session, status } = useSession({
    required: false,
  });

  return (
    <div className="w-full">
      <div className="img-wrapper mx-auto w-[41%] py-[3%] ">
        <img
          src="/logo.png"
          alt="Central Capital Service"
          className="w-full h-auto"
        />
      </div>
      <Link
        href="/admin"
        className="w-full  py-2 flex justify-center lg:justify-start xl:pl-4  gap-4 text-primary font-semibold hover:bg-textColor hover:text-white  "
      >
        <LayoutGrid />
        <span className="hidden lg:block">Home</span>
      </Link>
      {/* <div className="w-full  border border-textColor" /> */}
      <Link
        href="/admin/banner"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white  "
      >
        <ImagePlay />
        <span className="hidden lg:block">Banner</span>
      </Link>
      <Link
        href="/admin/country"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white  "
      >
        <Flag />
        <span className="hidden lg:block">Country</span>
      </Link>
      <Link
        href="/admin/client"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white  "
      >
        <UserCircle />
        <span className="hidden lg:block">Client</span>
      </Link>
      <Link
        href="/admin/client-list"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white  "
      >
        <UsersRound />
        <span className="hidden lg:block">Client List</span>
      </Link>
      <Link
        href="/admin/sister_concern"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white  "
      >
        <Handshake />
        <span className="hidden lg:block">Sister Concern</span>
      </Link>
      <Link
        href="/admin/testimonials"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white  "
      >
        <UserPen />
        <span className="hidden lg:block">Testimonials</span>
      </Link>
      <Link
        href="/admin/demands"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white  "
      >
        <ScanSearch />
        <span className="hidden lg:block">Demand</span>
      </Link>

      <Link
        href="/admin/blog"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white  "
      >
        <ClipboardCopy />
        <span className="hidden lg:block">Blogs</span>
      </Link>

      {session?.token?.email &&
        session?.token?.email == "admin@nepaltech.com" && (
          <>
            <Link
              href="/admin/users"
              className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white  "
            >
              <CircleUserRound />
              <span className="hidden lg:block">Users</span>
            </Link>
          </>
        )}

      <Link
        href="/admin/teams"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white  "
      >
        <UsersRound />
        <span className="hidden lg:block">Teams</span>
      </Link>

      <Link
        href="/admin/gallery"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white  "
      >
        <Images />
        <span className="hidden lg:block">Gallery</span>
      </Link>

      <Link
        href="/admin/document"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white  "
      >
        <BookOpenText />
        <span className="hidden lg:block">Document</span>
      </Link>

      <Link
        href="/api/auth/signout?callbackUrl=/"
        className="w-full  py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white  "
      >
        <LogOut />
        <span className="hidden lg:block">Logout</span>
      </Link>
    </div>
  );
}
