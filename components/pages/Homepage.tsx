import HomeSection from "../layout/HomeSection";
import { ReactNode } from "react";
import Link from "next/link";
import HomeInfo from "./HomeInfo";

const E = ({ children }: { children: ReactNode }) => (
  <span className="text-purple">{children}</span>
);

export default function Homepage() {
  return (
    <>
      <div className="flex scroll-mt-24 flex-col m-auto" id="hero">
        {/* <h1 className="text-center font-display text-4xl font-bold">
          What We Do
        </h1>
        <p className="text-lg text-center px-3">
          Our goal is not only to teach kids STEM. We hope to empower students
          with foundational concepts they will use throughout their life. To
          accomplish this, we host workshops over Zoom to help students learn
          about various topics in our modern society. These workshops take place
          during school breaks such as Spring and Winter break. In the summer,
          we opt for a comprehensive curriculum that delves more in-depth into
          STEM topics.{" "}
        </p> */}
        <HomeSection
          bgtheme={"white"}
          title="Our Mission: Education For All"
          image="/home/demoedu.jpg"
          side="left"
          position="50% 50%"
        >
          We strive to <E>empower</E> students with <E>foundational concepts</E>{" "}
          that will be vital to unlocking success in their lives. We{"'"}re
          committed to provide <E>education for everyone</E>, regardless of
          race, gender, age, income with free to ultralow cost classes online
          and in person.
        </HomeSection>
        <HomeInfo />
        <HomeSection
          bgtheme={"white"}
          title="STEMist  Classes Reshaping the learning curve"
          image="/home/reshape.png"
          side="right"
          position="top center"
        >
          Our{" "}
          <Link href="/programs">
            <a className="underline decoration-purple underline-offset-1">
              <E>Summer 2022 STEM Course</E>
            </a>
          </Link>{" "}
          provides an intensive 5-week course that <E>accelerates</E> the
          internalization of concepts taught during class. Learning is
          reinforced with kahoots that promote note-taking and long term memory
          recall.
        </HomeSection>
        <HomeSection
          bgtheme={"black"}
          title="STEMist Hacks: Putting skills to work"
          image="/home/hacks.jpeg"
          side="left"
          position="top left"
        >
          <Link href="/hacks">
            <a className="underline decoration-purple underline-offset-1 text">
              <E>STEMist Hacks</E>
            </a>
          </Link>{" "}
          encourages students to put their programming skills to work, with{" "}
          <E>riveting speaker talks</E> by real life professionals and tens of
          thousands of dollars in prizes.
        </HomeSection>
        <HomeSection
          bgtheme={"white"}
          title="Web Studio: {...}"
          image="/home/hacks.jpeg"
          side="right"
          position="top left"
        >
          <Link href="/hacks">
            <a className="underline decoration-purple underline-offset-1 text">
              <E>STEMist Hacks</E>
            </a>
          </Link>{" "}
          encourages students to put their programming skills to work, with{" "}
          <E>riveting speaker talks</E> by real life professionals and tens of
          thousands of dollars in prizes.
        </HomeSection>
      </div>
    </>
  );
}
