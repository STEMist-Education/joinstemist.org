import { getAuth, signOut } from "firebase/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { NavLinks } from "../data/navLinks";
import StudentData from "../types/StudentData";

export function useDashboardNav(user: StudentData) {
  const router = useRouter();
  const dashboardNav = useMemo<NavLinks>(
    () =>
      user === null || user === undefined
        ? [
            {
              name: "Login",
              link: "/auth/login",
              via: "link",
            },
            {
              name: "Register",
              link: "/auth/register",
              via: "link",
            },
          ]
        : [
            {
              name: `Logged in as ${user.name}`,
              via: "function",
              func: () => {},
              customProps: {
                className: "cursor-text",
              },
              image: user.profileUrl,
            },
            {
              name: "Dashboard",
              link: "/dashboard",
              via: "link",
            },
            {
              name: "Class Registration",
              link: "/programs",
              via: "link",
            },
            {
              name: "Logout",
              func: async () => {
                router.push("/");
                Cookies.remove("user");
                await signOut(getAuth());
              },
              customProps: {
                main: true,
                color: "red",
                textColor: "white",
              },
              via: "function",
            },
          ],
    [user, router]
  );

  return dashboardNav;
}
