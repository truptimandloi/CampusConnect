import { useState } from "react";
import {
  Calendar as CalendarIcon, Clock, MapPin, Video,
  CheckCircle2, Plus, AlertCircle, ChevronLeft, ChevronRight
} from "lucide-react";

export default function StudentCalendar() {
  const [currentMonth, setCurrentMonth] = useState("September 2025");

  const events = [
    {
      id: 1,
      date: "Today · 15 Sep",
      time: "3:00 PM – 4:00 PM",
      title: "Technical Interview with Infosys (Round 2)",
      type: "interview",
      link: "https://zoom.us/j/demo123",
      location: "Zoom Online",
      color: "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
    },
    {
      id: 2,
      date: "Tomorrow · 16 Sep",
      time: "10:00 AM – 1:00 PM",
      title: "CampusConnect National Coding Assessment",
      type: "assessment",
      location: "Platform Portal",
      color: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
    },
    {
      id: 3,
      date: "18 Sep 2025",
      time: "5:00 PM – 6:00 PM",
      title: "1-on-1 Mentorship with Siddharth Rao (Staff SDE Google)",
      type: "mentorship",
      link: "https://meet.google.com/demo",
      location: "Google Meet",
      color: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
    },
    {
      id: 4,
      date: "25 Sep 2025",
      time: "11:59 PM",
      title: "Flipkart Data Science Internship Application Deadline",
      type: "deadline",
      location: "Application Portal",
      color: "border-red-500/30 bg-red-500/10 text-red-300",
    },
    {
      id: 5,
      date: "30 Sep 2025",
      time: "All Day",
      title: "National Innovation Hackathon Grand Finale Kickoff",
      type: "hackathon",
      location: "Nodal Center, New Delhi",
      color: "border-purple-500/30 bg-purple-500/10 text-purple-300",
    },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Academic & Recruitment Calendar</h1>
          <p className="text-xs text-gray-400 mt-1">
            Synchronized with college placement cell and recruiter interview schedules.
          </p>
        </div>

        <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-xl border border-white/8 text-xs font-semibold">
          <button className="p-1 hover:text-white text-gray-400"><ChevronLeft className="w-4 h-4" /></button>
          <span>{currentMonth}</span>
          <button className="p-1 hover:text-white text-gray-400"><ChevronRight className="w-4 h-4" /></button>
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {events.map((evt) => (
          <div
            key={evt.id}
            className="glass rounded-2xl p-5 border border-white/8 card-hover flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl glass border border-white/10 text-center shrink-0 min-w-20">
                <span className="text-xs text-gray-400 block font-medium">Date</span>
                <span className="text-xs font-bold text-white mt-0.5 block">{evt.date.split("·")[0]}</span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm sm:text-base text-gray-100">{evt.title}</h3>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mt-1.5">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-cyan-400" /> {evt.time}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-indigo-400" /> {evt.location}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-auto">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${evt.color}`}>
                {evt.type.toUpperCase()}
              </span>
              {evt.link && (
                <a
                  href={evt.link}
                  target="_blank"
                  rel="noreferrer"
                  className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 hover:opacity-90 shadow-md shadow-indigo-500/20"
                >
                  <Video className="w-3.5 h-3.5" /> Join Session
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
