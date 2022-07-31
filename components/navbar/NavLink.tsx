import Link from "next/link";
import { useRouter } from "next/router";
import { NavLinkProps } from "@/lib/types";

export default function NavLink({
  children,
  href,
  className,
  main = false,
  color = "white",
  textColor = "black",
  target = "_self",
}: NavLinkProps) {
  const router = useRouter();
  return (
    <Link href={href}>
      <a className={`${className || ""} m-auto`} target={target}>
        <li
          className={`font-display m-auto text-lg underline-offset-1 whitespace-nowrap ${
            main
              ? `bg-${color} py-1 px-3 hover:border-opacity-40 transition-all duration-300 text-${textColor} border-2 border-opacity-20 border-white`
              : `text-white`
          } ${router.asPath === href ? "font-bold" : "font-normal"}`}
        >
          {children}
        </li>
      </a>
    </Link>
  );
}
