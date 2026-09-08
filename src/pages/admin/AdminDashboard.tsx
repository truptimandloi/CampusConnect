import { useLocation } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import AdminApprovals from "@/pages/admin/AdminApprovals";
import AdminSkillsManager from "@/pages/admin/AdminSkillsManager";
import {
  LayoutDashboard, Users, Building2, BookOpen, BarChart3,
  Bell, Shield, Settings, CheckCircle, XCircle, Clock,
  TrendingUp, Activity, Tag, Sparkles
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, BarChart, Bar } from "recharts";

const navItems = [
  { label: "Overview", icon: LayoutDashboard, path: "/admin" },
  { label: "Verification Queue", icon: Shield, path: "/admin/approvals" },
  { label: "Skill Taxonomy", icon: Tag, path: "/admin/skills" },
  { label: "Colleges & Companies", icon: Building2, path: "/admin/entities" },
  { label: "Platform Health", icon: Activity, path: "/admin/analytics" },
];

const platformGrowth = [
  { month: "Apr", students: 28000, companies: 1800, colleges: 520 },
  { month: "May", students: 32000, companies: 2000, colleges: 590 },
  { month: "Jun", students: 38000, companies: 2100, colleges: 650 },
  { month: "Jul", students: 42000, companies: 2300, colleges: 720 },
  { month: "Aug", students: 47000, companies: 2400, colleges: 780 },
  { month: "Sep", students: 50000, companies: 2500, colleges: 800 },
];

const approvalQueue = [
  { name: "Meesho Technologies", type: "Company", submitted: "2 hours ago", status: "Pending" },
  { name: "Chandigarh University", type: "College", submitted: "5 hours ago", status: "Pending" },
  { name: "Ola Electric", type: "Company", submitted: "1 day ago", status: "Pending" },
  { name: "Amity University Delhi", type: "College", submitted: "1 day ago", status: "Pending" },
];

const recentActivity = [
  { action: "New company registered", entity: "Nykaa", time: "10 min ago", icon: Building2, color: "text-indigo-400" },
  { action: "College approved", entity: "VNIT Nagpur", time: "1 hour ago", icon: CheckCircle, color: "text-green-400" },
  { action: "Skill added to catalog", entity: "LangChain", time: "2 hours ago", icon: TrendingUp, color: "text-purple-400" },
  { action: "Mass announcement sent", entity: "Platform Update v2.1", time: "4 hours ago", icon: Bell, color: "text-cyan-400" },
  { action: "Company rejected", entity: "Fake Corp Ltd.", time: "6 hours ago", icon: XCircle, color: "text-red-400" },
];

const topSkills = [
  { skill: "Python", demand: 94 },
  { skill: "React / Next.js", demand: 91 },
  { skill: "MLOps & LLMs", demand: 89 },
  { skill: "Docker / K8s", demand: 86 },
  { skill: "PostgreSQL", demand: 85 },
  { skill: "Golang", demand: 79 },
];

function AdminHome() {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Admin Command Center</h1>
          <p className="text-gray-400 text-sm mt-1">Platform health · All microservices & AI inference operational</p>
        </div>
        <div className="flex items-center gap-2 glass rounded-xl px-4 py-2 border border-green-500/20">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-green-400 font-semibold">99.9% Core Engine Uptime</span>
        </div>
      </div>

      {/* Platform KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Registered Students", value: "50,000+", sub: "+3.2k this month", icon: Users, color: "from-indigo-500 to-purple-500" },
          { label: "Partner Companies", value: "2,500+", sub: "Verified employers", icon: Building2, color: "from-purple-500 to-cyan-500" },
          { label: "Affiliated Colleges", value: "800+", sub: "IITs, NITs, State Univs", icon: BookOpen, color: "from-cyan-500 to-blue-500" },
          { label: "Successful Placements", value: "18,400+", sub: "₹8.4L avg CTC", icon: TrendingUp, color: "from-blue-500 to-indigo-500" },
        ].map((s, i) => (
          <div key={i} className="glass rounded-2xl p-5 card-hover border border-white/5">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3 shadow`}>
              <s.icon className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-bold mb-0.5">{s.value}</div>
            <div className="text-sm text-gray-400">{s.label}</div>
            <div className="text-xs text-green-400 mt-1">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Growth Chart */}
      <div className="glass rounded-2xl p-6 border border-white/5 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sm text-gray-200">National Ecosystem Growth (Students & Institutions)</h3>
          <span className="text-xs text-gray-500">Q1–Q3 2025</span>
        </div>
        <div className="h-60 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={platformGrowth}>
              <defs>
                <linearGradient id="adminGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "rgba(16,22,42,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, color: "#e8eaf0", fontSize: 12 }} />
              <Area type="monotone" dataKey="students" name="Active Students" stroke="#6366f1" fill="url(#adminGrad)" strokeWidth={2} />
              <Area type="monotone" dataKey="companies" name="Companies" stroke="#06b6d4" fill="none" strokeWidth={2} />
              <Area type="monotone" dataKey="colleges" name="Colleges" stroke="#8b5cf6" fill="none" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 2-column: Approval Queue & Live System Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Approvals */}
        <div className="glass rounded-2xl p-6 border border-white/5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm text-gray-200">Pending Institution & Corporate Approvals</h3>
            <a href="/admin/approvals" className="text-xs text-indigo-400 hover:underline">
              View All Queue →
            </a>
          </div>
          <div className="space-y-3">
            {approvalQueue.map((item, i) => (
              <div key={i} className="glass rounded-xl p-3.5 border border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-xs text-gray-200">{item.name}</div>
                  <div className="text-[11px] text-gray-400">{item.type} · Submitted {item.submitted}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => alert(`Approved ${item.name}!`)}
                    className="p-1.5 glass rounded-lg text-green-400 hover:bg-green-500/10"
                    title="Approve"
                  >
                    <CheckCircle className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => alert(`Rejected ${item.name}!`)}
                    className="p-1.5 glass rounded-lg text-red-400 hover:bg-red-500/10"
                    title="Reject"
                  >
                    <XCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top In-Demand Skills */}
        <div className="glass rounded-2xl p-6 border border-white/5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm text-gray-200">Real-Time Industry Skill Demand</h3>
            <a href="/admin/skills" className="text-xs text-indigo-400 hover:underline">
              Manage Taxonomy →
            </a>
          </div>
          <div className="space-y-3">
            {topSkills.map((s, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-300 font-medium">{s.skill}</span>
                  <span className="text-indigo-400 font-bold">{s.demand}% Index</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full gradient-bg" style={{ width: `${s.demand}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const location = useLocation();
  const path = location.pathname;

  const renderContent = () => {
    const cleanPath = path.replace(/\/$/, "");
    if (cleanPath === "/admin" || cleanPath === "") return <AdminHome />;
    if (cleanPath.startsWith("/admin/approvals") || cleanPath.startsWith("/admin/entities") || cleanPath.startsWith("/admin/users")) return <AdminApprovals />;
    if (cleanPath.startsWith("/admin/skills")) return <AdminSkillsManager />;
    if (cleanPath.startsWith("/admin/analytics")) return <AdminHome />;
    return <AdminHome />;
  };

  return (
    <div className="flex flex-col h-screen mesh-bg overflow-hidden">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar items={navItems} role="Super Admin" userName="Admin Command" avatar="SA" />
        <div className="flex-1 overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
