import { useFormik } from "formik";
import InputField from "../forms/InputField";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import getFirebase from "@/lib/hooks/getFirebase";
import { memo, useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import Image from "next/image";
import { useData } from "@/lib/hooks/useData";
import { useRouter } from "next/router";
import Google from "@/public/google.svg";
import { FirebaseError } from "firebase/app";
import * as Yup from "yup";
import Link from 'next/link'

interface LoginFormik {
  email: string;
  password: string;
}
const MInputField = memo(InputField);

export default function Login() {
  const user = useData();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const handleError = (e: FirebaseError) => {
    let code = e.code.substring(5).replace(/-/g, " ");
    code = code.charAt(0).toUpperCase() + code.slice(1);
    setMessage(code);
  };

  useEffect(() => {
    if (user !== null && user.name !== "") {
      router.push("/dashboard");
    }
  }, [user, router]);

  const formik = useFormik<LoginFormik>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (
      { email, password },
      { resetForm, setSubmitting, setErrors }
    ) => {
      try {
        resetForm();
        await signInWithEmailAndPassword(
          getAuth(getFirebase()),
          email,
          password
        );
      } catch (e) {
        handleError(e as FirebaseError);
        console.log(formik.resetForm());
        setSubmitting(false);
        resetForm();
      }
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(3, "Must be more than 3 characters")
        .max(500, "Cannot be longer than 500 characters")
        .required("Required"),
    }),
  });

  async function handleGoogleClick() {
    try {
      let GoogleProvider = new GoogleAuthProvider();
      await signInWithPopup(getAuth(getFirebase()), GoogleProvider);
    } catch (e) {
      handleError(e as FirebaseError);
    }
  }

  return (
    <Container title="Dashboard Login">
      <PartialBanner title="Dashboard Login" />
      <div>
        <div className="py-3 my-3 flex-col flex gap-5 padded-section">
          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="w-full space-y-4 rounded-lg">
              <MInputField
                labelName="Email address"
                name="email"
                type="email"
                formik={formik}
              />
              <MInputField
                labelName="Password"
                formik={formik}
                name="password"
                type="password"
              />
              <div
                className="text-red text-center mx-auto w-1/2"
                style={{
                  display: message ? "" : "none",
                }}
              >
                {message}
              </div>
              <div className="relative m-auto flex w-full gap-5 sm:w-1/2">
                <button
                  type="submit"
                  className="relative block w-full rounded-none border border-transparent bg-black bg-opacity-10 py-2 px-2 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Log In
                </button>
                {/*<button
                  className="relative w-full rounded-none border border-transparent bg-black bg-opacity-10 py-2 px-2 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 flex items-center gap-2 justify-center"
                  onClick={handleGoogleClick}
                  type="button"
                >
                  <Image src={Google} alt="Google Logo" />
                  Login with Google
              </button>*/}
                <Link href="/auth/register">
              <button
                  className="relative w-full rounded-none border border-transparent bg-black bg-opacity-10 py-2 px-2 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 flex items-center gap-2 justify-center"
                  type="button"
                >
                  Register instead
                </button>
              </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
