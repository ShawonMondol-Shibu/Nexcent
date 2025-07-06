import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface navType {
  name: string;
  url: string;
}

export default function Navbar() {
  const navLink = [
    { name: "Home", url: "#" },
    { name: "Service", url: "#" },
    { name: "Feature", url: "#" },
    { name: "Product", url: "#" },
    { name: "Testimonial", url: "#" },
    { name: "FAQ", url: "#" },
  ];
  return (
    <nav className="flex items-center justify-between p-5 sticky top-0 left-0 bg-zinc-100 z-10">
      <Image
        src={"/images/logo.png"}
        width={100}
        height={100}
        alt="nexcents logo image in for this site"
      />

      <ul className="md:flex hidden gap-10 items-center">
        {navLink.map((nav: navType) => (
          <li key={nav.name}>
            <Link
              href={nav.url}
              className="hover:text-(--brandPrimary) transition-colors duration-150 ease-in"
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center">
        <Button
          variant={"ghost"}
          size={"default"}
          className="text-(--brandPrimary)"
        >
          Login
        </Button>
        <Button
          variant={"default"}
          size={"default"}
          className="bg-(--brandPrimary)"
        >
          Sign up
        </Button>
      </div>
    </nav>
  );
}
