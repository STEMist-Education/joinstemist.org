import { Person } from "@/lib/types";
import { FC, ReactNode } from "react";
import { PersonProps } from "@/lib/types";

interface TeamSectionProps {
  people: Person[];
  children?: ReactNode;
  component: FC<PersonProps>;
  title: string;
  large?: boolean;
}

export default function TeamSection(props: TeamSectionProps) {
  return (
    <div className="text-black py-3">
      <div
        className={`grid gap-3 pb-10 ${
          props.large
            ? "sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
            : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        }`}
      >
        {props.people.map((person, index) => (
          <div
            key={index}
            className={`${
              props.large ? "" : "h-36"
            } w-full overflow-hidden border-2 border-opacity-10 border-black p-3`}
          >
            <props.component person={person} />
          </div>
        ))}
      </div>
    </div>
  );
}
