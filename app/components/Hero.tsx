import { lora, poppins } from "../fonts";
import { CiLocationArrow1 } from "react-icons/ci";
import { BiRightArrowAlt } from "react-icons/bi";
export default function Hero() {
  return (
    <section className="flex min-h-screen lg:pt-24 pt-0">
      <div className="flex gap-7 max-lg:flex-col-reverse justify-center items-start">
        <div className="flex flex-col gap-7">
          <h1
            className={`${lora.className}  flex flex-col text-5xl max-[379px]:text-4xl leading-[1] md:text-5xl max gap-4 lg:text-[55px] xl:text-6xl font-medium capitalize text-[#2C2420] max-lg:text-center`}
          >
            <span>enjoy delicious</span>
            <span className="flex items-center capitalize max-lg:justify-center">
              <img
                src="home-sushi-title.png"
                alt="sushi-img"
                className="mr-2 h-12 w-12 object-contain"
              />
              sushi food
            </span>
          </h1>
          <p
            className={`max-w-[400px] max-lg:mx-auto text-center font-medium ${poppins.className} text-[#9b7564] lg:max-w-[300px]`}
          >
            Enjoy a good dinner with the best dishes in the restaurant and
            improve your day.
          </p>
          <div className="mx-auto">
            <button
              className={`flex items-center gap-2 rounded-full px-7 py-4 capitalize text-white ${poppins.className} bg-orange group font-semibold max-lg:text-center`}
            >
              order now{" "}
              <BiRightArrowAlt
                className="relative right-0 top-0 h-5 w-5 transition-all group-hover:-right-1"
                strokeWidth={2}
              />
            </button>
          </div>
        </div>
        <div className="max-w-full flex-1 max-lg:flex-initial md:px-16 px-5 sm:px-12">
          <img
            src="home-sushi-rolls2.png"
            className="mx-auto h-auto lg:w-full -rotate-6 object-contain "
            alt="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
