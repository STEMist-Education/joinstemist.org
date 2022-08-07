import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import Gallery from "react-photo-gallery";
import { useCallback } from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import FutureImage from "next/future/image";

interface Photo {
  src: string;
  srcSet?: string | string[] | undefined;
  sizes?: string | string[] | undefined;
  width: number;
  height: number;
  alt?: string | undefined;
  key?: string | undefined;
  scale?: boolean;
}

const photos: Photo[] = [
  {
    src: "/about/carousel2.png",
    alt: "Selena teaches students about DNA Analysis in the Intro to STEM workshop of April 2022.",
  },
  {
    src: "/about/gettingstartedrepljs.png",
    alt: "Snehil helps students get set up with their coding environment in the 2022 Summer Course.",
  },
  {
    src: "/about/carousel5.png",
    alt: "Steve talks about the basics of waves in the Intro to STEM workshop of April 2022.",
  },
  {
    src: "/about/bioday4.png",
    alt: "Chaas introduces the human body's circulatory system in the 2022 Summer Course.",
  },
  {
    src: "/about/strings.png",
    alt: "Shanker teaches students about the concept of strings in Python in the 2022 Summer Course.",
  },
  {
    src: "/about/carousel1.png",
    alt: "Snehil discusses the difference between backend and frontend web development in the Intro to STEM workshop of April 2022.",
  },
  {
    src: "/about/cppmore.png",
    alt: "Daniel works through a Codeforces programming problem using C++ in the 2022 Summer Course.",
  },
  {
    src: "/about/yes yes.png",
    alt: "Shanker works through a coding problem live in the 2022 Summer Course.",
  },
  {
    src: "/about/carousel4.png",
    alt: "Selena introduces the concept of DNA cloning using bacteria in the Intro to STEM workshop of April 2022.",
  },
  {
    src: "/about/1.png",
    alt: "Shanker introduces binary numbers and how they go hand in hand with programming in the 2022 Summer Course.",
  },
  {
    src: "/about/day 4 js.png",
    alt: "Snehil helps students out as they build their final Javascript project in the 2022 Summer Course.",
  },
  {
    src: "/about/cat class.png",
    alt: "Shanker explains a guided problem in the 2022 Summer Course.",
  },
  {
    src: "/about/cppday1.png",
    alt: "Justin gives students a review problem to make a C++ calculator in the 2022 Summer Course.",
  },
  {
    src: "/about/ecologyend.png",
    alt: "Selena congratulates the winners of the Ecology kahoot in the 2022 Summer Course.",
  },
  {
    src: "/about/carousel3.png",
    alt: "Snehil goes over the varies methods of how to get started with backend programming in the Intro to STEM workshop of April 2022.",
  },
  {
    src: "/about/python day 5.2.png",
    alt: "Shanker talks about advanced machine learning concepts in the 2022 Summer Course.",
  },
  {
    src: "/about/day6botany.png",
    alt: "Harold introduces the concept of botany in the 2022 Summer Course.",
  },
  {
    src: "/about/python day 5.png",
    alt: "Shanker explains the concept of neural networks in the 2022 Summer Course.",
  },
  {
    src: "/about/day2biop2.png",
    alt: "Selena prepares students for the challenging topic of metabolism in the 2022 Summer Course.",
  },
  {
    src: "/about/python day 6.png",
    alt: "Aadharsh assists students in their final Python project in the 2022 Summer Course.",
  },
  {
    src: "/about/carousel6.png",
    alt: "Steve congratulates the top 5 participants in his Waves kahoot in the Intro to STEM workshop of April 2022.",
  },
].map((photo) => ({
  ...photo,
  width: 2,
  height: 1,
}));

export default function About() {
  const [open, setOpen] = useState<boolean>(false);
  const [currentPhoto, setCurrentPhoto] = useState<Photo>(photos[0]);

  const imageRenderer = useCallback(
    ({ photo }: { photo: Photo }) => (
      <div className="m-1">
        <Image
          alt={photo.alt}
          src={photo.src}
          objectFit="cover"
          width={photo.width}
          height={photo.height}
          onClick={() => {
            setOpen(true);
            setCurrentPhoto(photo);
          }}
          className={`${
            photo.scale === false ? "" : "hover:scale-110"
          } transition-transform duration-300 cursor-pointer`}
        />
      </div>
    ),
    []
  );
  return (
    <Container title="Gallery">
      <PartialBanner
        title="Gallery"
        subheader="A collection of some of our most memorable moments"
      />
      <div className="m-3 p-4 space-y-5 padded-section mx-auto">
        <Gallery
          photos={photos}
          renderImage={imageRenderer}
          targetRowHeight={300}
          margin={4}
        />
      </div>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          onClose={() => setOpen(false)}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30"></Dialog.Overlay>
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div>
                  <div className="m-1 relative w-full">
                    <FutureImage
                      alt={currentPhoto.alt}
                      src={currentPhoto.src}
                      height={0}
                      width={672}
                      className="object-cover w-full h-full"
                      loading="eager"
                    />
                  </div>
                  {currentPhoto.alt || ""}
                </div>
                <div className="mt-1">
                  <button
                    className="m-auto bg-red px-3 py-1 rounded-md bg-opacity-70 shadow-sm shadow-slate-900 relative active:top-[2px] active:shadow-none text-white font-display text-sm outline-none"
                    onClick={() => setOpen(false)}
                  >
                    Back
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </Container>
  );
}
