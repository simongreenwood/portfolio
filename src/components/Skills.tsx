import Link from "next/link";

export default function Skills() {
  return (
    <div className="">
      <h3 className="text-2xl pt-8 font-semibold">skills</h3>
      <p className="pb-2">here are some of my favourite technologies to use</p>

      <div className="bg-slate-900 border border-gray-600 rounded-lg p-4 text-base">
        <div>
          <ul className="space-y-1">
            <li className="space-x-2">
              <span>-</span>
              <Link href="https://typescriptlang.org" target="_blank">
                Typescript
              </Link>
            </li>
            <li className="space-x-2">
              <span>-</span>
              <Link href="https://python.org" target="_blank">
                Python
              </Link>
            </li>
            <li className="space-x-2">
              <span>-</span>
              <Link href="https://nextjs.org" target="_blank">
                Next.js/React
              </Link>
            </li>
            <li className="space-x-2">
              <span>-</span>
              <Link href="https://tailwindcss.com" target="_blank">
                Tailwind CSS
              </Link>
            </li>
            <li className="space-x-2">
              <span>-</span>
              <Link href="https://www.docker.com/" target="_blank">
                Docker
              </Link>
            </li>
            <li className="space-x-2">
              <span>-</span>
              <Link href="https://www.postgresql.org" target="_blank">
                PostgresSQL
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
