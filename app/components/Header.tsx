import { FiMoon } from "react-icons/fi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { lora } from "../fonts";
export default function Header() {
  return (
    <header className="z-50 py-7">
      <nav className="flex items-center justify-between">
        <div
          className={`text-md flex text-xl font-semibold transition duration-500 hover:text-orange-500  ${lora.className} gap-1`}
        >
          <img src="logo.png" alt="logo" className="h-7 w-7 object-contain" />
          Sushi
        </div>
        <ul className="flex items-center gap-12  ">
          <div className="hidden items-center gap-12 md:flex">
            <li className=" cursor-pointer text-base font-medium capitalize text-orange-500 transition duration-500">
              home
            </li>
            <li className=" cursor-pointer text-base font-semibold capitalize text-gray-800 transition duration-500 hover:text-orange-500">
              about us
            </li>
            <li className=" cursor-pointer text-base font-semibold capitalize text-gray-800 transition duration-500 hover:text-orange-500">
              popular
            </li>
            <li className=" cursor-pointer text-base font-semibold capitalize text-gray-800 transition duration-500 hover:text-orange-500">
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
