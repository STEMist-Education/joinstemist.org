import Banner from "@/components/layout/Banner";
import Container from "@/components/layout/Container";
import Hero from "@/components/pages/Hero";
import { ArrowRightIcon } from "@heroicons/react/outline";
import Button from "@/components/layout/Button";
import Homepage from "@/components/pages/Homepage";
import Testimonials from "@/components/pages/Testimonials";
import BottomBanner from "@/components/layout/BottomBanner";

const events = ["STEMist Hacks", "Summer Classes"];

export default function Index() {
  return (
    <>
      BottomBanner()
      <Container title="Home">
        <div>
          <Banner image="/homepage2.jpeg" full>
            <div className="p-0 xs:pr-10">
              <h1 className="text-left xs:text-4xl font-light font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:mb-5 max-w-[28ch]">
                Accelerating education with{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-steve-red to-steve-purple">
                  engaging
                </span>{" "}
                workshops
              </h1>
            <span className="py-0 xs:py-4 xs:text-base block sm:mb-4 text-lg font-light text-left sm:text-3xl">
              <div>Welcome to STEMist Education, a 501(c)3 nonprofit</div>
            </span>
            <div className="flex justify-start flex-wrap sm:gap-3 gap-1 text-lg whitespace-nowrap">
              {/*<Button
                href="https://docs.google.com/forms/d/e/1FAIpQLSdC5bo5-MlwWgbOC-ZnoU4-UFztSLbVYOD3z_nWOa6LeCF0QQ/viewform"
                backgroundColor="bg-gradient-to-r from-steve-red to-steve-purple !py-1 !px-3"
                textColor="text-white"
              >
                Apply to join our team! {" "}
                <ArrowRightIcon className="h-4 w-4 inline-block" />
              </Button>
              <Button
                href="/programs"
                backgroundColor="bg-gradient-to-r from-steve-red to-steve-purple !py-1 !px-3"
                textColor="text-white"
              >
                Register for a class or workshop {" "}
                <ArrowRightIcon className="h-4 w-4 inline-block" />
              </Button>
              <Button
                href="/about/contact"
                backgroundColor="bg-gradient-to-r from-steve-red to-steve-purple !py-1 !px-3"
                textColor="text-white"
              >
                Contact Us {" "}
                <ArrowRightIcon className="h-4 w-4 inline-block" />
    </Button>*/}
              </div>
              </div>
            {/* <div className="flex sm:flex-row flex-col px-5 gap-2 sm:px-10 md:px-20 sm:gap-10">
              {events.map((e) => (
                <div className="flex flex-col" key={e}>
                  <h2 className="uppercase font-display text-xs sm:text-sm text-left">
                    upcoming event
                  </h2>
                  <h1 className="font-sans sm:text-xl text-left">{e}</h1>
                </div>
              ))}
            </div>
            <div className="flex justify-start flex-wrap px-5 sm:px-10 md:px-20 sm:gap-3 gap-1 sm:mt-2 text-lg whitespace-nowrap">
              <Button
                onClick={scrollTo("#learnmore")}
                backgroundColor="bg-white bg-opacity-10"
                textColor="text-white"
              >
                Learn More
              </Button>
              <Button
                href="/programs"
                backgroundColor="bg-blue-500"
                textColor="text-white"
              >
                Summer Classes
              </Button>
              <Button
                href="https://stemist-hacks.devpost.com"
                backgroundColor="bg-green bg-opacity-80"
                textColor="text-white"
                target="_blank"
              >
                Hackathon{" "}
                <ArrowRightIcon className="h-4 w-4 inline-block transform -rotate-45" />
              </Button>
            </div> */}
          </Banner>
          <Homepage />
          <Hero />
          <Testimonials />
        </div>
      </Container>
    </>
  );
}
