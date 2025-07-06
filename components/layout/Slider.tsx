import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";
export default function Slider() {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="m-auto"
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((item, i) => (
            <CarouselItem
              key={i}
              className=" flex items-center justify-between"
            >
              <div className="md:space-y-8 space-y-5">
                <div>
                  <h2 className="md:text-6xl text-2xl font-bold leading-tight">
                    Lessons and insights <br />
                    <span className="text-(--colorShade1)">
                      from 8 years
                    </span>{" "}
                  </h2>
                  <p className="leading-relaxed">
                    Where to grow your business as a photographer: site or
                    social media?
                  </p>
                </div>
                <Button
                  variant={"default"}
                  size={"lg"}
                  className="bg-(--colorShade1) border"
                >
                  Register
                </Button>
              </div>
              <div>

              <Image
                src={"/images/image.png"}
                width={391}
                height={407}
                alt="header carousel banner image"
                />
                </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-(--brandPrimary) md:inline-flex hidden" />
        <CarouselNext className="text-(--brandPrimary) md:inline-flex hidden" />
      </Carousel>
    </>
  );
}
