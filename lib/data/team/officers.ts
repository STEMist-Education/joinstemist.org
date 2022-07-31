import Person from "../../types/Person";
import people from "./team";

export const officers: Person[] = people
  .filter((person) => person.officerRoles)
  .map((person) => ({
    name: person.name,
    positions: person.officerRoles!,
    description: person.description,
    image: person.image,
    email: person.email!,
  }));
