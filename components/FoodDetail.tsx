import { lora, poppins } from "@/app/fonts";
import Image, { StaticImageData } from "next/image";
import { CiShoppingCart } from "react-icons/ci";
interface Props {
  imgUrl: StaticImageData;
  title: string;
  price: number;
  style?: string;
}

function FoodDetail({ imgUrl, title, price, style }: Props) {
  return (
    <div className={`relative flex w-72 justify-self-center py-4 flex-col items-center gap-1 rounded-2xl bg-[#FFF5F0] pt-28 text-center shadow-md `}>
      <Image
        src={imgUrl}
        alt="food-image"
        className="absolute -top-12 mx-auto"
        width={230}
      />
      <div>
        <h3 className={`${lora.className} text-2xl font-semibold`}>{title}</h3>
        <p className={`${poppins.className} mb-2 font-semibold text-[#7F6C64]`}>
          Japanese Dish
        </p>
      </div>
      <div className={`${poppins.className} relative flex items-center gap-10`}>
        <p className=" text-orange text-xl font-semibold">${price}</p>
        <div className="absolute -right-24 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-orange text-center text-white transition hover:bg-amber-700">
          <CiShoppingCart className="h-5 w-5" strokeWidth={1.4} />
        </div>
      </div>
    </div>
  );
}

export default FoodDetail;
