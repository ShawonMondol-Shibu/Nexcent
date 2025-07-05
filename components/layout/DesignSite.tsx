import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function DesignSite() {
  return (
    <div className="container m-auto mt-20">
      <main className="md:grid grid-cols-2 flex gap-5 flex-wrap items-center md:justify-center justify-evenly">
        <Image
          src={"/images/pana.png"}
          width={442}
          height={330}
          alt="How to design section image"
          className="m-auto"
        />
        <div className="space-y-5 w-full m-auto">
          <h2 className="text-3xl font-bold">
            How to design your site footer like we did
          </h2>
          <p>
           Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
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
