import NavHome from "./components/Nav-Home";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <div className="bg-white min-h-screen">
      <NavHome />
      <Hero />
      <About />
      <Contact />
    </div>
    </>
  );
}