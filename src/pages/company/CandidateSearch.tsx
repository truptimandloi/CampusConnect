import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users, Search, Filter, Star, Sparkles, CheckCircle2,
  Calendar, Mail, ExternalLink, GraduationCap, Award, ChevronRight
} from "lucide-react";

interface Candidate {
  id: number;
  name: string;
  college: string;
  branch: string;
  cgpa: number;
  score: number;
  avatar: string;
  status: "Applied" | "Shortlisted" | "Interview";
  skills: string[];
  reasons: string[];
  portfolioId: string;
}

export default function CandidateSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("All");
  const [minCgpa, setMinCgpa] = useState(8.0);

  const [candidatesList, setCandidatesList] = useState<Candidate[]>([
    {
      id: 1,
      name: "Rahul Sharma",
      college: "IIT Delhi",
      branch: "Computer Science",
      cgpa: 8.92,
      score: 92,
      avatar: "RS",
      status: "Interview",
      skills: ["Python", "React", "PostgreSQL", "Docker", "Algorithms"],
      reasons: ["Top 3% in National DSA Assessment", "National Hackathon Finalist", "Strong Python & Async Webhooks"],
      portfolioId: "rahul",
    },
    {
      id: 2,
      name: "Priya Patel",
      college: "IIT Bombay",
      branch: "Computer Science",
      cgpa: 9.15,
      score: 89,
      avatar: "PP",
      status: "Shortlisted",
      skills: ["React", "TypeScript", "Node.js", "Redis"],
      reasons: ["Excellent React Component Architecture", "4+ Stars on CodeChef", "Published WebSockets Library"],
      portfolioId: "priya",
    },
    {
      id: 3,
      name: "Ankit Verma",
      college: "BITS Pilani",
      branch: "Electrical & Electronics",
      cgpa: 8.65,
      score: 86,
      avatar: "AV",
      status: "Shortlisted",
      skills: ["Java", "Spring Boot", "Docker", "Kubernetes"],
      reasons: ["Strong Backend & Concurrency Mastery", "Hackathon Winner", "Cleared AWS Cloud Practitioner"],
      portfolioId: "ankit",
    },
    {
      id: 4,
      name: "Neha Gupta",
      college: "NIT Trichy",
      branch: "Information Technology",
      cgpa: 8.8,
      score: 84,
      avatar: "NG",
      status: "Applied",
      skills: ["Python", "Machine Learning", "NLP", "FastAPI"],
      reasons: ["NLP Sentiment Pipeline Experience", "High Problem Solving Consistency"],
      portfolioId: "neha",
    },
    {
      id: 5,
      name: "Rohan Gupta",
      college: "IIIT Hyderabad",
      branch: "Computer Science",
      cgpa: 9.3,
      score: 81,
      avatar: "RG",
      status: "Applied",
      skills: ["C++", "DSA", "Distributed Systems", "SQL"],
      reasons: ["Outstanding Algorithmic Depth", "Rank 15 in University ACM-ICPC Local Round"],
      portfolioId: "rohan",
    },
  ]);

  const filtered = candidatesList.filter((c) => {
    const matchesQuery =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCollege = selectedCollege === "All" || c.college === selectedCollege;
    const matchesCgpa = c.cgpa >= minCgpa;
    return matchesQuery && matchesCollege && matchesCgpa;
  });

  const toggleStatus = (id: number, newStatus: Candidate["status"]) => {
    setCandidatesList(
      candidatesList.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">Smart Candidate Discovery & AI Ranking</h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">
              Explainable AI Match
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Instead of scanning 500 resumes manually, our algorithm evaluates skill gaps, projects, and assessments to rank the top 1% applicants.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="glass rounded-2xl p-4 border border-white/8 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search candidate name or skills (e.g. React, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass pl-9 pr-3 py-2 rounded-xl text-xs border border-white/10 outline-none text-white focus:border-indigo-500"
            />
          </div>

          <div>
            <select
              value={selectedCollege}
              onChange={(e) => setSelectedCollege(e.target.value)}
              className="w-full glass px-3 py-2 rounded-xl text-xs border border-white/10 outline-none text-gray-200 bg-slate-900"
            >
              <option value="All">All Universities (IITs, NITs, BITS)</option>
              <option value="IIT Delhi">IIT Delhi</option>
              <option value="IIT Bombay">IIT Bombay</option>
              <option value="BITS Pilani">BITS Pilani</option>
              <option value="NIT Trichy">NIT Trichy</option>
              <option value="IIIT Hyderabad">IIIT Hyderabad</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 whitespace-nowrap">Min CGPA: {minCgpa}</span>
            <input
              type="range"
              min="7.0"
              max="9.5"
              step="0.1"
              value={minCgpa}
              onChange={(e) => setMinCgpa(Number(e.target.value))}
              className="w-full accent-indigo-500 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Candidates List with AI Explainability */}
      <div className="space-y-4">
        {filtered.map((c, idx) => (
          <div
            key={c.id}
            className="glass rounded-2xl p-5 border border-white/8 card-hover space-y-4"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center text-xs font-bold text-white shrink-0 mt-1">
                  #{idx + 1}
                </div>

                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center font-bold text-white shadow-lg shrink-0">
                  {c.avatar}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base text-gray-100">{c.name}</h3>
                    <span className="text-xs text-indigo-300 font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                      {c.college}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {c.branch} · CGPA: <strong className="text-white">{c.cgpa}</strong>
                  </div>
                </div>
              </div>

              {/* AI Score pill & Actions */}
              <div className="flex items-center gap-4 self-end md:self-auto">
                <div className="text-right">
                  <div className="text-2xl font-extrabold gradient-text">{c.score}%</div>
                  <span className="text-[10px] text-gray-400 font-medium">AI Match Fit</span>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    to={`/portfolio/${c.portfolioId}`}
                    className="glass px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-300 hover:text-white border border-white/10 flex items-center gap-1"
                  >
                    <span>Portfolio</span> <ExternalLink className="w-3 h-3" />
                  </Link>

                  {c.status !== "Interview" && (
                    <button
                      onClick={() => toggleStatus(c.id, "Interview")}
                      className="gradient-bg text-white text-xs font-semibold px-3.5 py-1.5 rounded-xl hover:opacity-90 shadow-md shadow-indigo-500/20"
                    >
                      Invite to Interview
                    </button>
                  )}

                  {c.status === "Interview" && (
                    <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                      Interview Active
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* AI Explainability Reasoning Box */}
            <div className="p-3.5 rounded-xl glass border border-indigo-500/20 bg-indigo-500/[0.02] space-y-2">
              <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Why AI Ranked This Candidate High:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {c.reasons.map((reason, rIdx) => (
                  <div key={rIdx} className="flex items-center gap-1.5 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {c.skills.map((s, sIdx) => (
                <span key={sIdx} className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-gray-300 font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
