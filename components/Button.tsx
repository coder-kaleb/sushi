import { poppins } from "@/app/fonts";
import { BiRightArrowAlt } from "react-icons/bi";

interface Props {
  animate?: boolean;
}

function Button({ animate }: Props) {
  return (
    <button
      className={`flex ${animate ? "animate-slidein [--slidein-delay:1000ms] opacity-0 " : ""} items-center gap-2 rounded-full px-7 py-4 capitalize text-white  ${poppins.className} group bg-orange font-semibold outline-none max-lg:text-center`}
    >
      order now{" "}
      <BiRightArrowAlt className="relative right-0 top-0 h-7 w-7 transition-all group-hover:-right-1" />
    </button>
  );
}

export default Button;
