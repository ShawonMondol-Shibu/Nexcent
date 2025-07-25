import React from "react";
import Slider from "./Slider";

export default function Header() {
  return (
    <header className=" w-full md:h-[60vh] bg-zinc-100 p-5 m-auto md:pt-20">
      <div className="container m-auto">
        <Slider />
      </div>
    </header>
  );
}
