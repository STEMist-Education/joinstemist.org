import { useState } from "react";
import Person from "../components/Person";
import { people } from "../lib/utils";

let roles: string[] = [];
people.forEach((person) => {
  roles = [...roles, ...person.positions];
});
roles = ["All", ...new Set(roles)];

export default function Team() {
  const [active, setActive] = useState("All");
  return (
    <div className="max-w-[100rem] px-2 sm:px-6 lg:px-6 m-auto">
      <h1 className="mb-3 text-center font-display text-3xl font-bold">
        Meet the Team
      </h1>
      <div className="m-auto flex justify-center">
        <div className="pb-3 inline-block">
          {roles.map((role, index) => (
            <FilterButton
              key={index}
              name={role}
              active={active === role}
              onClick={() => setActive(role)}
            />
          ))}
        </div>
      </div>
      <div className="grid gap-2 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 pb-10">
        {people
          .filter(
            (person) => person.positions.includes(active) || active === "All"
          )
          .map((person, index) => (
            <div
              key={index}
              className="h-36 w-full overflow-hidden rounded-xl bg-white p-3 shadow-lg"
            >
              <Person person={person} />
            </div>
          ))}
      </div>
    </div>
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
        active ? "bg-blue-200" : "bg-gray-200"
      } rounded-2xl shadow-lg py-1 px-3 font-writing text-lg m-1`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
