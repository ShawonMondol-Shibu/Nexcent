import {
  Handshake,
  LucideIcon,
  MousePointerClick,
  Users2,
  Wallet,
} from "lucide-react";
import React from "react";

type achievementType = {
  icon: LucideIcon;
  total: number;
  title: string;
};
export default function Achievements() {
  const achievements = [
    { icon: Users2, total: 2245341, title: "Members" },
    { icon: Handshake, total: 46328, title: "Clubs" },
    { icon: MousePointerClick, total: 828867, title: "Event Bookings" },
    { icon: Wallet, total: 828867, title: "Payments" },
  ];
  return (
    <main className=" bg-zinc-100 mt-20">
        <div className="container m-auto flex flex-wrap gap-10 items-center justify-evenly py-10">

      <div className="space-y-1.5">
        <h2 className="text-3xl font-bold">
          Helping a local <br />{" "}
          <span className="text-(--brandPrimary)">
            {" "}
            business reinvent itself
          </span>
        </h2>
        <p>We reached here with our hard work and dedication</p>
      </div>

      <div className="grid grid-cols-2 gap-10 items-center">
        {achievements.map((item: achievementType, i: number) => (
            <div key={i} className="flex items-center gap-2">
            <item.icon size={38} color="var(--colorShade1)" />
            <div>

            <h3 className="text-2xl font-bold">{item.total}</h3>
            <p className="text-sm">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
        </div>
    </main>
  );
}
