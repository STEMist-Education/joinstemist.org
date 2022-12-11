import Button from "@/components/layout/Button";
import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import TabPage from "@/components/pages/TabPage";
import { ArrowRightIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Programs() {
  return (
    <Container title="Class Registration">
      <PartialBanner
        title="STEM Frontiers Workshop Registration"
        subheader="Join in on the interactive STEM learning experience"
      />
      <h1 className="text-center font-display text-4xl font-bold mb-5">
        Course Description
      </h1>
      <div className="grid grid-cols-8 padded-section">
        <div className="col-span-2">
          <Image
            src="/favicon.png"
            alt="Flyer for STEMist Summer Class 2022"
            width={435}
            height={580}
            layout="responsive"
          />
        </div>
        <div className="col-span-6 flex justify-center gap-3 flex-col items-center px-5">
          <p className="text-3xl">
            STEMist is proud to announce our Winter 2023 one-week course, featuring five guest speakers from nearby universities. Sessions are from Monday 1/2 to
            Friday 1/6 and are 1 to 1.5 hours long. The workshop talks about the newest developments in the fields of science and Engineering, including: Climate Engineering, Hydrogen Energy, Neurosignaling, 3d Printing, and much more.
          </p>
          <Button
            href="/signup"
            backgroundColor="bg-blue-500"
            textColor="text-white text-xl"
            target="_blank"
          >
            Sign Up Now!{" "}
            <ArrowRightIcon className="h-4 w-4 inline-block transform -rotate-45" />
          </Button>
        </div>
      </div>
      {/*<h1 className="text-center font-display text-4xl font-bold mb-5">
        What We Teach
      </h1>
      <div className="">
        <TabPage />
  </div>*/}
    </Container>
  );
}
