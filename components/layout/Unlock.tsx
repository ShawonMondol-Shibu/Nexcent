import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function Unlock() {
  return (
    <div className="container m-auto mt-20">
      <main className="md:grid grid-cols-2 flex gap-5 flex-wrap items-center justify-evenly">
        <Image
          src={"/images/rafiki.png"}
          width={442}
          height={330}
          alt="unlock section image"
          className="m-auto"
        />
        <div className="space-y-5 w-full">
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
