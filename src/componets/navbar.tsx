import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import React from "react";

interface navbarProps {}

export const Navbar: React.FC<navbarProps> = ({}) => {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <nav className="bg-materialUI-LightPrimary dark:bg-materialUI-DarkOnPrimaryContainer flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <Link
            href="/"
            className="hover:font-bold hover:text-materialUI-LightOnSecondary dark:hover:text-materialUI-DarkTertiary "
          >
            Home
          </Link>
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          className="bg-materialUI-LightPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer  flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-text-white hover:text-border-white"
          onClick={() => setExpand(!expand)}
        >
          <svg
            className="bg-white fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title className="text-materialUI-LightSecondary dark:text-materialUI-DarkSecondary">
              Menu
            </title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        {expand ? (
          <>
            <div className="text-sm lg:flex-grow block lg:hidden">
              <Link
                href="SortAlgorithm"
                className="hover:font-bold hover:text-materialUI-LightOnSecondary dark:hover:text-materialUI-DarkTertiary text-materialUI-LightOnPrimary dark:text-materialUI-DarkOnPrimary sm:pb-4 sm:pt-4 lg:inline-block block lg:px-4 "
              >
                Sort Algorithms
              </Link>
              <Link
                href="SnakeAI"
                className="hover:font-bold hover:text-materialUI-LightOnSecondary dark:hover:text-materialUI-DarkTertiary text-materialUI-LightOnPrimary dark:text-materialUI-DarkOnPrimary sm:pb-4 lg:inline-block block lg:px-4"
              >
                Snake AI
              </Link>
              <Link
                href="FlappyBirds"
                className="hover:font-bold hover:text-materialUI-LightOnSecondary dark:hover:text-materialUI-DarkTertiary text-materialUI-LightOnPrimary dark:text-materialUI-DarkOnPrimary sm:pb-4 lg:inline-block block lg:px-4 "
              >
                Flappy Birds AI
              </Link>
              <Link
                legacyBehavior
                className="hover:font-bold hover:text-materialUI-LightOnSecondary dark:hover:text-materialUI-DarkTertiary text-materialUI-LightOnPrimary dark:text-materialUI-DarkOnPrimary sm:pb-4 lg:inline-block block lg:px-4 "
                href="https://github.com/vallen97"
              >
                GitHub
              </Link>
            </div>
          </>
        ) : (
          <>
            <div></div>
          </>
        )}
        <div className="text-sm lg:flex-grow hidden lg:block">
          <Link
            href="SortAlgorithm"
            className="hover:font-bold hover:text-materialUI-LightOnSecondary dark:hover:text-materialUI-DarkTertiary text-materialUI-LightOnPrimary dark:text-materialUI-DarkOnPrimary p-1 block mt-4 lg:inline-block lg:mt-0  mr-4"
          >
            Sort Algorithms
          </Link>
          <Link
            href="SnakeAI"
            className="hover:font-bold hover:text-materialUI-LightOnSecondary dark:hover:text-materialUI-DarkTertiary text-materialUI-LightOnPrimary dark:text-materialUI-DarkOnPrimary p-1 block mt-4 lg:inline-block lg:mt-0  mr-4"
          >
            Snake AI
          </Link>
          <Link
            href="FlappyBirds"
            className="hover:font-bold hover:text-materialUI-LightOnSecondary dark:hover:text-materialUI-DarkTertiary text-materialUI-LightOnPrimary dark:text-materialUI-DarkOnPrimary p-2 block mt-4 lg:inline-block lg:mt-0 "
          >
            Flappy Birds AI
          </Link>
          <Link
            legacyBehavior
            className="hover:font-bold hover:text-materialUI-LightOnSecondary dark:hover:text-materialUI-DarkTertiary text-materialUI-LightOnPrimary dark:text-materialUI-DarkOnPrimary p-2 block mt-4 lg:inline-block lg:mt-0 "
            href="https://github.com/vallen97"
          >
            <a
              className="over:font-bold hover:text-materialUI-LightOnSecondary dark:hover:text-materialUI-DarkTertiary text-materialUI-LightOnPrimary dark:text-materialUI-DarkOnPrimary  p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
