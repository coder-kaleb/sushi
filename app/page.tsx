import PopularFood from "@/components/PopularFood";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import RecentFood from "@/components/RecentFood";

export default function Home() {
  return (
    <main
      className={` min-h-screen px-4 sm:px-10  md:px-16 xl:px-32  `}
    >
      <Hero />
      <About />
      <PopularFood />
      <RecentFood />
    </main>
  );
}
