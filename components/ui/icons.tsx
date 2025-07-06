import Image from "next/image";
import React from "react";

export default function Icons() {
  const companys: string[] = [
    "/icons/Logo.png",
    "/icons/Logo1.png",
    "/icons/Logo2.png",
    "/icons/Logo3.png",
    "/icons/Logo5.png",
    "/icons/Logo6.png",
  ];
  return (
    <>
      <div className="flex flex-wrap items-center justify-evenly gap-10">
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
    </>
  );
}
