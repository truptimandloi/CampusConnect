import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users, Search, Filter, GraduationCap, CheckCircle2,
  AlertCircle, ExternalLink, Star, ArrowUpRight
} from "lucide-react";

export default function CollegeStudents() {
  const [search, setSearch] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("All");

  const students = [
    { id: 1, name: "Rahul Sharma", roll: "2022CSB1082", branch: "CSE", cgpa: 8.92, readiness: 83, status: "Offer Received (Swiggy)", attendance: "94%" },
    { id: 2, name: "Priya Patel", roll: "2022CSB1094", branch: "CSE", cgpa: 9.15, readiness: 89, status: "Interviewing (Razorpay)", attendance: "96%" },
    { id: 3, name: "Vikram Malhotra", roll: "2022EEB1042", branch: "ECE", cgpa: 8.4, readiness: 78, status: "Shortlisted (Infosys)", attendance: "91%" },
    { id: 4, name: "Ananya Deshmukh", roll: "2022MEB1021", branch: "ME", cgpa: 8.2, readiness: 68, status: "Training Phase", attendance: "88%" },
    { id: 5, name: "Rohan Gupta", roll: "2022CSB1015", branch: "CSE", cgpa: 9.3, readiness: 91, status: "Offer Received (Google)", attendance: "98%" },
    { id: 6, name: "Sneha Reddy", roll: "2022CEB1055", branch: "CE", cgpa: 7.9, readiness: 65, status: "Assessment Pending", attendance: "85%" },
  ];

  const filtered = students.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.roll.toLowerCase().includes(search.toLowerCase());
    const matchesBranch = selectedBranch === "All" || s.branch === selectedBranch;
    return matchesSearch && matchesBranch;
  });

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">University Student Roster & Tracking</h1>
          <p className="text-xs text-gray-400 mt-1">
            Real-time batch performance, placement readiness index, and attendance records across all engineering branches.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="glass rounded-2xl p-4 border border-white/8 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search student by name or roll number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full glass pl-9 pr-3 py-2 rounded-xl text-xs border border-white/10 outline-none text-white focus:border-indigo-500"
          />
        </div>

        <select
          value={selectedBranch}
          onChange={(e) => setSelectedBranch(e.target.value)}
          className="glass px-3 py-2 rounded-xl text-xs border border-white/10 outline-none text-gray-200 bg-slate-900"
        >
          <option value="All">All Departments (CSE, ECE, ME, CE)</option>
          <option value="CSE">Computer Science (CSE)</option>
          <option value="ECE">Electronics (ECE)</option>
          <option value="ME">Mechanical (ME)</option>
          <option value="CE">Civil (CE)</option>
        </select>
      </div>

      {/* Roster Table */}
      <div className="glass rounded-2xl border border-white/8 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-300">
            <thead className="bg-white/[0.03] text-gray-400 uppercase tracking-wider text-[10px] border-b border-white/5 font-semibold">
              <tr>
                <th className="p-4">Student & Roll No</th>
                <th className="p-4">Department</th>
                <th className="p-4">CGPA</th>
                <th className="p-4">AI Readiness</th>
                <th className="p-4">Attendance</th>
                <th className="p-4">Placement Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((s) => (
                <tr key={s.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4">
                    <div className="font-bold text-gray-100">{s.name}</div>
                    <div className="text-[11px] text-gray-500 font-mono">{s.roll}</div>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-indigo-300 font-bold">{s.branch}</span>
                  </td>
                  <td className="p-4 font-bold text-white">{s.cgpa}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full gradient-bg" style={{ width: `${s.readiness}%` }} />
                      </div>
                      <span className="font-bold text-cyan-400">{s.readiness}%</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-300">{s.attendance}</td>
                  <td className="p-4">
                    <span className="text-[11px] font-semibold text-green-400">
                      {s.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Link
                      to="/portfolio/rahul"
                      className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1"
                    >
                      <span>Profile</span> <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
