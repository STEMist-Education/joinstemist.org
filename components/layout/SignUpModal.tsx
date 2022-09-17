import { Dialog, Transition } from "@headlessui/react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import Button from "./Button";

export default function SignUpModal() {
  const [open, setOpen] = useState(false);
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
                  <p className={`text-sm`}>Placeholder stuff</p>
                  <div className="text-sm text-black">Placeholder stuff</div>
                </div>
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
