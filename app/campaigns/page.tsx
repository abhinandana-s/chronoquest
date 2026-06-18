import Link from "next/link";

export default function Campaigns() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        History Campaigns
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <Link href="/campaign/egypt">
          <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 cursor-pointer">
            <h2 className="text-2xl font-bold">
              🏛 Ancient Egypt
            </h2>

            <p className="mt-3">
              Discover pyramids and pharaohs.
            </p>
          </div>
        </Link>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">
            🇮🇳 Indian Freedom Struggle
          </h2>

          <p className="mt-3">
            Follow the journey to independence.
          </p>
        </div>

      </div>
    </main>
  );
}