import Achievements from "@/components/layout/Achievements";
import Clients from "@/components/layout/Clients";
import Community from "@/components/layout/Community";
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
    </div>
  );
}
