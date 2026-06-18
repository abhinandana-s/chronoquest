"use client";

import { useState } from "react";

export default function QuizBattle() {
  const [hp, setHp] = useState(100);
const [xp, setXp] = useState(0);
const [message, setMessage] = useState("");

  const handleAnswer = (correct: boolean) => {
    if (correct) {
        setHp(hp - 25);
        setXp(xp + 10);
        setMessage("⚔️ Direct Hit! +10 XP");
} else {
      setMessage("❌ Wrong Answer!");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">
      
      <div className="bg-slate-800 p-6 rounded-xl max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">
        ⚔️ Quiz Battle
      </h1>
        {hp <= 0 && (
  <div className="mt-6 p-4 bg-green-700 rounded-lg">
    <h2 className="text-2xl font-bold">
      🎉 Victory!
    </h2>

    <p>You defeated the Pharaoh.</p>
    <p>Total XP Earned: {xp}</p>
  </div>
)}
        <h2 className="text-2xl font-bold">
            Enemy Pharaoh HP: {hp}
        </h2>

        <p className="mt-2 text-yellow-400 font-bold">
            XP Earned: {xp}
        </p>

        <div className="w-full bg-gray-700 rounded-full h-6 mt-4">
          <div
            className="bg-red-500 h-6 rounded-full"
            style={{ width: `${hp}%` }}
          />
        </div>

        <div className="mt-8">
          <h3 className="text-xl mb-4">
            Which river was central to Ancient Egyptian civilization?
          </h3>

          <div className="space-y-3">
            <button
              onClick={() => handleAnswer(true)}
              className="block w-full bg-blue-600 p-3 rounded"
            >
              Nile River
            </button>

            <button
              onClick={() => handleAnswer(false)}
              className="block w-full bg-blue-600 p-3 rounded"
            >
              Amazon River
            </button>

            <button
              onClick={() => handleAnswer(false)}
              className="block w-full bg-blue-600 p-3 rounded"
            >
              Ganges River
            </button>

            <button
              onClick={() => handleAnswer(false)}
              className="block w-full bg-blue-600 p-3 rounded"
            >
              Mississippi River
            </button>
          </div>
        </div>

        <p className="mt-6 text-yellow-400">
          {message}
        </p>

      </div>
    </main>
  );
}