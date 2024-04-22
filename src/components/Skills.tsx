import Link from "next/link";

export default function Skills() {
  return (
    <div className="">
      <h3 className="text-2xl pt-8 font-semibold">skills</h3>
      <p className="pb-2">here are some of my favourite technologies to use</p>

      <div className="bg-slate-900 border border-gray-600 rounded-lg p-4 text-base">
        <ul className="space-y-4">
          <li>
            <h4 className="text-xl font-semibold">frontend</h4>
            <p>
              - <span className="text-amber-300">react</span>,{" "}
              <span className="text-amber-300">nextjs</span>,{" "}
              <span className="text-amber-300">apollo</span>/
              <span className="text-amber-300">graphql</span>
            </p>
          </li>
          <li>
            <h4 className="text-xl font-semibold">backend</h4>
            <p>
              - <span className="text-amber-300">prisma</span>,{" "}
              <span className="text-amber-300">express</span>,{" "}
              <span className="text-amber-300">postgresql</span>,{" "}
              <span className="text-amber-300">mongodb</span>,{" "}
              <span className="text-amber-300">redis</span>
            </p>
          </li>
          <li>
            <h4 className="text-xl font-semibold">languages</h4>
            <p>
              - <span className="text-amber-300">javascript/nodejs</span>,{" "}
              <span className="text-amber-300">typescript</span>,{" "}
              <span className="text-amber-300">python</span>
            </p>
          </li>
          <li>
            <h4 className="text-xl font-semibold">other</h4>
            <p>
              - <span className="text-amber-300">git</span>,{" "}
              <span className="text-amber-300">docker</span>,{" "}
              <span className="text-amber-300">github actions</span>,{" "}
              <span className="text-amber-300">linux</span>,{" "}
              <span className="text-amber-300">aws</span>,{" "}
              <span className="text-amber-300">vercel</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
