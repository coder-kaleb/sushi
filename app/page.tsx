import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main
      className={` min-h-screen overflow-x-hidden    `}
    >
      <Header />
      <Hero />
      <About />
    </main>
  );
}
