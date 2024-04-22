"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState<string>(
    new Date().toLocaleTimeString("en-GB", { timeZone: "Europe/London" })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-GB", { timeZone: "Europe/London" })
      );
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <Link
      href="https://time.is/London"
      className="bg-slate-900 px-1 py-0.5 border border-gray-500 rounded-md font-light text-amber-300"
    >
      {time}
    </Link>
  );
}
