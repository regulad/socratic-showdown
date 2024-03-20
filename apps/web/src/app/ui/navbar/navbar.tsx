import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { type ReactNode } from "react";

export default function SocraticNavbar(): ReactNode {
  return (
    <Navbar className="bg-gray-300 dark:bg-gray-600" fluid rounded>
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          SocraTalk
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button as={Link} href="/signup">
          Sign Up
        </Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink active as={Link} href="/">
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/about">
          About
        </NavbarLink>
        <NavbarLink as={Link} href="/contact">
          Contact
        </NavbarLink>
        <NavbarLink as={Link} href="/login">
          Login
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
