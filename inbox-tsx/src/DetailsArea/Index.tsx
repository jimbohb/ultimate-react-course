import { PropsWithChildren } from "react";

interface DetailsAreaProps extends PropsWithChildren {
  show: boolean;
}

export default function DetailsArea({ children, show }: DetailsAreaProps) {
  return (
    <div className="detailsarea" style={show ? {} : { display: "none" }}>
      {children}
    </div>
  );
}
