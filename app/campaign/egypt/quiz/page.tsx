
import Navbar from "@/components/Navbar";"use client";
<Navbar />
import { useState, useEffect } from "react";
import { egyptQuestions } from "@/lib/questions";
import { saveXP, getXP } from "@/lib/storage";
export default function QuizBattle() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [xp, setXp] = useState(0);
  const [hp, setHp] = useState(100);
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
  setXp(getXP());
}, []);
  const question = egyptQuestions[currentQuestion];

  const handleAnswer = (selected: string) => {
    if (selected === question.answer) {
      const newXP = xp + 10;
      setXp(newXP);
      saveXP(newXP);
      setHp((prev) => prev - 34);
    }

    if (currentQuestion + 1 < egyptQuestions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  if (completed) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">🎉 Campaign Complete!</h1>

        <p className="mt-6 text-2xl">
          Total XP Earned: {xp}
        </p>

        <p className="mt-4 text-yellow-400">
          🏛 Achievement Unlocked: Egypt Explorer
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-4">
        ⚔️ Quiz Battle
      </h1>

      <p className="mb-2">
        Question {currentQuestion + 1} / {egyptQuestions.length}
      </p>

      <p className="text-yellow-400 font-bold mb-2">
        XP: {xp}
      </p>

      <p className="text-red-400 font-bold mb-6">
        Enemy HP: {hp}
      </p>

      <div className="bg-slate-800 p-8 rounded-xl max-w-3xl">

        <h2 className="text-2xl font-bold mb-6">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="w-full bg-blue-600 hover:bg-blue-500 p-3 rounded-lg"
            >
              {option}
            </button>
          ))}
        </div>

      </div>

    </main>
  );
}