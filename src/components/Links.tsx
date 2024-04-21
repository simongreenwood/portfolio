import Link from "next/link";
import Image from "next/image";
export default function Links() {
  return (
    <div>
      <Link
        href="https://discord.com/users/742735986878054451"
        target="_blank"
        replace={false}
        className="inline-block mr-6 pr-1"
      >
        <Image
          src="icons/discord.svg"
          alt="discord"
          width={32}
          height={32}
          className="h-[32px]"
        />
      </Link>
      <Link
        href="https://github.com/simongreenwood"
        target="_blank"
        replace={false}
        className="inline-block"
      >
        <Image src="icons/github.svg" alt="github" width={32} height={32} />
      </Link>
    </div>
  );
}
