"use client";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Game } from "../../src/utils/snakegame/game";
import Dropdown from "../../src/componets/dropdown";

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
    <div>
      {/* Save And Load Menus */}
      <div className="pt-4 pb-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center">
        {isGameLoaded ? (
          <>
            {/* !bg-materialUI-LightOnPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer text-materialUI-LightPrimaryContainer dark:text-materialUI-DarkPrimaryContainer  */}
            <div className="lg:col-start-1 place-items-center text-center lg:col-end-1 w-56">
              <Dropdown
                mainButtonText={"Save Snake to"}
                arrDropdown={["Local Storage"]}
                class={snakeGame}
                save={true}
                isBird={false}
              />
            </div>
          </>
        ) : (
          <>
            <div></div>
          </>
        )}
        {/* !bg-materialUI-LightOnPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer text-materialUI-LightPrimaryContainer dark:text-materialUI-DarkPrimaryContainer  */}
        <div className="lg:col-start-3  place-items-center lg:col-end-6 w-56 text-center">
          <Dropdown
            mainButtonText={"Load Snake From"}
            arrDropdown={["Local Storage", "Website"]}
            class={snakeGame}
            save={false}
            isBird={false}
          />
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
              className="  bg-materialUI-LightOnPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer text-materialUI-LightPrimaryContainer dark:text-materialUI-DarkPrimaryContainer  lg:col-span-1 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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
          className=" text-materialUI-LightOnPrimaryContainer bg-materialUI-LightPrimaryContainer dark:text-materialUI-DarkOnPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer lg:col-start-1 lg:col-end-1 text-xs font-semibold inline-block py-1 px-2 uppercase rounde last:mr-0 mr-1"
          ref={labelGen}
        >
          Current Generation: 0
        </span>

        <button
          className="  bg-materialUI-LightOnPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer text-materialUI-LightPrimaryContainer dark:text-materialUI-DarkPrimaryContainer  lg:col-start-3  lg:col-end-6 font-semibold py-2 px-4 border  rounded"
          onClick={() => {
            snakeGame.nextGen();
          }}
        >
          Next Generation
        </button>
      </div>

      {/* Span speed */}
      <div className="py-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <span className=" text-materialUI-LightOnPrimaryContainer bg-materialUI-LightPrimaryContainer dark:text-materialUI-DarkOnPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer col-span-1  text-xs font-semibold inline-block py-1 px-2 uppercase rounded  last:mr-0 mr-1">
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
          className="w-full h-2 bg-blackrounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          onChange={(val: any) => {
            setCurrentSpeed(val.nativeEvent.target.value);

            snakeGame.setGameSpeed(currentSpeed * 10);
          }}
        />
      </div>

      {/* Span fot the  number of snakes */}
      <div className="py-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <span
          className=" text-materialUI-LightOnPrimaryContainer bg-materialUI-LightPrimaryContainer dark:text-materialUI-DarkOnPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer col-span-1 text-xs font-semibold inline-block py-1 px-2 uppercase rounded last:mr-0 mr-1"
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
          className="w-full h-2 bg-black rounded-lg appearance-none cursor-pointer dark:bg-gray-900"
          onChange={(val: any) => {
            setNumberOfSnakes(val.nativeEvent.target.value);

            snakeGame.setSnakePlayers(numberOfSnakes);
          }}
        />
      </div>

      {/* Span that displays the score */}
      <div className="py-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <span
          className=" text-materialUI-LightOnPrimaryContainer bg-materialUI-LightPrimaryContainer dark:text-materialUI-DarkOnPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer col-span-1  text-xs font-semibold inline-block py-1 px-2 uppercase rounded last:mr-0 mr-1"
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
