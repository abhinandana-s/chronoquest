import Navbar from "@/components/Navbar";
<Navbar />
export default function DailyChallenge() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-8">
        🔥 Daily Challenge
      </h1>

      <div className="bg-slate-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold">
          Answer 3 Questions Today
        </h2>

        <p className="mt-4">
          Reward: +50 XP
        </p>
      </div>

    </main>
  );
}