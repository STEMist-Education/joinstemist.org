import { DropdownLinkProps } from "@/lib/types";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { Fragment, ReactNode } from "react";

function Dropdown({ children, title, mobile, navLink }: DropdownLinkProps) {
  const router = useRouter();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex h-full">
        <Menu.Button
          className={`w-full rounded-md text-white text-lg flex items-center  ${
            navLink.dropdownItems!.some(
              (dropDownItem) => dropDownItem.link === router.asPath
            )
              ? "font-bold"
              : "font-normal"
          } focus:outline-none z-0`}
        >
          {title}
          <ChevronDownIcon
            className="w-6 h-6 inline-block"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`origin-top-right absolute ${
            mobile ? "left-0" : "right-0"
          } mt-2 w-56 rounded-none shadow-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="py-1">{children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default function DropdownLink({
  children,
  title,
  mobile,
  navLink,
}: DropdownLinkProps) {
  return (
    <div className="flex">
      <Dropdown title={title} mobile={mobile} navLink={navLink}>
        {children}
      </Dropdown>
    </div>
  );
}
