import { dancing_font, lora, poppins } from "../app/fonts";
import aboutSushi from "../public/about-sushi.png";
import Image from "next/image";
export default function About() {
  return (
    <section className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 pt-20 text-center lg:grid-cols-2 lg:gap-20 lg:text-left" id="about">
      <Image
        src={aboutSushi}
        alt="about-sushi"
        width={500}
        height={400}
        style={{
          width: "100%",
          height: "auto",
        }}
        className=" mx-auto object-contain"
      />
      <div className=" flex flex-col gap-4 capitalize">
        <span className={`${dancing_font.className} text-2xl text-orange`}>
          about us
        </span>
        <h2
          className={`${lora.className} text-3xl text-light-gray lg:text-4xl`}
        >
          <span className="flex items-center justify-center gap-1 lg:justify-start">
            We Provide{" "}
            <Image
              src="/about-sushi-title.png"
              alt="sushi-image"
              className="object-contain"
              width={40}
              height={40}
            />
          </span>
          <span>Healthy Food</span>
        </h2>
        <p className={`${poppins.className} para lg:max-w-sm`}>
          Food comes to us from our relatives, whether they have wings or roots.
          This is how we consider food, it also has a culture. It has a history
          that passes from generation to generation.
        </p>
      </div>
    </section>
  );
}
