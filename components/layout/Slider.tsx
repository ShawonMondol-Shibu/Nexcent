import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";
export default function Slider() {
  return (
    <>
      <Carousel   opts={{
    align: "start",
    loop: true,
  }}>
        <CarouselContent>
          <CarouselItem>
            <div>
                <h2>Lessons and insights <span>from 8 years</span> </h2>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <Button></Button>
            </div>
            <Image src={'/images/image.png'} width={391} height={407} alt="header carousel banner image" />
          </CarouselItem>
        
        </CarouselContent>
      </Carousel>
    </>
  );
}
