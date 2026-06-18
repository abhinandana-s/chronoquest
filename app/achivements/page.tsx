import Navbar from "@/components/Navbar";
import { achievements } from "@/lib/achievements";
<Navbar />
export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-8">
        🏆 Achievements
      </h1>

      <div className="grid gap-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="bg-slate-800 p-6 rounded-xl"
          >
            <h2 className="text-2xl font-bold">
              {achievement.title}
            </h2>

            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}