import { TeacherSubject, Person } from "../../types";
import people from "./team";

export const teachers: Person<TeacherSubject>[] = people
  .filter((person) => person.teacherRoles)
  .map((person) => ({
    name: person.name,
    description: person.description,
    image: person.image,
    positions: person.teacherRoles!,
    qualifications: person.qualifications,
    curriculumRoles: person.curriculumRoles,
  }));
