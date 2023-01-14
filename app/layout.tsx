/* eslint-disable @next/next/no-head-element */
"use client";
import Link from "next/link";
import Navbar from "../src/componets/navbar";
// import Navbar from "../componets/navbar";
import "../styles/globals.css";
import "./output.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-screen">
      {}

      <body className="h-screen">
        <Navbar />
        <div className="bg-zinc-200">{children}</div>
      </body>
    </html>
  );
}
