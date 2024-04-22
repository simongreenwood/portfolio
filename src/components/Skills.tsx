import Link from "next/link";

export default function Skills() {
  return (
    <div className="">
      <h3 className="text-2xl pt-8 font-semibold">skills</h3>
      <p className="pb-2">
        here are the main technologies i know. i mainly use next with
        prisma/postgres, sometimes with graphql and tailwind for most web dev
        projects like this portfolio.
      </p>
      <div className="bg-slate-900 border border-gray-600 rounded-lg p-4 text-base">
        <ul className="space-y-4">
          <li className="pl-2">
            <h4 className="text-xl font-semibold">frontend</h4>
            <p>
              experienced with react and nextjs, apollo client and graphql,
              tailwindcss for styling and typescript. i also have experience
              with redux and zustand for state management in bigger projects. i
              use jest and cypress for e2e/unit testing.
            </p>
          </li>

          <li className="pl-2">
            <h4 className="text-xl font-semibold">backend</h4>
            <p>
              experienced with node and express, apollo server and graphql, as
              well as postgresql and mongodb for databases. i also have
              experience with redis for caching and session management. i know
              sql but prefer to use prisma as an orm for postgresql.
            </p>
          </li>
          <li className="pl-2">
            <h4 className="text-xl font-semibold">server</h4>
            <p>
              experienced with linux and server administration, i have
              experience with most of the main distros but mostly arch and
              debian. i also use docker and docker-compose for containerisation
              and deployment. in terms of hosting, i mostly use aws for a vps
              and use vercel for hosting small web apps. for ci/cd, i like to
              use github actions.
            </p>
          </li>
          <li className="pl-2">
            <h4 className="text-xl font-semibold">other</h4>
            <p>
              i have experience with git and github, and have used gitlab
              before. for making discord bots, i use discord.js and discord.py
              along with sqlalchemy. i know django and flask for python web
              development although i do most of my web development with
              node/typescript.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
