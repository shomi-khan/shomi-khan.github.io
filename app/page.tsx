import Hero, { WelcomeBanner } from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import ContactMe from "./components/sections/ContactMe";
import Experiences from "./components/sections/Experiences";
import { experiences, hero, profile, skill, welcome } from "../content/data";

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen bg-zinc-100 dark:bg-zinc-950 px-4 md:px-6 py-6 md:py-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2.5">
        <Hero hero={hero} profile={profile} />
        <Skills skill={skill} />
        <ContactMe profile={profile} />
        <Experiences experiences={experiences} />
        <WelcomeBanner welcome={welcome} />
      </div>
    </main>
  );
}
