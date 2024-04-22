import Link from "next/link";

export default function Projects() {
  return (
    <div className="">
      <h3 className="">projects</h3>
      <p className="">
        here are some of the projects i've worked on. feel free to check them
        out and let me know what you think.
      </p>

      <div className="bg-slate-900 border border-gray-600 rounded-md ">
        <Link href="https://frostsolve.com">
          <h4 className="">frostsolve</h4>
          <p className="">
            co-owner @ frostsolve, a chrome extension for drfrostmaths.com
            revolutionising how students across the uk complete their homework.
          </p>
        </Link>
      </div>
    </div>
  );
}
