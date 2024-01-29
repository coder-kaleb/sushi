import { dancing_font, lora, poppins } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import recentFood from "../public/recently-salmon-sushi.png";
import Button from "./Button";
function RecentFood() {
  return (
    <section
      className="flex min-h-screen w-full items-center justify-center"
      id="recent"
    >
      <div className=" flex w-full flex-col items-center justify-around gap-10 lg:flex-row">
        <div className=" flex flex-col gap-5 capitalize">
          <span
            className={`${dancing_font.className} text-3xl text-orange max-lg:text-center`}
          >
            recently added
          </span>
          <h2
            className={`${lora.className} max-w-[360px] text-3xl text-light-gray max-lg:text-center lg:text-5xl`}
          >
            Sushi Samurai Salmón Cheese
          </h2>
          <p className={`${poppins.className} para max-lg:text-left`}>
            Take a look at what's new. And do not deprive yourself of a good
            meal, enjoy and be happy.
          </p>
          <div className=" max-lg:mx-auto">
            <Button animate={false} />
          </div>
        </div>
        <div className=" ">
          <Image
            src={recentFood}
            alt="recent-food"
            className=" object-contain"
            // style={{ width: "100%", height: "auto" }}
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}

export default RecentFood;
