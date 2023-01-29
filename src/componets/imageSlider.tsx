import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }: any) => {
  return (
    <Carousel infiniteLoop showThumbs={false}>
      {slides.map((slide: any, index: any) => {
        return (
          <Image
            key={index}
            src={slide.image + ".PNG"}
            height={451}
            width={800}
            alt={"image" + index}
            blurDataURL={slide.image + "blurred.jpg"}
            priority
          />
        );
      })}
    </Carousel>
  );
};

export default React.memo(ImageSlider);
