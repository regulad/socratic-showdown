import {NavbarProps} from "./navbar";
import {Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle} from "flowbite-react";
import Link from "next/link";

export default function NavbarServer({}: NavbarProps) {
  return (
    <Navbar fluid rounded className={"bg-gray-300 dark:bg-gray-600"}>
      <NavbarBrand as={Link} href={"/"}>
        <span
          className={"self-center whitespace-nowrap text-xl font-semibold dark:text-white"}>Socratic Showdown</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Login / Sign Up</Button>
        <NavbarToggle/>
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}