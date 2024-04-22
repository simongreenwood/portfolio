import Link from "next/link";

export default function Skills() {
  return (
    <div className="">
      <h3 className="">skills</h3>
      <p className="">here are some of my favourite technologies to use</p>

      <div className="bg-slate-900 border border-gray-600 border-lg">
        <div>
          <ul className="">
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
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
