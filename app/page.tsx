import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">⚔️ ChronoQuest</h1>

        <div className="space-x-4">

  <Link href="/profile">
    <button className="px-4 py-2 border rounded-lg">
      Profile
    </button>
  </Link>

  <button className="px-4 py-2 bg-yellow-500 text-black rounded-lg font-bold">
    Start Quest
  </button>

</div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h2 className="text-6xl font-bold max-w-4xl">
          Travel Through Time,
          <br />
          Learn Through Adventure
        </h2>

        <p className="mt-6 text-xl text-gray-300 max-w-2xl">
          Explore ancient civilizations, battle through history,
          earn XP, unlock achievements, and become the ultimate
          Time Traveler.
        </p>

        <button className="mt-8 px-8 py-4 bg-yellow-500 text-black rounded-xl font-bold text-lg">
          Begin Your Journey
        </button>
      </section>

      <section className="grid md:grid-cols-3 gap-6 p-10">
        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-2xl font-bold">🏛 Story Campaigns</h3>
          <p className="mt-3 text-gray-300">
            Learn history through interactive adventures.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-2xl font-bold">⚔️ Quiz Battles</h3>
          <p className="mt-3 text-gray-300">
            Defeat enemies by answering correctly.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-2xl font-bold">🏆 XP & Rewards</h3>
          <p className="mt-3 text-gray-300">
            Level up and unlock achievements.
          </p>
        </div>
      </section>
    </main>
  );
}