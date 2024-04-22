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
    <div className="">
      <p>
        it's currently{" "}
        <Link
          href="https://time.is/London"
          className="bg-slate-900 px-1 py-0.5 border border-gray-600 rounded-md font-light"
        >
          {time}
        </Link>{" "}
        for me (
        {
          new Date()
            .toLocaleTimeString("en-US", {
              timeZone: "Europe/London",
              timeZoneName: "short",
            })
            .split(" ")[2]
        }
        )
      </p>
    </div>
  );
}
