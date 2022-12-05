import Dashboard from "@/components/auth/Dashboard";
import { useData } from "@/lib/hooks/useData";
import StudentData from "@/lib/types/StudentData";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";

interface DashboardProps {
  user: StudentData;
}

export default function Dash(props: DashboardProps) {
  const user = useData(props.user!);
  return <Dashboard user={user} />;
}

export const getServerSideProps: GetServerSideProps<DashboardProps> = async (
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
