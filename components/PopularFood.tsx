import { dancing_font, lora } from "@/app/fonts";
import React from "react";

function PopularFood() {
  return (
    <section className="container mx-auto pt-28">
      <div className="text-center capitalize">
        <h2 className={`${dancing_font.className} mb-1 text-2xl text-orange`}>
          the best food
        </h2>
        <h1 className={`${lora.className} text-4xl`}>Popular Dishes</h1>
      </div>
      <div></div>
    </section>
  );
}

export default PopularFood;
