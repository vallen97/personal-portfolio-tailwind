/* eslint-disable @next/next/no-head-element */
"use client";
import Link from "next/link";
import Footer from "../src/componets/footer";
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
    <html lang="en">
      {}

      <body className="h-screen">
        <Navbar />
        <div
          className="bg-materialUI-LightOnPrimary dark:bg-materialUI-DarkOnPrimary "
          style={{ height: "100%" }}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
