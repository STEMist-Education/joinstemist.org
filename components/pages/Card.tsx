import { ReactNode } from "react";

export default function Card(props: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative z-40 w-full space-y-3 rounded-xl border border-gray-200 bg-white p-3 shadow-lg ${props.className} `}
      data-aos="fade-up"
    >
      <h1 className="font-display z-20 text-center text-3xl font-semibold text-black">
        {props.title}
      </h1>
      <p className="z-20 text-center font-normal text-black">
        {props.children}
      </p>
    </div>
  );
}
