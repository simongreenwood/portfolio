import Image from "next/image";
import Link from "next/link";
import Time from "../components/Time";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import Online from "@/components/Online";

export default function Home() {
  const tz = new Date()
    .toLocaleTimeString("en-US", {
      timeZone: "Europe/London",
      timeZoneName: "short",
    })
    .split(" ")[2];
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 min-h-screen h-fit text-amber-50 text-lg tracking-tight">
      <div className="w-11/12 lg:w-1/2 mx-auto">
        <Navbar />
        <div className="pl-4 pt-4">
          <h1 className="text-3xl font-semibold">hi, i&apos;m simon 👋</h1>
          <p className="text-2xl">
            full stack web developer and linux enthusiast 🚀
          </p>
          <Online/>
          <div className="py-4">
            software engineer from the uk with a passion for building things and
            server administration. i enjoy using new technologies and am always
            looking to learn new things and collaborate on interesting projects.
            feel free to drop me a message on discord if you want to chat or
            work together on something cool. it&apos;s currently <Time /> for me (
            {tz}).
          </div>
          <Skills />
          <Projects />
        </div>
      </div>
    </div>
  );
}
