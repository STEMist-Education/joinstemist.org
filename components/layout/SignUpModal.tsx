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
  return (
    <>
      <button
        style={{padding:'15px', width:'20%', borderRadius:50, color:"white"}}
        onClick={() => setOpen(true)}
        className="bg-blue-500"
      >
        Sign Up Now!{" "}
        <ArrowRightIcon className="h-4 w-4 inline-block transform -rotate-45" />
      </button> {/*BUTTON CLASSNAME USED TO BE className='bg-gradient-to-r from-steve-red to-steve-purple'*/}
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
              <div className="inline-block p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h1"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Sign Up
                </Dialog.Title>
                
                <iframe width="560" height="560" 
                src="https://docs.google.com/forms/d/e/1FAIpQLScaPtVaU84sCDbn7NkKo1MK8Y-3EzlScCpb4Q-pixKBIj0LnQ/closedform"></iframe>

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