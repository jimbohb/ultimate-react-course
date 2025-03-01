import { PropsWithChildren } from "react";

interface FooterProps extends PropsWithChildren {}

export default function Footer({ children }: FooterProps) {
  return <div className="footer">{children}</div>;
}
