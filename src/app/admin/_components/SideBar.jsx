"use client";
import { ChartNoAxesCombined } from "lucide-react";

import { useSession } from "next-auth/react";
import {
  LayoutGrid,
  ImagePlay,
  ScanSearch,
  ClipboardCopy,
  LogOut,
} from "lucide-react";
import Link from "next/link";
export default function Sidebar() {
  const { data: session, status } = useSession({
    required: false,
  });

  return (
    <div className="w-full ">
      <div className="img-wrapper mx-auto w-[41%] py-[3%] ">
        <img
          src="/logo.png"
          alt="National Biomedical Suppliers"
          className="w-full h-auto"
        />
      </div>
      <Link
        href="/admin"
        className="w-full  py-2 flex justify-center lg:justify-start xl:pl-4  gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600  "
      >
        <LayoutGrid />
        <span className="hidden lg:block">Home</span>
      </Link>
      {/* <div className="w-full  border border-textColor" /> */}
      <Link
        href="/admin/banner"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-inherit hover:text-green-600   "
      >
        <ImagePlay />
        <span className="hidden lg:block">Banner</span>
      </Link>

      <Link
        href="/admin/customer"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-inherit hover:text-green-600   "
      >
        <ImagePlay />
        <span className="hidden lg:block">Customer</span>
      </Link>

      <Link
        href="/admin/teams"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-inherit hover:text-green-600   "
      >
        <ImagePlay />
        <span className="hidden lg:block">Teams</span>
      </Link>

      <Link
        href="/admin/sole-distributor"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-inherit hover:text-green-600   "
      >
        <ImagePlay />
        <span className="hidden lg:block">Sole Distributor</span>
      </Link>

      <Link
        href="/admin/blog"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-inherit hover:text-green-600   "
      >
        <ImagePlay />
        <span className="hidden lg:block">Blogs</span>
      </Link>

      <Link
        href="/admin/banner"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-inherit hover:text-green-600   "
      >
        <ImagePlay />
        <span className="hidden lg:block">Products</span>
      </Link>
      {/*
      <Link
        href="/admin/country"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600   "
      >
        
        <Flag />
        <span className="hidden lg:block">Country</span>
      </Link>
      
      <Link
        href="/admin/client"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600   "
      >
        <UserCircle />
        <span className="hidden lg:block">Client</span>
      </Link>
      <Link
        href="/admin/client-list"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600   "
      >
        <UsersRound />
        <span className="hidden lg:block">Client List</span>
      </Link>
      <Link
        href="/admin/sister_concern"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600   "
      >
        <Handshake />
        <span className="hidden lg:block">Sister Concern</span>
      </Link>
      <Link
        href="/admin/testimonials"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600   "
      >
        <UserPen />
        <span className="hidden lg:block">Testimonials</span>
      </Link> */}
      <Link
        href="/admin/demands"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600   "
      >
        <ScanSearch />
        <span className="hidden lg:block">Careers</span>
      </Link>

      <Link
        href="/admin/blog"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600   "
      >
        <ClipboardCopy />
        <span className="hidden lg:block">Blogs</span>
      </Link>
      {/* 
        {session?.token?.email &&
          session?.token?.email == "admin@nepaltech.com" && (
            <>
              <Link
                href="/admin/users"
                className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600   "
              >
                <CircleUserRound />
                <span className="hidden lg:block">Users</span>
              </Link>
            </>
          )}

        <Link
          href="/admin/teams"
          className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600   "
        >
          <UsersRound />
          <span className="hidden lg:block">Teams</span>
        </Link>

        <Link
          href="/admin/gallery"
          className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600   "
        >
          <Images />
          <span className="hidden lg:block">Gallery</span>
        </Link>

        <Link
          href="/admin/document"
          className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600   "
        >
          <BookOpenText />
          <span className="hidden lg:block">Document</span>
        </Link> */}

      <Link
        href="/api/auth/signout?callbackUrl=/"
        className="w-full  py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600   "
      >
        <LogOut />
        <span className="hidden lg:block">Logout</span>
      </Link>
    </div>
  );
}
