import { PageLinks } from "@/lib/types";
import { ArrowRightIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function LinkPage({
  links,
  columns,
  base,
}: {
  links: PageLinks[];
  columns: number;
  base: string;
}) {
  return (
    <div
      className={`grid place-items-center gap-3 h-full items-center ${
        columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
      } grid-cols-1 padded-section m-auto mb-10`}
    >
      {links.map((link, i) => (
        <Link href={link.external ? link.url : `${base}${link.url}`} key={i}>
          <a
            className="bg-[#e0efff] rounded-lg p-3 hover:rounded-xl hover:-translate-y-2 transition-all duration-300 shadow-lg w-full h-48 flex flex-col justify-center items-center"
            {...(link.external ? { rel: "noreferrer noopener" } : {})}
            target={link.external ? "_blank" : "_self"}
          >
            <h1 className="font-display text-2xl font-medium text-center">
              {link.name}{" "}
              {link.external && (
                <ArrowRightIcon className="h-6 w-6 inline-block transform -rotate-45" />
              )}
            </h1>
            <p className="text-center text-lg max-w-[40ch]">
              {link.description}
            </p>
          </a>
        </Link>
      ))}
    </div>
  );
}
