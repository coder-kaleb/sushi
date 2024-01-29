import PopularFood from "@/components/PopularFood";
import About from "@/components/About";
import Header from "@/components/Nav";
import Hero from "@/components/Hero";
import RecentFood from "@/components/RecentFood";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <main
      className={` mx-auto min-h-screen max-w-screen-2xl px-4 sm:px-10  md:px-16 xl:px-32  `}
    >
      <Hero />
      <About />
      <PopularFood />
      <RecentFood />
      <Subscribe />
    </main>
  );
}
