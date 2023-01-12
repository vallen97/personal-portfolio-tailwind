"use client";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { flappyGame as game } from "../../src/utils/flappybirdgame/flappGame";

export default function page() {
  // export const page: React.FC<any> = ({}) => {
  let [flappyBirdGame, setFlappyBirdGame] = useState<any>(new (class {})());

  let labelCurrentGen: any = useRef();
  let labelCurrentScoreo: any = useRef();
  let labelCurrentBirdsAlive: any = useRef();

  let [isGameLoaded, setIsGameLoaded] = useState<boolean>(false);

  useEffect(() => {
    setFlappyBirdGame(
      game(
        labelCurrentGen.current,
        labelCurrentScoreo.current,
        labelCurrentBirdsAlive.current
      )
    );
  }, []);

  return (
    <>
      <div className="px-3">
        <div className="py-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center">
          {isGameLoaded ? (
            <>
              <div className=" lg:col-start-1  place-items-center lg:col-end-1 w-56 text-right">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="place-items-center inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      Save Bird To
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-violet-500 text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              onClick={() => flappyBirdGame.saveCustomBird(0)}
                            >
                              Local Storage
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-violet-500 text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              onClick={() => flappyBirdGame.saveCustomBird(1)}
                            >
                              Computer
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </>
          ) : (
            <>
              <div></div>
            </>
          )}

          <div className=" lg:col-start-3  place-items-center lg:col-end-6 w-56 text-right">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Load Bird From
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          onClick={() => flappyBirdGame.loadCustomBird(0)}
                        >
                          Local Storage
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          onClick={() => flappyBirdGame.loadCustomBird(1)}
                        >
                          Website
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>

        {isGameLoaded ? (
          <>
            <div></div>
          </>
        ) : (
          <>
            <div className="py-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              <button
                className=" lg:col-span-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => {
                  flappyBirdGame.start();
                  setIsGameLoaded(true);
                }}
              >
                Start
              </button>
            </div>
          </>
        )}

        <div className="py-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <span
            className=" lg:col-start-1  lg:col-end-1 text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1"
            ref={labelCurrentGen}
          >
            Current Generation: 0
          </span>

          <button
            className=" lg:col-start-3  lg:col-end-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => flappyBirdGame.nextGen()}
          >
            Next Generation
          </button>
        </div>
        <div className="py-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <span
            className="col-span-1  text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1"
            ref={labelCurrentScoreo}
          >
            Current Score: 0
          </span>
        </div>
        <div className="py-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <span
            className="col-span-1  text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1"
            ref={labelCurrentBirdsAlive}
          >
            Birds Alive: 10
          </span>
        </div>

        <div
          className="py-4 grid grid-cols-1 place-items-center"
          style={{ height: "50vh", width: "95vw" }}
          id="game"
        >
          <div
            id="background"
            className="background content-center"
            style={{
              height: "577px",
              width: "739px",
              backgroundColor: "skyblue",
              zIndex: 1,
              position: "relative",
            }}
          ></div>

          <div
            className="message"
            style={{
              position: "relative",
              zIndex: 10,
              height: "2vh",
              fontSize: "2vh",
              fontWeight: 100,
              color: "black",
              top: "0px",
              left: "0px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

// export default page;
