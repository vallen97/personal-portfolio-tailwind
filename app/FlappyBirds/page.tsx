"use client";
import React, { useEffect, useRef, useState } from "react";
import Dropdown from "../../src/componets/dropdown";
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
    <div>
      <div className="bg-black py-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center">
        {isGameLoaded ? (
          <>
            <div className="lg:col-start-1 place-items-center text-center lg:col-end-1 w-56">
              <Dropdown
                mainButtonText={"Save Bird to"}
                arrDropdown={["Local Storage"]}
                class={flappyBirdGame}
                save={true}
                isBird={true}
              />
            </div>
          </>
        ) : (
          <>
            <div></div>
          </>
        )}

        <div className=" lg:col-start-3 place-items-center text-center lg:col-end-6 w-56 ">
          <Dropdown
            mainButtonText={"Load Bird From"}
            arrDropdown={["Local Storage", "Website"]}
            class={flappyBirdGame}
            save={false}
            isBird={true}
          />
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
              className="bg-materialUI-LightOnPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer text-materialUI-LightPrimaryContainer dark:text-materialUI-DarkPrimaryContainer font-semibold py-2 px-4 rounded"
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
          className=" text-materialUI-LightOnPrimaryContainer bg-materialUI-LightPrimaryContainer dark:text-materialUI-DarkOnPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer lg:col-start-1 lg:col-end-1 text-xs font-semibold inline-block py-1 px-2 uppercase rounde last:mr-0 mr-1"
          ref={labelCurrentGen}
        >
          Current Generation: 0
        </span>

        <button
          className="  bg-materialUI-LightOnPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer text-materialUI-LightPrimaryContainer dark:text-materialUI-DarkPrimaryContainer  lg:col-start-3  lg:col-end-6 font-semibold py-2 px-4 border  rounded"
          onClick={() => {
            flappyBirdGame.nextGen();
          }}
        >
          Next Generation
        </button>
      </div>
      <div className="py-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <span
          className=" text-materialUI-LightOnPrimaryContainer bg-materialUI-LightPrimaryContainer dark:text-materialUI-DarkOnPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer lg:col-start-1 lg:col-end-1 text-xs font-semibold inline-block py-1 px-2 uppercase rounde last:mr-0 mr-1"
          ref={labelCurrentScoreo}
        >
          Current Score: 0
        </span>
      </div>
      <div className="py-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <span
          className=" text-materialUI-LightOnPrimaryContainer bg-materialUI-LightPrimaryContainer dark:text-materialUI-DarkOnPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer lg:col-start-1 lg:col-end-1 text-xs font-semibold inline-block py-1 px-2 uppercase rounde last:mr-0 mr-1"
          ref={labelCurrentBirdsAlive}
        >
          Birds Alive: 10
        </span>
      </div>

      <div
        className="my-4 mx-2 grid grid-cols-1 place-items-center"
        style={{ height: "100vh", width: "95vw" }}
        id="game"
      >
        <div
          id="background"
          className="background content-center border-black"
          style={{
            height: "100%",
            width: "100%",
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
  );
}

// export default page;
