import HomeSection from "../layout/HomeSection";
// import { ReactNode } from "react";
import { useWindowSize } from "@/lib/hooks";
import HomeInfo from "./HomeInfo";
import { useState, useMemo, useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import Button from "@/components/layout/Button";

// const E = ({ children }: { children: ReactNode }) => (
//   <span className="text-purple">{children}</span>
// );

export default function Homepage() {

  let { height, width } = useWindowSize()
  
  const isMobile = useMemo(() => {
    if (width! <= 420) {
      return true
    } else {
      return false
    }
  }, [height, width, useWindowSize])

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
        vital to unlocking success in their lives. 

      {isMobile ? <div className="py-3" />: null}
      
         {" "}We{"'"}re committed to
        provide education for everyone, regardless of race, gender, age, income
        with free to ultralow cost classes online and in person.

        <br></br><br></br>
        <Button
              href="https://www.youtube.com/channel/UCp-9KJgj_clivoncmg459dg"
              backgroundColor="bg-gradient-to-r from-steve-red to-steve-purple !py-1 !px-3"
              textColor="text-white"
            >
              Meet our team! {" "}
              <ArrowRightIcon className="h-4 w-4 inline-block" />
            </Button>
      </HomeSection>
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
        <br></br><br></br>
        <Button
              href="/programs"
              backgroundColor="bg-gradient-to-r from-steve-red to-steve-purple !py-1 !px-3"
              textColor="text-white"
            >
              Register for a class! {" "}
              <ArrowRightIcon className="h-4 w-4 inline-block" />
            </Button>
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

        <br></br><br></br>
        <Button
              href="/hacks"
              backgroundColor="bg-gradient-to-r from-steve-red to-steve-purple !py-1 !px-3"
              textColor="text-white"
            >
              Start Coding! {" "}
              <ArrowRightIcon className="h-4 w-4 inline-block" />
            </Button>
      </HomeSection>
      <HomeSection
        bgtheme={"white"}
        title="WEBS Studio"
        image="/home/webs.png"
        side="right"
        position="top center"
        subtitle="Improving education, worldwide"
      >
        We Believe in Science Studios is a Youtube channel produced by STEMist
        Education that aims to promote our brand across the Seven Seas. WEBS
        Studio is dedicated to the belief that every child should have access to
        education, so by making videos, we try to bridge the gap between us here
        in California to places all over the world.

        <br></br><br></br>
        <Button
              href="https://youtube.com"
              backgroundColor="bg-gradient-to-r from-steve-red to-steve-purple !py-1 !px-3"
              textColor="text-white"
            >
              Go to the webs channel! {" "}
              <ArrowRightIcon className="h-4 w-4 inline-block" />
            </Button>
      </HomeSection>
    </div>
  );
}
