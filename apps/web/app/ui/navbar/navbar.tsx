import {Suspense} from "react";
import NavbarServer from "./navbarServer";
import NavbarClient from "./navbarClient";

export type NavbarProps = {};

export default function SocraticNavbar(props: NavbarProps) {
  return (
    <Suspense fallback={<NavbarServer {...props} />}>
      <NavbarClient {...props} />
    </Suspense>
  );
}