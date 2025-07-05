import Image from "next/image";
import React from "react";
import Icons from "../ui/icons";
import Link from "next/link";

export default function Customers() {
  return (
    <div className="container m-auto mt-20">
      <main className="flex flex-wrap gap-10 items-center justify-center m-auto">
        <div className="md:flex-1/5 flex-1/2 w-fit">
          <Image
            src={"/images/image 9.png"}
            width={326}
            height={326}
            alt="Customer  image"
            className="md:float-right m-auto "
          />
        </div>
        <div className="space-y-5 w-full flex-1/2 md:text-justify text-center">
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <div>
            <h4 className="text-2xl font-bold text-(--brandPrimary)">
              Tim Smith
            </h4>
            <p>British Dragon Boat Racing Association</p>
          </div>

          <span className="flex items-center gap-10">
            <Icons />
            <Link
              href={"#"}
              className="text-(--brandPrimary) flex items-center"
            >
              Meet all custommers &rarr;{" "}
            </Link>
          </span>
        </div>
      </main>
    </div>
  );
}
