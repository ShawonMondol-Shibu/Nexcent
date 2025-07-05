import React from "react";
import Icons from "../ui/icons";

export default function Clients() {

  return (
    <main className="container m-auto mt-20 text-center space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold"> Out Clients</h1>
        <p className=" text-lg">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <span className=" grayscale">
        
      <Icons/>
      </span>
    </main>
  );
}
