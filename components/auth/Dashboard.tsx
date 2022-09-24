import { NavLinks } from "@/lib/data/navLinks";
import type Class from "@/lib/types/Class";
import StudentData from "@/lib/types/StudentData";
import { getAuth, signOut } from "firebase/auth";
import Cookies from "js-cookie";
import { useRouter, NextRouter } from "next/router";
import { useMemo } from "react";
import { useQueries, UseQueryResult } from "react-query";
import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import Link from "next/link";
import Button from "../layout/Button";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { useDashboardNav } from "@/lib/hooks/useDashboardNav";

export default function Dashboard(props: { user: StudentData }) {
  const dashboardNav = useDashboardNav(props.user);

  const queries: UseQueryResult<Class, unknown>[] = useQueries(
    (typeof props.user.classes != "object" ? [] : props.user.classes).map(
      (i, id) => ({
        queryKey: ["user", id],
        queryFn: async () => {
          try {
            console.log("The id of element: " + i + " is " + id)
            const res = await fetch("/api/class/?class_id=" + i);
            console.log("response of " + res.statusText + "from element " + i)
            let ares = res.clone()
            let data = await ares.json();
            console.log("The data received from element " + i + " is " + JSON.stringify(data))
            return res.json();
          } catch (err) {
            console.error(err)
            return {}
          }
        },
      })
    )
  );

  return (
    <Container
      title="Dashboard"
      noNav
      navTitle={(props.user.role + " dashboard").toUpperCase()}
      customNav={dashboardNav}
    >
      <PartialBanner title={props.user.role.toUpperCase() + " Dashboard"} />
      <div className="p-5">
        <h1 className="text-5xl">Welcome back {props.user.name}!</h1>
        <br></br>
        <br></br>
        <Button
          href="/programs"
          backgroundColor="bg-blue-500"
          textColor="text-white text-xl"
        >
          Sign Up Now!{" "}
          <ArrowRightIcon className="h-4 w-4 inline-block transform -rotate-45" />
        </Button>
        <div className="mt-10">
          {queries.map(({ isSuccess, data }, index) => {
            return (
              isSuccess && (
                <Link
                  href={`/classes/${props.user.classes[index]}`}
                  key={props.user.classes[index]}
                >
                  <a className="block p-4 max-w-[12rem] bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white w-max hover:underline cursor-pointer">
                      {data.name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {data.teacher}
                    </p>
                  </a>
                </Link>
              )
            );
          })}
          {/* {classes.map((values: any, index: number) => {
            return (
              <div key={`class-${index}`}>
                <div className="p-4">
                  <h1>
                    {values.name} by {values.teacher}
                  </h1>
                  <div>Zoom Link: {values.zoom}</div>
                </div>
                {values.video.map((_: any, indexer: number) => {
                  return (
                    <button
                      key={`Video-Button-${indexer}`}
                      onClick={() =>
                        router.push({
                          pathname: `/dashboard/classes`,
                          query: { class: index, video: indexer },
                        })
                      }
                      className="px-4 py-2 shadow-md bg-black text-white rounded-md"
                    >
                      {`Video ${indexer + 1}`}
                    </button>
                  );
                })}
              </div>
            );
          })} */}
        </div>
      </div>
    </Container>
  );
}
