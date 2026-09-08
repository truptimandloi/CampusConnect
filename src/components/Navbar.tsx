import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Brain, Bell, CheckCircle2, AlertCircle, Sparkles, ExternalLink, X
} from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);

  const notifications = [
    {
      id: 1,
      title: "Interview Scheduled with Infosys",
      desc: "Technical Round 1 scheduled for today at 3:00 PM",
      time: "10m ago",
      type: "interview",
      unread: true,
    },
    {
      id: 2,
      title: "AI Skill Match Updated",
      desc: "Your match for 'Data Science Intern' increased to 89%",
      time: "1h ago",
      type: "match",
      unread: true,
    },
    {
      id: 3,
      title: "New Internship Posted",
      desc: "Google posted 'ML Research Intern' matching your skills",
      time: "3h ago",
      type: "job",
      unread: true,
    },
    {
      id: 4,
      title: "Assessment Badge Earned",
      desc: "You scored 94/100 in Python & Algorithms test",
      time: "1d ago",
      type: "badge",
      unread: false,
    },
  ];

  const currentRole = location.pathname.startsWith("/student")
    ? "student"
    : location.pathname.startsWith("/company")
    ? "company"
    : location.pathname.startsWith("/college")
    ? "college"
    : location.pathname.startsWith("/admin")
    ? "admin"
    : "landing";

  return (
    <header className="glass-strong border-b border-white/8 sticky top-0 z-50 px-4 py-2.5">
      <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* Left: Brand Logo & Portal Tag */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-base gradient-text tracking-tight">CampusConnect</span>
            </div>
          </Link>
          {currentRole !== "landing" && (
            <span className="hidden sm:inline-block text-[11px] font-semibold text-indigo-300 glass px-2.5 py-1 rounded-full border border-indigo-500/20 capitalize">
              {currentRole} Portal
            </span>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Public Portfolio link for student */}
          {currentRole === "student" && (
            <Link
              to="/portfolio/rahul"
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Digital Portfolio</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
            </Link>
          )}

          {/* Notifications button & dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                if (unreadCount > 0) setUnreadCount(0);
              }}
              className="relative p-2 rounded-xl glass border border-white/8 hover:border-indigo-500/30 text-gray-300 hover:text-white transition-all"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl glass-strong border border-white/12 shadow-2xl p-4 z-50 animate-slide-up">
                <div className="flex items-center justify-between pb-3 border-b border-white/8">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">Notifications</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold">
                      Live AI Feed
                    </span>
                  </div>
                  <button
                    onClick={() => setShowNotifications(false)}
                    className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2 mt-3 max-h-80 overflow-y-auto pr-1">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className={`p-3 rounded-xl border transition-all ${
                        n.unread
                          ? "bg-indigo-500/10 border-indigo-500/20"
                          : "bg-white/[0.02] border-white/5"
                      } hover:border-indigo-500/30`}
                    >
                      <div className="flex items-start gap-2.5">
                        {n.type === "interview" ? (
                          <AlertCircle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                        ) : n.type === "badge" ? (
                          <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                        ) : (
                          <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-gray-200">{n.title}</div>
                          <div className="text-[11px] text-gray-400 mt-0.5">{n.desc}</div>
                          <div className="text-[10px] text-gray-500 mt-1">{n.time}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick Exit / Home */}
          <Link
            to="/"
            className="text-xs font-semibold text-gray-400 hover:text-white px-2.5 py-1.5 rounded-xl hover:bg-white/5 transition-all"
          >
            Landing
          </Link>
        </div>
      </div>
    </header>
  );
}
