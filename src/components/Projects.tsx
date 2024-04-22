import Link from "next/link";

export default function Projects() {
  return (
    <div className="">
      <h3 className="text-2xl pt-8 font-semibold">projects/experience</h3>
      <p className="pb-2">
        here are some of the projects i've worked on/courses i've done. feel
        free to check them out and let me know what you think.
      </p>
      <div className="bg-slate-900 border border-gray-600 rounded-lg p-4 ">
        <ul className="space-y-4">
          <li>
            <Link href="https://frostsolve.com">
              <h4 className="text-xl">frostsolve</h4>
              <p className="text-base">
                co-owner @ frostsolve, a chrome extension for drfrostmaths.com
                revolutionising how students across the uk complete their
                homework. for this project, i learnt how to make a{" "}
                <span className="text-amber-300">chrome extension</span>, and
                also made the website using{" "}
                <span className="text-amber-300">nextjs</span> and{" "}
                <span className="text-amber-300">tailwindcss</span>. i also
                worked on the discord bot for the project, which mostly used{" "}
                <span className="text-amber-300">discord.py</span>.
              </p>
            </Link>
          </li>
          <li>
            <Link href="https://fullstackopen.com">
              <h4 className="text-xl">fullstackopen</h4>
              <p className="text-base">
                finished the whole fullstackopen course apart from part 10
                (react native). i did all the exercises from the course and
                learnt a lot about full stack development, including{" "}
                <span className="text-amber-300">react</span>,{" "}
                <span className="text-amber-300">node</span>,{" "}
                <span className="text-amber-300">express</span>, and{" "}
                <span className="text-amber-300">graphql</span> as well as other
                technologies such as linting with{" "}
                <span className="text-amber-300">eslint</span>, testing with{" "}
                <span className="text-amber-300">jest</span> and{" "}
                <span className="text-amber-300">cypress</span>, continuous
                integration with{" "}
                <span className="text-amber-300">github actions</span> as well
                as containerisation with{" "}
                <span className="text-amber-300">docker</span>. i also learnt
                how to use multiple databases, including{" "}
                <span className="text-amber-300">mongodb</span>,{" "}
                <span className="text-amber-300">postgresql</span> and{" "}
                <span className="text-amber-300">redis</span>.
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
