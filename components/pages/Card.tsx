import { ReactNode } from "react";

export default function Card(props: {
  title: string;
  children: ReactNode;
  className?: string;
  image?: string;
}) {
  return (
    <div
      className={`relative z-40 w-full space-y-3 border-2 border-opacity-10 border-black p-3 ${
        props.className || ""
      } `}
    >
      {props.image ? (
        <div
          className="relative w-full h-full text-center bg-transparent bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url('${props.image}')` }}
        ></div>
      ) : null}
      <h1 className="font-display z-20 text-center text-4xl font-semibold">
        {props.title}
      </h1>
      <div className="z-20 text-center font-normal">{props.children}</div>
    </div>
  );
}
