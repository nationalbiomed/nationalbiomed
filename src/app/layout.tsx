import type { Metadata } from "next";
import "./globals.css";

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
      <body className="">{children}</body>
    </html>
  );
}
