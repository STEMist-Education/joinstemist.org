import Person, { TeamRole } from "../../types/Person";
import people from "./team";

export const staff: Person<TeamRole>[] = people
  .filter((person) => person.teamRoles)
  .map((person) => ({
    name: person.name,
    positions: person.teamRoles!,
    description: person.description,
    image: person.image,
  }));

staff.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
staff.forEach((p) => p.positions.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0)));
