/* eslint-disable @next/next/no-head-element */
"use client";
import Head from "next/head";
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
      <Head>
        <title>Vaughn Allens Portfolio</title>
        <meta
          property="og:title"
          content="Vaughn Allens Portfolio"
          key="title"
        />
        <meta
          name="description"
          content="Some of the projects I have made throughout the years"
        />
      </Head>

      <body
        className="h-screen bg-materialUI-LightOnPrimary dark:bg-materialUI-DarkOnPrimary"
        style={{ height: "100%" }}
      >
        <Navbar />
        <div className="py-2 bg-materialUI-LightOnPrimary dark:bg-materialUI-DarkOnPrimary ">
          {children}
        </div>
      </body>
      <Footer />
    </html>
  );
}
