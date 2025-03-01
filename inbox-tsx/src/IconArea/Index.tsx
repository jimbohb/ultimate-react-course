import { PropsWithChildren } from "react";

interface IconAreaProps extends PropsWithChildren {}

export default function IconArea({ children }: IconAreaProps) {
  return <div className="iconarea">{children}</div>;
}
