export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">⚔️ ChronoQuest</h1>

      <p className="mt-4 text-xl text-gray-300">
        Travel Through Time. Learn Through Adventure.
      </p>

      <button className="mt-8 px-6 py-3 bg-yellow-500 text-black rounded-lg font-bold">
        Start Quest
      </button>
    </main>
  );
}