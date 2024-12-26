// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import AuthProvider from "../app/admin/_components/AuthProvider";
import { ToastContainer } from "react-toastify";

import { AOSProvider } from "@/lib/utils/AOSProvider";

export const metadata: Metadata = {
  title: "National Biomedical Suppliers",
  description: "A Biomedical Supplier at Tripureshwor ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSProvider />
      <body className="">
        <AuthProvider>{children}</AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
