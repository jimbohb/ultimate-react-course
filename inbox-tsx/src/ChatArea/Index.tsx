import { PropsWithChildren } from "react";

export default function ChatArea({ children }: PropsWithChildren) {
  return <div className="chatarea">{children}</div>;
}
