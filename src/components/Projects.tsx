import Link from "next/link";

export default function Projects() {
  return (
    <div className="pt-8 pb-8 w-fit">
      <h3 className="text-3xl font-semibold">projects</h3>
      <p className="pt-2 pb-4">
        here are some of the projects i've worked on. feel free to check them
        out and let me know what you think.
      </p>

      <div className="bg-slate-900 px-2 pr-4 py-0.5 border border-gray-600 rounded-md ">
        <Link href="https://frostsolve.com">
          <div>
            <h4 className="text-2xl pt-2 pb-1">frostsolve</h4>
            <p className="pb-2">
              co-owner @ frostsolve, a chrome extension for drfrostmaths.com
              revolutionising how students across the uk complete their
              homework.
            </p>
          </div>
        </Link>
      </div>
      <div className="bg-slate-900 px-2 pr-4 py-0.5 mt-4 border border-gray-600 rounded-md ">
        <Link href="https://frostsolve.com">
          <div>
            <h4 className="text-2xl pt-2 pb-1">simon chat</h4>
            <p className="pb-2">
              made a fully functional chat app with socket.io and expressjs,
              with a react frontend. styled with tailwindcss.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
