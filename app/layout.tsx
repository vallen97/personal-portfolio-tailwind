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
        className="flex flex-col h-screen justify-between bg-materialUI-LightOnPrimary dark:bg-materialUI-DarkOnPrimary"
        style={{ height: "-webkit-fill-available" }}
      >
        <Navbar />
        <div className="py-2 mb-auto bg-materialUI-LightOnPrimary dark:bg-materialUI-DarkOnPrimary ">
          {children}
        </div>
        {/* <div className="   bg-blue-500">footer</div> */}
        <Footer />
      </body>
    </html>
  );
}
