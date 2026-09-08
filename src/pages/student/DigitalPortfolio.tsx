import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Brain, Sparkles, CheckCircle2, QrCode,
  ExternalLink, Download, Award, Briefcase, GraduationCap,
  Code2, Share2, Copy, Check
} from "lucide-react";
import { Github, Linkedin } from "../../components/BrandIcons";

export default function DigitalPortfolio() {
  const [copied, setCopied] = useState(false);

  const copyShareLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen mesh-bg text-gray-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Top bar with back to app and share button */}
        <div className="flex items-center justify-between">
          <Link
            to="/student"
            className="text-xs font-semibold text-gray-400 hover:text-white flex items-center gap-1.5 glass px-3 py-1.5 rounded-xl border border-white/8"
          >
            ← Back to Student Portal
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={copyShareLink}
              className="gradient-bg text-white text-xs font-semibold px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg shadow-indigo-500/20 hover:opacity-90 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-300" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Link Copied!" : "Share Portfolio"}</span>
            </button>
          </div>
        </div>

        {/* Hero Header Card */}
        <div className="glass-strong rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="relative">
              <div className="w-28 h-28 rounded-2xl gradient-bg flex items-center justify-center text-4xl font-bold shadow-2xl shadow-indigo-500/30">
                RS
              </div>
              <div className="absolute -bottom-2 -right-2 p-1.5 bg-green-500 rounded-full border-4 border-slate-900" title="CampusConnect Verified Candidate" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                <h1 className="text-3xl font-bold">Rahul Sharma</h1>
                <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-green-400" /> Enterprise Verified Talent
                </span>
              </div>
              <p className="text-gray-300 text-sm mt-1 font-medium">
                B.Tech in Computer Science & Engineering · IIT Delhi (Class of 2026)
              </p>
              <p className="text-xs text-gray-400 mt-2 max-w-xl leading-relaxed">
                Aspiring Full-Stack Software Developer & ML Systems Engineer. Passionate about distributed microservices, low-latency APIs, and AI-driven automation workflows.
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="glass px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 hover:border-indigo-500/40 text-gray-300"
                >
                  <Github className="w-3.5 h-3.5" /> GitHub (340+ commits)
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="glass px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 hover:border-indigo-500/40 text-gray-300"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" /> LinkedIn
                </a>
                <a
                  href="#resume"
                  className="glass px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 hover:border-indigo-500/40 text-cyan-300"
                >
                  <Download className="w-3.5 h-3.5" /> Download Verified ATS CV
                </a>
              </div>
            </div>

            {/* QR Verification Badge */}
            <div className="glass p-3 rounded-2xl border border-white/8 text-center shrink-0 hidden md:block">
              <div className="w-20 h-20 mx-auto bg-white rounded-xl p-1.5 flex items-center justify-center shadow-inner">
                {/* SVG QR representation */}
                <svg viewBox="0 0 24 24" className="w-full h-full text-slate-900" fill="currentColor">
                  <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14-2h4v2h-4v-2zm-4 0h2v4h-2v-4zm4 4h4v4h-4v-4zm-4 2h2v2h-2v-2zm-6-8h2v2H8v-2zm4 0h2v2h-2v-2z" />
                </svg>
              </div>
              <span className="text-[10px] text-gray-400 block mt-1.5 font-mono">CC-ID: IITD-8821</span>
              <span className="text-[9px] text-green-400 font-bold block">Cryptographically Signed</span>
            </div>
          </div>
        </div>

        {/* AI Readiness Score Breakdown */}
        <div className="glass rounded-3xl p-6 border border-white/10 space-y-4 bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900/60">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold flex items-center gap-2 text-indigo-300">
                <Brain className="w-5 h-5 text-indigo-400" /> AI Placement Readiness Score
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Evaluated by CampusConnect Multi-Factor Algorithm
              </p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-extrabold gradient-text">83 / 100</span>
              <span className="block text-[10px] text-green-400 font-bold">Top 3% Nationwide</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {[
              { label: "Skills Proficiency", score: "88%", weight: "35% wt" },
              { label: "Engineering Projects", score: "85%", weight: "25% wt" },
              { label: "Academic CGPA", score: "89%", weight: "15% wt" },
              { label: "Coding Assessments", score: "92%", weight: "25% wt" },
            ].map((metric, i) => (
              <div key={i} className="glass p-3 rounded-xl border border-white/5 text-center">
                <span className="text-lg font-bold text-gray-100">{metric.score}</span>
                <span className="block text-xs font-semibold text-gray-300 mt-0.5">{metric.label}</span>
                <span className="text-[10px] text-gray-500">{metric.weight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Technical Skills */}
        <div className="glass rounded-3xl p-6 border border-white/10 space-y-4">
          <h3 className="text-base font-bold flex items-center gap-2 text-cyan-300">
            <Code2 className="w-5 h-5 text-cyan-400" /> Verified Competency Matrix
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { name: "Python & Algorithms", score: 92, level: "Advanced", date: "Verified Sep 2025" },
              { name: "React.js & Frontend Architecture", score: 88, level: "Advanced", date: "Verified Aug 2025" },
              { name: "PostgreSQL & Database Optimization", score: 85, level: "Advanced", date: "Verified Aug 2025" },
              { name: "Machine Learning (PyTorch/Scikit)", score: 76, level: "Intermediate", date: "Verified Jul 2025" },
              { name: "Docker & Containerization", score: 72, level: "Intermediate", date: "Verified Jul 2025" },
              { name: "System Design & Microservices", score: 70, level: "Intermediate", date: "Verified Jun 2025" },
            ].map((skill, i) => (
              <div key={i} className="glass p-3.5 rounded-2xl border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-gray-200">{skill.name}</span>
                  <span className="text-xs font-bold text-cyan-400">{skill.score}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full gradient-bg" style={{ width: `${skill.score}%` }} />
                </div>
                <div className="flex items-center justify-between text-[10px] text-gray-400">
                  <span>{skill.level}</span>
                  <span className="text-green-400 flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5" /> {skill.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Showcase */}
        <div className="glass rounded-3xl p-6 border border-white/10 space-y-4">
          <h3 className="text-base font-bold flex items-center gap-2 text-purple-300">
            <Briefcase className="w-5 h-5 text-purple-400" /> Highlighted Engineering Projects
          </h3>
          <div className="space-y-4">
            {[
              {
                title: "AI-Powered Resume ATS Optimizer",
                desc: "Full-stack SaaS application parsing resumes, identifying keyword deficits against live industry job descriptions, and recalculating ATS match score with NLP embeddings.",
                tech: ["Python", "FastAPI", "React", "HuggingFace", "TailwindCSS"],
                impact: "Processed 12,000+ mock resumes with 94.2% semantic extraction accuracy.",
                github: "https://github.com",
                demo: "https://demo.live",
              },
              {
                title: "Distributed Realtime Code Execution IDE",
                desc: "Web-based collaborative IDE with sandboxed Docker container workers executing C++, Python, and JS codes in under 120ms with memory isolation.",
                tech: ["Node.js", "Docker", "WebSockets", "Redis", "React"],
                impact: "Handles up to 50 concurrent interactive sessions per worker instance.",
                github: "https://github.com",
                demo: "https://demo.live",
              },
            ].map((p, i) => (
              <div key={i} className="glass p-5 rounded-2xl border border-white/5 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-gray-100">{p.title}</h4>
                    <p className="text-xs text-green-400 font-medium mt-0.5">Impact: {p.impact}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 glass rounded-xl text-gray-400 hover:text-white"
                      title="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 glass rounded-xl text-gray-400 hover:text-white"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-indigo-300 font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer verification notice */}
        <div className="p-4 glass rounded-2xl border border-white/5 text-center text-xs text-gray-500">
          Verified on CampusConnect Academia-Industry Collaboration Platform · Cryptographically Signed Talent Record
        </div>
      </div>
    </div>
  );
}
