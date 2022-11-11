import { fetchClasses } from "@/lib/auth/fetch";
import { useData } from "@/lib/hooks/useData";
import Class from "@/lib/types/Class";
import StudentData from "@/lib/types/StudentData";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import SelectInputField from "../forms/SelectInputField";
import Button from "./Button";
import InputField from "../forms/InputField";
import Link from "next/link";

export default function SignUpModal() {
  const [open, setOpen] = useState(false);
  const [classes, setClasses] = useState<Class[]>([]);
  const router = useRouter();

  const user = useData();
  useEffect(() => {
    fetchClasses().then((res) => setClasses(res));
  }, []);

  const formik = useFormik({
    initialValues: {
      className: "",
      parentName: "",
      parentEmail: "",
      studentName: "",
      studentEmail: "",
      studentGrade: "",
      schoolName: "",
    },
    onSubmit: async (values) => {
      const res = await fetch("/api/classadd", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid: user.uid,
          class_id: values.className,
          pn: values.parentName,
          pe: values.parentEmail,
          sn: values.studentName,
          se: values.studentEmail,
          sg: values.studentGrade,
          schooln: values.schoolName
        }),
      });
      if (res.ok) {
        router.push("/classes/" + values.className);
      }
    },
  });
  return (
    <>
      <button
        style={{backgroundColor:"#E2E2E2", padding:'15px', width:'100%'}}
        onClick={() => setOpen(true)}
      >
        Sign Up Now!{" "}
      </button>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          onClose={() => setOpen(false)}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30"></Dialog.Overlay>
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h1"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Sign Up
                </Dialog.Title>
                <div className="mt-5">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="mt-1">
                      <SelectInputField
                        labelName="Class"
                        name="className"
                        formik={formik}
                        
                      >
                        <option value="">Select the workshop to confirm</option>
                        <option key={"Winter2022"} value="Winter2022">STEM Frontiers - 2023</option> {/* once workshops done, 'Winter2022' should be '' and "Stem Frontiers - 2023" should be "Select a class"*/}
                        {/*classes.map((c) => (
                          <option key={c.uid} value={c.uid}>
                            {c.name}
                          </option>
                        ))*/}

                      {/* UNCOMMENT LINE ABOVE ONCE WORKSHOPS DONE */}

                      </SelectInputField>
                      <br></br>
                      <InputField
                        labelName="Parent's Name"
                        name="parentName"
                        formik={formik}
                      ></InputField><br></br>
                      <InputField
                        labelName="Parent's Email Adress"
                        name="parentEmail"
                        formik={formik}
                      ></InputField><br></br>
                      <InputField
                        labelName="Student's Name"
                        name="studentName"
                        formik={formik}
                      ></InputField><br></br>
                      <InputField
                        labelName="Student's Email Adress"
                        name="studentEmail"
                        formik={formik}
                      ></InputField><br></br>
                      <InputField
                        labelName="School Name"
                        name="schoolName"
                        formik={formik}
                      ></InputField><br></br>
                      <InputField
                        labelName="Student's Grade (k-12)"
                        name="studentGrade"
                        formik={formik}
                      ></InputField><br></br>
                      <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                      <p>Please pay $10 upon signing up, at:</p>
                      <Link href="https://paypal.me/joinstemist"><a style={{color:"blue"}}>Paypal Link</a></Link> <br></br> </div>
                      <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                      <p>For any questions or concerns, please email us at: fakeaddress@joinstemist.org</p>
                      </div>
                    </div>
                    <br></br>
                    <div className="mt-1" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                      <Button
                        backgroundColor="bg-blue-500"
                        textColor="text-white text-xl"
                        type="submit"
                      >
                        Confirm Signup
                      </Button>
                    </div>
                  </form>
                </div>
                <div className="mt-1" style={{float:"right"}}>
                  <Button
                    backgroundColor="bg-red-500"
                    textColor="text-white text-xl"
                    onClick={() => setOpen(false)}
                  >
                    Back
                  </Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
