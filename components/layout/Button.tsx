import Link from "next/link";
import { HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  backgroundColor?: string;
  textColor?: string;
  target?: string;

  type?: "button" | "submit" | "reset" | undefined;
}

export default function Button({
  children,
  href,
  backgroundColor = "bg-white",
  textColor = "text-black",
  target = "_self",
  ...rest
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href}>
        <a
          className={`${backgroundColor} ${textColor} py-1 sm:py-2 px-3 rounded-lg shadow-md hover:rounded-xl hover:shadow-lg transition-all duration-300 text-sm sm:text-lg font-display`}
          target={target}
          tabIndex={0}
          role="button"
        >
          {children}
        </a>
      </Link>
    );
  } else {
    return (
      <button
        className={`${backgroundColor} text-sm sm:text-lg ${textColor} sm:py-2 py-1 px-3 shadow-md rounded-lg hover:rounded-xl hover:shadow-lg transition-all duration-300 font-display`}
        {...rest}
      >
        {children}
      </button>
    );
  }
}
