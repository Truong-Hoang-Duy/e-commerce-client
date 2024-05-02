import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { carouseData } from "./CarouselData";

// const responsive = {
//   0: { items: 1 },
//   568: { items: 2 },
//   1024: { items: 3 },
// };

const Carousel = () => {
  // const navigate = u;
  const items = carouseData.map((item) => (
    <img
      className="cursor-pointer w-full h-[600px] object-cover "
      role="presentation"
      src={item.image}
      alt=""
    />
  ));
  return (
    <AliceCarousel
      items={items}
      // responsive={responsive}
      disableButtonsControls
      autoPlay
      autoPlayInterval={3000}
      infinite
    />
  );
};

export default Carousel;
