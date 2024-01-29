import { dancing_font, lora, poppins } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import recentFood from "../public/recently-salmon-sushi.png";
import Button from "./Button";
function RecentFood() {
  return (
    <section className="pt-28 min-h-screen" id="recent">
      <div className="flex flex-col justify-center lg:flex-row justify-center items-center  gap-16">
        <div className=" flex flex-col gap-5 capitalize">
          <span className={`${dancing_font.className} max-lg:text-center text-3xl text-orange`}>
            recently added
          </span>
          <h2
            className={`${lora.className} max-lg:text-center max-w-[360px] text-3xl text-light-gray lg:text-5xl`}
          >
            Sushi Samurai Salmón Cheese
          </h2>
          <p
            className={`${poppins.className} para max-lg:text-left`}
          >
            Take a look at what's new. And do not deprive yourself of a good
            meal, enjoy and be happy.
          </p>
          <div className=" max-lg:mx-auto">
            <Button animate={false} />
          </div>
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
