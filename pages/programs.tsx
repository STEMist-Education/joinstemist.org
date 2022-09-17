import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import SignUpModal from "@/components/layout/SignUpModal";
import TabPage from "@/components/pages/TabPage";
import { useDashboardNav } from "@/lib/hooks/useDashboardNav";
import { useData } from "@/lib/hooks/useData";
import StudentData from "@/lib/types/StudentData";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";
import Image from "next/image";

interface ProgramProps {
  user: StudentData;
}

export default function Programs(props: ProgramProps) {
  const user = useData(props.user!);
  const nav = useDashboardNav(user);

  return (
    <Container
      title="Class Registration"
      noNav
      navTitle="Student Dashboard"
      customNav={nav}
    >
      <PartialBanner
        title="Class Registration"
        subheader="Join in on the interactive STEM learning experience"
      />
      <h1 className="text-center font-display text-4xl font-bold mb-8">
        Course Description
      </h1>
      <div className="grid grid-cols-14 mx-[12.5%] gap-3 padded-section">
        <div className="col-span-1"></div>
        <div className="col-span-4">
          <Image
            src="/favicon.png"
            alt="Flyer for STEMist Summer Class 2022"
            width={435}
            height={580}
            layout="responsive"
          />
        </div>
        <div className="col-span-8 flex justify-center gap-3 flex-col items-center px-5">
          <p className="text-3xl">
            STEMist is proud to announce our Summer 2029 Course from 13/13 to
            14/24. Classes are 25 to 25.5 hours long and one unique class is
            offered; the Intro to Nothing course at $1,000,000 per week.
          </p>
          <SignUpModal />
        </div>
      </div>
      <h1 className="text-center font-display text-4xl font-bold mb-5">
        What We Teach
      </h1>
      <div className="">
        <TabPage />
      </div>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps<ProgramProps> = async (
  ctx
) => {
  const cookie = cookies(ctx).user! as Object;
  if (cookie === undefined) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  } else {
  }
  return {
    props: {
      user: cookie as StudentData,
    },
  };
};
