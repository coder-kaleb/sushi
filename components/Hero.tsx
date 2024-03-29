import { lora, poppins } from "../app/fonts";

import Image from "next/image";
import heroImg from "../public/home-sushi-rolls2.png";
import Button from "./Button";
export default function Hero() {
  return (
    <section
      className=" flex min-h-screen justify-center pt-36 text-center"
      id="home"
    >
      <div className="flex items-center justify-end gap-20 max-lg:flex-col-reverse lg:gap-7">
        <div className="flex flex-col gap-7  ">
          <h1
            className={`${lora.className} flex flex-col gap-4 text-5xl font-medium capitalize leading-[1] text-[#2C2420] max-lg:text-center max-[379px]:text-4xl md:text-5xl lg:text-[55px] xl:text-6xl`}
          >
            <span className=" animate-slidein opacity-0 [--slidein-delay:300ms]">
              enjoy delicious
            </span>
            <span className="flex animate-slidein items-center capitalize opacity-0 [--slidein-delay:500ms] max-lg:justify-center">
              <Image
                src="/home-sushi-title.png"
                alt="sushi-img"
                className="mr-2 object-contain"
                width={60}
                height={60}
              />
              sushi food
            </span>
          </h1>
          <p
            className={`para ${poppins.className} animate-slidein text-[#9b7564] opacity-0 [--slidein-delay:700ms] `}
          >
            Enjoy a good dinner with the best dishes in the restaurant and
            improve your day.
          </p>
          <div className="max-lg:mx-auto">
            <Button animate={true} />
          </div>
        </div>
        <div className="max-w-2xl flex-1 animate-slidein px-5 opacity-0 [--slidein-delay:300ms] max-lg:flex-grow-0 sm:px-12 md:px-16">
          <Image
            src={heroImg}
            className="-rotate-6 object-contain"
            style={{
              width: "100%",
              height: "auto",
            }}
            alt="hero-image"
            priority
          />
        </div>
      </div>
    </section>
  );
}
