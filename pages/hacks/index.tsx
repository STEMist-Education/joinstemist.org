import Header from "@/components/hacks/layout/Header";
import FAQ from "@/components/hacks/faq/Faq";
import Sponsors from "@/components/hacks/sponsors/Sponsors";
import Section from "@/components/hacks/layout/Section";
import Schedule from "@/components/hacks/schedule/Schedule";
import Container from "@/components/layout/Container";
import PrizesSection from "@/components/hacks/prizes";
import { hackathonNavLinks } from "@/lib/data/navLinks";
import Partners from "@/components/hacks/partners/Partners";

const HACKATHON_INFO = {
  signup_form: "/hacks/signup",
  devpost: "https://stemist-hacks.devpost.com/",
  discord: "https://discord.gg/mQFreT6eCX",
};

export default function App() {
  return (
    <Container
      title="STEMist Hacks"
      noNav
      navTitle="STEMist Hacks"
      customNav={hackathonNavLinks}
    >
      <Header />
      <div className="max-w-[100rem] m-auto">
        <Section name="About our Hackathon" id="about">
          <div className="bg-black bg-opacity-20 text-white text-lg py-5 rounded-lg shadow-md">
            Welcome to STEMist Hacks! Join other hackers in creating a project
            to impress judges, and to win prizes. There will be workshops
            provided from our gracious sponsors, volunteers, and guest speakers
            to aid in your process. Or, you can start hacking the moment STEMist
            Hacks is open!
            <div className="flex flex-wrap gap-5 pt-4">
              <a
                href={HACKATHON_INFO.signup_form}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-white text-black border-2 border-white font-semibold rounded-md hover:bg-slate-200"
              >
                Sign Up
              </a>
              <a
                href={HACKATHON_INFO.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-500 text-white border-2 border-blue-500 font-semibold rounded-md hover:bg-blue-600"
              >
                Discord
              </a>
              <a
                href={HACKATHON_INFO.devpost}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-white border-2 font-semibold border-white rounded-md hover:bg-neutral-900 hover:bg-opacity-50 hover:border-slate-200"
              >
                Devpost
              </a>
            </div>
          </div>
        </Section>
        <Section name="Ideas to Build">
          <div className="bg-black bg-opacity-20 text-white text-lg py-5 rounded-lg shadow-md">
            Build anything {`"`}tech-related{`"`} to impress judges and win
            prizes. This can include- AR/VR software, Camera Software, Data
            Analysis, Computer Science Programs, Games, Blender Videos,
            Mechanical Designs and Projects, Mini-Computers, Electrical or
            Pneumatic powered systems, a solution to a problem with an MVP
            coded, and much, much, more! If you have any questions, please ask
            on our discord server.
          </div>
        </Section>
        <Section name="Requirements to Attend">
          <div className="bg-black bg-opacity-20 text-white text-lg py-5 rounded-lg shadow-md">
            Due to restrictions from DevPost, if you are above 13 years old you
            can come. However if you are younger, you will need parent
            permission especially parent supervision while filing out the forms.
            Thanks in advance for complying with this rule.
          </div>
        </Section>
        <Section name="Hackathon Agenda (PST)">
          <Schedule />
        </Section>
        <PrizesSection />
        <Section name="Our Sponsors">
          <Sponsors />
        </Section>
        <Section name="Partners">
          <Partners />
        </Section>
        <Section name="Frequently Asked Questions">
          <FAQ />
        </Section>
      </div>
    </Container>
  );
}
