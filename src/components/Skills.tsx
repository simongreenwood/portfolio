import Link from "next/link";

export default function Skills() {
  return (
    <div className="">
      <h3 className="text-2xl pt-8 font-semibold">skills</h3>
      <p className="pb-2">
        here are the main technologies i use when making a project, although i'm
        flexible and know others
      </p>
      <div className="bg-slate-900 border border-gray-600 rounded-lg p-4 text-base">
        <ul className="space-y-4">
          <li className="pl-2">- Typescript</li>
          <li className="pl-2">- Python</li>
          <li className="pl-2">- Next.js/React</li>
          <li className="pl-2">- Tailwind CSS</li>
          <li className="pl-2">- Docker</li>
          <li className="pl-2">- PostgreSQL</li>
        </ul>
      </div>
    </div>
  );
}
