import { useOnScreen } from "@/lib/hooks";
import { scrollTo } from "@/lib/scroll";
import { Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { Fragment, ReactNode, useRef } from "react";
import CTABanner from "./CTABanner";

export default function Banner({
  image,
  children,
  full,
  href = "#hero",
}: {
  image: string;
  children: ReactNode;
  full?: boolean;
  href?: string;
}) {
  const titleDiv = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(titleDiv);
  return (
    <>
      {/* <div className="fixed w-screen z-50 left-0 top-0 h-screen flex justify-end items-end pointer-events-none">
        <Transition
          show={!onScreen}
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-50 scale-50"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-50 scale-50"
        >
          <button
            className="z-50 pointer-events-auto bg-purple rounded-full p-3 m-5"
            onClick={scrollTo("#top")}
            tabIndex={-1}
          >
            <ChevronUpIcon className="h-9 w-9" />
          </button>
        </Transition>
      </div> */}
      <CTABanner full={full} />
      <div
        className={`${
          full ? "h-screen sm:h-[100vh]" : "sm:h-[100vh] h-[50vh] mb-5"
        } object-cover relative`}
        ref={titleDiv}
      >
        {full && (
          <div className="absolute h-[90%] flex sm:h-full w-full justify-center items-end sm:-mt-10 pointer-events-none select-none text-white z-30">
            <button
              className="animate-bounce pointer-events-auto select-auto"
              onClick={scrollTo(href)}
              aria-label="Learn More"
            >
              <ChevronDownIcon className="h-12" />
            </button>
          </div>
        )}
        <Image
          src={image}
          alt="Background for page"
          layout="fill"
          className="-z-10 pointer-events-none h-full w-full select-none absolute object-cover brightness-[.60]"
          priority
          objectPosition="bottom center"
        />
        <div className="h-full w-full -z-20 bg-black absolute" />
        <div
          className={`flex h-full w-full items-end ${
            full ? "justify-center" : "justify-start"
          }`}
        >
          <div
            className={`py-8 flex flex-col justify-center gap-3 overflow-hidden break-words rounded-xl p-4 text-white z-20 -mt-0 relative ${
              full
                ? "min-h-full w-full bg-transparent text-center"
                : "bg-transparent h-auto sm:h-56 self-end sm:translate-y-10 lg:translate-y-0"
            } padded-section`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
