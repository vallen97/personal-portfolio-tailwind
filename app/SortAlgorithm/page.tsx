"use client";
import React, {
  ReactComponentElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { SortAlgorithm as sAlgorithm } from "../../src/utils/sorting-algorithm";

export default function SortAlgorithm() {
  // export const Sortalgorithm: React.FC<> = ({}) => {
  let sliderSpeedRef: any = useRef();
  let sliderArraySizeRef: any = useRef();
  let canvasRef: any = useRef();

  let [currentSpeed, setCurrentSpeed] = useState(5);
  let [currentArraySize, setCurrentArraySize] = useState(25);
  let [algorithm, setAlgorithm] = useState<any>(new (class {})());
  // call setup

  let ctx: any;
  // let algorithm: any;

  const buttonName: Array<string> = [
    "Selection Sort",
    "Bubble Sort",
    "Insertion Sort",
    "Quick Sort",
    "Comb Sort",
    "Random Array",
    "Reset Array",
  ];

  const sortFunction: Array<string> = [
    "selection",
    "bubble",
    "insert",
    "quick",
    "comb",
    "randomize",
    "reset",
  ];

  useEffect(() => {
    ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    setAlgorithm(sAlgorithm(canvasRef.current, ctx));
  }, []);

  return (
    <div className="px-8" style={{ height: "100%" }}>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-4">
        {buttonName.map((name: string, index: number) => (
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            id={"btn" + name.replace(/ /g, "")}
            key={index.toString() + "btn"}
            onClick={() => {
              eval("algorithm.sort." + sortFunction[index] + "();");
            }}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="px-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Current Speed: {Math.pow(Number(currentSpeed), 3)} ms
        </label>
        <input
          ref={sliderSpeedRef}
          id="minmax-range"
          type="range"
          min="1"
          max="10"
          value={currentSpeed}
          className="w-full h-2 bg-black rounded-lg appearance-none cursor-pointer dark:bg-gray-900"
          onChange={(val: any) => {
            setCurrentSpeed(val.nativeEvent.target.value);
            algorithm.sort.setSpeed(
              Math.pow(Number(val.nativeEvent.target.value), 3)
            );
          }}
        />
      </div>
      <div className="px-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Array Size: {currentArraySize}
        </label>
        <input
          ref={sliderArraySizeRef}
          id="minmax-range"
          type="range"
          min="10"
          max="100"
          value={currentArraySize}
          className="w-full h-2 bg-blackrounded-lg appearance-none cursor-pointer dark:bg-gray-900"
          onChange={(val: any) => {
            setCurrentArraySize(Number(val.nativeEvent.target.value));
            algorithm.sort.setArraySize(currentArraySize);
          }}
        />
      </div>
      <div className="grid place-items-center pt-5 ">
        <canvas ref={canvasRef} height={300} width={300} />
      </div>
    </div>
  );
}

// export default Sortalgorithm;
