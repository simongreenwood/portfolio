import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="pl-2 pt-4 pb-2 border-b border-amber-50">
      <span className="text-xl text-amber-50 w-fit">Simon Greenwood</span>
      <div className="float-right w-fit pr-2 top-0">
        <Link
          href="https://discord.com/users/742735986878054451"
          target="_blank"
          replace={false}
          className="inline-block pr-4"
        >
          <Image
            src="icons/discord.svg"
            alt="discord"
            width={28}
            height={28}
            className="h-[28px]"
          />
        </Link>
        <Link
          href="https://github.com/simongreenwood"
          target="_blank"
          replace={false}
          className="inline-block"
        >
          <Image
            src="icons/github.svg"
            alt="github"
            width={28}
            height={28}
            className="h-[28px]"
          />
        </Link>
      </div>
    </div>
  );
}
