import { PropsWithChildren } from "react";

interface ContactsAreaProps extends PropsWithChildren {}

export default function ContactsArea({ children }: ContactsAreaProps) {
  return <div className="contactsarea">{children}</div>;
}
