import Image from "next/image";
import Link from "next/link";
import Time from "../components/Time";
import Links from "@/components/Links";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="pl-32 bg-gradient-to-b from-slate-950 to-slate-900 h-screen text-white">
      <h1 className="text-6xl font-medium pt-32">hi, i'm simon 👋</h1>
      <p className="text-3xl pt-6 pb-4">
        full stack web developer and linux enthusiast 🚀
      </p>
      <h3 className="text-2xl">currently offline</h3>
      <div className="text-lg pt-8 pb-4">
        <p>
          software engineer from the uk 🇬🇧 with a passion for building things
          and server administration.
        </p>
        <p>
          i enjoy using new technologies and am always looking to learn new
          things and collaborate on interesting projects.
        </p>
        <p>
          feel free to drop me a message on discord if you want to chat or work
          together on something cool.
        </p>
      </div>
      <Time />
      <Skills />
      <Projects />
      <Links />
    </div>
  );
}
