import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function SocialLinks({ children }: Props) {
  return (
    <div className=" flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-none bg-orange text-center outline-none transition-all hover:-translate-y-[2px]">
      {children}
    </div>
  );
}

export default SocialLinks;
