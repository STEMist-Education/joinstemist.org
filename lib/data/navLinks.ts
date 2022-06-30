export type NavLink = {
  name: string;
  link: string;
  dropdownItems?: Omit<NavLink, "dropdown" | "dropdownItems">[];
  dropdown?: boolean;
  customProps?: { [key: string]: any };
  class?: "about" | "projects" | "workshops";
};

export type NavLinks = NavLink[];

export const navLinks: NavLink[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
    dropdown: true,
    class: "about",
    dropdownItems: [
      {
        name: "Meet the Team",
        link: "/about/team",
        class: "about",
      },
      {
        name: "Contact Us",
        link: "/about/contact",
      },
      {
        name: "Team Applications",
        link: "https://bit.ly/stemistapplication",
        class: "about",
        customProps: {
          target: "_blank",
        },
      },
      {
        name: "Gallery",
        link: "/about/gallery",
        class: "about",
      },
    ],
  },
  {
    name: "Prior Events",
    link: "/events",
    dropdown: true,
    class: "workshops",
    dropdownItems: [
      {
        name: "STEMist Hacks",
        link: "/hacks",
        class: "workshops",
      },
      {
        name: "Intro to STEM Spring Workshop",
        link: "/events/intro-to-stem",
        class: "workshops",
      },
      {
        name: "2021 Winter Workshop",
        link: "/events/2021-winter",
        class: "workshops",
      },
      {
        name: "2021 Summer Workshop",
        link: "/events/2021-summer",
        class: "workshops",
      },
      {
        name: "2020 Winter Workshop",
        link: "/events/2020-winter",
        class: "workshops",
      },
      {
        name: "2020 Fall Workshop",
        link: "/events/2020-fall",
        class: "workshops",
      },
    ],
  },
  {
    name: "WEBS Studio",
    link: "/webs",
    customProps: {
      target: "_blank",
    },
    class: "projects",
  },
  {
    name: "Class Registration",
    link: "/programs",
    class: "projects",
    customProps: {
      main: true,
      color: "transparent",
      textColor: "white",
    },
  },
];

export const hackathonNavLinks: NavLink[] = [
  {
    name: "Home",
    link: "/hacks",
  },
  {
    name: "Sign Up",
    link: "/hacks/signup",
    customProps: {
      target: "_blank",
    },
  },
];
