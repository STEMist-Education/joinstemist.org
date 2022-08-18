export interface NavLinkProps extends React.HTMLAttributes<HTMLElement> {
  href?: string | null;
  link?: any | null;
  via: "link" | "function";
  children: React.ReactNode;
  main?: boolean;
  textColor?: string;
  target?: string;
  image?: string;
}
