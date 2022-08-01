import { useSpringCarousel } from "react-spring-carousel";
import { testimonials } from "@/lib/data/testimonials";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

export default function Testimonials() {
  const { carouselFragment, slideToNextItem, slideToPrevItem } =
    useSpringCarousel({
      withLoop: true,
      // withThumbs: true,
      items: testimonials.map((i) => ({
        id: i.name,
        renderItem: (
          <div className="mx-auto self-center">
            <p className="text-steve-text text-2xl text-center max-w-[80ch] font-light">
              {i.content}
            </p>
            <h3 className="text-steve-text mt-3 text-2xl text-center font-light">
              {i.name}
            </h3>
            <h4 className="text-steve-text mt-0 text-xl text-center font-light">
              {i.subtitle}
            </h4>
          </div>
        ),
        // renderThumb: (
        //   <div
        //     className={`rounded-xl ${
        //       true
        //         ? "bg-gradient-to-r from-steve-red to-steve-purple"
        //         : "bg-gray-50"
        //     } h-5 w-5 justify-self-center mx-1 cursor-pointer`}
        //     onClick={() => slideToItem(i.name)}
        //   ></div>
        // ),
      })),
    });

  return (
    <section className="bg-steve-light py-24">
      <div className="padded-section min-h-[25rem] flex flex-col items-center text-elipsis py-3 gap-6">
        <div>
          <h1
            className={`text-6xl font-bold font-display inline-block pb-2 text-transparent bg-clip-text bg-gradient-to-l from-steve-purple to-steve-red`}
          >
            Testimonials
          </h1>
        </div>
        <div className="overflow-hidden w-full relative">
          <button
            className="absolute h-full top-0 bottom-0 left-0 z-[1] flex items-center justify-center sm:w-[10%] w-[15%] p-0 text-black text-center bg-none border-0"
            onClick={slideToPrevItem}
          >
            <ChevronLeftIcon className="w-9 h-9" />
          </button>
          {carouselFragment}
          <button
            className="absolute h-full top-0 bottom-0 right-0 z-[1] flex items-center justify-center sm:w-[10%] w-[15%] p-0 text-black text-center bg-none border-0"
            onClick={slideToNextItem}
          >
            <ChevronRightIcon className="w-9 h-9" />
          </button>
        </div>
      </div>
    </section>
  );
}
