import React from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

interface updateType {
  title: string;
  url: string;
}
export default function CommunityUpdates() {
  const updates = [
    {
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      url: "#",
    },
    {
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      url: "#",
    },
    {
      title: "Revamping the Membership Model with Triathlon Australia",
      url: "#",
    },
  ];
  return (
    <div className="mt-10 py-10">
        <main className="container m-auto">

      <div className="m-auto mb-40 md:w-xl w-lg text-wrap text-center">
        <h2 className="text-3xl font-bold">Caring is the new marketing</h2>
        <p>
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who&apos;s joining the community, read about
          how our community are increasing their membership income and lot&apos;s
          more.​
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-10 justify-center">
        {updates.map((update: updateType, i: number) => (
            <Card key={i} className="w-80 text-center bg-zinc-100 shadow-lg">
            <CardHeader>
              <CardTitle className="leading-normal text-xl">{update.title}</CardTitle>
            </CardHeader>
            <CardFooter className="text-center">
              <Link href={update.url} className="text-(--brandPrimary) m-auto">
                Read More &rarr;
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
        </main>
    </div>
  );
}
