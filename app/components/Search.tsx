"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    // NextJS routing pushes dynamic element into the URI
    router.push(`/${search}/`);
  };

  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 w-80 text-xl rounded-xl"
        placeholder="Search"
      />
      <button className="text-xl p-2 rounded-xl bg-slate-300 font-bold ml-2">
        🚀
      </button>
    </form>
  );
}
