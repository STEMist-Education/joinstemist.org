import ClassPosts from "@/components/auth/ClassPosts";
import TeaPostMake from "@/components/auth/TeaPostMake";
import VideoPosts from "@/components/auth/VideoPosts";
import Container from "@/components/layout/Container";
import CTABanner from "@/components/layout/CTABanner";
import PartialBanner from "@/components/layout/PartialBanner";
import { getData } from "@/lib/auth/collection";
import { useDashboardNav } from "@/lib/hooks/useDashboardNav";
import type Class from "@/lib/types/Class";
import StudentData from "@/lib/types/StudentData";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";


export default function Class(props: { class: Class; user: StudentData }) {
  const nav = useDashboardNav(props.user);
  return (
    <Container
      title={props.class.name}
      noNav
      navTitle="Student Dashboard"
      customNav={nav}
    >
      <PartialBanner
        banner={false}
        title={props.class.name}
        subheader={<div className="mt-4">Taught by {props.class.teacher}</div>}
      />
      {props.user.role=="teacher" && TeaPostMake(props.class.uid, props.class)}
      <br></br>
      <ClassPosts posts={props.class.posts.reverse()} />
      <VideoPosts videos={props.class.videos} />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cl = ctx.params!.class as string;
  const cookie = cookies(ctx).user! as Object;
  if (cookie === undefined) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  const user = cookie as StudentData;
  if (!user.classes.includes(cl)) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  const props = await getData<Class>(cl, "classes");
  return {
    props: { class: props, user },
  };
};
