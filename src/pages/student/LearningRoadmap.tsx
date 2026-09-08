import { useState } from "react";
import {
  Target, CheckCircle2, Clock, BookOpen, ExternalLink,
  ChevronRight, Award, Sparkles, Flame, Check
} from "lucide-react";

interface Milestone {
  id: number;
  phase: string;
  title: string;
  duration: string;
  status: "completed" | "in_progress" | "pending";
  readinessBoost: string;
  tasks: { name: string; completed: boolean }[];
  resources: { name: string; type: "YouTube" | "Coursera" | "NPTEL"; link: string; hours: string }[];
}

export default function LearningRoadmap() {
  const [targetRole, setTargetRole] = useState("Software Developer");

  const [milestones, setMilestones] = useState<Milestone[]>([
    {
      id: 1,
      phase: "Phase 1",
      title: "Advanced SQL & Database Indexing",
      duration: "Week 1–2 · 18 Hours",
      status: "completed",
      readinessBoost: "+6% AI Readiness",
      tasks: [
        { name: "Master B-Tree vs Hash indexing & query execution plans", completed: true },
        { name: "Solve 20 complex LeetCode SQL window function queries", completed: true },
        { name: "Write database migration scripts with PostgreSQL", completed: true },
      ],
      resources: [
        { name: "Complete SQL Bootcamp: Go from Zero to Hero", type: "Coursera", link: "https://coursera.org", hours: "12h" },
        { name: "Database Systems Architecture Lecture Series", type: "NPTEL", link: "https://nptel.ac.in", hours: "16h" },
      ],
    },
    {
      id: 2,
      phase: "Phase 2",
      title: "Distributed Systems & Message Queues",
      duration: "Week 3–4 · 24 Hours",
      status: "in_progress",
      readinessBoost: "+8% AI Readiness",
      tasks: [
        { name: "Set up RabbitMQ / Apache Kafka pub-sub pipeline", completed: true },
        { name: "Implement Redis cache-aside with TTL invalidation", completed: false },
        { name: "Build rate-limiting middleware using Token Bucket algorithm", completed: false },
      ],
      resources: [
        { name: "Distributed Systems by MIT (6.824) Lectures", type: "YouTube", link: "https://youtube.com", hours: "20h" },
        { name: "Building Microservices with Docker and Node.js", type: "Coursera", link: "https://coursera.org", hours: "14h" },
      ],
    },
    {
      id: 3,
      phase: "Phase 3",
      title: "Real-World Capstone Project Build",
      duration: "Week 5–6 · 30 Hours",
      status: "pending",
      readinessBoost: "+10% AI Readiness",
      tasks: [
        { name: "Architect full-stack collaborative canvas with WebSockets", completed: false },
        { name: "Configure CI/CD pipelines via GitHub Actions", completed: false },
        { name: "Deploy to AWS ECS with auto-scaling & load balancer", completed: false },
      ],
      resources: [
        { name: "Full Stack Production DevOps Masterclass", type: "YouTube", link: "https://youtube.com", hours: "10h" },
      ],
    },
    {
      id: 4,
      phase: "Phase 4",
      title: "Mock Technical Assessments & High-Impact Job Applications",
      duration: "Week 7–8 · 15 Hours",
      status: "pending",
      readinessBoost: "+12% AI Readiness",
      tasks: [
        { name: "Score >= 90% on CampusConnect Advanced DSA Assessment", completed: false },
        { name: "Conduct 3 AI Mock Technical Interviews", completed: false },
        { name: "Apply to 10 high-match verified internships (Razorpay, Google)", completed: false },
      ],
      resources: [
        { name: "CampusConnect AI Mock Interview Suite", type: "Coursera", link: "/student/interview", hours: "5h" },
      ],
    },
  ]);

  const toggleTask = (milestoneIndex: number, taskIndex: number) => {
    const updated = [...milestones];
    updated[milestoneIndex].tasks[taskIndex].completed = !updated[milestoneIndex].tasks[taskIndex].completed;
    setMilestones(updated);
  };

  const totalTasks = milestones.reduce((acc, m) => acc + m.tasks.length, 0);
  const completedTasks = milestones.reduce(
    (acc, m) => acc + m.tasks.filter((t) => t.completed).length,
    0
  );
  const overallProgress = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Top Banner */}
      <div className="glass rounded-3xl p-6 border border-white/10 relative overflow-hidden bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900/60">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> AI Adaptive Curriculum
              </span>
              <span className="text-xs text-gray-400">Target Role:</span>
              <select
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                className="glass text-xs font-semibold px-3 py-1 rounded-xl text-indigo-300 border border-white/10 outline-none bg-slate-900"
              >
                <option value="Software Developer">Software Developer</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="AI / ML Engineer">AI / ML Engineer</option>
                <option value="Cloud DevOps Engineer">Cloud DevOps Engineer</option>
              </select>
            </div>

            <h1 className="text-2xl font-bold mt-2">Personalized Skill Gap Roadmap</h1>
            <p className="text-xs text-gray-400 mt-1 max-w-xl">
              Dynamically generated based on your current assessment scores compared with live Q3 hiring requirements at partner companies.
            </p>
          </div>

          {/* Overall Progress Widget */}
          <div className="glass p-4 rounded-2xl border border-white/10 min-w-48 text-center shrink-0">
            <span className="text-xs text-gray-400">Curriculum Progress</span>
            <div className="text-3xl font-extrabold gradient-text mt-1">{overallProgress}%</div>
            <div className="w-full bg-white/5 h-2 rounded-full mt-2 overflow-hidden">
              <div className="gradient-bg h-full rounded-full transition-all" style={{ width: `${overallProgress}%` }} />
            </div>
            <span className="text-[10px] text-green-400 mt-1.5 block">
              {completedTasks} of {totalTasks} milestones achieved
            </span>
          </div>
        </div>
      </div>

      {/* Timeline Milestones */}
      <div className="space-y-6">
        {milestones.map((m, mIdx) => (
          <div
            key={m.id}
            className={`glass rounded-2xl p-6 border transition-all ${
              m.status === "completed"
                ? "border-green-500/20 bg-green-500/[0.02]"
                : m.status === "in_progress"
                ? "border-indigo-500/30 bg-indigo-500/[0.03]"
                : "border-white/5 opacity-80"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/8">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                    m.status === "completed"
                      ? "bg-green-500/20 text-green-400"
                      : m.status === "in_progress"
                      ? "gradient-bg text-white"
                      : "glass text-gray-400"
                  }`}
                >
                  {m.status === "completed" ? <Check className="w-5 h-5" /> : mIdx + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-indigo-400">{m.phase}</span>
                    <span className="text-[10px] text-gray-500">·</span>
                    <span className="text-xs text-gray-400">{m.duration}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-100 mt-0.5">{m.title}</h3>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {m.readinessBoost}
                </span>
                <span
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                    m.status === "completed"
                      ? "bg-green-500/20 text-green-400"
                      : m.status === "in_progress"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-white/5 text-gray-400"
                  }`}
                >
                  {m.status === "completed"
                    ? "Completed"
                    : m.status === "in_progress"
                    ? "In Progress"
                    : "Upcoming"}
                </span>
              </div>
            </div>

            {/* Checkable Tasks */}
            <div className="mt-4 space-y-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                Action Items & Objectives:
              </span>
              {m.tasks.map((task, tIdx) => (
                <div
                  key={tIdx}
                  onClick={() => toggleTask(mIdx, tIdx)}
                  className="flex items-center gap-3 p-2.5 rounded-xl glass border border-white/5 hover:border-indigo-500/20 cursor-pointer transition-all"
                >
                  <div
                    className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all ${
                      task.completed ? "border-green-400 bg-green-500/20 text-green-400" : "border-gray-600"
                    }`}
                  >
                    {task.completed && <Check className="w-3 h-3" />}
                  </div>
                  <span
                    className={`text-xs ${
                      task.completed ? "line-through text-gray-500" : "text-gray-200"
                    }`}
                  >
                    {task.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Recommended Learning Resources */}
            <div className="mt-4 pt-3 border-t border-white/5">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                Recommended Courses (YouTube / Coursera / NPTEL):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {m.resources.map((res, rIdx) => (
                  <a
                    key={rIdx}
                    href={res.link}
                    target="_blank"
                    rel="noreferrer"
                    className="glass p-3 rounded-xl border border-white/5 flex items-center justify-between hover:border-indigo-500/30 transition-all text-xs group"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          res.type === "Coursera"
                            ? "bg-blue-500/20 text-blue-300"
                            : res.type === "YouTube"
                            ? "bg-red-500/20 text-red-300"
                            : "bg-purple-500/20 text-purple-300"
                        }`}
                      >
                        {res.type}
                      </span>
                      <span className="font-semibold text-gray-200 group-hover:text-indigo-300 transition-colors truncate max-w-[220px]">
                        {res.name}
                      </span>
                    </div>
                    <span className="text-[11px] text-gray-500 font-mono shrink-0 flex items-center gap-1">
                      {res.hours} <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
