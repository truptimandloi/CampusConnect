import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User, Mail, Phone, MapPin, GraduationCap, Award,
  Code2, ExternalLink, Plus, Trash2,
  CheckCircle2, Sparkles, FileText, Upload, Briefcase, Globe
} from "lucide-react";
import { Github, Linkedin } from "../../components/BrandIcons";

export default function StudentProfile() {
  const [skills, setSkills] = useState([
    { name: "Python", level: "Advanced", score: 85, verified: true },
    { name: "React.js", level: "Advanced", score: 82, verified: true },
    { name: "Node.js", level: "Intermediate", score: 74, verified: false },
    { name: "PostgreSQL", level: "Intermediate", score: 70, verified: true },
    { name: "Docker", level: "Beginner", score: 55, verified: false },
    { name: "Machine Learning", level: "Intermediate", score: 68, verified: true },
    { name: "TailwindCSS", level: "Advanced", score: 90, verified: true },
  ]);

  const [newSkill, setNewSkill] = useState("");
  const [newLevel, setNewLevel] = useState("Intermediate");

  const addSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkill.trim()) return;
    setSkills([
      ...skills,
      { name: newSkill.trim(), level: newLevel, score: 70, verified: false },
    ]);
    setNewSkill("");
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const projects = [
    {
      title: "AI-Powered Resume ATS Optimizer",
      desc: "Built a NLP pipeline using TF-IDF and BERT embeddings to score resumes against job descriptions with 94% accuracy.",
      tech: ["Python", "FastAPI", "React", "HuggingFace"],
      github: "https://github.com/rahulsharma/ats-optimizer",
      live: "https://ats-optimizer.demo",
    },
    {
      title: "Collaborative Realtime Code IDE",
      desc: "Full-stack code sharing workspace with WebSockets, WebRTC screen share, and instant compilation container runners.",
      tech: ["React", "Node.js", "Docker", "Socket.io"],
      github: "https://github.com/rahulsharma/collab-ide",
      live: "https://collab-ide.live",
    },
  ];

  const certifications = [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "June 2024", id: "AWS-CCP-84920" },
    { name: "Deep Learning Specialization", issuer: "Coursera / DeepLearning.AI", date: "April 2024", id: "COURSERA-DL-1092" },
    { name: "Full Stack Open Certification", issuer: "University of Helsinki", date: "Jan 2024", id: "UH-FS-5512" },
  ];

  const hackathons = [
    { title: "National Innovation Hackathon Finalist", org: "Ministry of Education & Innovation Council", rank: "Top 5 Finalist" },
    { title: "HackHeritage 36-hr Hackathon", org: "IIT Delhi Technical Society", rank: "1st Runner Up" },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Header Profile Card */}
      <div className="glass rounded-3xl p-6 border border-white/8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl gradient-bg flex items-center justify-center text-3xl font-bold shadow-xl shadow-indigo-500/30">
                RS
              </div>
              <span className="absolute -bottom-1 -right-1 p-1 bg-green-500 rounded-full border-2 border-slate-900" title="Profile Verified" />
            </div>

            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold">Rahul Sharma</h1>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold">
                  Pre-Final Year B.Tech
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-1">
                Computer Science & Engineering · Indian Institute of Technology (IIT) Delhi
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mt-2.5">
                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-indigo-400" /> rahul.sharma@iitd.ac.in</span>
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-cyan-400" /> +91 98765 43210</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-purple-400" /> New Delhi, India</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 self-stretch md:self-auto">
            <Link
              to="/portfolio/rahul"
              className="gradient-bg text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 hover:opacity-90 shadow-lg shadow-indigo-500/20 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>View Public Portfolio</span>
            </Link>
            <Link
              to="/student/resume"
              className="glass px-4 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 hover:bg-white/5 border border-white/10 text-gray-200 transition-all"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>Edit ATS Resume</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Grid: Academic & Readiness + Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Academic Stats */}
        <div className="glass rounded-2xl p-5 border border-white/8 space-y-4">
          <h3 className="font-semibold text-sm flex items-center gap-2 text-indigo-300">
            <GraduationCap className="w-4 h-4 text-indigo-400" /> Academic Credentials
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="glass rounded-xl p-3 border border-white/5">
              <span className="text-xs text-gray-400">Current CGPA</span>
              <div className="text-xl font-bold text-white mt-0.5">8.92 <span className="text-xs text-gray-500">/ 10</span></div>
              <span className="text-[10px] text-green-400">Top 5% in CSE</span>
            </div>
            <div className="glass rounded-xl p-3 border border-white/5">
              <span className="text-xs text-gray-400">Graduation</span>
              <div className="text-xl font-bold text-white mt-0.5">2026</div>
              <span className="text-[10px] text-cyan-400">Batch of 2026</span>
            </div>
            <div className="glass rounded-xl p-3 border border-white/5">
              <span className="text-xs text-gray-400">Backlogs</span>
              <div className="text-xl font-bold text-green-400 mt-0.5">0 Clean</div>
              <span className="text-[10px] text-gray-400">100% Clearance</span>
            </div>
            <div className="glass rounded-xl p-3 border border-white/5">
              <span className="text-xs text-gray-400">Attendance</span>
              <div className="text-xl font-bold text-white mt-0.5">94%</div>
              <span className="text-[10px] text-green-400">Exemplary</span>
            </div>
          </div>
        </div>

        {/* AI Placement Readiness Card */}
        <div className="glass rounded-2xl p-5 border border-white/8 space-y-3 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm flex items-center gap-2 text-cyan-300">
              <Sparkles className="w-4 h-4 text-cyan-400" /> AI Placement Readiness
            </h3>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">
              Tier 1 Ready
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-4xl font-extrabold gradient-text">83<span className="text-lg">/100</span></div>
            <div className="text-xs text-gray-400">
              Calculated via Skills (35%), Projects (25%), CGPA (15%), & Assessments (25%)
            </div>
          </div>

          <div className="space-y-1.5 pt-2 text-xs">
            <div className="flex justify-between text-gray-300">
              <span>Technical Skills Match</span>
              <span className="font-semibold text-green-400">88%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full gradient-bg" style={{ width: "88%" }} />
            </div>

            <div className="flex justify-between text-gray-300 pt-1">
              <span>Interview Readiness</span>
              <span className="font-semibold text-yellow-400">76%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-400" style={{ width: "76%" }} />
            </div>
          </div>
        </div>

        {/* Coding & Social Profiles */}
        <div className="glass rounded-2xl p-5 border border-white/8 space-y-3">
          <h3 className="font-semibold text-sm flex items-center gap-2 text-purple-300">
            <Globe className="w-4 h-4 text-purple-400" /> Coding & Social Profiles
          </h3>
          <div className="space-y-2">
            {[
              { name: "GitHub", handle: "@rahulsharma", link: "https://github.com", icon: Github, stat: "340+ commits" },
              { name: "LinkedIn", handle: "/in/rahulsharma-iitd", link: "https://linkedin.com", icon: Linkedin, stat: "1.2k followers" },
              { name: "LeetCode", handle: "rahul_iitd", link: "https://leetcode.com", icon: Code2, stat: "420 Solved · Knight" },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <a
                  key={i}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="glass p-2.5 rounded-xl border border-white/5 flex items-center justify-between hover:border-indigo-500/30 transition-all text-xs group"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-gray-300 group-hover:text-indigo-400" />
                    <div>
                      <div className="font-semibold text-gray-200">{p.name}</div>
                      <div className="text-[10px] text-gray-500">{p.handle}</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-indigo-400 font-medium">{p.stat}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="glass rounded-2xl p-6 border border-white/8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-semibold text-base flex items-center gap-2">
              <Code2 className="w-5 h-5 text-indigo-400" /> Technical Competencies & Skill Matrix
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">
              Verified by CampusConnect AI Skill Assessment engine
            </p>
          </div>
          <Link
            to="/student/assessment"
            className="text-xs text-indigo-300 hover:text-indigo-200 flex items-center gap-1 font-semibold"
          >
            Take Skill Assessment →
          </Link>
        </div>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-2.5">
          {skills.map((s, idx) => (
            <div
              key={idx}
              className="glass px-3.5 py-2 rounded-xl border border-white/8 flex items-center gap-2.5 hover:border-indigo-500/30 transition-all"
            >
              {s.verified && (
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" title="AI Verified Skill" />
              )}
              <div>
                <span className="text-xs font-semibold text-gray-200">{s.name}</span>
                <span className="text-[10px] text-gray-400 ml-1.5 font-medium">({s.level})</span>
              </div>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/5 text-indigo-300">
                {s.score}%
              </span>
              <button
                onClick={() => removeSkill(idx)}
                className="text-gray-500 hover:text-red-400 transition-colors ml-1"
                title="Remove skill"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        {/* Add Skill Bar */}
        <form onSubmit={addSkill} className="pt-2 flex flex-wrap items-center gap-3">
          <input
            type="text"
            placeholder="Add new skill (e.g. Next.js, Kubernetes)"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="glass px-3 py-2 rounded-xl text-xs border border-white/10 focus:border-indigo-500 outline-none w-64 text-gray-200"
          />
          <select
            value={newLevel}
            onChange={(e) => setNewLevel(e.target.value)}
            className="glass px-3 py-2 rounded-xl text-xs border border-white/10 outline-none text-gray-300 bg-slate-900"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <button
            type="submit"
            className="gradient-bg text-white px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 hover:opacity-90 transition-all"
          >
            <Plus className="w-3.5 h-3.5" /> Add Skill
          </button>
        </form>
      </div>

      {/* Projects Showcase */}
      <div className="glass rounded-2xl p-6 border border-white/8 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-base flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-purple-400" /> Featured Engineering Projects
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((proj, i) => (
            <div key={i} className="glass rounded-xl p-5 border border-white/8 card-hover space-y-3">
              <div className="flex items-start justify-between">
                <h4 className="font-semibold text-sm text-gray-100">{proj.title}</h4>
                <div className="flex items-center gap-2">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg glass text-gray-400 hover:text-white transition-colors"
                    title="Source Code"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg glass text-gray-400 hover:text-white transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{proj.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {proj.tech.map((t, idx) => (
                  <span key={idx} className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-indigo-300 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications & Hackathons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-5 border border-white/8 space-y-3">
          <h3 className="font-semibold text-sm flex items-center gap-2 text-indigo-300">
            <Award className="w-4 h-4 text-indigo-400" /> Verified Certifications
          </h3>
          <div className="space-y-2.5">
            {certifications.map((c, i) => (
              <div key={i} className="glass p-3 rounded-xl border border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-gray-200">{c.name}</span>
                  <span className="text-[10px] text-green-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> AI Verified
                  </span>
                </div>
                <div className="text-[11px] text-gray-400">{c.issuer} · {c.date}</div>
                <div className="text-[10px] text-gray-500 font-mono">Credential ID: {c.id}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-5 border border-white/8 space-y-3">
          <h3 className="font-semibold text-sm flex items-center gap-2 text-yellow-300">
            <Award className="w-4 h-4 text-yellow-400" /> Hackathons & Competitions
          </h3>
          <div className="space-y-2.5">
            {hackathons.map((h, i) => (
              <div key={i} className="glass p-3 rounded-xl border border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-gray-200">{h.title}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 font-bold">
                    {h.rank}
                  </span>
                </div>
                <div className="text-[11px] text-gray-400">{h.org}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
