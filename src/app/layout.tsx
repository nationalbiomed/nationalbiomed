// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import AuthProvider from "../app/admin/_components/AuthProvider";
import { ToastContainer } from "react-toastify";

import { AOSProvider } from "@/lib/utils/AOSProvider";
import TawkToChat from '@/components/tawk-to-chat';
import WhatsAppWidget from "@/components/whatsapp-widget";


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
        <AuthProvider>{children} <TawkToChat /> <WhatsAppWidget /></AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
