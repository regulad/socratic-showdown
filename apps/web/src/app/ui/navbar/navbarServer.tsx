import { NavbarProps } from "./navbar";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

export default function NavbarServer({}: NavbarProps) {
  return (
    <Navbar fluid rounded className={"bg-gray-300 dark:bg-gray-600"}>
      <NavbarBrand as={Link} href={"/"}>
        <span
          className={
            "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
          }
        >
          Socratic Showdown
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Sign Up</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
