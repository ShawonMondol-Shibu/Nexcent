import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function Unlock() {
  return (
    <div className="container m-auto mt-20">
      <main className="flex gap-10 flex-wrap items-center justify-evenly">
        <div className="md:flex-1/3 flex-1/2">

        <Image
          src={"/images/rafiki.png"}
          width={442}
          height={330}
          alt="unlock section image"
          className="md:float-right m-auto"
          />
          </div>
        <div className="space-y-5 flex-1/2">
          <h2 className="text-3xl font-bold">
            The unseen of spending three <br /> years at Pixelgrade
          </h2> 
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <Button
            variant={"default"}
            size={"lg"}
            className="bg-(--brandPrimary) rounded"
          >
            Learn More
          </Button>
        </div>
      </main>
    </div>
  );
}
