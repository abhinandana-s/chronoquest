import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-slate-900 text-white">

      <Link href="/">
        <h1 className="text-2xl font-bold">
          ⚔️ ChronoQuest
        </h1>
      </Link>

      <div className="flex gap-4">
        <Link href="/campaigns">Campaigns</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/achievements">Achievements</Link>
        <Link href="/daily">Daily</Link>
      </div>

    </nav>
  );
}
