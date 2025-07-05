import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Dribbble, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-100">
      <div className="container m-auto">
        <div className="text-center space-y-5">
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

        <div>
          <div className="">
            <Image
              src={"/images/logo.png"}
              width={100}
              height={100}
              alt="Footer logo image"
            />
            <div>
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

          
        </div>
      </div>
    </footer>
  );
}
