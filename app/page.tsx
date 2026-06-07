import Hero from "./components/sections/Hero";
import { experiences, hero, profile, skill, welcome } from "../content/data";

export default function Home() {
  return (
    <Hero
      sectionId=""
      hero={hero}
      profile={profile}
      skill={skill}
      experiences={experiences}
      welcome={welcome}
    />
  );
}
