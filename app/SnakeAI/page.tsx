"use client";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Game } from "../../src/utils/snakegame/game";

export default function page() {
  // export const page: React.FC<any> = ({}) => {
  let sliderSpeedRef: any = useRef();
  let sliderSnakeCountRef: any = useRef();
  let canvasRef: any = useRef();

  let labelGen: any = useRef();
  let labelSnakeScore: any = useRef();
  let labelSnakesAlive: any = useRef();

  let [currentSpeed, setCurrentSpeed] = useState(5);
  let [numberOfSnakes, setNumberOfSnakes] = useState(5);
  let [snakeGame, setSnakeGame] = useState<any>(new (class {})());
  let [isGameLoaded, setIsGameLoaded] = useState<boolean>(false);

  let ctx: any;

  useEffect(() => {
    ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // setAlgorithm(sAlgorithm(canvasRef.current, ctx));
    setSnakeGame(
      Game(
        canvasRef.current,
        ctx,
        labelGen.current,
        labelSnakeScore.current,
        labelSnakesAlive.current
      )
    );
    // labelSnakeScore.current.innerText = "eddit me";
  }, []);

  return (
    <div className="px-8">
      {/* Save And Load Menus */}
      <div className="py-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center">
        {isGameLoaded ? (
          <>
            <div className=" lg:col-start-1  place-items-center lg:col-end-1 w-56 text-right">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="place-items-center inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    Save Snake To
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
                            onClick={() => snakeGame.saveCustomSnake(0)}
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
                            onClick={() => snakeGame.saveCustomSnake(1)}
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
                Load Snake From
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
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={() => snakeGame.loadCustomSnake(0)}
                      >
                        Local Storage
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={() => snakeGame.loadCustomSnake(1)}
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

      {/* Start Button */}
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
                snakeGame.start(canvasRef.current.getContext("2d"));
                setIsGameLoaded(true);
              }}
            >
              Start
            </button>
          </div>
        </>
      )}

      {/* Span and button for Next Gen */}
      <div className="py-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <span
          className=" lg:col-start-1  lg:col-end-1 text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1"
          ref={labelGen}
        >
          Current Generation: 0
        </span>

        <button
          className=" lg:col-start-3  lg:col-end-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => {
            snakeGame.nextGen();
          }}
        >
          Next Generation
        </button>
      </div>

      {/* Span speed */}
      <div className="py-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <span className=" col-span-1  text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
          Current Speed: {currentSpeed * 10} ms
        </span>
      </div>

      {/* Slider for adjusting the Speed */}
      <div className="py-4 grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
        <input
          ref={sliderSpeedRef}
          id="minmax-range"
          type="range"
          min="1"
          max="10"
          value={currentSpeed}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          onChange={(val: any) => {
            setCurrentSpeed(val.nativeEvent.target.value);

            snakeGame.setGameSpeed(currentSpeed * 10);
          }}
        />
      </div>

      {/* Span fot the  number of snakes */}
      <div className="py-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <span
          className=" col-span-1 text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1"
          ref={labelSnakesAlive}
        >
          Snakes Alive: {numberOfSnakes}
        </span>
      </div>

      {/* Slider to adjust the number of snakes */}
      <div className="py-4 grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
        <input
          ref={sliderSnakeCountRef}
          id="minmax-range"
          type="range"
          min="1"
          max="100"
          value={numberOfSnakes}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          onChange={(val: any) => {
            setNumberOfSnakes(val.nativeEvent.target.value);

            snakeGame.setSnakePlayers(numberOfSnakes);
          }}
        />
      </div>

      {/* Span that displays the score */}
      <div className="py-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <span
          className="col-span-1  text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1"
          ref={labelSnakeScore}
        >
          Current Score: 0
        </span>
      </div>

      {/* Canvas for the snake game */}
      <div className="py-4 grid grid-cols-1 place-items-center">
        <canvas
          // className="place-content-center"
          ref={canvasRef}
          height={300}
          width={300}
        />
      </div>
    </div>
  );
}

// export default page;
