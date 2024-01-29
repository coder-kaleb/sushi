import React from "react";
import sushi from "../public/newsletter-sushi.png";
import leaf from "../public/spinach-leaf.png";
import Image from "next/image";
import { CiLocationArrow1 } from "react-icons/ci";
import { dancing_font, lora, poppins } from "@/app/fonts";
function Subscribe() {
  return (
    <section className=" mx-auto max-w-screen-lg pt-16">
      <div className="relative flex gap-10 overflow-clip rounded-2xl bg-[#2F231D] py-10 lg:justify-evenly ">
        <Image
          src={sushi}
          alt="sushi-image"
          className=" absolute w-44 object-contain max-lg:-left-24 max-lg:-top-9 md:w-52 lg:relative lg:w-80 "
        />
        <div className=" flex flex-col gap-4 px-7 text-center capitalize max-lg:w-full sm:px-12 lg:text-center">
          <p
            className={`${dancing_font.className} text-3xl text-orange
        `}
          >
            newsletter
          </p>
          <p
            className={`${lora.className} mx-auto max-w-sm text-center text-3xl font-semibold text-white lg:text-5xl`}
          >
            Subscribe For Offer Updates
          </p>
          <form className="max-mob:flex-col  mob:bg-white mob:gap-2 flex w-full items-center justify-between gap-5 rounded-full py-2 pl-5 pr-2  max-lg:flex-1 ">
            <>
              <input
                type="text"
                className=" w-full flex-1 rounded-full px-5 py-4 text-xl outline-none placeholder:text-gray-500"
                placeholder="Enter email"
              />
            </>
            <button
              className={`flex items-center gap-2 rounded-full px-7 py-4 capitalize text-white  ${poppins.className} group bg-orange font-semibold outline-none max-lg:text-center`}
            >
              subscribe{" "}
              <CiLocationArrow1 className="relative right-0 top-0 h-7 w-7 transition-all group-hover:-right-1" />
            </button>
          </form>
        </div>
        <Image
          src={leaf}
          alt="leaf"
          width={40}
          height={40}
          className="absolute -bottom-8 right-10 rotate-90 object-contain"
        />
      </div>
    </section>
  );
}

export default Subscribe;
