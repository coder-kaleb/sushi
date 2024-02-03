import { lora, poppins } from "@/app/fonts";
import { footerLinks } from "@/constants";
import Image from "next/image";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer
      className={`relative mx-auto max-w-screen-2xl overflow-hidden py-12 md:py-20 lg:py-28`}
    >
      <div className="mx-auto flex w-full items-start gap-6 max-lg:flex-wrap lg:gap-24">
        <div className={`flex flex-col gap-4 `}>
          <div
            className={`text-md flex cursor-pointer items-start text-xl font-semibold text-light-gray transition duration-500 hover:text-orange ${lora.className} gap-1`}
          >
            <Image
              src="/logo.png"
              alt="logo"
              className="object-contain"
              width={28}
              height={28}
            />
            <p>Sushi</p>
          </div>
          <p className="md:max-w-[230px] max-w-[280px] text-lg text-gray-700 ">
            Food for the body is not enough. There must be food for the soul.
          </p>
        </div>

        <div className=" w-ful flex flex-col justify-between gap-10 sm:flex-row ">
          <section
            className={`${poppins.className} flex w-full flex-1 gap-11 max-md:gap-9 max-sm:flex-wrap`}
          >
            {footerLinks.map((item) => (
              <div key={item.title} className="w-full">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <ul className=" text-gray-700">
                  {item.subChild.map((link) => (
                    <li key={link} className="mb-2">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <div className={`${poppins.className} md:w-1/4 `}>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Social Media
            </h3>
            <div className="flex gap-4">
              <SocialLinks>
                <RiTwitterXLine size={17} color="#fff" />
              </SocialLinks>
              <SocialLinks>
                <AiOutlineYoutube size={17} color="#fff" />
              </SocialLinks>
              <SocialLinks>
                <FaInstagram size={17} color="#fff" />
              </SocialLinks>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
