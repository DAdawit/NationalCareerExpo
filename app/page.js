import NavBar from "@/common/NavBar";
import AboutEvent from "@/components/Home/AboutEvent";
import Hero from "@/components/Home/Hero";
import Objects from "@/components/Home/Objects";
import OnEvent from "@/components/Home/OnEvent";
import Targets from "@/components/Home/Targets";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutEvent />
      <Objects />
      <Targets />
      <OnEvent />
    </main>
  );
}
