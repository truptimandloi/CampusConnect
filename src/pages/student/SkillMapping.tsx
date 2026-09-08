import { useState } from "react";
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts";
import {
  Brain, TrendingUp, AlertCircle, CheckCircle2, ArrowRight,
  BookOpen, Sparkles, Sliders, Target, ShieldCheck, DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";

interface RoleBenchmark {
  role: string;
  overallMatch: number;
  expectedSalary: string;
  growth: string;
  radar: { skill: string; student: number; benchmark: number }[];
  gaps: { skill: string; student: number; benchmark: number; gap: number; priority: "High" | "Medium" | "Low" }[];
  recommendations: { title: string; platform: string; duration: string; boost: string }[];
}

const roleBenchmarks: Record<string, RoleBenchmark> = {
  "Software Developer": {
    role: "Software Developer",
    overallMatch: 83,
    expectedSalary: "₹8L – ₹18L / annum",
    growth: "+24% CAGR",
    radar: [
      { skill: "Python", student: 85, benchmark: 75 },
      { skill: "React.js", student: 82, benchmark: 70 },
      { skill: "SQL", student: 60, benchmark: 75 },
      { skill: "Data Structures", student: 88, benchmark: 80 },
      { skill: "System Design", student: 55, benchmark: 65 },
      { skill: "Git / CI/CD", student: 90, benchmark: 75 },
    ],
    gaps: [
      { skill: "SQL & Query Tuning", student: 60, benchmark: 75, gap: -15, priority: "High" },
      { skill: "System Design Basics", student: 55, benchmark: 65, gap: -10, priority: "High" },
      { skill: "Python", student: 85, benchmark: 75, gap: 10, priority: "Low" },
      { skill: "React.js", student: 82, benchmark: 70, gap: 12, priority: "Low" },
      { skill: "Data Structures", student: 88, benchmark: 80, gap: 8, priority: "Low" },
    ],
    recommendations: [
      { title: "Advanced SQL Window Functions & Indexing", platform: "Coursera", duration: "12 hours", boost: "+7% Match" },
      { title: "Distributed Systems & System Design Primer", platform: "YouTube", duration: "15 hours", boost: "+8% Match" },
      { title: "Microservices Architecture with Docker", platform: "NPTEL", duration: "20 hours", boost: "+5% Match" },
    ],
  },
  "AI & ML Engineer": {
    role: "AI & ML Engineer",
    overallMatch: 76,
    expectedSalary: "₹12L – ₹28L / annum",
    growth: "+42% CAGR",
    radar: [
      { skill: "Python", student: 85, benchmark: 90 },
      { skill: "Math & Stats", student: 72, benchmark: 85 },
      { skill: "PyTorch/TF", student: 65, benchmark: 80 },
      { skill: "Data Structures", student: 88, benchmark: 75 },
      { skill: "MLOps", student: 45, benchmark: 70 },
      { skill: "Data Wrangling", student: 80, benchmark: 85 },
    ],
    gaps: [
      { skill: "MLOps & Model Serving", student: 45, benchmark: 70, gap: -25, priority: "High" },
      { skill: "PyTorch & Deep Learning", student: 65, benchmark: 80, gap: -15, priority: "High" },
      { skill: "Mathematics & Linear Algebra", student: 72, benchmark: 85, gap: -13, priority: "Medium" },
      { skill: "Data Structures", student: 88, benchmark: 75, gap: 13, priority: "Low" },
    ],
    recommendations: [
      { title: "End-to-End MLOps with MLflow & Docker", platform: "Coursera", duration: "18 hours", boost: "+12% Match" },
      { title: "Deep Learning Specialization by Andrew Ng", platform: "Coursera", duration: "35 hours", boost: "+9% Match" },
    ],
  },
  "Data Scientist / Analyst": {
    role: "Data Scientist / Analyst",
    overallMatch: 86,
    expectedSalary: "₹7L – ₹16L / annum",
    growth: "+28% CAGR",
    radar: [
      { skill: "Python", student: 85, benchmark: 80 },
      { skill: "SQL", student: 60, benchmark: 85 },
      { skill: "Data Visualization", student: 80, benchmark: 75 },
      { skill: "Statistics", student: 72, benchmark: 75 },
      { skill: "Pandas/NumPy", student: 90, benchmark: 80 },
      { skill: "Business Sense", student: 75, benchmark: 70 },
    ],
    gaps: [
      { skill: "Advanced SQL & Warehousing", student: 60, benchmark: 85, gap: -25, priority: "High" },
      { skill: "Statistics & Hypothesis Testing", student: 72, benchmark: 75, gap: -3, priority: "Low" },
      { skill: "Pandas & Data Cleaning", student: 90, benchmark: 80, gap: 10, priority: "Low" },
    ],
    recommendations: [
      { title: "SQL for Data Science Bootcamp", platform: "Coursera", duration: "10 hours", boost: "+11% Match" },
      { title: "Applied Statistics for Industry Analytics", platform: "NPTEL", duration: "25 hours", boost: "+6% Match" },
    ],
  },
};

export default function SkillMapping() {
  const [selectedRoleKey, setSelectedRoleKey] = useState("Software Developer");
  const benchmark = roleBenchmarks[selectedRoleKey];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Top Header & Role Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">AI Skill Mapping & Live Gap Engine</h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-indigo-400" /> AI Diagnostic Engine
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Real-time multi-dimensional normalization comparing your competencies against live hiring specs.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 font-medium">Target Role:</span>
          <select
            value={selectedRoleKey}
            onChange={(e) => setSelectedRoleKey(e.target.value)}
            className="glass text-xs font-semibold px-3 py-2 rounded-xl text-indigo-300 border border-white/10 outline-none bg-slate-900 cursor-pointer"
          >
            <option value="Software Developer">Software Developer</option>
            <option value="AI & ML Engineer">AI & ML Engineer</option>
            <option value="Data Scientist / Analyst">Data Scientist / Analyst</option>
          </select>
        </div>
      </div>

      {/* Main Matching KPI Card */}
      <div className="glass rounded-3xl p-6 border border-indigo-500/20 bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900/60 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          {/* Overall Match */}
          <div className="text-center md:text-left space-y-1">
            <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Overall AI Match</span>
            <div className="text-5xl font-extrabold gradient-text">{benchmark.overallMatch}%</div>
            <div className="text-xs text-green-400 font-semibold flex items-center justify-center md:justify-start gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> High Interview Probability
            </div>
          </div>

          {/* Key Strengths */}
          <div className="space-y-1.5 border-l border-white/5 pl-4">
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">
              Core Strengths (+Δ)
            </span>
            {benchmark.gaps
              .filter((g) => g.gap >= 0)
              .slice(0, 3)
              .map((s, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-green-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{s.skill} (+{s.gap}%)</span>
                </div>
              ))}
          </div>

          {/* Identified Skill Gaps */}
          <div className="space-y-1.5 border-l border-white/5 pl-4">
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">
              Identified Skill Gaps (-Δ)
            </span>
            {benchmark.gaps
              .filter((g) => g.gap < 0)
              .map((g, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-red-400 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{g.skill} ({g.gap}%)</span>
                </div>
              ))}
          </div>

          {/* Market Value & Salary */}
          <div className="space-y-2 border-l border-white/5 pl-4">
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">
              Market CTC Benchmark
            </span>
            <div className="text-base font-bold text-white flex items-center gap-1">
              <DollarSign className="w-4 h-4 text-green-400" />
              <span>{benchmark.expectedSalary}</span>
            </div>
            <div className="text-[11px] text-indigo-300 font-medium">
              Growth: {benchmark.growth}
            </div>
            <div className="text-[10px] text-green-400">
              Potential +₹3.5 LPA once High Priority gaps are closed
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row: Radar Chart + Skill Gap Bars */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Radar Chart (6 cols) */}
        <div className="lg:col-span-6 glass rounded-2xl p-6 border border-white/8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-gray-100 flex items-center gap-2">
              <Brain className="w-4 h-4 text-indigo-400" /> Skill Competency Radar
            </h3>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1 text-indigo-400 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" /> Your Score
              </span>
              <span className="flex items-center gap-1 text-cyan-400 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" /> Recruiter Benchmark
              </span>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={benchmark.radar}>
                <PolarGrid stroke="rgba(255,255,255,0.08)" />
                <PolarAngleAxis dataKey="skill" tick={{ fill: "#9ca3af", fontSize: 11 }} />
                <Radar
                  name="Student Skill"
                  dataKey="student"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={0.4}
                />
                <Radar
                  name="Industry Benchmark"
                  dataKey="benchmark"
                  stroke="#06b6d4"
                  fill="#06b6d4"
                  fillOpacity={0.15}
                  strokeDasharray="4 4"
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Skill Gap Analysis Progress Bars (6 cols) */}
        <div className="lg:col-span-6 glass rounded-2xl p-6 border border-white/8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-gray-100 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" /> Granular Gap Breakdown
            </h3>
            <span className="text-[11px] text-gray-500">Live delta calculation</span>
          </div>

          <div className="space-y-3.5 pt-1">
            {benchmark.gaps.map((item, idx) => (
              <div key={idx} className="space-y-1 text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-200">{item.skill}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">{item.student}% vs {item.benchmark}% req</span>
                    <span
                      className={`font-bold px-1.5 py-0.5 rounded text-[10px] ${
                        item.gap >= 0
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {item.gap >= 0 ? `+${item.gap}%` : `${item.gap}%`}
                    </span>
                  </div>
                </div>

                <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      item.gap >= 0 ? "gradient-bg" : "bg-gradient-to-r from-red-500 to-orange-500"
                    }`}
                    style={{ width: `${item.student}%` }}
                  />
                  {/* Marker line for benchmark */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-cyan-400 z-10"
                    style={{ left: `${item.benchmark}%` }}
                    title={`Benchmark: ${item.benchmark}%`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Targeted Course Recommendations to Close Gaps */}
      <div className="glass rounded-2xl p-6 border border-white/8 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-sm text-gray-100 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-400" /> Recommended Action Items to Close {selectedRoleKey} Gaps
          </h3>
          <Link
            to="/student/roadmap"
            className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
          >
            View Full Learning Roadmap <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {benchmark.recommendations.map((rec, i) => (
            <div key={i} className="glass p-4 rounded-xl border border-white/5 card-hover flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-semibold">{rec.platform}</span>
                  <span className="text-green-400 font-bold">{rec.boost}</span>
                </div>
                <h4 className="font-semibold text-xs text-gray-200 mt-2 leading-relaxed">{rec.title}</h4>
                <span className="text-[11px] text-gray-500 mt-1 block">Est. Duration: {rec.duration}</span>
              </div>

              <a
                href="https://coursera.org"
                target="_blank"
                rel="noreferrer"
                className="gradient-bg text-white text-xs font-semibold py-1.5 px-3 rounded-lg text-center hover:opacity-90 transition-all flex items-center justify-center gap-1"
              >
                Enroll Now <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
