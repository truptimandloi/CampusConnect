import { useState } from "react";
import {
  GraduationCap, Building2, Award, Calendar, Users,
  TrendingUp, CheckCircle2, DollarSign, Plus, Download
} from "lucide-react";

export default function PlacementCell() {
  const drives = [
    {
      company: "Google India",
      date: "22 Sep 2025",
      roles: "Software Engineer / AI Systems",
      packageOffered: "₹52.0 LPA (CTC)",
      status: "Drive Confirmed",
      eligibleCount: 140,
    },
    {
      company: "Razorpay",
      date: "25 Sep 2025",
      roles: "Backend & Frontend Interns -> PPO",
      packageOffered: "₹28.5 LPA (CTC)",
      status: "Shortlisting Underway",
      eligibleCount: 220,
    },
    {
      company: "Microsoft IDC",
      date: "02 Oct 2025",
      roles: "Cloud Solutions Engineer",
      packageOffered: "₹45.0 LPA (CTC)",
      status: "Slot Booked",
      eligibleCount: 180,
    },
    {
      company: "Flipkart",
      date: "10 Oct 2025",
      roles: "Data Science & Supply Chain SDE",
      packageOffered: "₹32.0 LPA (CTC)",
      status: "Invited",
      eligibleCount: 195,
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">University Training & Placement Cell (TPO)</h1>
          <p className="text-xs text-gray-400 mt-1">
            Indian Institute of Technology (IIT) Delhi · Placement Season 2024–25
          </p>
        </div>

        <button
          onClick={() => alert("Annual Placement Report generated and downloaded as PDF!")}
          className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 hover:opacity-90 shadow-lg shadow-indigo-500/20"
        >
          <Download className="w-3.5 h-3.5" /> Download Placement Report (PDF)
        </button>
      </div>

      {/* Primary Placement Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Overall Placement Rate", value: "73%", sub: "+8% vs previous year", icon: TrendingUp, color: "from-indigo-500 to-purple-500" },
          { label: "Highest Package", value: "₹52 LPA", sub: "Google India FAANG", icon: Award, color: "from-purple-500 to-cyan-500" },
          { label: "Average Package", value: "₹18.4 LPA", sub: "Across all 5 depts", icon: DollarSign, color: "from-cyan-500 to-blue-500" },
          { label: "Recruiters On-Campus", value: "128", sub: "34 Fortune 500s", icon: Building2, color: "from-blue-500 to-indigo-500" },
        ].map((m, idx) => (
          <div key={idx} className="glass rounded-2xl p-5 border border-white/5 card-hover">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center mb-3 shadow`}>
              <m.icon className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-bold">{m.value}</div>
            <div className="text-xs text-gray-400">{m.label}</div>
            <div className="text-[11px] text-green-400 mt-1">{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Upcoming Placement Drives */}
      <div className="glass rounded-2xl p-6 border border-white/8 space-y-4">
        <h3 className="font-bold text-base text-gray-100 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-indigo-400" /> Upcoming Campus Recruitment Drives
        </h3>

        <div className="space-y-3">
          {drives.map((d, i) => (
            <div key={i} className="glass p-4 rounded-xl border border-white/5 card-hover flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center font-bold text-white shadow">
                  {d.company.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-100">{d.company}</h4>
                  <div className="text-xs text-gray-400">{d.roles}</div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                    <span className="text-green-400 font-semibold">{d.packageOffered}</span>
                    <span>·</span>
                    <span className="text-cyan-400">{d.eligibleCount} Students Shortlisted</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-auto">
                <div className="text-right">
                  <span className="text-xs font-semibold text-gray-200 block">{d.date}</span>
                  <span className="text-[10px] text-indigo-400 font-bold">{d.status}</span>
                </div>
                <button
                  onClick={() => alert(`Viewed roster for ${d.company}`)}
                  className="glass px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-300 hover:text-white border border-white/10"
                >
                  Manage Drive
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
