import PageLinks from "@/lib/types/PageLinks";
import Link from "next/link";

export default function LinkPage({
  links,
  columns,
  base,
}: {
  links: PageLinks[];
  columns: [number, number];
  base: string;
}) {
  return (
    <div
      className={`grid place-items-center gap-3 h-full items-center sm:grid-cols-${columns[0]} grid-cols-${columns[1]} sm:w-3/4 w-11/12 m-auto`}
    >
      {links.map((link, i) => (
        <Link href={link.external ? link.url : `${base}${link.url}`} key={i}>
          <a className="bg-white rounded-lg p-3 hover:rounded-2xl hover:-translate-y-4 transition-all duration-300 shadow-lg w-full h-48 flex flex-col justify-center items-center">
            <h1 className="text-black font-display text-2xl font-medium text-center">
              {link.name}
            </h1>
            <p className="text-black text-center text-lg">{link.description}</p>
          </a>
        </Link>
      ))}
    </div>
  );
}
