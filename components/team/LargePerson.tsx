import Image from "next/image";
import { PersonProps } from "@/lib/types";
import { MailIcon } from "@heroicons/react/outline";
import { useWindowSize } from "@/lib/hooks";

export default function LargePerson(props: PersonProps) {
  const { width } = useWindowSize();
  return (
    <>
      <div className="group flex flex-row mx-auto items-center gap-5 p-2 pb-0">
        <div className={`${props.person.description ? "" : ""}`}>
          <Image
            src={props.person.image}
            height={width! > 768 ? 140 : 100}
            width={width! > 768 ? 140 : 100}
            layout="fixed"
            className={`max-w-none rounded-full object-cover h-5 w-5 sm:h-auto sm:w-auto`}
            alt="User profile"
            quality={100}
            priority
          />
        </div>
        <h1 className="font-display w-full justify-self-center space-y-1 text-3xl font-normal">
          <span
            className={`${
              props.person.description ? "" : ""
            } text-2xl md:text-3xl transition-all`}
          >
            {props.person.name}
            <br />
            <div className="font-display flex flex-wrap gap-1">
              {props.person.positions.map(
                (pos, index) =>
                  !props.person.positions.includes("Head of " + pos) && (
                    <span
                      className="m-0.5 w-min whitespace-nowrap rounded-3xl bg-gray-200 py-1 px-2 text-xs md:text-sm"
                      key={index}
                    >
                      {pos}
                    </span>
                  )
              )}
            </div>
            <a
              href={
                "mailto:" +
                props.person.email! +
                "?body=" +
                encodeURI(
                  "\n\n\n\n\n\nSent from the official website of STEMist Education - joinstemist.org"
                )
              }
              target="_blank"
              rel="noreferrer noopener"
            >
              <MailIcon className="h-5 m-5 md:h-6 md:w-6 ml-1 my-0 mr-0" />
            </a>
          </span>
        </h1>
      </div>
      {props.person.description && (
        <p className="font-display p-2 text-lg mx-auto">
          {props.person.description}
        </p>
      )}
    </>
  );
}
