"use client";
import { useEffect, useState } from "react";

type OnlineStatus = {
  data: {
    discord_status: string;
  }
}
export default function Online() {
  const [onlineStatus, setOnlineStatus] = useState(false);
  useEffect(() => {
    fetch("https://api.lanyard.rest/v1/users/742735986878054451")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setOnlineStatus(data.data.discord_status !== "offline" ? true : false);
      });
  }, []);
  
  return (
    <h3 className="text-2xl pt-6">currently {onlineStatus  ? <span className="text-green-500">online</span> : <span className="text-gray-500">offline</span>}</h3>
  )
} 