"use client";
<Navbar />
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getXP } from "@/lib/storage";

export default function Profile() {
  const [xp, setXp] = useState(0);

  useEffect(() => {
    setXp(getXP());
  }, []);

  const level = Math.floor(xp / 100) + 1;

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-8">
        👤 Player Profile
      </h1>

      <div className="bg-slate-800 p-8 rounded-xl max-w-3xl">

        <h2 className="text-3xl font-bold">
          Time Traveler
        </h2>

        <div className="mt-6 space-y-3">

          <p>⭐ Level: {level}</p>

          <p>🏆 XP: {xp}</p>

        </div>

      </div>

    </main>
  );
}