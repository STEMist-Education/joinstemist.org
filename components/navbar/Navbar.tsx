import { Disclosure } from "@headlessui/react";
import NavLink from "./NavLink";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import DropdownLink from "./DropdownLink";
import DropdownButton from "./DropdownButton";
import { NavLinks, navLinks } from "@/lib/data/navLinks";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function Navbar({
  noNav,
  navTitle,
  customNav,
  hacks,
}: {
  noNav: boolean;
  navTitle: string;
  customNav: NavLinks;
  hacks?: boolean;
}) {
  const router = useRouter();
  // const [bgVisible, setBgVisible] = useState(false);
  // useEffect(() => {
  //   const callback = () => {
  //     if (window.scrollY >= 80) {
  //       setBgVisible(true);
  //     } else {
  //       setBgVisible(false);
  //     }
  //   };
  //   window.addEventListener("scroll", callback);
  //   return () => window.removeEventListener("scroll", callback);
  // }, []);
  return (
    <>
      <div id="top"></div>
      <Disclosure as={Fragment}>
        {({ open }) => (
          <nav
            className={`fixed z-50 w-full ${"bg-black bg-opacity-100"} transition-all duration-500`}
          >
            <div className="padded-section">
              <div className="flex justify-between py-3 font-display">
                <div className="flex items-center gap-1">
                  <Link href="/">
                    <a>
                      <h1 className="font-display text-2xl font-bold">
                        <div className="flex items-center gap-1 p-1">
                          <Image
                            src="/logo-white.png"
                            alt="STEMist Education"
                            priority
                            height={47.005}
                            width={141.61}
                            className="select-none"
                          />
                        </div>
                      </h1>
                    </a>
                  </Link>
                  <span className="font-semibold text-2xl font-display text-white">
                    {navTitle}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Link href="/portal">
                    <a>
                      <h1 className="font-display text-2xl font-bold">
                        <div className="flex items-center gap-1 p-1">
                          <Image
                            src="http://yantraz.com/tools/hostingfiles/stemist/stemist%20student%20portal.png"
                            alt="PORTAL"
                            priority
                            height={47.005}
                            width={141.61}
                            className="select-none"
                          />
                        </div>
                      </h1>
                    </a>
                  </Link>
                  <span className="font-semibold text-2xl font-display text-white">
                    {navTitle}
                  </span>
                </div>
                
                
                <Disclosure.Button className="lg:hidden">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon className="block h-6 w-6 text-white" />
                  )}
                </Disclosure.Button>
                {noNav && (
                  <div className="mt-auto mb-auto hidden lg:flex">
                    <ul className="inline-flex gap-4">
                      {customNav.map((navLink, index) => (
                        <NavLink
                          key={index}
                          href={navLink.link}
                          {...navLink.customProps}
                        >
                          {navLink.name}
                        </NavLink>
                      ))}
                      {!hacks && (
                        <NavLink
                          main
                          href="/"
                          color="blue-500 bg-opacity-80 hover:bg-opacity-90"
                          textColor="white"
                          className="flex items-center gap-1"
                        >
                          <ArrowLeftIcon className="h-5 w-5 inline-block" />
                          Back to STEMist
                        </NavLink>
                      )}
                    </ul>
                  </div>
                )}
                {!noNav && (
                  <div className="mt-auto mb-auto hidden lg:block">
                    <ul className="inline-flex gap-4">
                      {navLinks.map((navLink, index) =>
                        navLink.hidden ? null : !navLink.dropdown ? (
                          <NavLink
                            key={index}
                            href={navLink.link}
                            {...(navLink.customProps
                              ? navLink.customProps
                              : {})}
                          >
                            {navLink.name}{" "}
                            {navLink.customProps?.target && (
                              <ArrowRightIcon className="h-4 w-4 inline-block transform -rotate-45" />
                            )}
                          </NavLink>
                        ) : (
                          <DropdownLink
                            key={index}
                            title={navLink.name}
                            navLink={navLink}
                          >
                            {navLink.dropdownItems?.map((item, i) => (
                              <DropdownButton
                                href={item.link}
                                key={i}
                                target={item.customProps?.target || "_self"}
                              >
                                {item.name}{" "}
                                {item.customProps?.target && (
                                  <ArrowRightIcon className="h-4 w-4 inline-block transform -rotate-45" />
                                )}
                              </DropdownButton>
                            ))}
                          </DropdownLink>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
              <Disclosure.Panel className="lg:hidden">
                {() => (
                  <div
                    className={`absolute w-full -translate-x-4 sm:-translate-x-8 space-y-1 object-cover px-2 pt-2 pb-3 transition-all duration-500 ${"bg-black bg-opacity-100"}`}
                  >
                    <ul>
                      {(customNav.length ? customNav : navLinks).map(
                        (navLink, i) => (
                          <Fragment key={i}>
                            {navLink.hidden ? null : (
                              <>
                                {navLink.customProps?.main && (
                                  <div className="h-2"></div>
                                )}
                                {!navLink.dropdown ? (
                                  <Disclosure.Button className="block">
                                    <NavLink
                                      href={navLink.link}
                                      {...(navLink.customProps
                                        ? navLink.customProps
                                        : {})}
                                    >
                                      {navLink.name}{" "}
                                      {navLink.customProps?.target && (
                                        <ArrowRightIcon className="h-4 w-4 inline-block transform -rotate-45" />
                                      )}
                                    </NavLink>
                                  </Disclosure.Button>
                                ) : (
                                  <Disclosure key={i}>
                                    <Disclosure.Button
                                      className={`block font-display text-lg underline-offset-1 whitespace-nowrap text-white ${
                                        navLink.dropdownItems!.some(
                                          (dropDownItem) =>
                                            dropDownItem.link === router.asPath
                                        )
                                          ? "font-bold"
                                          : "font-normal"
                                      }`}
                                    >
                                      {navLink.name}{" "}
                                      <ChevronDownIcon
                                        className="w-4 h-4 inline-block"
                                        aria-hidden="true"
                                      />
                                    </Disclosure.Button>
                                    <Disclosure.Panel>
                                      {navLink.dropdownItems?.map(
                                        (item: any, i: any) => (
                                          <Link key={i} href={item.link}>
                                            <a
                                              className={`block ml-3 font-display text-white ${
                                                router.asPath === item.link
                                                  ? "font-bold"
                                                  : "font-normal"
                                              }`}
                                              target={
                                                item.customProps?.target || ""
                                              }
                                            >
                                              {item.name}{" "}
                                              {item.customProps?.target && (
                                                <ArrowRightIcon className="h-4 w-4 inline-block transform -rotate-45" />
                                              )}
                                            </a>
                                          </Link>
                                        )
                                      )}
                                    </Disclosure.Panel>
                                  </Disclosure>
                                )}
                              </>
                            )}
                          </Fragment>
                        )
                      )}
                      {noNav && !hacks && (
                        <>
                          <div className="h-2"></div>
                          <NavLink
                            main
                            href="/"
                            color="blue-500 bg-opacity-80 hover:bg-opacity-90"
                            textColor="white"
                            className="flex items-center gap-1"
                          >
                            <ArrowLeftIcon className="h-5 w-5 inline-block" />
                            Back to STEMist
                          </NavLink>
                        </>
                      )}
                    </ul>
                  </div>
                )}
              </Disclosure.Panel>
            </div>
          </nav>
        )}
      </Disclosure>
    </>
  );
}
