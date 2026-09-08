import { useState, useEffect } from "react";
import {
  Brain, Timer, CheckCircle2, AlertCircle, Award, ArrowRight,
  RefreshCw, Trophy, Code2, Sparkles, Download, Check
} from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const assessmentTracks = [
  {
    id: "python_dsa",
    name: "Python & Algorithms",
    category: "Technical",
    questionsCount: 5,
    duration: "10 mins",
    difficulty: "Intermediate",
    badge: "Python Master",
    questions: [
      {
        id: 1,
        question: "What is the time complexity of searching in a balanced Binary Search Tree (AVL / Red-Black)?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correct: 1,
        explanation: "In a balanced BST, tree height is bounded by O(log n), making search, insertion, and deletion O(log n).",
      },
      {
        id: 2,
        question: "In Python, which built-in data structure implements a hash map with O(1) average lookup?",
        options: ["List", "Tuple", "Dict", "Set"],
        correct: 2,
        explanation: "Python dictionaries (dict) use an internal open-addressing hash table providing amortized O(1) key lookups.",
      },
      {
        id: 3,
        question: "Which decorator is used in Python to define a method bound to the class rather than the instance?",
        options: ["@staticmethod", "@classmethod", "@property", "@abstractmethod"],
        correct: 1,
        explanation: "@classmethod receives the class 'cls' as the first implicit argument rather than the instance 'self'.",
      },
      {
        id: 4,
        question: "What is the primary difference between a process and a thread in modern operating systems?",
        options: [
          "Threads share the same address space; processes have separate address spaces",
          "Processes share memory by default; threads do not",
          "Threads cannot communicate with each other",
          "Processes run faster than threads",
        ],
        correct: 0,
        explanation: "Threads within the same process share heap memory, global variables, and file descriptors, whereas processes have independent virtual memory spaces.",
      },
      {
        id: 5,
        question: "What does the Python GIL (Global Interpreter Lock) prevent?",
        options: [
          "Multiple Python threads from executing bytecode simultaneously on multiple cores",
          "Memory leaks in cyclic object references",
          "Execution of C extensions",
          "I/O-bound concurrency",
        ],
        correct: 0,
        explanation: "CPython's GIL ensures only one native thread executes Python bytecode at any given moment, safeguarding thread safety of the CPython memory management.",
      },
    ],
  },
  {
    id: "fullstack_react",
    name: "React & Modern Web Architecture",
    category: "Frontend",
    questionsCount: 5,
    duration: "10 mins",
    difficulty: "Advanced",
    badge: "React Architect",
    questions: [
      {
        id: 1,
        question: "What is the primary advantage of the React 19 useActionState hook over custom state management?",
        options: [
          "It completely replaces Redux for all scenarios",
          "It handles pending transitions and optimistic updates automatically with form actions",
          "It removes the need for useEffect everywhere",
          "It bypasses DOM rendering",
        ],
        correct: 1,
        explanation: "useActionState streamlines form action handling, tracking isPending states, error boundaries, and optimistic feedback.",
      },
      {
        id: 2,
        question: "Which HTTP header is critical for preventing cross-site scripting (XSS) attacks by restricting script sources?",
        options: ["Access-Control-Allow-Origin", "Content-Security-Policy", "X-Frame-Options", "Strict-Transport-Security"],
        correct: 1,
        explanation: "Content-Security-Policy (CSP) restricts the domains from which scripts, styles, and other resources can be loaded.",
      },
    ],
  },
  {
    id: "aptitude_reasoning",
    name: "Cognitive Aptitude & Logical Reasoning",
    category: "Aptitude",
    questionsCount: 4,
    duration: "8 mins",
    difficulty: "General",
    badge: "Cognitive Ace",
    questions: [
      {
        id: 1,
        question: "A train running at 72 km/h crosses a 200m long platform in 25 seconds. What is the length of the train?",
        options: ["250 meters", "300 meters", "350 meters", "400 meters"],
        correct: 1,
        explanation: "Speed = 72 * (5/18) = 20 m/s. Total distance in 25s = 20 * 25 = 500m. Train length = 500 - 200 = 300 meters.",
      },
    ],
  },
];

export default function SkillAssessment() {
  const [selectedTrack, setSelectedTrack] = useState<any>(assessmentTracks[0]);
  const [testState, setTestState] = useState<"idle" | "active" | "completed">("idle");
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(300); // 5 mins
  const [score, setScore] = useState(0);

  useEffect(() => {
    let timer: any;
    if (testState === "active" && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0 && testState === "active") {
      finishTest();
    }
    return () => clearInterval(timer);
  }, [testState, timeLeft]);

  const startTest = (track: any) => {
    setSelectedTrack(track);
    setSelectedAnswers({});
    setCurrentQIndex(0);
    setTimeLeft(300);
    setTestState("active");
  };

  const handleSelectOption = (optionIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQIndex]: optionIndex,
    });
  };

  const finishTest = () => {
    let correctCount = 0;
    selectedTrack.questions.forEach((q: Question, idx: number) => {
      if (selectedAnswers[idx] === q.correct) {
        correctCount++;
      }
    });
    const finalScore = Math.round((correctCount / selectedTrack.questions.length) * 100);
    setScore(finalScore);
    setTestState("completed");
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? "0" : ""}${remainingSecs}`;
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">AI Skill Assessment Engine</h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">
              Proctored Simulation
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Standardized technical, aptitude, and coding benchmarks calibrated with top tech recruiters (Google, Razorpay, Infosys).
          </p>
        </div>
      </div>

      {testState === "idle" && (
        <div className="space-y-6">
          {/* Track selection cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {assessmentTracks.map((track) => (
              <div
                key={track.id}
                className="glass rounded-2xl p-6 border border-white/8 card-hover flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                      {track.category}
                    </span>
                    <span className="text-xs text-gray-400">{track.difficulty}</span>
                  </div>
                  <h3 className="font-bold text-base text-gray-100">{track.name}</h3>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mt-3">
                    <span className="flex items-center gap-1"><Timer className="w-3.5 h-3.5 text-cyan-400" /> {track.duration}</span>
                    <span className="flex items-center gap-1"><Code2 className="w-3.5 h-3.5 text-purple-400" /> {track.questions.length} Questions</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-green-400 font-medium">Earn: {track.badge}</span>
                  <button
                    onClick={() => startTest(track)}
                    className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-xl hover:opacity-90 transition-all flex items-center gap-1"
                  >
                    Start Test <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Past Certificates & Verified Badges Showcase */}
          <div className="glass rounded-2xl p-6 border border-white/8 space-y-4">
            <h3 className="font-semibold text-base flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" /> Your Verified CampusConnect Badges
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: "Python Core & Algorithms", score: 94, date: "Sep 2025", level: "Gold Tier", color: "from-yellow-500 to-amber-600" },
                { name: "Full Stack React & Node", score: 88, date: "Aug 2025", level: "Silver Tier", color: "from-cyan-500 to-blue-600" },
                { name: "Database & SQL Optimization", score: 91, date: "Jul 2025", level: "Gold Tier", color: "from-indigo-500 to-purple-600" },
              ].map((badge, i) => (
                <div key={i} className="glass p-4 rounded-xl border border-white/5 flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center text-white shadow-lg shrink-0`}>
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-100">{badge.name}</div>
                    <div className="text-[11px] text-gray-400 mt-0.5">Score: {badge.score}/100 · {badge.level}</div>
                    <div className="text-[10px] text-green-400 mt-1">Verified {badge.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {testState === "active" && (
        <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
          {/* Test Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/8">
            <div>
              <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider">{selectedTrack.name}</span>
              <h2 className="text-lg font-bold text-gray-100">
                Question {currentQIndex + 1} of {selectedTrack.questions.length}
              </h2>
            </div>
            <div className="flex items-center gap-2 glass px-3.5 py-1.5 rounded-xl border border-white/10 font-mono text-sm font-bold text-cyan-400">
              <Timer className="w-4 h-4 text-cyan-400 animate-spin" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Current Question */}
          <div className="space-y-4">
            <p className="text-sm sm:text-base font-semibold text-gray-100 leading-relaxed">
              {selectedTrack.questions[currentQIndex].question}
            </p>

            {/* Options */}
            <div className="space-y-2.5 pt-2">
              {selectedTrack.questions[currentQIndex].options.map((option: string, optIdx: number) => {
                const isSelected = selectedAnswers[currentQIndex] === optIdx;
                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all text-xs sm:text-sm font-medium flex items-center justify-between ${
                      isSelected
                        ? "gradient-bg text-white border-transparent shadow-lg shadow-indigo-500/20"
                        : "glass text-gray-300 border-white/8 hover:border-indigo-500/30 hover:bg-white/5"
                    }`}
                  >
                    <span>{option}</span>
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected ? "border-white bg-white/20" : "border-gray-500"
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-white/8">
            <button
              onClick={() => setCurrentQIndex(Math.max(0, currentQIndex - 1))}
              disabled={currentQIndex === 0}
              className="text-xs px-4 py-2 rounded-xl glass border border-white/8 disabled:opacity-30 text-gray-300 font-semibold"
            >
              Previous
            </button>

            {currentQIndex < selectedTrack.questions.length - 1 ? (
              <button
                onClick={() => setCurrentQIndex(currentQIndex + 1)}
                className="gradient-bg text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-all flex items-center gap-1.5"
              >
                Next Question <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={finishTest}
                className="bg-green-600 hover:bg-green-500 text-white text-xs font-semibold px-6 py-2.5 rounded-xl shadow-lg shadow-green-600/20 transition-all flex items-center gap-1.5"
              >
                Submit Test <Check className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {testState === "completed" && (
        <div className="glass-strong rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6 text-center animate-slide-up">
          <div className="w-20 h-20 rounded-2xl mx-auto gradient-bg flex items-center justify-center text-white shadow-2xl shadow-indigo-500/30">
            <Trophy className="w-10 h-10" />
          </div>

          <div>
            <h2 className="text-2xl font-bold">Assessment Completed!</h2>
            <p className="text-xs text-gray-400 mt-1">
              Track: {selectedTrack.name} · Evaluated by CampusConnect AI Engine
            </p>
          </div>

          {/* Score display */}
          <div className="inline-block p-6 glass rounded-2xl border border-white/10">
            <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Your Final Score</span>
            <div className="text-5xl font-extrabold gradient-text my-2">{score}%</div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${
              score >= 80 ? "bg-green-500/20 text-green-400" : score >= 60 ? "bg-yellow-500/20 text-yellow-400" : "bg-red-500/20 text-red-400"
            }`}>
              {score >= 80 ? "Certified Industry Ready · Gold Badge" : "Passed · Intermediate Tier"}
            </span>
          </div>

          {/* AI Feedback & Review */}
          <div className="max-w-2xl mx-auto text-left glass rounded-2xl p-5 border border-white/8 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> AI Diagnostic Feedback
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              {score >= 80
                ? "Outstanding theoretical grounding and algorithmic intuition! Your score demonstrates high readiness for FAANG and high-growth unicorn recruitment benchmarks."
                : "Good foundational attempt. We recommend reviewing balanced search trees and thread concurrency primitives to elevate your readiness score."}
            </p>
          </div>

          {/* Certificate Generation Preview */}
          <div className="max-w-md mx-auto glass p-5 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-yellow-400">Verifiable Digital Certificate</span>
              <span className="text-[10px] text-gray-400 font-mono">ID: CC-CERT-2026-{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
            <p className="text-xs text-gray-300">
              Awarded to <strong className="text-white">Rahul Sharma</strong> for demonstrating proficiency in {selectedTrack.name}.
            </p>
            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={() => alert("Certificate downloaded as PDF!")}
                className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 hover:opacity-90"
              >
                <Download className="w-3.5 h-3.5" /> Download Certificate (PDF)
              </button>
            </div>
          </div>

          <div>
            <button
              onClick={() => setTestState("idle")}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 mx-auto"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Back to All Assessment Tracks
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
