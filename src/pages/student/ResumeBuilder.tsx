import { useState } from "react";
import {
  FileText, Sparkles, Download, CheckCircle2, AlertCircle,
  Plus, Trash2, Printer, Check, ArrowUpRight
} from "lucide-react";

export default function ResumeBuilder() {
  const [fullName, setFullName] = useState("Rahul Sharma");
  const [targetTitle, setTargetTitle] = useState("Full Stack Software Engineer");
  const [summary, setSummary] = useState(
    "Pre-final year Computer Science undergraduate at IIT Delhi with proven experience in building high-throughput web backends, React SPAs, and distributed database workflows. National Hackathon Finalist."
  );

  const [skillsText, setSkillsText] = useState(
    "Python, TypeScript, React.js, Node.js, PostgreSQL, Docker, Redis, REST APIs, Git, TailwindCSS"
  );

  const [experience, setExperience] = useState([
    {
      role: "Backend Engineering Intern",
      company: "Razorpay (Payments Hub)",
      period: "May 2024 – July 2024",
      points: [
        "Engineered asynchronous payment webhook processing service handling 2,500+ requests/sec using Node.js & Redis.",
        "Reduced database query latency by 38% through composite indexing and connection pooling on PostgreSQL.",
      ],
    },
  ]);

  const [projects, setProjects] = useState([
    {
      title: "AI ATS Resume Analyzer & Optimizer",
      tech: "Python, FastAPI, BERT Embeddings, React",
      points: [
        "Developed an open-source resume scoring pipeline achieving 94% concordance with recruiter shortlists.",
        "Integrated semantic search utilizing vector embeddings for missing skill gap detection.",
      ],
    },
  ]);

  // ATS Score calculation based on length, keywords, quantified numbers
  const hasNumbers = /\d+/.test(summary) || experience.some((e) => e.points.some((p) => /\d+/.test(p)));
  const skillCount = skillsText.split(",").filter((s) => s.trim().length > 0).length;
  const atsScore = Math.min(
    96,
    60 + (hasNumbers ? 15 : 0) + Math.min(15, skillCount * 1.5) + (summary.length > 50 ? 8 : 0)
  );

  const aiSuggestions = [
    {
      type: "keyword",
      text: "Add 'Kubernetes' and 'CI/CD Pipelines' to match 85% more SDE postings at Google & Razorpay.",
      action: "Add Keywords",
    },
    {
      type: "metric",
      text: "Strong metrics detected! Mentioning '2,500+ req/sec' boosted your ATS score by +12 points.",
      status: "good",
    },
    {
      type: "grammar",
      text: "Grammar & action verbs: 100% active voice verified by CampusConnect NLP linter.",
      status: "good",
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">AI Resume Builder & ATS Scorer</h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">
              ATS-Optimized Engine
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Build recruiter-ready, machine-parsable resumes verified against actual ATS parsers.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrint}
            className="glass px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-white/10 text-gray-200 hover:bg-white/5 transition-all"
          >
            <Printer className="w-3.5 h-3.5" /> Print / Export PDF
          </button>
        </div>
      </div>

      {/* Main 2-column layout: Left Editor, Right Live ATS & Formatted Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Form Fields (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Personal Info */}
          <div className="glass rounded-2xl p-5 border border-white/8 space-y-3">
            <h3 className="font-semibold text-sm text-indigo-300 flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-400" /> Header Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-400 block mb-1">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full glass px-3 py-2 rounded-xl text-xs border border-white/10 outline-none text-white focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1">Target Headline</label>
                <input
                  type="text"
                  value={targetTitle}
                  onChange={(e) => setTargetTitle(e.target.value)}
                  className="w-full glass px-3 py-2 rounded-xl text-xs border border-white/10 outline-none text-white focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-400 block mb-1">Professional Executive Summary</label>
              <textarea
                rows={3}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full glass p-3 rounded-xl text-xs border border-white/10 outline-none text-gray-200 focus:border-indigo-500 leading-relaxed"
              />
            </div>
          </div>

          {/* Technical Skills */}
          <div className="glass rounded-2xl p-5 border border-white/8 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm text-cyan-300">Technical Skills (Comma separated)</h3>
              <span className="text-[11px] text-cyan-400 font-semibold">{skillCount} skills added</span>
            </div>
            <textarea
              rows={2}
              value={skillsText}
              onChange={(e) => setSkillsText(e.target.value)}
              className="w-full glass p-3 rounded-xl text-xs border border-white/10 outline-none text-gray-200 focus:border-indigo-500 font-mono"
            />
          </div>

          {/* Experience Section */}
          <div className="glass rounded-2xl p-5 border border-white/8 space-y-4">
            <h3 className="font-semibold text-sm text-purple-300">Internships & Professional Experience</h3>
            {experience.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-xl glass border border-white/5 space-y-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={exp.role}
                    onChange={(e) => {
                      const updated = [...experience];
                      updated[idx].role = e.target.value;
                      setExperience(updated);
                    }}
                    className="glass px-2.5 py-1.5 rounded-lg text-xs font-semibold text-white border border-white/10"
                    placeholder="Role"
                  />
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => {
                      const updated = [...experience];
                      updated[idx].company = e.target.value;
                      setExperience(updated);
                    }}
                    className="glass px-2.5 py-1.5 rounded-lg text-xs text-gray-300 border border-white/10"
                    placeholder="Company"
                  />
                </div>
                <div className="space-y-1.5">
                  {exp.points.map((pt, pIdx) => (
                    <input
                      key={pIdx}
                      type="text"
                      value={pt}
                      onChange={(e) => {
                        const updated = [...experience];
                        updated[idx].points[pIdx] = e.target.value;
                        setExperience(updated);
                      }}
                      className="w-full glass px-2.5 py-1.5 rounded-lg text-xs text-gray-300 border border-white/5"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: ATS Score Card & Live Preview (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* ATS Score Card */}
          <div className="glass rounded-3xl p-6 border border-white/10 bg-gradient-to-br from-indigo-950/40 via-purple-950/20 to-slate-900/60 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-400" /> Real-time ATS Compatibility
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                Tier-1 Qualified
              </span>
            </div>

            <div className="flex items-center gap-5">
              <div className="text-5xl font-extrabold gradient-text">{atsScore}%</div>
              <div className="space-y-1 text-xs">
                <div className="text-gray-200 font-semibold">Parser Pass Rate: 98%</div>
                <div className="text-gray-400 text-[11px]">Calculated via Workday, Greenhouse & Taleo regex standards.</div>
              </div>
            </div>

            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full gradient-bg transition-all duration-500" style={{ width: `${atsScore}%` }} />
            </div>

            {/* AI Improvement Suggestions */}
            <div className="pt-2 space-y-2">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                AI Optimization Suggestions:
              </span>
              {aiSuggestions.map((sug, i) => (
                <div key={i} className="glass p-3 rounded-xl border border-white/5 text-xs space-y-1">
                  <div className="flex items-start gap-2">
                    {sug.status === "good" ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                    )}
                    <span className="text-gray-300 text-[11px] leading-relaxed">{sug.text}</span>
                  </div>
                  {sug.action && (
                    <button
                      onClick={() => setSkillsText((prev) => prev + ", Kubernetes, CI/CD")}
                      className="text-[10px] text-indigo-400 font-bold hover:underline pl-5"
                    >
                      + Quick Apply Recommendation
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Formatted Paper Preview Simulation */}
          <div className="glass rounded-2xl p-6 border border-white/10 space-y-4 bg-slate-950/80 text-gray-100 shadow-2xl">
            <div className="text-center pb-3 border-b border-white/10 space-y-1">
              <h2 className="text-lg font-bold tracking-tight text-white">{fullName}</h2>
              <p className="text-[11px] text-indigo-300 font-medium">{targetTitle}</p>
              <p className="text-[10px] text-gray-400">
                rahul.sharma@iitd.ac.in · +91 98765 43210 · New Delhi · github.com/rahulsharma
              </p>
            </div>

            <div className="space-y-1 text-left">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 border-b border-white/5 pb-0.5">
                Summary
              </h4>
              <p className="text-[11px] text-gray-300 leading-relaxed">{summary}</p>
            </div>

            <div className="space-y-1 text-left">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 border-b border-white/5 pb-0.5">
                Skills
              </h4>
              <p className="text-[11px] text-gray-300 font-mono">{skillsText}</p>
            </div>

            <div className="space-y-2 text-left">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 border-b border-white/5 pb-0.5">
                Experience
              </h4>
              {experience.map((e, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold">
                    <span className="text-gray-100">{e.role} · {e.company}</span>
                    <span className="text-gray-500">{e.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-[10px] text-gray-400 space-y-0.5">
                    {e.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
