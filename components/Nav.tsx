import { FiMoon } from "react-icons/fi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { lora } from "../app/fonts";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";
import { useRouter } from "next/navigation";
export default function Nav() {
  return (
    <header className=" fixed inset-x-0  z-[99999] w-full items-center bg-[#FFF1EB] px-6 py-4 sm:px-10 md:px-16 xl:px-32 ">
      <nav className="flex items-center justify-between ">
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
        <ul className="flex items-center gap-12  ">
          <div className="hidden items-center gap-12 text-lg md:flex">
            {navLinks.map((item) => (
              <li
                className=" cursor-pointer  font-medium capitalize transition duration-500 hover:text-orange"
                key={item.name}
              >
                <Link href={`#${item.href}`}>{item.name}</Link>
              </li>
            ))}
          </div>
          <li className="flex items-center gap-3">
            <FiMoon className="h-6 w-6 cursor-pointer rounded-full text-gray-800" />
            <HiOutlineSquares2X2 className="block h-6 w-6 cursor-pointer rounded-full text-gray-800 md:hidden " />
          </li>
        </ul>
      </nav>
    </header>
  );
}
