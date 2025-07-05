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
    <div>
      <div className="mb-20">
        <h2 className="text-3xl font-bold">Caring is the new marketing</h2>
        <p>
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-10 justify-between">
        {updates.map((update: updateType, i: number) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>{update.title}</CardTitle>
            </CardHeader>
            <CardFooter>
              <Link href={update.url} color="var(--colorShade1)">
                Read More &rarr;
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
