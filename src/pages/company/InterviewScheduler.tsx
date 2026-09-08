import { useState } from "react";
import {
  Calendar, Clock, Video, Plus, CheckCircle2, User,
  Mail, FileText, Send, Sparkles, X
} from "lucide-react";

interface ScheduledSlot {
  id: number;
  candidateName: string;
  college: string;
  role: string;
  date: string;
  time: string;
  interviewer: string;
  link: string;
  status: "Scheduled" | "Completed" | "Offer Extended";
}

export default function InterviewScheduler() {
  const [slots, setSlots] = useState<ScheduledSlot[]>([
    {
      id: 1,
      candidateName: "Rahul Sharma",
      college: "IIT Delhi",
      role: "Frontend Developer Intern",
      date: "Today · 15 Sep",
      time: "3:00 PM – 4:00 PM",
      interviewer: "Arun Iyer (Staff SDE)",
      link: "https://zoom.us/j/razorpay-interview-101",
      status: "Scheduled",
    },
    {
      id: 2,
      candidateName: "Priya Patel",
      college: "IIT Bombay",
      role: "Frontend Developer Intern",
      date: "Tomorrow · 16 Sep",
      time: "11:00 AM – 12:00 PM",
      interviewer: "Sneha Roy (Senior Frontend Lead)",
      link: "https://zoom.us/j/razorpay-interview-102",
      status: "Scheduled",
    },
    {
      id: 3,
      candidateName: "Ankit Verma",
      college: "BITS Pilani",
      role: "Backend Engineer Intern",
      date: "14 Sep 2025",
      time: "4:00 PM – 5:00 PM",
      interviewer: "Vikram M (Engineering Manager)",
      link: "https://zoom.us/j/razorpay-interview-098",
      status: "Completed",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newCandidate, setNewCandidate] = useState("");
  const [newDate, setNewDate] = useState("18 Sep 2025");
  const [newTime, setNewTime] = useState("2:00 PM");

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCandidate.trim()) return;
    setSlots([
      ...slots,
      {
        id: Date.now(),
        candidateName: newCandidate,
        college: "Verified University",
        role: "Software Engineering Intern",
        date: newDate,
        time: newTime,
        interviewer: "Talent Acquisition Team",
        link: `https://meet.google.com/${Math.random().toString(36).substring(7)}`,
        status: "Scheduled",
      },
    ]);
    setShowModal(false);
    setNewCandidate("");
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Recruitment Calendar & Interview Hub</h1>
          <p className="text-xs text-gray-400 mt-1">
            Coordinate virtual rounds, generate automated video links, record scorecards, and send offer letters.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 hover:opacity-90 shadow-lg shadow-indigo-500/20"
        >
          <Plus className="w-4 h-4" /> Schedule New Interview
        </button>
      </div>

      {/* Slots */}
      <div className="space-y-4">
        {slots.map((slot) => (
          <div
            key={slot.id}
            className="glass rounded-2xl p-5 border border-white/8 card-hover flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center font-bold text-white shadow-lg shrink-0">
                {slot.candidateName.slice(0, 2).toUpperCase()}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-base text-gray-100">{slot.candidateName}</h3>
                  <span className="text-xs text-indigo-300 font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10">
                    {slot.college}
                  </span>
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{slot.role} · Interviewer: {slot.interviewer}</div>
                <div className="flex items-center gap-3 text-xs text-gray-400 mt-2">
                  <span className="flex items-center gap-1 text-cyan-400 font-medium">
                    <Calendar className="w-3.5 h-3.5" /> {slot.date}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-yellow-400 font-medium">
                    <Clock className="w-3.5 h-3.5" /> {slot.time}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 self-end sm:self-auto">
              <a
                href={slot.link}
                target="_blank"
                rel="noreferrer"
                className="glass px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-300 hover:text-white border border-white/10 flex items-center gap-1.5"
              >
                <Video className="w-3.5 h-3.5 text-cyan-400" /> Join Call
              </a>

              {slot.status === "Completed" ? (
                <button
                  onClick={() => alert(`Offer letter prepared and dispatched to ${slot.candidateName}!`)}
                  className="gradient-bg text-white text-xs font-semibold px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 hover:opacity-90 shadow-md shadow-indigo-500/20"
                >
                  <Send className="w-3.5 h-3.5" /> Extend Offer
                </button>
              ) : (
                <button
                  onClick={() => {
                    setSlots(slots.map((s) => (s.id === slot.id ? { ...s, status: "Completed" } : s)));
                  }}
                  className="glass px-3 py-1.5 rounded-xl text-xs font-semibold text-green-400 border border-green-500/20 hover:bg-green-500/10 flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" /> Mark Completed
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Schedule Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-slide-up">
          <form onSubmit={handleCreate} className="glass-strong rounded-3xl p-6 sm:p-8 max-w-md w-full border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="font-bold text-base text-gray-100">Schedule Candidate Interview</h3>
              <button type="button" onClick={() => setShowModal(false)} className="p-1 text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-400 block mb-1">Candidate Name</label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={newCandidate}
                  onChange={(e) => setNewCandidate(e.target.value)}
                  className="w-full glass px-3 py-2 rounded-xl text-xs border border-white/10 outline-none text-white focus:border-indigo-500"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Date</label>
                  <input
                    type="text"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full glass px-3 py-2 rounded-xl text-xs border border-white/10 outline-none text-white focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Time</label>
                  <input
                    type="text"
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    className="w-full glass px-3 py-2 rounded-xl text-xs border border-white/10 outline-none text-white focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-xs px-4 py-2 rounded-xl glass border border-white/10 text-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="gradient-bg text-white text-xs font-semibold px-5 py-2 rounded-xl hover:opacity-90 shadow-md shadow-indigo-500/20"
              >
                Schedule & Send Invite
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
