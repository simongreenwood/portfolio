import Link from "next/link";

export default function Skills() {
  return (
    <div className="pt-8 pb-8">
      <h3 className="text-2xl ">skills</h3>
      <p className="pb-2">here are some of my favourite technologies to use</p>

      <div className="bg-slate-900 px-2 pr-4 py-0.5 border border-gray-600 rounded-md w-fit">
        <div>
          <ul className="pb-2">
            <li>
              <Link href="https://www.typescriptlang.org/">typescript</Link>
            </li>
            <li>
              <Link href="https://reactjs.org/">react</Link>
            </li>
            <li>
              <Link href="https://nextjs.org/">next.js</Link>
            </li>
            <li>
              <Link href="https://nodejs.org/">node.js</Link>
            </li>
            <li>
              <Link href="https://expressjs.com/">express</Link>
            </li>
            <li>
              <Link href="https://www.mongodb.com/">mongodb</Link>
            </li>
            <li>
              <Link href="https://www.postgresql.org/">postgresql</Link>
            </li>
            <li>
              <Link href="https://www.docker.com/">docker</Link>
            </li>
            <li>
              <Link href="https://www.tailwindcss.com/">tailwindcss</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
