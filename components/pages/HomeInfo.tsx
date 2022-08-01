import Image from "next/future/image";
import Button from "../layout/Button";

const items: { image: string; text: string; link: string }[] = [
  {
    image: "/home/hacks.png",
    text: "2022 STEMist Hacks w/ 72k in Prizes",
    link: "/hacks",
  },
  {
    image: "/home/summer.png",
    text: "6 Week 2022 Summer STEM Course",
    link: "/programs",
  },
  {
    image: "/home/stem.png",
    text: "2022 Intro to STEM Workshop",
    link: "/events/intro-to-stem",
  },
  {
    image: "/home/hacks.png",
    text: "STEMist Webs Youtube Channel",
    link: "/webs",
  },
];

export default function HomeInfo() {
  return (
    <section className="bg-steve-dark py-24">
      <div className="padded-section min-h-[25rem] flex flex-col items-center text-elipsis py-3 gap-6">
        <div>
          <h1
            className={`text-6xl font-bold font-display inline-block pb-2 text-transparent bg-clip-text bg-gradient-to-l from-steve-red to-steve-purple`}
          >
            What We{"'"}ve Done
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((item) => (
            <div
              key={item.text}
              className="w-72 flex flex-col items-center justify-center px-6 gap-2"
            >
              <Image
                src={item.image}
                alt={item.text}
                className="h-full w-full"
              />
              <p className="text-white text-center text-xl">{item.text}</p>
              <Button
                backgroundColor="bg-gradient-to-r from-steve-red to-steve-purple !py-1 !px-3"
                textColor="text-white font-light"
                href={item.link}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
