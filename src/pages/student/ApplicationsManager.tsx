import { useState } from "react";
import {
  FileText, Calendar, CheckCircle2, Clock, MapPin, Building2,
  AlertCircle, ExternalLink, ChevronRight, Download, Eye, X
} from "lucide-react";

interface Application {
  id: number;
  company: string;
  role: string;
  location: string;
  salary: string;
  appliedDate: string;
  status: "Applied" | "Shortlisted" | "Interview" | "Offer" | "Joined";
  interviewDate?: string;
  feedback?: string;
  offerLetter?: {
    stipend: string;
    joiningDate: string;
    location: string;
  };
}

export default function ApplicationsManager() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedOffer, setSelectedOffer] = useState<Application | null>(null);

  const applications: Application[] = [
    {
      id: 1,
      company: "Infosys",
      role: "SDE Intern (React + Spring)",
      location: "Bangalore · Hybrid",
      salary: "₹25,000 / month",
      appliedDate: "15 Aug 2025",
      status: "Interview",
      interviewDate: "Today at 3:00 PM (Round 2 Tech)",
      feedback: "Strong core algorithmic fundamentals. Impressive live problem-solving in binary trees.",
    },
    {
      id: 2,
      company: "Swiggy",
      role: "Backend Platform Intern",
      location: "Bangalore · Remote",
      salary: "₹35,000 / month",
      appliedDate: "02 Aug 2025",
      status: "Offer",
      feedback: "Highest score in system design case study. Extended pre-placement internship offer.",
      offerLetter: {
        stipend: "₹35,000 / month + ₹10,000 WFH setup allowance",
        joiningDate: "15 Jan 2026",
        location: "Bangalore Tech Hub",
      },
    },
    {
      id: 3,
      company: "Flipkart",
      role: "Data Science Intern",
      location: "Bangalore · Hybrid",
      salary: "₹30,000 / month",
      appliedDate: "10 Aug 2025",
      status: "Shortlisted",
      feedback: "Resume verified by AI screening with 91% match for recommendation engine team.",
    },
    {
      id: 4,
      company: "PhonePe",
      role: "Software Engineering Intern",
      location: "Pune · Onsite",
      salary: "₹28,000 / month",
      appliedDate: "18 Aug 2025",
      status: "Applied",
    },
    {
      id: 5,
      company: "Google",
      role: "ML Research Intern",
      location: "Hyderabad · Hybrid",
      salary: "₹50,000 / month",
      appliedDate: "20 Aug 2025",
      status: "Applied",
    },
    {
      id: 6,
      company: "Razorpay",
      role: "Frontend Engineering Intern",
      location: "Bangalore · Remote",
      salary: "₹25,000 / month",
      appliedDate: "22 Jul 2025",
      status: "Joined",
      offerLetter: {
        stipend: "₹25,000 / month",
        joiningDate: "01 Aug 2025",
        location: "Remote",
      },
    },
  ];

  const filtered = applications.filter((app) => {
    if (filter === "All") return true;
    return app.status === filter;
  });

  const getStatusBadge = (status: Application["status"]) => {
    switch (status) {
      case "Offer":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Interview":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Shortlisted":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Joined":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-white/5 text-gray-400 border-white/10";
    }
  };

  const stages = ["Applied", "Shortlisted", "Interview", "Offer", "Joined"];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Applications & Interview Pipeline</h1>
          <p className="text-xs text-gray-400 mt-1">
            Track your recruitment milestones from submission to offer letters.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 glass rounded-xl border border-white/8">
          {["All", "Applied", "Shortlisted", "Interview", "Offer", "Joined"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                filter === cat
                  ? "gradient-bg text-white shadow-md shadow-indigo-500/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Pipeline Bar */}
      <div className="glass rounded-2xl p-5 border border-white/8">
        <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block mb-3">
          Overall Hiring Pipeline Status
        </span>
        <div className="grid grid-cols-5 gap-2 text-center">
          {stages.map((stage, idx) => {
            const count = applications.filter((a) => a.status === stage).length;
            return (
              <div key={idx} className="glass p-3 rounded-xl border border-white/5 space-y-1">
                <span className="text-lg font-bold text-gray-100">{count}</span>
                <span className="text-[11px] text-gray-400 block font-medium">{stage}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {filtered.map((app) => (
          <div
            key={app.id}
            className="glass rounded-2xl p-5 border border-white/8 card-hover space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center font-bold text-white shadow-lg shrink-0">
                  {app.company.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base text-gray-100">{app.role}</h3>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                    <span className="font-semibold text-gray-300">{app.company}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-cyan-400" /> {app.location}</span>
                    <span>·</span>
                    <span className="text-green-400 font-semibold">{app.salary}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${getStatusBadge(app.status)}`}>
                  {app.status}
                </span>
                {app.offerLetter && (
                  <button
                    onClick={() => setSelectedOffer(app)}
                    className="gradient-bg text-white text-xs font-semibold px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 hover:opacity-90 shadow-md shadow-indigo-500/20"
                  >
                    <Eye className="w-3.5 h-3.5" /> View Offer Letter
                  </button>
                )}
              </div>
            </div>

            {/* Stepper indicator */}
            <div className="pt-2">
              <div className="flex items-center justify-between relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-1/2 z-0" />
                {stages.map((stage, sIdx) => {
                  const currentStageIdx = stages.indexOf(app.status);
                  const isPassed = sIdx <= currentStageIdx;
                  const isCurrent = sIdx === currentStageIdx;

                  return (
                    <div key={sIdx} className="relative z-10 flex flex-col items-center gap-1">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          isPassed
                            ? isCurrent
                              ? "gradient-bg text-white ring-4 ring-indigo-500/20"
                              : "bg-green-500 text-slate-900"
                            : "bg-slate-800 text-gray-600"
                        }`}
                      >
                        {isPassed && !isCurrent ? "✓" : sIdx + 1}
                      </div>
                      <span className={`text-[10px] font-medium ${isCurrent ? "text-indigo-400 font-bold" : "text-gray-500"}`}>
                        {stage}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interview & Feedback Banner */}
            {(app.interviewDate || app.feedback) && (
              <div className="p-3.5 rounded-xl glass border border-white/5 bg-white/[0.01] space-y-1.5 text-xs">
                {app.interviewDate && (
                  <div className="flex items-center gap-2 text-yellow-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5" /> Scheduled: {app.interviewDate}
                  </div>
                )}
                {app.feedback && (
                  <div className="text-gray-400">
                    <strong className="text-gray-300">Recruiter Feedback: </strong> {app.feedback}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Offer Letter Preview Modal */}
      {selectedOffer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-slide-up">
          <div className="glass-strong rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-white/10 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center text-white font-bold">
                  {selectedOffer.company.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-bold text-base text-gray-100">Internship Offer Letter</h3>
                  <span className="text-xs text-gray-400">{selectedOffer.company} Talent Acquisition</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedOffer(null)}
                className="p-1 rounded-lg text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-gray-300 leading-relaxed">
              <p>
                Dear <strong className="text-white">Rahul Sharma</strong>,
              </p>
              <p>
                We are thrilled to offer you the position of <strong className="text-indigo-400">{selectedOffer.role}</strong> at {selectedOffer.company}!
              </p>

              <div className="p-4 rounded-xl glass border border-white/8 space-y-2 bg-white/[0.02]">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monthly Stipend:</span>
                  <span className="font-bold text-green-400">{selectedOffer.offerLetter?.stipend}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tentative Joining Date:</span>
                  <span className="font-semibold text-white">{selectedOffer.offerLetter?.joiningDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Work Location:</span>
                  <span className="font-semibold text-white">{selectedOffer.offerLetter?.location}</span>
                </div>
              </div>

              <p className="text-[11px] text-gray-500">
                This offer is digitally verifiable through CampusConnect Enterprise Talent Infrastructure.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedOffer(null)}
                className="text-xs px-4 py-2 rounded-xl glass border border-white/10 text-gray-300"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert("Offer Accepted! Congratulations Rahul!");
                  setSelectedOffer(null);
                }}
                className="gradient-bg text-white text-xs font-semibold px-5 py-2 rounded-xl hover:opacity-90 flex items-center gap-1.5 shadow-lg shadow-indigo-500/20"
              >
                <CheckCircle2 className="w-4 h-4" /> Accept Offer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
