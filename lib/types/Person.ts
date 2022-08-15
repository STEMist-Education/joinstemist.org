export type Person<T = string> = {
  name: string;
  positions: T[];
  description: string;
  image: string;
  qualifications?: string[];
  curriculumRoles?: {
    cs?: string[];
    math?: string[];
    bio?: string[];
    phys?: string[];
  };
  email?: string;
};

export interface ExtendedPerson {
  name: string;
  description: string;
  image: string;
  teacherRoles?: TeacherSubject[];
  officerRoles?: string[];
  teamRoles?: TeamRole[];
  qualifications?: string[];
  curriculumRoles?: {
    cs?: string[];
    math?: string[];
    bio?: string[];
    phys?: string[];
  };
  email?: string;
}

export type TeacherSubject =
  | "Head of Math"
  | "Head of Biology"
  | "Head of Physical Science"
  | "Head of Computer Science"
  | "Physical Science"
  | "Math"
  | "Biology"
  | "Computer Science"
  | "All"
  | "Intern";

export type TeamRole =
  | "Outreach"
  | "HR"
  | "Intern"
  | "Graphic Design"
  | "Operations"
  | "Technology"
  | "Website"
  | "Hackathon"
  | "WEBS";
