import Link from "next/link";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import compareSongsImageData from "../ImagePaths/compareSongsImageData";
import flappyImageData from "../ImagePaths/flappyImageData";
import localGameImageData from "../ImagePaths/localGameImageData";
import snakeImageData from "../ImagePaths/snakeImageData";
import sortAlgorithmImageData from "../ImagePaths/sortAlgorithmImageData";
import ImageSlider from "./imageSlider";
import "../../styles/globals.css";

interface cardProps {
  carouselImages: number;
  imageAlt: string;
  cardTitle: string;
  cardDescription: string;
  buttonTitle: string;
  buttonLink: any;
  externalLink: boolean;
}

export const Card: React.FC<cardProps> = (props) => {
  // https://chayanit-chaisri.medium.com/react-create-a-show-more-less-button-aa0e9cd0f927
  const [showMore, setShowMore] = useState(false);
  let button = null;
  let imgArrays: any;

  switch (props.carouselImages) {
    case 0:
      imgArrays = compareSongsImageData;
      break;
    case 1:
      imgArrays = localGameImageData;
      break;
    case 2:
      imgArrays = snakeImageData;
      break;
    case 3:
      imgArrays = sortAlgorithmImageData;
      break;
    case 4:
      imgArrays = flappyImageData;
      break;
  }

  if (props.externalLink) {
    button = <Link href={props.buttonLink}>{props.buttonTitle}</Link>;
  } else {
    button = <Link href={props.buttonLink}>{props.buttonTitle}</Link>;
    // button = <Link href="/">Home</Link>;
  }
  // #carousel-status {
  //   color: rgb(0, 0, 0);
  // }
  return (
    <div className="bg-materialUI-LightOnSecondary dark:bg-materialUI-DarkOnSecondary border-materialUI-LightOnSurfaceVariant dark:border-materialUI-DarkOnSurfaceVariant max-w-sm rounded overflow-hidden shadow-lg border-2 border-sky-500 min-h-[475px]">
      <ImageSlider style={{ background: "black" }} slides={imgArrays} />

      <div className="px-6 py-4">
        <div className=" text-materialUI-LightSecondary dark:text-materialUI-DarkSecondary font-bold text-xl mb-2">
          {props.cardTitle}
        </div>
        <p className=" text-materialUI-LightSecondary dark:text-materialUI-DarkSecondary  text-base">
          {showMore
            ? props.cardDescription
            : `${props.cardDescription.substring(0, 125)}`}
          <br></br>
          <button
            className=" bg-materialUI-LightOnPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer text-materialUI-LightPrimaryContainer dark:text-materialUI-DarkPrimaryContainer font-semibold rounded shadow"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? " Show less" : " Show more"}
          </button>
          {/* {props.cardDescription} */}
        </p>
      </div>
      <div>
        <button
          id="cardButton"
          className="bg-materialUI-LightOnPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer text-materialUI-LightPrimaryContainer dark:text-materialUI-DarkPrimaryContainer  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
        >
          {button}
        </button>

        {/* <!-- Pin to bottom right corner --> */}
      </div>
    </div>
  );
};

export default React.memo(Card);
