import { memo, useMemo, useState } from "react";
import { GetStaticProps } from "next";
import { TeamProps } from "@/lib/types";
import db from "@/lib/serverApp";
import { TeacherSubject } from "@/lib/types";
import PartialBanner from "@/components/layout/PartialBanner";
import Container from "@/components/layout/Container";
import { Tab } from "@headlessui/react";
import TeamSection from "@/components/pages/TeamSection";
import LargePerson from "@/components/team/LargePerson";
import Person from "@/components/team/Person";
import Carousel from "@/components/team/Carousel";
import { teachers, staff, officers } from "@/lib/data/team";

function getTeachers() {
  let teacherRoles: TeacherSubject[] = [];
  teachers.forEach((person) => {
    teacherRoles = [...teacherRoles, ...person.positions];
  });
  teacherRoles = ["All", ...new Set(teacherRoles)];
  teacherRoles = teacherRoles.filter((role) => !role.includes("Head"));
  return teacherRoles;
}

function getSortedTeachers(activeTeacher: TeacherSubject) {
  if (activeTeacher === "All") {
    return teachers.sort((a, b) =>
      a.positions[0].includes("Head")
        ? -1
        : b.positions[0].includes("Head")
        ? 1
        : 0
    );
  } else {
    return teachers
      .filter((person) => person.positions.includes(activeTeacher))
      .sort((a, b) =>
        a.positions[0].includes(`Head of ${activeTeacher}`)
          ? -1
          : b.positions[0].includes("Head")
          ? 1
          : 0
      );
  }
}

const MemoedPerson = memo(Person);
const MemoedLargePerson = memo(LargePerson);

export default function Team(props: TeamProps) {
  const [activeTeacher, setActiveTeacher] = useState<TeacherSubject>("All");
  const teacherRoles = useMemo(() => getTeachers(), []);
  const memoedTeachers = useMemo(
    () => getSortedTeachers(activeTeacher),
    [activeTeacher]
  );

  return (
    <Container title="Our Team">
      <PartialBanner
        title="Meet the Team"
        subheader="The dedicated and innovative people that make us who we are"
      />
      <div>
        <Tab.Group>
          <Tab.List className="flex gap-1 sm:gap-4 sm:pt-1 sm:pb-[5px] px-2 mx-5 border-y border-purple padded-section flex-wrap sm:flex-nowrap">
            <Tab
              className={({ selected }) =>
                `text-xl font-display pt-1 px-[3px] border-b-4 focus:outline-none ${
                  selected ? "border-red" : " border-transparent"
                }`
              }
            >
              Weekly Mentor Spotlight
            </Tab>
            <Tab
              className={({ selected }) =>
                `text-xl font-display pt-1 px-[3px] border-b-4 focus:outline-none ${
                  selected ? "border-red" : " border-transparent"
                }`
              }
            >
              Officers
            </Tab>
            <Tab
              className={({ selected }) =>
                `text-xl font-display pt-1 px-[3px] border-b-4 focus:outline-none ${
                  selected ? "border-red" : " border-transparent"
                }`
              }
            >
              Instructors
            </Tab>
            <Tab
              className={({ selected }) =>
                `text-xl font-display pt-1 px-[3px] border-b-4 focus:outline-none ${
                  selected ? "border-red" : " border-transparent"
                }`
              }
            >
              Other Volunteers
            </Tab>
          </Tab.List>
          <Tab.Panels className="padded-section mx-auto">
            <Tab.Panel className="focus:outline-none">
              <div>
                <Carousel data={props.data} />
              </div>
            </Tab.Panel>
            <Tab.Panel className="focus:outline-none">
              <TeamSection
                component={MemoedLargePerson}
                title="Officers"
                people={officers}
                large
              />
            </Tab.Panel>
            <Tab.Panel className="focus:outline-none">
              <div className="text-black py-3">
                <div className="m-auto flex justify-center">
                  <div className="inline-block pb-3">
                    {teacherRoles.map((role, index) => (
                      <FilterButton
                        key={index}
                        name={role}
                        active={activeTeacher === role}
                        onClick={() => setActiveTeacher(role)}
                      />
                    ))}
                  </div>
                </div>
                <div className="grid gap-2 pb-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {memoedTeachers.map((person, index) => (
                    <div
                      key={index}
                      className="h-36 w-full overflow-hidden border-2 border-opacity-10 border-black p-3"
                    >
                      <MemoedPerson person={person} />
                    </div>
                  ))}
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className="focus:outline-none">
              <TeamSection
                component={MemoedPerson}
                people={staff}
                title="Staff"
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Container>
  );
}

function FilterButton({
  name,
  active,
  onClick,
}: {
  name: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`${
        active ? "bg-red text-white" : "bg-gray-200 text-black"
      } font-display m-1 rounded-lg py-1 px-3 text-lg`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export const getStaticProps: GetStaticProps<TeamProps> = async () => {
  const spotlight = await db.collection("spotlight").doc("spotlight").get();
  return {
    props: {
      data: spotlight.data()!.spotlight,
    },
  };
};
