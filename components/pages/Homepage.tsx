import HomeSection from "../layout/HomeSection";
// import { ReactNode } from "react";
import HomeInfo from "./HomeInfo";

// const E = ({ children }: { children: ReactNode }) => (
//   <span className="text-purple">{children}</span>
// );

export default function Homepage() {
  return (
    <div className="flex scroll-mt-24 flex-col m-auto" id="hero">
      <HomeSection
        bgtheme={"white"}
        title="Our Mission: Education For All"
        image="/home/demoedu.jpg"
        side="left"
        position="50% 50%"
      >
        We strive to empower students with foundational concepts that will be
        vital to unlocking success in their lives. We{"'"}re committed to
        provide education for everyone, regardless of race, gender, age, income
        with free to ultralow cost classes online and in person.
      </HomeSection>
      <HomeInfo />
      <HomeSection
        bgtheme={"white"}
        title="STEMist Classes"
        image="/home/reshape.png"
        side="right"
        position="top center"
        subtitle="Reshaping the learning curve"
      >
        Our Summer 2022 STEM Course provides an intensive 5-week course that
        accelerates the internalization of concepts taught during class.
        Learning is reinforced with kahoots that promote note-taking and long
        term memory recall.
      </HomeSection>
      <HomeSection
        bgtheme={"black"}
        title="STEMist Hacks"
        image="/home/hacks.jpeg"
        side="left"
        position="top left"
        subtitle="Putting skills to work"
      >
        STEMist Hacks encourages students to put their programming skills to
        work, with riveting speaker talks by real life professionals and tens of
        thousands of dollars in prizes.
      </HomeSection>
      <HomeSection
        bgtheme={"white"}
        title="WEBS Studio"
        image="/home/hacks.jpeg"
        side="right"
        position="top left"
        subtitle="Improving education, worldwide"
      >
        We Believe in Science Studios is a Youtube channel produced by STEMist
        Education that aims to promote our brand across the Seven Seas. WEBS
        Studio is dedicated to the belief that every child should have access to
        education, so by making videos, we try to bridge the gap between us here
        in California to places all over the world.
      </HomeSection>
    </div>
  );
}
