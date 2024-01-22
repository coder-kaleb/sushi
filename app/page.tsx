import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className={` bg-[#FFF1EB] relative min-h-screen overflow-x-hidden px-4 sm:px-10  md:px-16 xl:px-32 flex items-center`}>
      <Header />
      <Hero />
    </main>
  );
}
