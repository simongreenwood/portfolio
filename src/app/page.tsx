import Image from "next/image";
import Link from "next/link";
import Time from "../components/Time";
import Links from "@/components/Links";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="pl-32 bg-gradient-to-b from-slate-950 to-slate-900 h-screen text-white">
      <div>
        <h1 className="">hi, i'm simon 👋</h1>
        <p className="">full stack web developer and linux enthusiast 🚀</p>
        <h3 className="">currently offline</h3>
        <div className="">
          <p>
            software engineer from the uk 🇬🇧 with a passion for building things
            and server administration.
          </p>
          <p>
            i enjoy using new technologies and am always looking to learn new
            things and collaborate on interesting projects.
          </p>
          <p>
            feel free to drop me a message on discord if you want to chat or
            work together on something cool.
          </p>
        </div>
        <Time />
        <Skills />
        <Projects />
        <Links />
      </div>
    </div>
  );
}
