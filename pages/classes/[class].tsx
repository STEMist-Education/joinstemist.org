import ClassPosts from "@/components/auth/ClassPosts";
import VideoPosts from "@/components/auth/VideoPosts";
import Container from "@/components/layout/Container";
import CTABanner from "@/components/layout/CTABanner";
import PartialBanner from "@/components/layout/PartialBanner";
import { getData, updateData } from "@/lib/auth/collection";
import type Class from "@/lib/types/Class";
import StudentData from "@/lib/types/StudentData";
import { FieldValue } from "firebase-admin/firestore";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";

export default function Class(classData: Class & { included: boolean }) {
  return (
    <Container title={classData.name}>
      {classData.included ? null : <CTABanner full mic={false}>
        <span className="text-left">
          Class Joined
        </span>
      </CTABanner>}
      <PartialBanner
        banner={false}
        title={classData.name}
        subheader={<div className="mt-4">Taught by {classData.teacher}</div>}
      />
      <ClassPosts posts={classData.posts.reverse()} />
      <VideoPosts videos={classData.videos} />
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
  let included = true;
  if (!user.classes.includes(cl)) {
    await updateData(
      { ...user, classes: FieldValue.arrayUnion(cl) },
      user.uid,
      "users"
    );
    included = false;  
  }
  const props = await getData<Class>(cl, "classes");
  return {
    props: { ...props, included },
  };
};
