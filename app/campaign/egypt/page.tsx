<Navbar />
import Navbar from "@/components/Navbar";
import Link from "next/link";
export default function EgyptCampaign() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-6">
        🏛 Ancient Egypt
      </h1>

      <div className="bg-slate-800 p-8 rounded-xl max-w-4xl">

        <h2 className="text-2xl font-bold mb-4">
          Chapter 1: The Rise of the Pharaohs
        </h2>

        <p className="text-lg text-gray-300">
          You have traveled back 4,500 years into Ancient Egypt.
          The mighty Pharaoh rules the kingdom and massive pyramids
          are being constructed along the Nile River.
        </p>

        <Link href="/campaign/egypt/quiz">
  <button className="mt-8 px-6 py-3 bg-yellow-500 text-black rounded-lg font-bold">
    Start Quiz Battle
  </button>
</Link>
      </div>

    </main>
  );
}