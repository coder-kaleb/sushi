import PopularFood from "@/components/PopularFood";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main
      className={` min-h-screen px-4 sm:px-10  md:px-16 xl:px-32  `}
    >
      <Header />
      <Hero />
      <About />
      <PopularFood />
    </main>
  );
}
