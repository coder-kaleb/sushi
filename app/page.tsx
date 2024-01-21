import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className={` bg-[#FFF1EB]  px-4 sm:px-12 md:px-16 lg:px-36`}>
      <Header />
      <Hero />
    </main>
  );
}
