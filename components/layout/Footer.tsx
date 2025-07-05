import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Dribbble, Instagram, Send, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

interface footerLinkType {
  title: string;
  url: string;
}

export default function Footer() {
  const footerLink = [
    { title: "About us", url: "#" },
    { title: "Blog", url: "#" },
    { title: "Contact us", url: "#" },
    { title: "Pricing", url: "#" },
    { title: "Testimonials", url: "#" },
  ];
  const supports = [
    { title: "Help center", url: "#" },
    { title: "Terms of service", url: "#" },
    { title: "Legal", url: "#" },
    { title: "Privacy policy", url: "#" },
    { title: "Status", url: "#" },
  ];
  return (
    <footer className="mt-20">
      <div className="bg-zinc-100 py-10 ">
        <div className="container m-auto  text-center space-y-5">
          <h1 className="text-5xl font-semibold leading-tight">
            Pellentesque suscipit <br /> fringilla libero eu.
          </h1>
          <Button
            variant={"default"}
            size={"lg"}
            className="bg-(--brandPrimary) rounded"
          >
            Get a Demo &rarr;
          </Button>
        </div>
      </div>

      {/* Footer main started from here */}

      <div className=" m-auto bg-neutral-800 text-white">
        <div className="container m-auto flex items-start justify-between py-20 ">
          <div className=" space-y-10">
            <Image
              src={"/images/logo.png"}
              width={200}
              height={200}
              alt="Footer logo image"
            />
            <div className="space-y-1">
              <p>Copyright © 2020 Nexcent ltd.</p>
              <p>All rights reserved</p>
            </div>
            <span className="flex items-center gap-5">
              <Instagram />
              <Dribbble />
              <Twitter />
              <Youtube />
            </span>
          </div>

          <div className="space-y-5">
            <h4 className="text-xl font-semibold">Company</h4>
            <ul className="space-y-2">
              {footerLink.map((item: footerLinkType, i: number) => (
                <li key={i}>
                  <Link href={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-xl font-semibold">Support</h4>
            <ul className="space-y-2">
              {supports.map((item: footerLinkType, i: number) => (
                <li key={i}>
                  <Link href={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-xl font-semibold">Stay up to date</h4>
            <div className="flex items-center border p-2 rounded-md bg-zinc-700">
              <input type="email" placeholder="Your email address" />
              <Send />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
