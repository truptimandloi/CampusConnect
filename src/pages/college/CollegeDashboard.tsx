import { useLocation } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import CollegeCurriculumInsights from "@/pages/college/CollegeCurriculumInsights";
import CollegeStudents from "@/pages/college/CollegeStudents";
import PlacementCell from "@/pages/college/PlacementCell";
import StudentCalendar from "@/pages/student/StudentCalendar";
import ChartWrapper from "@/components/ChartWrapper";
import {
  LayoutDashboard, Users, Building2, BarChart3, BookOpen,
  GraduationCap, Calendar, Settings, TrendingUp, Award
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  CartesianGrid, PieChart, Pie, Cell
} from "recharts";

const navItems = [
  { label: "Overview", icon: LayoutDashboard, path: "/college" },
  { label: "Students Roster", icon: Users, path: "/college/students" },
  { label: "Placement Drives", icon: Building2, path: "/college/placement" },
  { label: "Curriculum Insights", icon: BookOpen, path: "/college/training" },
  { label: "Placement Cell TPO", icon: GraduationCap, path: "/college/cell" },
  { label: "Calendar", icon: Calendar, path: "/college/calendar" },
];

const deptData = [
  { dept: "CSE", placed: 94, total: 120, avg_package: 24.5 },
  { dept: "ECE", placed: 78, total: 95, avg_package: 18.2 },
  { dept: "EE", placed: 71, total: 88, avg_package: 15.0 },
  { dept: "ME", placed: 62, total: 110, avg_package: 12.5 },
  { dept: "CE", placed: 51, total: 80, avg_package: 10.2 },
];

const placementPie = [
  { name: "Placed", value: 73, color: "#6366f1" },
  { name: "Offer Received", value: 12, color: "#8b5cf6" },
  { name: "In Process", value: 9, color: "#06b6d4" },
  { name: "Not Applied", value: 6, color: "rgba(255,255,255,0.1)" },
];

function CollegeHome() {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">IIT Delhi · Placement & Training Command Hub</h1>
          <p className="text-gray-400 text-sm mt-1">Academic Year 2024–25 · 493 eligible undergraduate students</p>
        </div>
        <div className="glass px-4 py-2 rounded-xl border border-white/5 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-semibold text-green-400">Campus Placement Season Active</span>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Eligible", value: "493", sub: "Class of 2026", icon: Users, color: "from-indigo-500 to-purple-500" },
          { label: "Companies Visited", value: "128", sub: "+24 this season", icon: Building2, color: "from-purple-500 to-cyan-500" },
          { label: "Placement Rate", value: "73%", sub: "+8% vs last year", icon: TrendingUp, color: "from-cyan-500 to-blue-500" },
          { label: "Highest Package", value: "₹52 LPA", sub: "Google India FAANG", icon: Award, color: "from-blue-500 to-indigo-500" },
        ].map((k, i) => (
          <div key={i} className="glass rounded-2xl p-5 card-hover border border-white/5">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${k.color} flex items-center justify-center mb-3 shadow`}>
              <k.icon className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-bold mb-0.5">{k.value}</div>
            <div className="text-sm text-gray-400">{k.label}</div>
            <div className="text-xs text-green-400 mt-1">{k.sub}</div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Dept Wise Bar Chart */}
        <div className="glass rounded-2xl p-6 border border-white/5 lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm text-gray-200">Department Placement Performance (Offers vs Total)</h3>
            <span className="text-xs text-gray-500">2025 Batch</span>
          </div>
          <div className="h-64 w-full">
            <ChartWrapper fallbackTitle="Department Placement Breakdown">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={deptData}>
                  <CartesianGrid stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="dept" tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: "rgba(16,22,42,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, color: "#e8eaf0", fontSize: 12 }} />
                  <Bar dataKey="total" name="Total Eligible" fill="rgba(255,255,255,0.1)" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="placed" name="Placed Students" fill="#6366f1" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartWrapper>
          </div>
        </div>

        {/* Placement Status Donut */}
        <div className="glass rounded-2xl p-6 border border-white/5 space-y-4 flex flex-col justify-between">
          <h3 className="font-semibold text-sm text-gray-200">Overall Placement Ratio</h3>
          <div className="h-44 w-full">
            <ChartWrapper fallbackTitle="Placement Distribution">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={placementPie} innerRadius={48} outerRadius={68} paddingAngle={4} dataKey="value">
                    {placementPie.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "rgba(16,22,42,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, color: "#e8eaf0", fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </ChartWrapper>
          </div>
          <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs">
            {placementPie.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-gray-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.name}
                </span>
                <span className="font-bold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Suggested Training Quick Actions */}
      <div className="glass rounded-2xl p-6 border border-white/5 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-base flex items-center gap-2 text-indigo-300">
            <BookOpen className="w-5 h-5 text-indigo-400" /> AI Skill Lag Alerts (Departments Needing Training)
          </h3>
          <a href="/college/training" className="text-xs text-indigo-400 hover:underline">
            View Curriculum Insights →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { dept: "Mechanical", needs: ["AutoCAD 3D", "SolidWorks", "Python"], urgency: "High", students: 68 },
            { dept: "Electronics", needs: ["VLSI Chip Design", "Embedded C", "FPGA"], urgency: "Medium", students: 52 },
            { dept: "Computer Science", needs: ["Cloud AWS", "MLOps", "Kubernetes"], urgency: "Low", students: 45 },
          ].map((rec, i) => (
            <div key={i} className="glass rounded-xl p-4 border border-white/5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-sm text-gray-100">{rec.dept}</div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  rec.urgency === "High" ? "bg-red-500/20 text-red-400" :
                  rec.urgency === "Medium" ? "bg-yellow-500/20 text-yellow-400" :
                  "bg-green-500/20 text-green-400"
                }`}>{rec.urgency} Alert</span>
              </div>
              <div className="text-xs text-gray-400">{rec.students} students lagging behind live job specs</div>
              <div className="flex flex-wrap gap-1 pt-1">
                {rec.needs.map((n, j) => (
                  <span key={j} className="text-[10px] bg-indigo-500/10 text-indigo-300 px-2 py-0.5 rounded">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CollegeDashboard() {
  const location = useLocation();
  const path = location.pathname;

  const renderContent = () => {
    const cleanPath = path.replace(/\/$/, "");
    if (cleanPath === "/college" || cleanPath === "") return <CollegeHome />;
    if (cleanPath.startsWith("/college/students")) return <CollegeStudents />;
    if (cleanPath.startsWith("/college/placement") || cleanPath.startsWith("/college/cell")) return <PlacementCell />;
    if (cleanPath.startsWith("/college/training")) return <CollegeCurriculumInsights />;
    if (cleanPath.startsWith("/college/calendar")) return <StudentCalendar />;
    return <CollegeHome />;
  };

  return (
    <div className="flex flex-col h-screen mesh-bg overflow-hidden">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar items={navItems} role="College Portal" userName="Prof. K. Verma (TPO)" avatar="KV" />
        <div className="flex-1 overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
