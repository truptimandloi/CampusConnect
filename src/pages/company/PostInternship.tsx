import { useState } from "react";
import {
  Briefcase, Sparkles, Plus, Trash2, CheckCircle2,
  DollarSign, MapPin, Clock, Calendar, ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PostInternship() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Frontend Developer Intern");
  const [mode, setMode] = useState("Remote");
  const [location, setLocation] = useState("Bangalore, Karnataka");
  const [stipend, setStipend] = useState("₹25,000 / month");
  const [duration, setDuration] = useState("6 Months");
  const [deadline, setDeadline] = useState("30 Oct 2025");
  const [minAiScore, setMinAiScore] = useState(75);
  const [skills, setSkills] = useState(["React.js", "TypeScript", "TailwindCSS", "Git"]);
  const [newSkill, setNewSkill] = useState("");
  const [description, setDescription] = useState(
    "Join Razorpay's Checkout Experience team to build blazing fast, accessible payment UI components utilized by over 50 million end consumers across India."
  );
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateAI = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setTitle("Full Stack AI Systems Intern");
      setDescription(
        "We are seeking an ambitious software engineering intern to work closely with our Core Platform & AI Research squad. You will develop low-latency microservices, integrate LLM vector caching, and deploy high-reliability checkout APIs."
      );
      setSkills(["Python", "React.js", "PostgreSQL", "FastAPI", "Docker", "Redis"]);
      setMinAiScore(82);
      setStipend("₹35,000 / month");
    }, 1000);
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkill.trim()) return;
    setSkills([...skills, newSkill.trim()]);
    setNewSkill("");
  };

  const handleRemoveSkill = (idx: number) => {
    setSkills(skills.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Internship posted successfully! Live on CampusConnect talent matching engine.");
    navigate("/company");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">Post New Internship</h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">
              Recruiter Hub
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Target 50,000+ verified scholars with AI-automated candidate matching and auto-screening.
          </p>
        </div>

        <button
          type="button"
          onClick={handleGenerateAI}
          disabled={isGenerating}
          className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 hover:opacity-90 shadow-lg shadow-indigo-500/20 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isGenerating ? "Generating..." : "Generate JD with AI"}</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Role Essentials */}
        <div className="glass rounded-2xl p-6 border border-white/8 space-y-4">
          <h3 className="font-semibold text-sm text-indigo-300 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-indigo-400" /> Basic Internship Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 block mb-1">Internship Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full glass px-3.5 py-2.5 rounded-xl text-xs border border-white/10 outline-none text-white focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 block mb-1">Work Mode</label>
              <select
                value={mode}
                onChange={(e) => setMode(e.target.value)}
                className="w-full glass px-3.5 py-2.5 rounded-xl text-xs border border-white/10 outline-none text-gray-200 bg-slate-900"
              >
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Onsite">Onsite</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-400 block mb-1">Office Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full glass px-3.5 py-2.5 rounded-xl text-xs border border-white/10 outline-none text-white focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 block mb-1">Monthly Stipend</label>
              <input
                type="text"
                value={stipend}
                onChange={(e) => setStipend(e.target.value)}
                className="w-full glass px-3.5 py-2.5 rounded-xl text-xs border border-white/10 outline-none text-white focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 block mb-1">Duration</label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full glass px-3.5 py-2.5 rounded-xl text-xs border border-white/10 outline-none text-white focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 block mb-1">Application Deadline</label>
              <input
                type="text"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full glass px-3.5 py-2.5 rounded-xl text-xs border border-white/10 outline-none text-white focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-400 block mb-1">Job Description</label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full glass p-3 rounded-xl text-xs border border-white/10 outline-none text-gray-200 focus:border-indigo-500 leading-relaxed"
              required
            />
          </div>
        </div>

        {/* AI Match Threshold & Skills */}
        <div className="glass rounded-2xl p-6 border border-white/8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm text-cyan-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" /> AI Candidate Match Filter
            </h3>
            <span className="text-xs font-bold text-cyan-400">{minAiScore}% Minimum Match</span>
          </div>

          <div className="space-y-1">
            <input
              type="range"
              min="50"
              max="95"
              value={minAiScore}
              onChange={(e) => setMinAiScore(Number(e.target.value))}
              className="w-full accent-indigo-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-500">
              <span>50% (Broad Pool)</span>
              <span>75% (Recommended)</span>
              <span>95% (Elite Top 1%)</span>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <label className="text-xs text-gray-400 block">Required Technical Skills</label>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, idx) => (
                <span
                  key={idx}
                  className="glass px-3 py-1.5 rounded-xl text-xs border border-white/10 text-gray-200 flex items-center gap-2"
                >
                  <span>{s}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(idx)}
                    className="text-gray-400 hover:text-red-400"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add skill requirement..."
                className="glass px-3 py-1.5 rounded-xl text-xs border border-white/10 outline-none text-gray-200"
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="glass text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/10 hover:bg-white/5 text-gray-200"
              >
                + Add
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate("/company")}
            className="text-xs px-4 py-2.5 rounded-xl glass border border-white/10 text-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="gradient-bg text-white text-xs font-semibold px-6 py-2.5 rounded-xl hover:opacity-90 shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-4 h-4" /> Publish Internship
          </button>
        </div>
      </form>
    </div>
  );
}
