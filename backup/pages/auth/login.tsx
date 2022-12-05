import _Login from "@/components/auth/Login";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";

export default function Login() {
  return <_Login />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
  const user = cookies(ctx).user as any;
  if (user !== undefined) {
    return {
      redirect: {
        destination: "/classes/Winter2022",
        permanent: false,
      },
    };
  } } catch {
    
  }
  return {
    props: {},
  };
};
