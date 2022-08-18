import CarouselPerson from "./CarouselPerson";
import { TeamProps } from "@/lib/types";

export default function Carousel(props: TeamProps) {
  return (
    <div className="relative overflow-hidden text-black">
      {props.data.map((person) => (
        <CarouselPerson person={person} key={person.name} />
      ))}
    </div>
  );
}
