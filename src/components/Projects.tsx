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
                homework.
              </p>
            </Link>
          </li>
          <li>
            <Link href="https://fullstackopen.com">
              <h4 className="text-xl">fullstackopen</h4>
              <p className="text-base">
                finished the whole fullstackopen course apart from part 10
                (react native). i did all the exercises from the course and
                learnt a lot about full stack development, including react,
                node, express, mongodb, postgresql and graphql as well as other
                technologies such as linting with eslint, testing with jest and
                cypress, continuous integration with github actions as well as
                containerisation with docker.
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
