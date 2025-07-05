import Achievements from "@/components/layout/Achievements";
import Clients from "@/components/layout/Clients";
import Community from "@/components/layout/Community";
import CommunityUpdates from "@/components/layout/CommunityUpdates";
import Customers from "@/components/layout/Customers";
import DesignSite from "@/components/layout/DesignSite";
import Header from "@/components/layout/Header";
import Unlock from "@/components/layout/Unlock";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Clients />
      <Community />
      <Unlock />
      <Achievements/>
      <DesignSite/>
      <Customers/>
      <CommunityUpdates/>
    </div>
  );
}
