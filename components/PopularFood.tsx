import { dancing_font, lora } from "@/app/fonts";
import React from "react";
import FoodDetail from "./FoodDetail";
import Img1 from "../public/popular-onigiri.png";
import Img2 from "../public/popular-spring-rols.png";
import Img3 from "../public/popular-sushi-rolls.png";

function PopularFood() {
  return (
    <section className="mx-auto pt-28 pb-8">
      <div className="text-center capitalize">
        <h2 className={`${dancing_font.className} mb-1 text-2xl text-orange`}>
          the best food
        </h2>
        <h1 className={`${lora.className} text-4xl`}>Popular Dishes</h1>
      </div>
      <div className="grid lg:grid-cols-3 justify-items-center max-sm:gap-y-16 justify-center grid-cols-1 md:grid-cols-2 pt-20 gap-y-20">
        <FoodDetail imgUrl={Img1} title="Onigiri" price={10.99} />
        <FoodDetail imgUrl={Img2} title="Spring Rolls" price={20.99} />
        <FoodDetail imgUrl={Img3} title="Sushi Rolls" price={45.99}   />
      </div>
    </section>
  );
}

export default PopularFood;
