// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";

import { AOSInit } from "@/lib/utils/AOSInit";

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
      <AOSInit />
      <body className="">{children}</body>
    </html>
  );
}
