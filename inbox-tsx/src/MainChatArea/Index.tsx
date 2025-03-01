import { PropsWithChildren } from "react";

interface MainChatAreaProps extends PropsWithChildren {}

export default function MainChatArea({ children }: MainChatAreaProps) {
  return <div className="mainchatarea">{children}</div>;
}
