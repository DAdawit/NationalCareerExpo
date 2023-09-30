import NavBar from "@/common/NavBar";
import AboutEvent from "@/components/Home/AboutEvent";
import Hero from "@/components/Home/Hero";
import Objects from "@/components/Home/Objects";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutEvent />
      <Objects />
    </main>
  );
}
