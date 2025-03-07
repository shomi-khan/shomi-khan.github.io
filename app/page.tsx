import About from "./components/about/page";
import Hero from "./components/hero/page";
import Sidebar from "./components/sidebar/page";
import Skills from "./components/skills/page";

export default function Home() {
  return (
    <div className="flex flex-col">
        <Sidebar />
        <Hero />
        <About />
        <Skills />
    </div>
  );
}
