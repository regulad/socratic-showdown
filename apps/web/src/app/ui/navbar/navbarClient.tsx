"use client";

import { NavbarProps } from "./navbar";
import { Button, Navbar } from "flowbite-react";
import Link from "next/link";

export default function NavbarClient({}: NavbarProps) {
  return (
    <Navbar fluid rounded className={"bg-gray-300 dark:bg-gray-600"}>
      <Navbar.Brand as={Link} href={"/"}>
        <span
          className={
            "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
          }
        >
          Socratic Showdown
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Sign Up</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
