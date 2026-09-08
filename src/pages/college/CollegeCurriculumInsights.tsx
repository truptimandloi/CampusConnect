import { useState } from "react";
import {
  BookOpen, Sparkles, AlertTriangle, CheckCircle2,
  Calendar, Users, Award, TrendingUp, ArrowRight, Plus
} from "lucide-react";
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts";

export default function CollegeCurriculumInsights() {
  const [selectedDept, setSelectedDept] = useState("Mechanical Engineering");

  const departmentSkillLag = [
    {
      dept: "Mechanical Engineering",
      studentsCount: 110,
      urgency: "High",
      missingSkills: ["AutoCAD 3D", "SolidWorks Simulation", "Python for Automation", "IoT Embedded Sensors"],
      industryDemand: "Surge in EV design and automated manufacturing processes.",
      proposedWorkshops: [
        { title: "Electric Vehicle Design & Battery Modeling", duration: "3-day Boot camp", partner: "Tata Motors / Ola Electric", cost: "Funded via AICTE Grant" },
        { title: "Python for Engineering Simulations & Data Analysis", duration: "Weekend Masterclass", partner: "IIT Faculty", cost: "Free" },
      ],
      radar: [
        { subject: "Thermodynamics", current: 85, industryReq: 75 },
        { subject: "CAD / SolidWorks", current: 52, industryReq: 85 },
        { subject: "Python/Data", current: 35, industryReq: 70 },
        { subject: "Robotics & PLC", current: 48, industryReq: 75 },
        { subject: "Materials Science", current: 82, industryReq: 70 },
      ],
    },
    {
      dept: "Electronics & Communication (ECE)",
      studentsCount: 95,
      urgency: "Medium",
      missingSkills: ["VLSI Chip Design", "Embedded C / Verilog", "PCB Layout Routing", "Edge AI"],
      industryDemand: "Semiconductor Mission India boom requiring ASIC and FPGA engineers.",
      proposedWorkshops: [
        { title: "FPGA & SystemVerilog Design Sprint", duration: "5-day Intensive", partner: "Texas Instruments", cost: "Industry Sponsored" },
      ],
      radar: [
        { subject: "Analog Circuits", current: 80, industryReq: 75 },
        { subject: "VLSI / Verilog", current: 58, industryReq: 85 },
        { subject: "Embedded C", current: 62, industryReq: 80 },
        { subject: "Signals & Systems", current: 85, industryReq: 75 },
        { subject: "Edge AI / TinyML", current: 40, industryReq: 70 },
      ],
    },
    {
      dept: "Computer Science (CSE)",
      studentsCount: 120,
      urgency: "Low",
      missingSkills: ["Cloud Architecture (AWS/GCP)", "MLOps & Vector DBs", "Container Orchestration"],
      industryDemand: "Generative AI deployment and cloud infrastructure cost engineering.",
      proposedWorkshops: [
        { title: "Kubernetes & Cloud Native Systems", duration: "2-day Hacklab", partner: "Amazon Web Services", cost: "Free" },
      ],
      radar: [
        { subject: "Algorithms / DSA", current: 88, industryReq: 80 },
        { subject: "Full Stack Web", current: 82, industryReq: 75 },
        { subject: "Cloud Infrastructure", current: 58, industryReq: 80 },
        { subject: "MLOps & AI Systems", current: 50, industryReq: 75 },
        { subject: "Operating Systems", current: 85, industryReq: 75 },
      ],
    },
  ];

  const currentData = departmentSkillLag.find((d) => d.dept === selectedDept) || departmentSkillLag[0];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Top Banner */}
      <div className="glass rounded-3xl p-6 border border-white/10 relative overflow-hidden bg-gradient-to-r from-cyan-950/30 via-indigo-950/20 to-slate-900/60">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> AI Diagnostic Suite
              </span>
              <span className="text-xs text-gray-400">AI Curriculum Diagnostic</span>
            </div>
            <h1 className="text-2xl font-bold mt-1">College Curriculum & Industry Skill Lag Insights</h1>
            <p className="text-xs text-gray-400 mt-1 max-w-xl">
              Aggregating live student placement test gaps against Q3 corporate recruitment hiring criteria to recommend faculty workshops.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Department:</span>
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="glass text-xs font-semibold px-3 py-2 rounded-xl text-cyan-300 border border-white/10 outline-none bg-slate-900"
            >
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Electronics & Communication (ECE)">Electronics & Communication (ECE)</option>
              <option value="Computer Science (CSE)">Computer Science (CSE)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="glass rounded-2xl p-5 border border-white/8 space-y-2">
          <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Undergraduate Cohort</span>
          <div className="text-3xl font-extrabold text-white">{currentData.studentsCount} Students</div>
          <span className="text-xs text-indigo-400 block font-medium">Eligible 2026 Batch</span>
        </div>

        <div className="glass rounded-2xl p-5 border border-white/8 space-y-2">
          <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Skill Gap Alert Level</span>
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-bold px-3 py-1 rounded-full ${
                currentData.urgency === "High"
                  ? "bg-red-500/20 text-red-400 border border-red-500/30"
                  : currentData.urgency === "Medium"
                  ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                  : "bg-green-500/20 text-green-400 border border-green-500/30"
              }`}
            >
              {currentData.urgency} Priority Intervention
            </span>
          </div>
          <span className="text-xs text-gray-400 block">Syllabus revision recommended</span>
        </div>

        <div className="glass rounded-2xl p-5 border border-white/8 space-y-2">
          <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Industry Macro Trend</span>
          <p className="text-xs text-gray-300 leading-relaxed font-medium">
            {currentData.industryDemand}
          </p>
        </div>
      </div>

      {/* Chart & Identified Missing Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Radar Chart (6 cols) */}
        <div className="lg:col-span-6 glass rounded-2xl p-6 border border-white/8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-gray-100 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" /> Syllabus vs Industry Demand
            </h3>
            <div className="flex items-center gap-3 text-xs">
              <span className="text-indigo-400 font-semibold">• College Average</span>
              <span className="text-cyan-400 font-semibold">• Recruiter Benchmark</span>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={currentData.radar}>
                <PolarGrid stroke="rgba(255,255,255,0.08)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: "#9ca3af", fontSize: 11 }} />
                <Radar name="College Current" dataKey="current" stroke="#6366f1" fill="#6366f1" fillOpacity={0.4} />
                <Radar name="Industry Req" dataKey="industryReq" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.15} strokeDasharray="4 4" />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Missing Skills and Urgent Topics (6 cols) */}
        <div className="lg:col-span-6 glass rounded-2xl p-6 border border-white/8 space-y-4">
          <h3 className="font-bold text-sm text-gray-100 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-yellow-400" /> Key Deficits Flagged by Corporate Recruiters
          </h3>
          <p className="text-xs text-gray-400">
            Over 65% of test-takers from this department lost points on these specific topics during recent campus evaluations:
          </p>

          <div className="space-y-2.5 pt-2">
            {currentData.missingSkills.map((skill, i) => (
              <div key={i} className="glass p-3 rounded-xl border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="text-xs font-semibold text-gray-200">{skill}</span>
                </div>
                <span className="text-[10px] text-red-400 font-bold bg-red-500/10 px-2 py-0.5 rounded">
                  Lag Detected
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Suggested Faculty Workshops & Industry Collaborations */}
      <div className="glass rounded-2xl p-6 border border-white/8 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-sm text-gray-100 flex items-center gap-2">
            <Award className="w-4 h-4 text-green-400" /> Recommended Upskilling Workshops for College TPO
          </h3>
          <button
            onClick={() => alert("Workshop proposal drafted and sent to Head of Department & AICTE portal!")}
            className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 hover:opacity-90 shadow-md shadow-indigo-500/20"
          >
            <Plus className="w-3.5 h-3.5" /> Approve & Schedule Workshop
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentData.proposedWorkshops.map((w, idx) => (
            <div key={idx} className="glass p-4 rounded-xl border border-white/5 space-y-2">
              <div className="flex items-start justify-between">
                <h4 className="font-bold text-xs text-gray-100">{w.title}</h4>
                <span className="text-[10px] text-indigo-300 font-semibold px-2 py-0.5 rounded bg-indigo-500/10">
                  {w.duration}
                </span>
              </div>
              <div className="text-xs text-gray-400">Industry Partner: <strong className="text-gray-200">{w.partner}</strong></div>
              <div className="text-[11px] text-green-400 font-medium">Funding: {w.cost}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
