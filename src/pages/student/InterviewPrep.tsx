import { useState } from "react";
import {
  MessageSquare, Sparkles, Mic, Play, Pause, CheckCircle2,
  AlertCircle, ArrowRight, RefreshCw, BarChart2, ShieldCheck, Star
} from "lucide-react";

interface InterviewQuestion {
  id: number;
  type: "Technical" | "HR" | "System Design";
  question: string;
  recommendedKeywords: string[];
  sampleAnswerHint: string;
}

const mockQuestions: InterviewQuestion[] = [
  {
    id: 1,
    type: "Technical",
    question: "Explain how database indexing works internally (B-Tree vs Hash index) and when you would choose one over the other.",
    recommendedKeywords: ["B-Tree", "Logarithmic search", "Range queries", "Hash collisions", "O(1) exact match"],
    sampleAnswerHint: "Mention that B-Trees support efficient range scans (BETWEEN, <, >) via sorted linked leaf nodes, while Hash indexes excel strictly at point lookups (=).",
  },
  {
    id: 2,
    type: "HR",
    question: "Tell me about a time when a team project had conflicting technical opinions and how you navigated to a consensus.",
    recommendedKeywords: ["STAR method", "Data-driven benchmarking", "Active listening", "Team alignment"],
    sampleAnswerHint: "Structure with Situation, Task, Action, and measurable Result. Highlight using proof-of-concept benchmarks rather than emotional arguments.",
  },
  {
    id: 3,
    type: "System Design",
    question: "How would you design a distributed URL shortener service (like Bitly) capable of 100M new URLs per day?",
    recommendedKeywords: ["Base62 encoding", "KGS (Key Generation Service)", "Redis cache", "Read-heavy ratio", "Consistent hashing"],
    sampleAnswerHint: "Calculate read:write ratio (10:1), estimate storage over 5 years, propose pre-generated Base62 hashes with a counter or Redis cluster.",
  },
];

export default function InterviewPrep() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<any>(null);

  const currentQ = mockQuestions[currentIdx];

  const handleEvaluate = () => {
    if (!userAnswer.trim()) return;
    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
      setEvaluationResult({
        communicationScore: 88,
        technicalAccuracy: 92,
        confidenceLevel: 85,
        matchedKeywords: currentQ.recommendedKeywords.slice(0, 3),
        suggestions: [
          "Great articulation of core tradeoffs and clear delivery structure!",
          "Consider expanding on edge cases such as memory footprint under heavy traffic spikes.",
        ],
      });
    }, 1200);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % mockQuestions.length);
    setUserAnswer("");
    setEvaluationResult(null);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">AI Mock Interview Preparation Suite</h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-semibold border border-purple-500/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Voice & Text Diagnostic
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Simulate realistic interviews for SDE, Data, and Core roles. Get real-time scores on communication clarity, keyword coverage, and confidence.
          </p>
        </div>
      </div>

      {/* Main Simulation Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Question & Answer Pad (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="glass rounded-3xl p-6 border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                currentQ.type === "Technical"
                  ? "bg-indigo-500/20 text-indigo-300"
                  : currentQ.type === "HR"
                  ? "bg-purple-500/20 text-purple-300"
                  : "bg-cyan-500/20 text-cyan-300"
              }`}>
                {currentQ.type} Interview Question
              </span>
              <span className="text-xs text-gray-400">Question {currentIdx + 1} of {mockQuestions.length}</span>
            </div>

            <h3 className="text-base font-bold text-gray-100 leading-relaxed">
              {currentQ.question}
            </h3>

            {/* Hint accord */}
            <div className="p-3 rounded-xl glass border border-white/5 text-xs text-gray-400 space-y-1">
              <span className="text-gray-300 font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-yellow-400" /> AI Formulation Hint:
              </span>
              <p>{currentQ.sampleAnswerHint}</p>
            </div>

            {/* Response area */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs text-gray-400 font-medium">Your Response / Speech Transcription</label>
                <button
                  onClick={() =>
                    setUserAnswer(
                      "In a relational database, B-Trees store data in sorted hierarchical nodes with balanced height, allowing O(log n) lookups and efficient range scans between ranges. A hash index uses an internal hash function for O(1) exact lookups, but does not support range queries."
                    )
                  }
                  className="text-[11px] text-indigo-400 hover:text-indigo-300 font-medium"
                >
                  Insert Sample Answer
                </button>
              </div>

              <textarea
                rows={5}
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Type your structured answer here or speak..."
                className="w-full glass p-3.5 rounded-2xl text-xs border border-white/10 outline-none text-gray-200 focus:border-indigo-500 leading-relaxed"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => alert("Simulated mic input active. Speak into microphone.")}
                  className="glass p-2 rounded-xl text-gray-300 hover:text-white border border-white/10"
                  title="Speech-to-text"
                >
                  <Mic className="w-4 h-4 text-red-400 animate-pulse" />
                </button>
                <span className="text-[11px] text-gray-500">Audio ready</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleEvaluate}
                  disabled={!userAnswer.trim() || isEvaluating}
                  className="gradient-bg text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 disabled:opacity-30 shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-1.5"
                >
                  {isEvaluating ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                  <span>{isEvaluating ? "Analyzing..." : "Evaluate with AI"}</span>
                </button>

                <button
                  onClick={handleNext}
                  className="glass px-3.5 py-2.5 rounded-xl text-xs font-semibold text-gray-300 hover:text-white border border-white/10 flex items-center gap-1"
                >
                  <span>Next</span> <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* AI Real-time Diagnostics (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          {evaluationResult ? (
            <div className="glass-strong rounded-3xl p-6 border border-white/10 space-y-5 animate-slide-up bg-gradient-to-br from-indigo-950/30 to-purple-950/20">
              <div className="flex items-center justify-between pb-3 border-b border-white/8">
                <h3 className="font-bold text-sm text-gray-100 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-400" /> AI Diagnostic Scorecard
                </h3>
                <span className="text-xs font-bold text-green-400">Excellent</span>
              </div>

              {/* Meters */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Communication & Clarity</span>
                    <span className="font-bold text-indigo-400">{evaluationResult.communicationScore}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full gradient-bg" style={{ width: `${evaluationResult.communicationScore}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Technical Accuracy</span>
                    <span className="font-bold text-cyan-400">{evaluationResult.technicalAccuracy}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400" style={{ width: `${evaluationResult.technicalAccuracy}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Confidence Meter</span>
                    <span className="font-bold text-yellow-400">{evaluationResult.confidenceLevel}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400" style={{ width: `${evaluationResult.confidenceLevel}%` }} />
                  </div>
                </div>
              </div>

              {/* Matched Keywords */}
              <div className="space-y-2 pt-2 border-t border-white/5">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                  Matched Industry Keywords:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {evaluationResult.matchedKeywords.map((kw: string, i: number) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-green-500/20 text-green-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5" /> {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Suggestions */}
              <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs text-gray-300">
                <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider block">
                  Actionable Tips:
                </span>
                {evaluationResult.suggestions.map((s: string, idx: number) => (
                  <p key={idx} className="text-[11px] text-gray-400 leading-relaxed">• {s}</p>
                ))}
              </div>
            </div>
          ) : (
            <div className="glass rounded-3xl p-6 border border-white/8 space-y-4 text-center text-gray-400">
              <div className="w-14 h-14 rounded-2xl mx-auto glass flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                <BarChart2 className="w-7 h-7" />
              </div>
              <h4 className="font-semibold text-sm text-gray-200">Awaiting Your Response</h4>
              <p className="text-xs leading-relaxed max-w-xs mx-auto">
                Submit an answer or load the sample answer to see live AI communication scores, confidence meters, and recruiter keyword matches.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
