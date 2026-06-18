import Link from "next/link";
export default function Profile() {
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

          <p>⭐ Level: 1</p>

          <p>⚔ Battles Won: 1</p>

          <p>🏛 Campaigns Completed: 1</p>

          <p>🔥 Daily Streak: 0 Days</p>

          <p>🏆 Total XP: 40</p>

        </div>

      </div>

      <div className="bg-slate-800 p-8 rounded-xl max-w-3xl mt-8">

        <h2 className="text-2xl font-bold mb-4">
          Achievements
        </h2>

        <ul className="space-y-2">
          <li>🏛 Egypt Explorer</li>
          <li>⚔ First Victory</li>
          <li>📚 History Beginner</li>
        </ul>

      </div>

    </main>
  );
}