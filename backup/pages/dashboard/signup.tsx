import Container from "@/components/layout/Container";
import CTABanner from "@/components/layout/CTABanner";
import PartialBanner from '../../components/layout/PartialBanner';
import { useFormik } from "formik";
import { useData } from "@/lib/hooks/useData";
import { memo, useState, useEffect } from "react"
import InputField from "@/components/forms/InputField";
import { useRouter } from "next/router";


const MInputField = memo(InputField);
export default function AddClasses() {

    const user = useData();

    const router = useRouter();
    const [message, setMessage] = useState("");

    const handleError = (code: any) => {
      setMessage(code);
    };

  
    const formik = useFormik({
        initialValues: {
            classCode: ""
        },
      onSubmit: ({ classCode }, { setErrors, resetForm }) => {
        try {
          const formData = new FormData()
        formData.append("code", String(classCode))
        
          const headers = new Headers({ "Content-Type": "application/json"})
          
          fetch("/api/signup", {
            body: JSON.stringify({code: String(classCode)}),
            method: "POST",
            redirect: "manual",
            headers
          })
        } catch (err) {
          handleError(err)
        }
        
        }})

    return (
      <Container title="Add Classes" navTitle="Add Classes">
        <CTABanner>Add a New Class Today</CTABanner>
        <PartialBanner title="Add Class"></PartialBanner>
        <div>
          <div className="py-3 my-3 flex-col flex gap-5 padded-section">
            <form onSubmit={formik.handleSubmit} className="w-full">
              <div className="w-full space-y-4 rounded-lg">
                <MInputField
                  labelName="Class Code"
                  name="classCode"
                  type="text"
                  formik={formik}
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
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    );
}






  

