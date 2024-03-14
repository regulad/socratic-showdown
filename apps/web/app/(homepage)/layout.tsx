import SocraticNavbar from "../ui/navbar/navbar";
import {ChildrenProps} from "../lib/types";

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <SocraticNavbar />
      <div className={"md:container md:mx-auto"}>
        {children}
      </div>
    </>
  )
}