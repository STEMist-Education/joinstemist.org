import Image from "next/image";
import { PersonProps } from "@/lib/types";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Qualifications from "./Qualifications";

export default function Person(props: PersonProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group flex max-w-[20rem] h-full flex-row mx-auto items-center gap-5">
      <div
        className={`${
          props.person.description || props.person.qualifications ? "" : ""
        }`}
      >
        <Image
          src={props.person.image}
          height={100}
          width={100}
          layout="fixed"
          className={`max-w-none rounded-full object-cover`}
          alt="User profile"
          quality={100}
        />
      </div>
      <h1 className="font-display justify-self-center w-full space-y-1 text-lg font-normal">
        <span
          className={`${
            props.person.description || props.person.qualifications ? "" : ""
          } transition-all`}
        >
          {props.person.name}
          <br />
          <div className="font-display flex flex-wrap gap-1">
            {(props.roles ? props.roles : props.person.positions).map(
              (pos, index) =>
                !props.person.positions.includes("Head of " + pos) && (
                  <span
                    className="m-0.5 w-min whitespace-nowrap rounded-xl bg-gray-200 py-1 px-2 text-xs"
                    key={index}
                  >
                    {pos}
                  </span>
                )
            )}
          </div>
          {(props.person.qualifications || props.person.description) && (
            <button
              className="mt-1 bg-red px-3 py-1 text-white font-display text-xs block m-0.5 w-min whitespace-nowrap rounded-md bg-opacity-70 shadow-sm shadow-slate-900 relative active:top-[2px] active:shadow-none outline-none"
              onClick={() => setOpen(true)}
            >
              {props.person.qualifications ? "Experience" : "About"}
            </button>
          )}
        </span>
      </h1>
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
                  About {props.person.name.split(" ")[0]}
                </Dialog.Title>
                <div className="mt-2">
                  <p className={`text-sm`}>{props.person.description}</p>
                  <div className="text-sm text-black">
                    <Qualifications
                      quals={props.person.qualifications}
                      header
                    />
                  </div>
                </div>
                <div className="mt-1">
                  <button
                    className="m-auto bg-red px-3 py-1 rounded-md bg-opacity-70 shadow-sm shadow-slate-900 relative active:top-[2px] active:shadow-none text-white font-display text-sm outline-none"
                    onClick={() => setOpen(false)}
                  >
                    Back
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
