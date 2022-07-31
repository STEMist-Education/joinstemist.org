import type Person from "../../types/Person";
import { TeacherSubject } from "../../types/Person";
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
