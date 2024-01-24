import { lora, poppins } from "../fonts";
import { CiLocationArrow1 } from "react-icons/ci";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="flex min-h-screen justify-center pt-36 text-center">
      <div className=" h-w-10 absolute left-0 top-16 w-16 rotate-90 opacity-20 lg:h-32 lg:w-32">
        <Image fill src="/leaf-branch-2.png" alt="leaf" />
      </div>
      <div className="absolute -right-2 bottom-4 w-16  opacity-20 lg:-right-9 lg:bottom-4 lg:h-32 lg:w-32">
        <Image fill src="/leaf-branch-4.png" alt="leaf" />
      </div>
      <div className="flex items-center justify-end  gap-20 max-lg:flex-col-reverse lg:gap-7">
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
            className={`max-w-[400px] text-center font-medium max-lg:mx-auto lg:text-left ${poppins.className} animate-slidein text-[#9b7564] opacity-0 [--slidein-delay:700ms] lg:max-w-[300px]`}
          >
            Enjoy a good dinner with the best dishes in the restaurant and
            improve your day.
          </p>
          <div className="max-lg:mx-auto">
            <button
              className={`flex animate-slidein items-center gap-2 rounded-full px-7 py-4 capitalize text-white opacity-0 [--slidein-delay:1000ms] ${poppins.className} group bg-orange font-semibold max-lg:text-center`}
            >
              order now{" "}
              <BiRightArrowAlt className="relative right-0 top-0 h-7 w-7 transition-all group-hover:-right-1" />
            </button>
          </div>
        </div>
        <div className="max-w-2xl flex-1 animate-slidein px-5 opacity-0 [--slidein-delay:300ms] max-lg:flex-grow-0 sm:px-12 md:px-16">
          <Image
            src="/home-sushi-rolls2.png"
            className="mx-auto h-auto w-full -rotate-6 object-contain lg:w-full "
            alt="hero-image"
            width={500}
            height={400}
            priority
          />
        </div>
      </div>
    </section>
  );
}
