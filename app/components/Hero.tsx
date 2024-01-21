import { lora, poppins } from "../fonts";
import { CiLocationArrow1 } from "react-icons/ci";
export default function Hero() {
  return (
    <section className="flex min-h-screen pt-24">
      <div className="container flex gap-7">
        <div className="flex flex-col gap-7">
          <h1
            className={`${lora.className}  flex flex-col gap-4 text-6xl font-medium capitalize text-[#2C2420]`}
          >
            <span>enjoy delicious</span>
            <span className="flex items-center capitalize">
              <img
                src="home-sushi-title.png"
                alt="sushi-img"
                className="mr-2 h-12 w-12 object-contain"
              />
              sushi food
            </span>
          </h1>
          <p
            className={`max-w-[300px] font-medium ${poppins.className} text-[#9b7564]`}
          >
            Enjoy a good dinner with the best dishes in the restaurant and
            improve your day.
          </p>
          <div>
            <button
              className={`flex items-center gap-2 rounded-full px-7 py-4 capitalize text-white ${poppins.className} bg-orange group font-semibold`}
            >
              order now{" "}
              <CiLocationArrow1
                className="relative right-0 h-5 w-5 transition-all group-hover:-right-2"
                strokeWidth={2}
              />
            </button>
          </div>
        </div>
        <div className="max-w-full flex-1 ">
          <img
            src="home-sushi-rolls2.png"
            className="mx-auto h-auto max-w-full -rotate-6 object-contain"
            alt="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
