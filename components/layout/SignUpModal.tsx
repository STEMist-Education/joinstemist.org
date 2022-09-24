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
        }),
      });
      if (res.ok) {
        router.push("/classes/" + values.className);
      }
    },
  });
  return (
    <>
      <Button
        backgroundColor="bg-blue-500"
        textColor="text-white text-xl"
        onClick={() => setOpen(true)}
      >
        Sign Up Now!{" "}
      </Button>
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
                <div className="mt-2">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="mt-1">
                      <SelectInputField
                        labelName="Class"
                        name="className"
                        formik={formik}
                      >
                        <option value="">Select a class</option>
                        {classes.map((c) => (
                          <option key={c.uid} value={c.uid}>
                            {c.name}
                          </option>
                        ))}
                      </SelectInputField>
                    </div>
                    <div className="mt-1">
                      <Button
                        backgroundColor="bg-blue-500"
                        textColor="text-white text-xl"
                        type="submit"
                      >
                        Confirm Signup (PAYMENT HERE)
                      </Button>
                    </div>
                  </form>
                </div><br></br>
                <div className="mt-1">
                  <Button
                    backgroundColor="bg-blue-500"
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
