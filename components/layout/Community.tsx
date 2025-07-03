import { Building2, Handshake, LucideIcon, Users } from "lucide-react";
import React from "react";
interface communityType{
  title:string;
  description:string;
  icon: LucideIcon;
}
export default function Community() {
  const communitys = [
    {title:'Membership Organisations',description:'Our membership management software provides full automation of membership renewals and payments',icon:Users},
    {title:'National Associations',description:'Our membership management software provides full automation of membership renewals and payments',icon:Building2},
    {title:'Membership Organisations',description:'Our membership management software provides full automation of membership renewals and payments',icon:Handshake},
  ]
  return (
    <main>
      <h1>Manage your entire community in a single system</h1>
      <p>Who is Nextcent suitable for?</p>
      
      <div className="flex items-center justify-evenly gap-6">
        {
          communitys.map((community:communityType, i:number)=><div key={i} className="w-96 text-center justify-center space-y-5">
          <community.icon size={50}  className="m-auto"/>
          <h2 className="text-2xl font-bold">{community.title}</h2>
          <p>{community.description}</p>
        </div>)
        }
        
      </div>
    </main>
  );
}
