import type { Person } from "@/lib/types";
import Image from "next/image";
import Qualifications from "./Qualifications";
import { teachers } from "@/lib/data/team";
import { useMemo } from "react";

export default function CarouselPerson({ person }: { person: Person }) {
  const updatedPerson = useMemo(
    () => teachers.find((e) => e.name === person.name),
    [person.name]
  );
  return (
    <div className="flex flex-col sm:flex-row sm:px-10 py-5 items-center justify-center">
      <div className="sm:h-full relative p-3 mx-auto grid sm:p-5 items-center">
        <Image
          src={person.image}
          alt="Mentor spotlight"
          width={350}
          height={350}
          layout="fixed"
          loading="eager"
          className="rounded-full object-cover"
          quality={100}
        />
      </div>
      <div className="pb-5 pt-10 pr-5 pl-5">
        <h1 className="text-5xl font-display">{person.name}</h1>
        <br />
        <p className="max-w-[80ch] sm:text-xl">{person.description}</p>
        <br />
        <Qualifications quals={updatedPerson?.qualifications} />
      </div>
    </div>
  );
}
