import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import CompanyProfile from "@/pages/company/CompanyProfile";
import PostInternship from "@/pages/company/PostInternship";
import CandidateSearch from "@/pages/company/CandidateSearch";
import InterviewScheduler from "@/pages/company/InterviewScheduler";
import {
  LayoutDashboard, Building2, Briefcase, Users, Calendar,
  BarChart3, Settings, Star, Search, Filter, ChevronRight,
  TrendingUp, Clock, CheckCircle, XCircle, Mail, Sparkles, ExternalLink
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/company" },
  { label: "Company Profile", icon: Building2, path: "/company/profile" },
  { label: "Post Internship", icon: Briefcase, path: "/company/post" },
  { label: "Candidate Search & AI Ranking", icon: Users, path: "/company/candidates" },
  { label: "Interview Scheduler", icon: Calendar, path: "/company/interviews" },
  { label: "Hiring Analytics", icon: BarChart3, path: "/company/analytics" },
];

const candidates = [
  { name: "Rahul Sharma", college: "IIT Delhi", cgpa: 8.92, score: 92, skills: ["Python", "React", "PostgreSQL"], status: "Interview", avatar: "RS", color: "from-indigo-500 to-purple-500" },
  { name: "Priya Patel", college: "IIT Bombay", cgpa: 9.15, score: 89, skills: ["React", "Node.js", "Redis"], status: "Shortlisted", avatar: "PP", color: "from-purple-500 to-cyan-500" },
  { name: "Ankit Verma", college: "BITS Pilani", cgpa: 8.65, score: 86, skills: ["Java", "Spring", "Docker"], status: "Shortlisted", avatar: "AV", color: "from-cyan-500 to-blue-500" },
  { name: "Neha Gupta", college: "NIT Trichy", cgpa: 8.8, score: 84, skills: ["Python", "NLP", "FastAPI"], status: "Applied", avatar: "NG", color: "from-blue-500 to-indigo-500" },
  { name: "Rohan Gupta", college: "IIIT Hyderabad", cgpa: 9.3, score: 81, skills: ["C++", "DSA", "SQL"], status: "Applied", avatar: "RP", color: "from-indigo-600 to-purple-600" },
];

const hiringData = [
  { month: "Apr", hired: 4, applications: 120 },
  { month: "May", hired: 7, applications: 165 },
  { month: "Jun", hired: 5, applications: 143 },
  { month: "Jul", hired: 9, applications: 210 },
  { month: "Aug", hired: 12, applications: 280 },
  { month: "Sep", hired: 8, applications: 195 },
];

const postedJobs = [
  { title: "Frontend Developer Intern", applicants: 234, shortlisted: 18, status: "Active", deadline: "30 Sep 2025" },
  { title: "Data Science Intern", applicants: 189, shortlisted: 12, status: "Active", deadline: "25 Sep 2025" },
  { title: "Backend Engineer Intern", applicants: 156, shortlisted: 9, status: "Active", deadline: "10 Oct 2025" },
];

const statusColor: Record<string, string> = {
  Interview: "text-yellow-400 bg-yellow-500/10 border border-yellow-500/20",
  Shortlisted: "text-blue-400 bg-blue-500/10 border border-blue-500/20",
  Applied: "text-gray-400 bg-gray-500/10 border border-white/5",
  Offer: "text-green-400 bg-green-500/10 border border-green-500/20",
};

function CompanyHome() {
  const [activeTab, setActiveTab] = useState<"all" | "shortlisted" | "interview">("all");

  const filtered = candidates.filter((c) => {
    if (activeTab === "shortlisted") return c.status === "Shortlisted";
    if (activeTab === "interview") return c.status === "Interview";
    return true;
  });

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">Razorpay Talent Acquisition Hub</h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-green-500/20 text-green-400 font-semibold border border-green-500/30">
              Active Employer
            </span>
          </div>
          <p className="text-gray-400 text-sm mt-1">
            3 active job postings · 579 total applicants · 39 AI-shortlisted candidates
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/company/post"
            className="gradient-bg text-white font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 hover:opacity-90 shadow-lg shadow-indigo-500/20 text-xs transition-all"
          >
            + Post New Internship
          </Link>
          <Link
            to="/company/candidates"
            className="glass px-4 py-2 rounded-xl text-xs font-semibold text-gray-200 hover:bg-white/5 border border-white/10"
          >
            AI Candidate Search
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Applicants", value: "579", sub: "+48 this week", icon: Users, color: "from-indigo-500 to-purple-500" },
          { label: "AI Shortlisted", value: "39", sub: "Top 6.7% match", icon: Star, color: "from-purple-500 to-cyan-500" },
          { label: "Interviews Active", value: "12", sub: "Today: 3 sessions", icon: Calendar, color: "from-cyan-500 to-blue-500" },
          { label: "Offers Extended", value: "4", sub: "2 accepted · 100% verified", icon: CheckCircle, color: "from-blue-500 to-indigo-500" },
        ].map((s, i) => (
          <div key={i} className="glass rounded-2xl p-5 card-hover border border-white/5">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3 shadow-md`}>
              <s.icon className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-bold mb-0.5">{s.value}</div>
            <div className="text-sm text-gray-400">{s.label}</div>
            <div className="text-xs text-green-400 mt-1">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Charts & Posted Jobs */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-6 border border-white/5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm text-gray-200">Hiring Pipeline Growth</h3>
            <span className="text-[11px] text-gray-500">Q2–Q3 2025</span>
          </div>
          <div className="h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={hiringData}>
                <defs>
                  <linearGradient id="hiringGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255,255,255,0.04)" />
                <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "rgba(16,22,42,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, color: "#e8eaf0", fontSize: 12 }} />
                <Area type="monotone" dataKey="applications" name="Applications" stroke="#6366f1" fill="url(#hiringGrad)" strokeWidth={2} />
                <Area type="monotone" dataKey="hired" name="Offers Accepted" stroke="#06b6d4" fill="none" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Posted Jobs */}
        <div className="glass rounded-2xl p-6 border border-white/5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm text-gray-200">Active Campus Openings</h3>
            <Link to="/company/post" className="text-xs text-indigo-400 hover:underline">
              + Post Role
            </Link>
          </div>
          <div className="space-y-3">
            {postedJobs.map((job, i) => (
              <div key={i} className="glass rounded-xl p-4 border border-white/5 card-hover">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-semibold text-sm text-gray-100">{job.title}</div>
                    <div className="text-xs text-gray-400">Deadline: {job.deadline}</div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-lg text-green-400 bg-green-500/10 border border-green-500/20">
                    {job.status}
                  </span>
                </div>
                <div className="flex gap-4 text-xs text-gray-400 mt-2">
                  <span><strong>{job.applicants}</strong> total applicants</span>
                  <span className="text-cyan-400 font-semibold"><strong>{job.shortlisted}</strong> AI Shortlisted</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Candidate Ranking */}
      <div className="glass rounded-2xl p-6 border border-white/5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h3 className="font-semibold text-base flex items-center gap-2 text-indigo-300">
            <Star className="w-5 h-5 text-indigo-400" /> AI Candidate Ranking (Top Applicants)
          </h3>
          <div className="flex gap-2">
            {(["all", "shortlisted", "interview"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs px-3 py-1 rounded-lg font-medium transition-colors ${activeTab === tab ? "gradient-bg text-white" : "glass text-gray-400"}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filtered.map((c, i) => (
            <div key={i} className="glass rounded-xl p-4 border border-white/5 card-hover flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center text-xs font-bold text-white shrink-0">
                #{i + 1}
              </div>
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-xs font-bold text-white shadow shrink-0`}>
                {c.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-sm text-gray-100">{c.name}</div>
                <div className="text-xs text-gray-400">{c.college} · CGPA: {c.cgpa}</div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {c.skills.map((s, j) => (
                    <span key={j} className="text-[10px] bg-white/5 text-gray-300 px-2 py-0.5 rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="text-xl font-extrabold gradient-text">{c.score}%</div>
                <div className="text-[10px] text-gray-400">AI Match</div>
              </div>

              <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg shrink-0 ${statusColor[c.status]}`}>
                {c.status}
              </span>

              <div className="flex items-center gap-2 shrink-0">
                <Link
                  to="/portfolio/rahul"
                  className="p-2 glass rounded-lg text-gray-300 hover:text-white"
                  title="View Digital Portfolio"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <Link
                  to="/company/interviews"
                  className="p-2 glass rounded-lg text-gray-300 hover:text-white"
                  title="Schedule Interview"
                >
                  <Calendar className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CompanyDashboard() {
  const location = useLocation();
  const path = location.pathname;

  const renderContent = () => {
    const cleanPath = path.replace(/\/$/, "");
    if (cleanPath === "/company" || cleanPath === "") return <CompanyHome />;
    if (cleanPath.startsWith("/company/profile")) return <CompanyProfile />;
    if (cleanPath.startsWith("/company/post")) return <PostInternship />;
    if (cleanPath.startsWith("/company/candidates")) return <CandidateSearch />;
    if (cleanPath.startsWith("/company/interviews")) return <InterviewScheduler />;
    if (cleanPath.startsWith("/company/analytics")) return <CompanyHome />;
    return <CompanyHome />;
  };

  return (
    <div className="flex flex-col h-screen mesh-bg overflow-hidden">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar items={navItems} role="Company Portal" userName="Razorpay HR" avatar="RZ" />
        <div className="flex-1 overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
