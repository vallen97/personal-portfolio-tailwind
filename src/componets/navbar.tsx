import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import React from "react";

interface navbarProps {}

export const Navbar: React.FC<navbarProps> = ({}) => {
  const [expand, setExpand] = useState<boolean>(true);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    if (windowSize.current[0] < 1024) setExpand(true);
  }, []);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          <Link href="/">Home</Link>
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={() => setExpand(!expand)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        {expand ? (
          <>
            <div className="text-sm lg:flex-grow">
              <Link
                href="SortAlgorithm"
                className="p-1 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Sort Algorithms
              </Link>
              <Link
                href="SnakeAI"
                className="p-1 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Snake AI
              </Link>
              <Link
                href="FlappyBirds"
                className="p-2 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
              >
                Flappy Birds AI
              </Link>
              <Link
                legacyBehavior
                className="p-2 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                href="https://github.com/vallen97"
              >
                <a className="p-2" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div></div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
