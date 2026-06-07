import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import ContactMe from "./components/sections/ContactMe";
import Experiences from "./components/sections/Experiences";
import { experiences, hero, profile, skill, welcome } from "../content/data";

export default function Home() {
  // Section layout: width (col-span) + ordering controlled here.
  // Grid is 1 col (mobile) / 2 cols (md) / 12 cols (lg).
  //
  // md rows: [Hero] / [Skills + ContactMe] / [Experiences]
  //   Contact/Experiences swap order on md only; lg restores DOM order.
  // lg rows: [Hero(7) + Skills(5)] / [Experiences(8) + ContactMe(4)]
  const layout = {
    hero: "md:col-span-2 lg:col-span-7",
    skills: "md:col-span-1 lg:col-span-5",
    experiences: "md:col-span-2 md:order-2 lg:col-span-8 lg:order-none",
    contact: "md:col-span-1 md:order-1 lg:col-span-4 lg:order-none",
  };

  return (
    <main
      id="home"
      className="min-h-screen bg-zinc-100 dark:bg-zinc-950 px-4 md:px-6 py-6 md:py-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2.5">
        <Hero hero={hero} className={layout.hero} />
        <Skills skill={skill} className={layout.skills} />
        <Experiences experiences={experiences} className={layout.experiences} />
        <ContactMe contact={profile} welcome={welcome} className={layout.contact} />
      </div>
    </main>
  );
}
