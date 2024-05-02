import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import ProductCartCarousel from "../../components/ProductCart/ProductCartCarousel";
import { mens_kurta } from "../../../Data/mens_kuta";

const HomePage = () => {
  return (
    <div>
      <Carousel />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <ProductCartCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <ProductCartCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
        <ProductCartCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
      </div>
    </div>
  );
};

export default HomePage;
