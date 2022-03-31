import Header from "@/components/hacks/layout/Header";
import FAQ from "@/components/hacks/faq/Faq";
import Sponsors from "@/components/hacks/sponsors/Sponsors";
import Section from "@/components/hacks/layout/Section";
import Schedule from "@/components/hacks/schedule/Schedule";
import Container from "@/components/layout/Container";
import PrizesSection from "@/components/hacks/prizes";
import { hackathonNavLinks } from "@/lib/data/navLinks";

export default function App() {
  return (
    <Container
      title="STEMist Hacks"
      noNav
      navTitle="STEMist Hacks"
      customNav={hackathonNavLinks}
    >
      <Header />
      <div className="max-w-[100rem] px-2 sm:px-6 lg:px-6 m-auto">
        <Section name="About our Hackathon" id="about">
          <div className="bg-gray-100 text-black p-5 rounded-lg shadow-md">
            STEMist Hacks aims to spark a light in the minds of students around
            the world interested in tech-related fields. We hope that by adding
            a form of competition and fun whilst still preserving the systematic
            school system, we can encourage students to learn in a fresh and new
            way. STEMist Hacks is primarily run by STEMist Education, a
            bay-area-based nonprofit run by and for students.
          </div>
        </Section>
        <Section name="Requirements">
          <div className="bg-gray-100 text-black p-5 rounded-lg shadow-md">
            Build anything {`"`}tech-related{`"`} to impress judges and win
            prizes. This can include- AR/VR software, Camera Software, Data
            Analysis, Computer Science Programs, Games, Blender Videos,
            Mechanical Designs and Projects, Mini-Computers, Electrical or
            Pneumatic powered systems, a solution to a problem with an MVP
            coded, and much, much, more! If you have any questions, please ask
            on our discord server.
          </div>
        </Section>
        <Section name="Hackathon Agenda (PST)">
          <Schedule />
        </Section>
        <PrizesSection />
        <Section name="Our Sponsors">
          <Sponsors />
        </Section>
        <Section name="Frequently Asked Questions">
          <FAQ />
        </Section>
      </div>
    </Container>
  );
}
