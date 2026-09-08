import { useState } from "react";
import {
  Trophy, Flame, Award, Star, Zap, GraduationCap,
  TrendingUp, Building2, Crown, Shield
} from "lucide-react";

export default function Leaderboard() {
  const [tab, setTab] = useState<"students" | "colleges" | "recruiters">("students");

  const students = [
    { rank: 1, name: "Rahul Sharma", college: "IIT Delhi", xp: 4820, streak: 28, level: "Level 12", badge: "Gold Master", avatar: "RS" },
    { rank: 2, name: "Priya Patel", college: "IIT Bombay", xp: 4650, streak: 24, level: "Level 11", badge: "Algorithmic Ace", avatar: "PP" },
    { rank: 3, name: "Ankit Verma", college: "BITS Pilani", xp: 4380, streak: 21, level: "Level 10", badge: "Fullstack Ninja", avatar: "AV" },
    { rank: 4, name: "Sneha Reddy", college: "NIT Trichy", xp: 4120, streak: 19, level: "Level 10", badge: "ML Specialist", avatar: "SR" },
    { rank: 5, name: "Rohan Gupta", college: "IIIT Hyderabad", xp: 3950, streak: 15, level: "Level 9", badge: "Cloud Architect", avatar: "RG" },
    { rank: 6, name: "Meera Nair", college: "VIT Vellore", xp: 3780, streak: 12, level: "Level 8", badge: "Code Guru", avatar: "MN" },
  ];

  const colleges = [
    { rank: 1, name: "IIT Delhi", students: 493, placedRate: "94%", avgPackage: "₹24.8 LPA", score: 98 },
    { rank: 2, name: "IIT Bombay", students: 512, placedRate: "93%", avgPackage: "₹23.5 LPA", score: 96 },
    { rank: 3, name: "BITS Pilani", students: 440, placedRate: "91%", avgPackage: "₹20.2 LPA", score: 94 },
    { rank: 4, name: "IIIT Hyderabad", students: 380, placedRate: "95%", avgPackage: "₹26.1 LPA", score: 93 },
    { rank: 5, name: "NIT Trichy", students: 460, placedRate: "88%", avgPackage: "₹18.4 LPA", score: 89 },
  ];

  const recruiters = [
    { rank: 1, name: "Google India", offers: 42, highestStipend: "₹1,25,000/mo", rating: "4.9 ★" },
    { rank: 2, name: "Razorpay", offers: 38, highestStipend: "₹85,000/mo", rating: "4.8 ★" },
    { rank: 3, name: "Microsoft", offers: 35, highestStipend: "₹1,20,000/mo", rating: "4.9 ★" },
    { rank: 4, name: "Flipkart", offers: 29, highestStipend: "₹75,000/mo", rating: "4.7 ★" },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Top Banner with Gamification KPIs */}
      <div className="glass rounded-3xl p-6 border border-white/10 relative overflow-hidden bg-gradient-to-r from-amber-950/30 via-indigo-950/20 to-slate-900/60">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1 w-fit">
              <Trophy className="w-3.5 h-3.5 text-amber-400" /> National Gamified Talent Pool
            </span>
            <h1 className="text-2xl font-bold">National Leaderboard & XP Standings</h1>
            <p className="text-xs text-gray-400">
              Compete with students across 800+ universities based on verified assessment performance and coding streaks.
            </p>
          </div>

          {/* User's Quick Rank Badge */}
          <div className="glass p-4 rounded-2xl border border-white/10 text-center shrink-0 min-w-44">
            <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Your Standing</span>
            <div className="text-3xl font-extrabold gradient-text mt-0.5">Rank #1</div>
            <div className="flex items-center justify-center gap-2 mt-1 text-xs">
              <span className="flex items-center gap-1 text-amber-400 font-bold"><Flame className="w-3.5 h-3.5 fill-amber-400" /> 28 Days</span>
              <span className="text-indigo-300 font-semibold">4,820 XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 p-1 glass rounded-xl border border-white/8 w-fit">
        {[
          { id: "students", label: "Top Students", icon: Trophy },
          { id: "colleges", label: "Top Universities", icon: GraduationCap },
          { id: "recruiters", label: "Top Hiring Partners", icon: Building2 },
        ].map((t) => {
          const Icon = t.icon;
          const isActive = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                isActive
                  ? "gradient-bg text-white shadow-md shadow-indigo-500/25"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Leaderboard Tables */}
      <div className="glass rounded-2xl border border-white/8 overflow-hidden">
        {tab === "students" && (
          <div className="divide-y divide-white/5">
            {students.map((s) => (
              <div
                key={s.rank}
                className={`p-4 flex items-center gap-4 transition-colors ${
                  s.rank === 1 ? "bg-amber-500/5 hover:bg-amber-500/10" : "hover:bg-white/[0.02]"
                }`}
              >
                <div className="w-8 text-center shrink-0">
                  {s.rank === 1 ? (
                    <Crown className="w-5 h-5 text-amber-400 mx-auto" />
                  ) : s.rank === 2 ? (
                    <Medal className="w-4 h-4 text-gray-300 mx-auto" />
                  ) : (
                    <span className="text-xs font-bold text-gray-500">#{s.rank}</span>
                  )}
                </div>

                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center font-bold text-xs text-white shrink-0">
                  {s.avatar}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs sm:text-sm text-gray-100 truncate">{s.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-indigo-300 font-semibold">
                      {s.badge}
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-400 truncate">{s.college} · {s.level}</div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xs sm:text-sm font-bold text-gray-100">{s.xp.toLocaleString()} XP</span>
                  <div className="text-[10px] text-amber-400 flex items-center justify-end gap-1">
                    <Flame className="w-3 h-3 fill-amber-400" /> {s.streak} day streak
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "colleges" && (
          <div className="divide-y divide-white/5">
            {colleges.map((c) => (
              <div key={c.rank} className="p-4 flex items-center gap-4 hover:bg-white/[0.02]">
                <div className="w-8 text-center font-bold text-xs text-gray-400 shrink-0">
                  #{c.rank}
                </div>
                <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center font-bold text-indigo-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-bold text-sm text-gray-100 block">{c.name}</span>
                  <span className="text-xs text-gray-400">{c.students} Active Candidates</span>
                </div>
                <div className="text-right shrink-0 space-y-0.5">
                  <div className="text-xs text-green-400 font-bold">Placement: {c.placedRate}</div>
                  <div className="text-[11px] text-gray-400">Avg CTC: {c.avgPackage}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "recruiters" && (
          <div className="divide-y divide-white/5">
            {recruiters.map((r) => (
              <div key={r.rank} className="p-4 flex items-center gap-4 hover:bg-white/[0.02]">
                <div className="w-8 text-center font-bold text-xs text-gray-400 shrink-0">
                  #{r.rank}
                </div>
                <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center font-bold text-cyan-400 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-bold text-sm text-gray-100 block">{r.name}</span>
                  <span className="text-xs text-gray-400">{r.offers} Verified Offers Extended</span>
                </div>
                <div className="text-right shrink-0 space-y-0.5">
                  <div className="text-xs text-indigo-400 font-bold">Top Stipend: {r.highestStipend}</div>
                  <div className="text-[11px] text-yellow-400 font-semibold">{r.rating} Recruiter Score</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Medal({ className }: { className?: string }) {
  return <Award className={className} />;
}
