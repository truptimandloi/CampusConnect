import { useState } from "react";
import {
  Code2, Sparkles, TrendingUp, Plus, Search,
  CheckCircle2, ArrowUpRight, ShieldCheck, Tag
} from "lucide-react";

interface SkillTaxonomy {
  id: number;
  name: string;
  category: string;
  industryDemand: number;
  growthRate: string;
  mappedJobs: number;
}

export default function AdminSkillsManager() {
  const [skills, setSkills] = useState<SkillTaxonomy[]>([
    { id: 1, name: "Python", category: "Core Programming", industryDemand: 94, growthRate: "+32% YoY", mappedJobs: 420 },
    { id: 2, name: "React.js & Next.js", category: "Frontend Frameworks", industryDemand: 91, growthRate: "+28% YoY", mappedJobs: 380 },
    { id: 3, name: "MLOps & LangChain", category: "AI & Machine Learning", industryDemand: 89, growthRate: "+64% YoY", mappedJobs: 210 },
    { id: 4, name: "Docker & Kubernetes", category: "Cloud & DevOps", industryDemand: 86, growthRate: "+41% YoY", mappedJobs: 290 },
    { id: 5, name: "PostgreSQL & Vector DBs", category: "Databases & Storage", industryDemand: 85, growthRate: "+35% YoY", mappedJobs: 310 },
    { id: 6, name: "Golang (Go)", category: "Systems & Backend", industryDemand: 79, growthRate: "+48% YoY", mappedJobs: 175 },
    { id: 7, name: "Rust", category: "Low-Level & WebAssembly", industryDemand: 74, growthRate: "+52% YoY", mappedJobs: 95 },
  ]);

  const [newSkillName, setNewSkillName] = useState("");
  const [newCategory, setNewCategory] = useState("AI & Machine Learning");

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;
    setSkills([
      ...skills,
      {
        id: Date.now(),
        name: newSkillName.trim(),
        category: newCategory,
        industryDemand: 80,
        growthRate: "+40% YoY",
        mappedJobs: 120,
      },
    ]);
    setNewSkillName("");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Platform Skill Catalog & Demand Index</h1>
          <p className="text-xs text-gray-400 mt-1">
            Standardized technical taxonomy used by the AI Skill Mapping and Assessment proctoring engines.
          </p>
        </div>
      </div>

      {/* Add Skill Bar */}
      <form onSubmit={handleAddSkill} className="glass rounded-2xl p-4 border border-white/8 flex flex-wrap items-center gap-3">
        <input
          type="text"
          placeholder="New skill (e.g. Mojo, PyTorch 2.0)..."
          value={newSkillName}
          onChange={(e) => setNewSkillName(e.target.value)}
          className="glass px-3.5 py-2 rounded-xl text-xs border border-white/10 outline-none text-white flex-1 min-w-56 focus:border-indigo-500"
        />

        <select
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="glass px-3.5 py-2 rounded-xl text-xs border border-white/10 outline-none text-gray-200 bg-slate-900"
        >
          <option value="AI & Machine Learning">AI & Machine Learning</option>
          <option value="Frontend Frameworks">Frontend Frameworks</option>
          <option value="Cloud & DevOps">Cloud & DevOps</option>
          <option value="Core Programming">Core Programming</option>
          <option value="Databases & Storage">Databases & Storage</option>
        </select>

        <button
          type="submit"
          className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 hover:opacity-90 shadow-md shadow-indigo-500/20"
        >
          <Plus className="w-3.5 h-3.5" /> Add to Taxonomy
        </button>
      </form>

      {/* Skills Table */}
      <div className="glass rounded-2xl border border-white/8 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-300">
            <thead className="bg-white/[0.03] text-gray-400 uppercase tracking-wider text-[10px] border-b border-white/5 font-semibold">
              <tr>
                <th className="p-4">Skill Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Industry Demand Index</th>
                <th className="p-4">Growth (YoY)</th>
                <th className="p-4">Mapped Live Postings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {skills.map((s) => (
                <tr key={s.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4">
                    <div className="font-bold text-gray-100 flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{s.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-400">{s.category}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full gradient-bg" style={{ width: `${s.industryDemand}%` }} />
                      </div>
                      <span className="font-bold text-cyan-400">{s.industryDemand}%</span>
                    </div>
                  </td>
                  <td className="p-4 font-semibold text-green-400">{s.growthRate}</td>
                  <td className="p-4 text-gray-300 font-mono">{s.mappedJobs} Active Internships</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
