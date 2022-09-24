import { useFormik } from "formik";
import InputField from "../forms/InputField";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import getFirebase from "@/lib/hooks/getFirebase";
import { memo, useState, useRef, useEffect } from "react";
import Container from "../layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import * as Yup from "yup";
import { uploadProfilePic } from "@/lib/auth/storage";
import Image from "next/image";
import FileInput from "../layout/FileInput";
import { fetchUser } from "@/lib/auth/fetch";
import { FirebaseError } from "firebase/app";
import Google from "@/public/google.svg";
import { useData } from "@/lib/hooks/useData";
import { useRouter } from "next/router";
import Link from "next/link";

interface SignUpForm {
  email: string;
  password: string;
  profile: any;
  name: string;
}

const MInputField = memo(InputField);

export default function SignUp() {
  const user = useData();
  const router = useRouter();

  useEffect(() => {
    if (user !== null && user.name !== "") {
      router.push("/dashboard");
    }
  }, [user, router]);

  const [message, setMessage] = useState<string>("");
  const profileImageRef = useRef<any>();
  const [image, setImage] = useState<string>("");

  const handleError = (e: FirebaseError) => {
    console.error(JSON.stringify(e));
    let code = e.code.substring(5).replace(/-/g, " ");
    code = code.charAt(0).toUpperCase() + code.slice(1);
    setMessage(code);
  };

  async function handleGoogleClick() {
    let GoogleProvider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(
        getAuth(getFirebase()),
        GoogleProvider
      );
      const { user } = response;
      let name = user.displayName!;
      let profileURL = user.photoURL!;
      await fetchUser("POST", user.uid, {
        name,
        profileUrl: profileURL,
        classes: [],
        role: "student",
      });
      const headers = new Headers({
        "Content-Type": "application/json",
      });

      const json = JSON.stringify({
        name: user.displayName!,
        role: "student",
        email: user.email,
        lastSignIn: user.metadata.lastSignInTime,
      });
      await fetch("/api/autoemailer", { body: json, headers });
    } catch (error: any) {
      if (error.code) {
        handleError(error as FirebaseError);
      } else {
        console.log("Firebase NOT Error" + error);
      }
    }
  }

  const formik = useFormik<SignUpForm>({
    initialValues: {
      email: "",
      password: "",
      name: "",
      profile: null,
    },
    onSubmit: async (
      { email, password, name },
      { resetForm, setSubmitting, setErrors }
    ) => {
      try {
        // setSubmitting(true);
        const { user } = await createUserWithEmailAndPassword(
          getAuth(getFirebase()),
          email,
          password
        );
        if (profileImageRef.current!.files.length === 0) {
          await fetchUser("POST", user.uid, {
            name,
            profileUrl: "/avatar.svg",
            classes: ["generalinfo"],
            role: "student",
          });
          // setSubmitting(false);
        }
        const url = await uploadProfilePic(
          profileImageRef.current!.files[0],
          user.uid
        );
        await fetchUser("POST", user.uid, {
          name,
          profileUrl: url,
          classes: ["generalinfo"],
          role: "student",
        });
        const headers = new Headers({
          "Content-Type": "application/json",
        });

        const json = JSON.stringify({
          name,
          role: "student",
          email: user.email!,
          lastSignIn: user.metadata.lastSignInTime!,
        });

        await fetch("/api/autoemailer", { body: json, headers });
        // setSubmitting(false);
      } catch (error) {
        handleError(error as FirebaseError);
      }
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(3, "Must be more than 3 characters")
        .max(500, "Cannot be longer than 500 characters")
        .required("Required"),
      name: Yup.string().required("Required"),
    }),
  });

  return (
    <Container title="Dashboard Register">
      <PartialBanner title="Dashboard Register" />
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
              <MInputField
                labelName="Name"
                type="text"
                formik={formik}
                name="name"
              />
              <FileInput
                className=""
                name="ProfileURL:"
                ref={profileImageRef}
                setImage={setImage}
                image={image}
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
                  Register
                </button>
                {/*<button
                  className="relative w-full rounded-none border border-transparent bg-black bg-opacity-10 py-2 px-2 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 flex items-center gap-2 justify-center"
                  onClick={handleGoogleClick}
                  type="button"
                >
                  <Image src={Google} alt="Google Logo" />
                  Login with Google
              </button>*/}
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
