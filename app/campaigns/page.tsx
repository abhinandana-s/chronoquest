import Navbar from "@/components/Navbar";
import { campaigns } from "@/lib/data";
import Link from "next/link";
<Navbar />
export default function Campaigns() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        History Campaigns
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {campaigns.map((campaign) => (
          <Link
            key={campaign.id}
            href={
              campaign.id === "egypt"
                ? "/campaign/egypt"
                : "#"
            }
          >
            <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 cursor-pointer transition">
              <h2 className="text-2xl font-bold">
                {campaign.icon} {campaign.title}
              </h2>

              <p className="mt-3">
                {campaign.description}
              </p>

              <p className="mt-4 text-yellow-400 font-bold">
                Reward: {campaign.xpReward} XP
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}