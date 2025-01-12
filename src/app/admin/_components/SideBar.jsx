"use client";
import {
  ChartNoAxesCombined,
  HandCoins,
  Layers2,
  Sparkles,
  User,
  Users,
  Wallpaper,
  LayoutGrid,
  ImagePlay,
  LogOut,
} from "lucide-react";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Sidebar() {
  const { data: session, status } = useSession({
    required: false,
  });

  return (
    <div className="w-full">
      {/* Logo Section */}
      <div className="img-wrapper mx-auto w-[41%] py-[3%]">
        <img
          src="/nationallogo.png"
          alt="National Biomedical Suppliers"
          className="w-full h-auto"
        />
      </div>

      {/* Navigation Links */}
      <Link
        href="/admin"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white"
      >
        <LayoutGrid />
        <span className="hidden lg:block">Home</span>
      </Link>

      <Link
        href="/admin/banner"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white"
      >
        <ImagePlay />
        <span className="hidden lg:block">Banner</span>
      </Link>

      <Link
        href="/admin/customer"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white"
      >
        <User />
        <span className="hidden lg:block">Customer</span>
      </Link>

      <Link
        href="/admin/teams"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white"
      >
        <Users />
        <span className="hidden lg:block">Teams</span>
      </Link>

      <Link
        href="/admin/sole-distributor"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white"
      >
        <HandCoins />
        <span className="hidden lg:block">Sole Distributor</span>
      </Link>

      <Link
        href="/admin/blog"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white"
      >
        <Wallpaper />
        <span className="hidden lg:block">Blogs</span>
      </Link>

      <Link
        href="/admin/product-category"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white"
      >
        <LayoutGrid />
        <span className="hidden lg:block">Product Category</span>
      </Link>

      <Link
        href="/admin/brand"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white"
      >
        <Sparkles />
        <span className="hidden lg:block">Brand</span>
      </Link>

      <Link
        href="/admin/product"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white"
      >
        <Layers2 />
        <span className="hidden lg:block">Products</span>
      </Link>

      {/* Users Link for Admins */}
      {session?.token?.email &&
        (session.token.email === "admin@gmail.com" ||
          session.token.email === "admin@national.com") && (
          <Link
            href="/admin/users"
            className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-green-600"
          >
            <Users />
            <span className="hidden lg:block">Users</span>
          </Link>
        )}

      {/* Logout Link */}
      <Link
        href="/api/auth/signout?callbackUrl=/"
        className="w-full py-2 flex justify-center lg:justify-start xl:pl-4 gap-4 text-primary font-semibold hover:bg-textColor hover:text-white"
      >
        <LogOut />
        <span className="hidden lg:block">Logout</span>
      </Link>
    </div>
  );
}
