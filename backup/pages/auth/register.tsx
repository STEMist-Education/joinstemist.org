import SignUp from "@/components/auth/Register";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";
import db from "@/lib/serverApp";
import { setCookie } from "cookies-next";
import { v4 as uuidv4 } from "uuid";

export default function Register() {
  return <SignUp />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = cookies(ctx).user as any;
  if (user !== undefined) {
    return {
      redirect: {
        destination: "/classes/Winter2022",
        permanent: false,
      },
    };
  } else {
    const id = uuidv4();
    await db.collection("ids").doc(id).set({});
    setCookie("id", id, { ...ctx, httpOnly: true });
  }
  return {
    props: {},
  };
};
