import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import Card from "@/components/pages/Card";
import Person from "@/components/team/Person";
import { teachers } from "@/lib/data/team";
import type { Person as P } from "@/lib/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { ReactNode, useCallback } from "react";
import { Session, sessionData } from "@/lib/data/sessions";

interface CurriculumProps {
  data: Session;
}

export default function Curriculum({ data }: CurriculumProps) {
  const personByName = useCallback((name: string) => {
    return teachers.find((person) => person.name === name)!;
  }, []);
  return (
    <Container title={data.title}>
      <PartialBanner
        title={data.title}
        subheader={`Our interactive session details and recordings for the ${data.title}`}
      />
      {data.media !== undefined && (
        <>
          <h1 className="text-center font-display font-bold text-5xl mb-5">
            Media
          </h1>
          <div
            className="flex justify-center gap-5 sm:flex-row flex-col flex-wrap w-full padded-section mx-auto"
            dangerouslySetInnerHTML={{ __html: data.media }}
          ></div>
          <br />
        </>
      )}
      <h1 className="text-center font-display font-bold text-5xl mb-5">
        Class Description
      </h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 padded-section mx-auto auto-rows-[1fr] items-start">
        {data.classes.map((c) => (
          <CurriculumCard
            title={c.title}
            subtitle={c.date}
            person={
              typeof c.teacher === "string"
                ? [
                    personByName(c.teacher) || {
                      name: c.teacher,
                      image: require("@/public/avatar.svg").default.src,
                      description: "",
                    },
                  ]
                : c.teacher.map(
                    (p) =>
                      personByName(p) || {
                        name: p,
                        image: require("@/public/avatar.svg").default.src,
                        description: "",
                      }
                  )
            }
            key={c.title}
          >
            {c.description}
          </CurriculumCard>
        ))}
      </div>
    </Container>
  );
}

interface CurriculumCardProps {
  title: string;
  person: P[];
  children?: ReactNode;
  subtitle: string;
}

function CurriculumCard(props: CurriculumCardProps) {
  return (
    <Card title={props.title}>
      <h1 className="text-black text-center font-display text-xl">
        {props.subtitle}
      </h1>
      {props.children !== undefined && (
        <div className="mt-5">{props.children}</div>
      )}
      <h1 className="font-display mt-3">Presented By</h1>
      <div
        className={`grid ${
          props.person.length > 1 ? "grid-cols-2" : "grid-cols-1"
        } text-left`}
      >
        {props.person.map((p) => (
          <div
            className={`h-32 w-full overflow-hidden rounded-lg text-black p-3`}
            key={p.name}
          >
            <Person person={{ ...p, positions: [] }} />
          </div>
        ))}
      </div>
    </Card>
  );
}

export const getStaticProps: GetStaticProps<CurriculumProps> = async ({
  params,
}) => {
  const slug = params!.slug as string;
  const data = sessionData.find((session) => session.slug === slug)!;
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = sessionData.map((s) => s.slug);
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};
