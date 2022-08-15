import { memo, ReactElement, useState, useEffect } from "react";
import * as Yup from "yup";
import { CheckIcon } from "@heroicons/react/outline";
import { useFormik } from "formik";
import InputField from "@/components/forms/InputField";
import PartialBanner from "@/components/layout/PartialBanner";
import Container from "@/components/layout/Container";

import Spinner from "@/components/Spinner";

const MemoedInputField = memo(InputField);

export default function Contact() {
  const [submit, setSubmit] = useState<ReactElement>(<h1>Submit</h1>);
  useEffect(() => {
    return clearTimeout;
  }, []);

  const formik = useFormik({
    initialValues: {
      contactName: "",
      contactEmail: "",
      message: "",
    },
    onSubmit: async (values, helpers) => {
      setSubmit(<Spinner color="white" className="m-auto h-5 w-5" />);
      const formdata = new URLSearchParams();
      formdata.append("entry.1380619326", values.contactName);
      formdata.append("entry.1953937821", values.contactEmail);
      formdata.append("entry.1040798066", values.message);
      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeSa7soAmbGkNmhtXMdOUz2pD1puP_wL8SosKm_IackdbHiPA/formResponse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          mode: "no-cors",
          body: formdata.toString(),
        }
      );
      setTimeout(() => {
        setSubmit(<CheckIcon height={20} width={20} className="m-auto" />);
        setTimeout(() => {
          setSubmit(<h1>Submit</h1>);
          helpers.resetForm();
        }, 1200);
      }, 500);
    },
    validationSchema: Yup.object({
      contactName: Yup.string().required("Required"),
      contactEmail: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      message: Yup.string()
        .min(3, "Must be more than 3 characters")
        .max(500, "Cannot be longer than 500 characters")
        .required("Required"),
    }),
  });
  return (
    <Container title="Contact">
      <PartialBanner
        title="Contact Us"
        subheader="Free free to fill out the form to contact us, provide a testimonial, or give feedback on one of our sessions"
      />
      <div>
        <div className="py-3 flex-col flex gap-5 padded-section">
          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="w-full space-y-4 rounded-lg">
              <MemoedInputField
                labelName="Email address"
                name="contactEmail"
                type="email"
                formik={formik}
              />
              <MemoedInputField
                labelName="Full name"
                name="contactName"
                formik={formik}
              />
              <MemoedInputField
                labelName="Message"
                as="textarea"
                formik={formik}
                name="message"
              />
              <button
                type="submit"
                className="relative m-auto block w-full rounded-none border border-transparent bg-black bg-opacity-25 py-2 px-4 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:w-1/2"
              >
                {submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
