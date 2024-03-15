import { type ReactNode } from "react";
import SocraticNavbar from "../ui/navbar/navbar";

export default function Layout({
  children,
}: {
  children?: ReactNode;
}): ReactNode {
  return (
    <>
      <SocraticNavbar />
      <div className="md:container md:mx-auto">{children}</div>
    </>
  );
}
