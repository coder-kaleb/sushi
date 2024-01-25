import { FiMoon } from "react-icons/fi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { lora } from "../fonts";
export default function Header() {
  return (
    <header className=" z-[99999] px-6 sm:px-10 fixed w-full inset-x-0 md:px-16 xl:px-32 items-center bg-[#FFF1EB] py-4 ">
      <nav className="flex items-center justify-between ">
        <div
          className={`text-md flex text-xl font-semibold text-light-gray transition duration-500 hover:text-orange  ${lora.className} gap-1`}
        >
          <img src="logo.png" alt="logo" className="h-7 w-7 object-contain" />
          Sushi
        </div>
        <ul className="flex items-center gap-12  ">
          <div className="hidden items-center gap-12 text-lg md:flex">
            <li className=" cursor-pointer  font-medium capitalize text-orange transition duration-500">
              home
            </li>
            <li className=" cursor-pointer  font-semibold capitalize text-gray-800 transition duration-500 hover:text-orange">
              about us
            </li>
            <li className=" cursor-pointer  font-semibold capitalize text-gray-800 transition duration-500 hover:text-orange">
              popular
            </li>
            <li className=" cursor-pointer  font-semibold capitalize text-gray-800 transition duration-500 hover:text-orange">
              recently
            </li>
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
