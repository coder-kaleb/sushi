import { Lora, Poppins, Dancing_Script } from "next/font/google";

export const lora = Lora({ subsets: ["latin"]});
export const dancing_font = Dancing_Script({ subsets: ["latin"] });
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
