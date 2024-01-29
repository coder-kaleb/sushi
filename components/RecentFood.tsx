import { dancing_font, lora, poppins } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import recentFood from "../public/recently-salmon-sushi.png";
function RecentFood() {
  return (
    <section className=" pt-28" id="recent">
      <div className="flex justify-between gap-10">
        <div className=" flex flex-col gap-5 capitalize">
          <span className={`${dancing_font.className} text-2xl text-orange`}>
            recently added
          </span>
          <h2
            className={`${lora.className} max-w-72 text-3xl text-light-gray lg:text-4xl`}
          >
            Sushi Samurai Salmón Cheese
          </h2>
          <p
            className={`${poppins.className} max-w-3xl text-[12px] font-normal text-[#caa99b] max-lg:mx-auto max-lg:leading-5 lg:max-w-sm lg:text-base lg:font-medium`}
          >
            Take a look at what's new. And do not deprive yourself of a good
            meal, enjoy and be happy.
          </p>
        </div>
        <div className="">
          <Image
            src={recentFood}
            alt="recent-food"
            className=" object-contain"
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}

export default RecentFood;
