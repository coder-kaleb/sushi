import { lora, poppins } from "@/app/fonts";
import { footerLinks } from "@/constants";
import Image from "next/image";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import SocialLinks from "./SocialLinks";
function Footer() {
  return (
    <footer className={`${poppins.className} mx-auto max-w-screen-2xl py-28`}>
      <div className="flex gap-28">
        <div
          className={`text-md flex cursor-pointer text-xl font-semibold text-light-gray transition duration-500 hover:text-orange  ${lora.className} gap-1`}
        >
          <Image
            src="/logo.png"
            alt="logo"
            className="object-contain"
            width={28}
            height={28}
          />
          Sushi
        </div>
        <section className=" grid grid-cols-4">
          {footerLinks.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <ul>
                {item.subChild.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <div>
          <h3 className=" mb-3">Social Media</h3>
          <div className=" flex gap-4">
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
    </footer>
  );
}

export default Footer;
