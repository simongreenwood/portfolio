import Image from "next/image";
import Link from "next/link";
import Time from "../components/Time";
import Links from "@/components/Links";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";

export default function Home() {
  const tz = new Date()
    .toLocaleTimeString("en-US", {
      timeZone: "Europe/London",
      timeZoneName: "short",
    })
    .split(" ")[2];
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 min-h-screen h-fit text-amber-50 text-lg">
      <div className="w-[60%] mx-auto">
        <Navbar />
        <div className="pl-4 pt-4 tracking-tight">
          <h1 className="text-3xl font-semibold">hi, i'm simon 👋</h1>
          <p className="text-2xl">
            full stack web developer and linux enthusiast 🚀
          </p>
          <h3 className="text-2xl pt-6">currently offline</h3>
          <div className="py-4">
            software engineer from the uk with a passion for building things and
            server administration. i enjoy using new technologies and am always
            looking to learn new things and collaborate on interesting projects.
            feel free to drop me a message on discord if you want to chat or
            work together on something cool. it's currently <Time /> for me (
            {tz}).
          </div>
          <Skills />
          <Projects />
          <Links />
        </div>
      </div>
    </div>
  );
}
