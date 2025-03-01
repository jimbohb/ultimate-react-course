import { PropsWithChildren } from "react";

interface ChatAreaProps extends PropsWithChildren {}

export default function ChatArea({ children }: ChatAreaProps) {
  return <div className="chatarea">{children}</div>;
}
