import Image from "next/image";
import React from "react";

export default function Clients() {
  const companys: string[] = [
    "/icons/logo.png",
    "/icons/logo1.png",
    "/icons/logo2.png",
    "/icons/logo3.png",
    "/icons/logo4.png",
    "/icons/logo5.png",
    "/icons/logo6.png",
  ];
  return (
    <main className="container m-auto mt-10 text-center space-y-10">
        <div className="space-y-2">

      <h1 className="text-4xl font-semibold"> Out Clients</h1>
      <p className=" text-lg">We have been working with some Fortune 500+ clients</p>
        </div>
      <div className="flex items-center justify-evenly gap-10 grayscale">
        {companys.map((icon: string, i: number) => (
          <Image
            key={i}
            src={icon}
            width={38}
            height={38}
            alt="company icons "
          />
        ))}
      </div>
    </main>
  );
}
