import Link from "next/link";

export default function Skills() {
  return (
    <div className="">
      <h3 className="">skills</h3>
      <p className="">here are some of my favourite technologies to use</p>

      <div className="">
        <div>
          <ul className="">
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
