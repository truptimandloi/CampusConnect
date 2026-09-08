import { Link, useLocation } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import SkillMapping from "@/pages/student/SkillMapping";
import JobPortal from "@/pages/student/JobPortal";
import Analytics from "@/pages/student/Analytics";
import StudentProfile from "@/pages/student/StudentProfile";
import SkillAssessment from "@/pages/student/SkillAssessment";
import LearningRoadmap from "@/pages/student/LearningRoadmap";
import ApplicationsManager from "@/pages/student/ApplicationsManager";
import ResumeBuilder from "@/pages/student/ResumeBuilder";
import ResumeParser from "@/pages/student/ResumeParser";
import InterviewPrep from "@/pages/student/InterviewPrep";
import Leaderboard from "@/pages/student/Leaderboard";
import StudentCalendar from "@/pages/student/StudentCalendar";
import Community from "@/pages/student/Community";
import { useState } from "react";
import {
  LayoutDashboard, User, Brain, Map, Briefcase, FileText,
  BarChart3, Trophy, MessageSquare, Calendar, BookOpen, Target, Zap, Sparkles, Upload
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/student" },
  { label: "My Profile", icon: User, path: "/student/profile" },
  { label: "Skill Assessment", icon: Brain, path: "/student/assessment" },
  { label: "Skill Mapping", icon: Map, path: "/student/skills" },
  { label: "AI Roadmap", icon: Target, path: "/student/roadmap" },
  { label: "Job Portal", icon: Briefcase, path: "/student/jobs" },
  { label: "Applications", icon: FileText, path: "/student/applications" },
  { label: "Resume Builder", icon: Zap, path: "/student/resume" },
  { label: "Resume Parser", icon: Upload, path: "/student/parser" },
  { label: "Interview Prep", icon: MessageSquare, path: "/student/interview" },
  { label: "Analytics", icon: BarChart3, path: "/student/analytics" },
  { label: "Leaderboard", icon: Trophy, path: "/student/leaderboard" },
  { label: "Calendar", icon: Calendar, path: "/student/calendar" },
  { label: "Community", icon: BookOpen, path: "/student/community" },
];

function StudentHome() {
  const [activeTab, setActiveTab] = useState<"recommended" | "applied" | "saved">("recommended");

  const jobs = [
    { title: "Frontend Developer Intern", company: "Razorpay", location: "Bangalore · Remote", salary: "₹25K/mo", match: 91, tags: ["React", "TypeScript"] },
    { title: "Data Science Intern", company: "Flipkart", location: "Bangalore · Hybrid", salary: "₹30K/mo", match: 85, tags: ["Python", "ML"] },
    { title: "Backend Engineer Intern", company: "PhonePe", location: "Pune · Onsite", salary: "₹28K/mo", match: 78, tags: ["Node.js", "PostgreSQL"] },
    { title: "ML Research Intern", company: "Google", location: "Hyderabad · Hybrid", salary: "₹50K/mo", match: 72, tags: ["Python", "TensorFlow"] },
  ];

  const courses = [
    { title: "Complete SQL Bootcamp", platform: "Coursera", duration: "12h", progress: 35 },
    { title: "Git & GitHub Mastery", platform: "YouTube", duration: "8h", progress: 70 },
    { title: "Machine Learning A–Z", platform: "NPTEL", duration: "40h", progress: 15 },
  ];

  const timeline = [
    { company: "Infosys", role: "SDE Intern", status: "Interview", date: "Today 3 PM", color: "text-yellow-400", dot: "bg-yellow-400" },
    { company: "TCS", role: "Data Analyst", status: "Shortlisted", date: "12 Sep", color: "text-blue-400", dot: "bg-blue-400" },
    { company: "Wipro", role: "Full Stack Intern", status: "Applied", date: "8 Sep", color: "text-gray-400", dot: "bg-gray-400" },
    { company: "Swiggy", role: "Backend Intern", status: "Offer", date: "2 Sep", color: "text-green-400", dot: "bg-green-400" },
  ];

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            Good morning, Rahul 👋
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">
              IIT Delhi
            </span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Your AI placement readiness improved by 8% this week. Recruiter profile views up by 42%.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/portfolio/rahul"
            className="gradient-bg text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 hover:opacity-90 shadow-lg shadow-indigo-500/20"
          >
            <Sparkles className="w-4 h-4" /> Share Portfolio
          </Link>
          <div className="glass rounded-xl px-4 py-2 flex items-center gap-2 border border-white/5">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold text-green-400">AI Matching Engine Live</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "AI Match Score", value: "83%", sub: "+5% vs target SDE role", icon: Brain, color: "from-indigo-500 to-purple-500" },
          { label: "Skill Readiness", value: "74/100", sub: "+12 points this month", icon: Target, color: "from-purple-500 to-cyan-500" },
          { label: "Active Applications", value: "12", sub: "3 in interview round", icon: Briefcase, color: "from-cyan-500 to-blue-500" },
          { label: "Gamified XP", value: "4,820", sub: "Rank #1 · 28 Day Streak", icon: Trophy, color: "from-blue-500 to-indigo-500" },
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

      {/* Profile completion + quick actions */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="glass rounded-2xl p-6 border border-white/5">
          <h3 className="font-semibold mb-4 text-sm text-gray-200">Profile & AI Readiness</h3>
          <div className="flex justify-around mb-6">
            <CircularProgress value={88} label="Profile Complete" />
            <CircularProgress value={83} label="AI Placement Readiness" />
          </div>
          <div className="space-y-2">
            {[
              { label: "LeetCode & GitHub Linked", done: true },
              { label: "ATS Resume Generated", done: true },
              { label: "Python Assessment Verified (94%)", done: true },
              { label: "Close SQL Gap (+10%)", done: false },
            ].map((item, i) => (
              <div key={i} className={`flex items-center gap-3 text-xs rounded-lg px-3 py-2 ${item.done ? "text-green-400 bg-green-500/5" : "text-gray-400 bg-white/[0.02]"}`}>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${item.done ? "border-green-400 bg-green-400/20 text-green-400" : "border-gray-600"}`}>
                  {item.done && <span className="text-[10px]">✓</span>}
                </div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6 border border-white/5 lg:col-span-2">
          <h3 className="font-semibold mb-4 text-sm text-gray-200">Platform Quick Actions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {[
              { label: "Complete Profile", icon: User, path: "/student/profile", color: "from-indigo-500 to-purple-500" },
              { label: "Skill Mapping Engine", icon: Map, path: "/student/skills", color: "from-purple-500 to-cyan-500" },
              { label: "Take Skill Test", icon: Brain, path: "/student/assessment", color: "from-cyan-500 to-blue-500" },
              { label: "AI ATS Resume Builder", icon: Zap, path: "/student/resume", color: "from-blue-500 to-indigo-500" },
              { label: "AI Mock Interview", icon: MessageSquare, path: "/student/interview", color: "from-indigo-500 to-purple-600" },
              { label: "AI Learning Roadmap", icon: Target, path: "/student/roadmap", color: "from-purple-600 to-pink-500" },
            ].map((a, i) => (
              <Link
                key={i}
                to={a.path}
                className="glass rounded-xl p-3.5 flex flex-col items-center gap-2 card-hover border border-white/5 text-center"
              >
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${a.color} flex items-center justify-center shadow-md`}>
                  <a.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-semibold text-gray-200">{a.label}</span>
              </Link>
            ))}
          </div>

          <div className="glass rounded-xl p-4 border border-yellow-500/20 flex items-center gap-4 bg-yellow-500/5">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-gray-100">Live Interview Today with Infosys</div>
              <div className="text-xs text-gray-400">Round 2 Technical Interview · 3:00 PM (Zoom)</div>
            </div>
            <Link
              to="/student/calendar"
              className="text-xs px-3 py-1.5 rounded-lg gradient-bg text-white font-semibold hover:opacity-90 transition-all shadow-md shadow-indigo-500/20"
            >
              Join Session →
            </Link>
          </div>
        </div>
      </div>

      {/* Jobs + Applications */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-6 border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm text-gray-200">Recommended Internships</h3>
            <div className="flex gap-2">
              {(["recommended", "applied", "saved"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${activeTab === tab ? "gradient-bg text-white" : "glass text-gray-400"}`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {jobs.map((job, i) => (
              <div key={i} className="glass rounded-xl p-4 card-hover border border-white/5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-semibold text-sm text-gray-100">{job.title}</div>
                    <div className="text-xs text-gray-400">{job.company} · {job.location}</div>
                  </div>
                  <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-lg">{job.match}% AI Match</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex gap-1">
                    {job.tags.map((t, j) => (
                      <span key={j} className="text-[11px] bg-white/5 text-gray-300 px-2 py-0.5 rounded-md">{t}</span>
                    ))}
                  </div>
                  <span className="text-xs text-green-400 font-semibold">{job.salary}</span>
                </div>
              </div>
            ))}
          </div>
          <Link to="/student/jobs" className="block text-center text-xs text-indigo-400 hover:text-indigo-300 mt-4 transition-colors font-semibold">
            View All Filterable Internships →
          </Link>
        </div>

        <div className="glass rounded-2xl p-6 border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm text-gray-200">Application Pipeline</h3>
            <Link to="/student/applications" className="text-xs text-indigo-400 hover:underline">
              View Full Kanban →
            </Link>
          </div>
          <div className="relative space-y-4 mb-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="relative flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${item.dot} z-10`} />
                  {i < timeline.length - 1 && <div className="w-px h-8 bg-white/10 mt-1" />}
                </div>
                <div className="flex-1 glass rounded-xl p-3 border border-white/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-gray-200">{item.company}</div>
                      <div className="text-[11px] text-gray-400">{item.role}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs font-semibold ${item.color}`}>{item.status}</div>
                      <div className="text-[10px] text-gray-500">{item.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="font-semibold text-xs text-gray-300 uppercase tracking-wider mb-3">Targeted Upskilling Courses</h4>
          <div className="space-y-2.5">
            {courses.map((c, i) => (
              <div key={i} className="glass rounded-xl p-3 border border-white/5">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-xs font-semibold text-gray-200">{c.title}</div>
                  <span className="text-[10px] text-gray-400">{c.platform}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full gradient-bg" style={{ width: `${c.progress}%` }} />
                  </div>
                  <span className="text-[10px] text-gray-400">{c.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CircularProgress({ value, label }: { value: number; label: string }) {
  const r = 32;
  const circ = 2 * Math.PI * r;
  const stroke = circ - (value / 100) * circ;
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="7" />
          <circle
            cx="40" cy="40" r={r} fill="none"
            stroke="url(#circGrad)" strokeWidth="7"
            strokeDasharray={circ} strokeDashoffset={stroke}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="circGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-white">{value}%</span>
        </div>
      </div>
      <span className="text-[11px] text-gray-400 text-center font-medium max-w-24">{label}</span>
    </div>
  );
}

export default function StudentDashboard() {
  const location = useLocation();
  const path = location.pathname;

  const renderContent = () => {
    const cleanPath = path.replace(/\/$/, "");
    if (cleanPath === "/student" || cleanPath === "") return <StudentHome />;
    if (cleanPath.startsWith("/student/profile")) return <StudentProfile />;
    if (cleanPath.startsWith("/student/assessment")) return <SkillAssessment />;
    if (cleanPath.startsWith("/student/skills")) return <SkillMapping />;
    if (cleanPath.startsWith("/student/roadmap")) return <LearningRoadmap />;
    if (cleanPath.startsWith("/student/jobs")) return <JobPortal />;
    if (cleanPath.startsWith("/student/applications")) return <ApplicationsManager />;
    if (cleanPath.startsWith("/student/resume")) return <ResumeBuilder />;
    if (cleanPath.startsWith("/student/parser")) return <ResumeParser />;
    if (cleanPath.startsWith("/student/interview")) return <InterviewPrep />;
    if (cleanPath.startsWith("/student/analytics")) return <Analytics />;
    if (cleanPath.startsWith("/student/leaderboard")) return <Leaderboard />;
    if (cleanPath.startsWith("/student/calendar")) return <StudentCalendar />;
    if (cleanPath.startsWith("/student/community")) return <Community />;
    return <StudentHome />;
  };

  return (
    <div className="flex flex-col h-screen mesh-bg overflow-hidden">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar items={navItems} role="Student Portal" userName="Rahul Sharma" avatar="RS" />
        <div className="flex-1 overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
