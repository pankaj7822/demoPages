"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen flex justify-center items-center gap-10">
        <Link href="/new-account">
          <button className="border-2 border-black p-3 rounded-lg bg-[#AF43F7] text-white font-semibold">New Account Page</button>
        </Link>
        <Link href="/welcome">
          <button className="border-2 border-black p-3 rounded-lg bg-[#AF43F7] text-white font-semibold">Welcome Page</button>
        </Link>
        <Link href="/profile">
          <button className="border-2 border-black p-3 rounded-lg bg-[#AF43F7] text-white font-semibold">Profile Page</button>
        </Link>
      </div>
    </>
  );
}
