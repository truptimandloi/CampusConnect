import { useState } from "react";
import { Search, Filter, MapPin, Clock, DollarSign, Bookmark, Share2, ArrowUpRight, Zap } from "lucide-react";

const jobs = [
  {
    id: 1, title: "Frontend Developer Intern", company: "Razorpay", logo: "RZ",
    location: "Bangalore", mode: "Remote", salary: "₹25K/mo", duration: "6 months",
    match: 91, posted: "2 days ago", deadline: "30 Sep 2025",
    skills: ["React", "TypeScript", "TailwindCSS"], description: "Work on Razorpay's payment dashboard, building reusable component libraries and improving performance.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2, title: "Data Science Intern", company: "Flipkart", logo: "FK",
    location: "Bangalore", mode: "Hybrid", salary: "₹30K/mo", duration: "4 months",
    match: 85, posted: "1 day ago", deadline: "25 Sep 2025",
    skills: ["Python", "Pandas", "SQL", "ML"], description: "Analyze customer behavior data, build predictive models for product recommendations.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    id: 3, title: "Backend Engineer Intern", company: "PhonePe", logo: "PP",
    location: "Pune", mode: "Onsite", salary: "₹28K/mo", duration: "6 months",
    match: 78, posted: "3 days ago", deadline: "20 Oct 2025",
    skills: ["Node.js", "PostgreSQL", "Redis"], description: "Build and optimize microservices powering PhonePe's transaction processing pipeline.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 4, title: "ML Research Intern", company: "Google", logo: "GO",
    location: "Hyderabad", mode: "Hybrid", salary: "₹50K/mo", duration: "3 months",
    match: 72, posted: "5 days ago", deadline: "15 Oct 2025",
    skills: ["Python", "TensorFlow", "Research"], description: "Contribute to Google's internal NLP research team, exploring large language model efficiency.",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 5, title: "DevOps Intern", company: "Amazon", logo: "AZ",
    location: "Mumbai", mode: "Remote", salary: "₹35K/mo", duration: "6 months",
    match: 68, posted: "1 week ago", deadline: "10 Oct 2025",
    skills: ["AWS", "Docker", "Terraform", "CI/CD"], description: "Help automate deployment pipelines for Amazon's Prime Video streaming infrastructure.",
    color: "from-yellow-500 to-orange-500",
  },
];

const filters = {
  mode: ["Remote", "Hybrid", "Onsite"],
  duration: ["1-3 months", "3-6 months", "6+ months"],
  salary: ["₹10K+", "₹20K+", "₹30K+", "₹50K+"],
};

export default function JobPortal() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<number | null>(1);
  const [activeMode, setActiveMode] = useState<string[]>([]);
  const [saved, setSaved] = useState<number[]>([]);

  const filtered = jobs.filter(
    (j) =>
      (j.title.toLowerCase().includes(search.toLowerCase()) ||
        j.company.toLowerCase().includes(search.toLowerCase())) &&
      (activeMode.length === 0 || activeMode.includes(j.mode))
  );

  const selectedJob = jobs.find((j) => j.id === selected);

  return (
    <div className="flex h-[calc(100vh-0px)] overflow-hidden">
      {/* Left: filters + list */}
      <div className="w-full max-w-md flex flex-col border-r border-white/5">
        {/* Search + filter bar */}
        <div className="p-4 border-b border-white/5 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search jobs, companies..."
              className="w-full glass rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none border border-white/5 focus:border-indigo-500/50 transition-colors"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {filters.mode.map((m) => (
              <button
                key={m}
                onClick={() => setActiveMode((prev) => prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m])}
                className={`shrink-0 text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  activeMode.includes(m) ? "gradient-bg text-white" : "glass text-gray-400 hover:text-white"
                }`}
              >
                {m}
              </button>
            ))}
            <button className="shrink-0 glass text-xs px-3 py-1.5 rounded-lg text-gray-400 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filters
            </button>
          </div>
        </div>

        {/* Job list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <div className="text-xs text-gray-400 mb-2">{filtered.length} internships found</div>
          {filtered.map((job) => (
            <button
              key={job.id}
              onClick={() => setSelected(job.id)}
              className={`w-full text-left glass rounded-xl p-4 card-hover border transition-all ${
                selected === job.id ? "border-indigo-500/40 bg-indigo-500/5" : "border-white/5"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${job.color} flex items-center justify-center text-xs font-bold shrink-0`}>
                    {job.logo}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{job.title}</div>
                    <div className="text-xs text-gray-400">{job.company}</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-lg">{job.match}%</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                <span className={`px-2 py-0.5 rounded-full ${
                  job.mode === "Remote" ? "bg-green-500/10 text-green-400" :
                  job.mode === "Hybrid" ? "bg-yellow-500/10 text-yellow-400" :
                  "bg-blue-500/10 text-blue-400"
                }`}>{job.mode}</span>
                <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" /> {job.salary}</span>
              </div>
              <div className="flex gap-1 flex-wrap">
                {job.skills.slice(0, 3).map((s, i) => (
                  <span key={i} className="text-xs bg-white/5 text-gray-300 px-2 py-0.5 rounded-lg">{s}</span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right: job detail */}
      {selectedJob && (
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Header */}
            <div className="glass rounded-2xl p-6 border border-white/5">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedJob.color} flex items-center justify-center text-lg font-bold`}>
                    {selectedJob.logo}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{selectedJob.title}</h2>
                    <div className="text-gray-400">{selectedJob.company}</div>
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                      <MapPin className="w-4 h-4" /> {selectedJob.location} ·
                      <Clock className="w-4 h-4" /> {selectedJob.duration}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSaved((prev) => prev.includes(selectedJob.id) ? prev.filter((x) => x !== selectedJob.id) : [...prev, selectedJob.id])}
                    className={`p-2.5 rounded-xl glass border border-white/5 transition-colors ${saved.includes(selectedJob.id) ? "text-indigo-400" : "text-gray-400"}`}
                  >
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <button className="p-2.5 rounded-xl glass border border-white/5 text-gray-400 hover:text-white transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Match score */}
              <div className="glass rounded-xl p-4 border border-indigo-500/20 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold flex items-center gap-2">
                    <Zap className="w-4 h-4 text-indigo-400" /> AI Match Score
                  </span>
                  <span className="text-2xl font-bold gradient-text">{selectedJob.match}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full">
                  <div className="h-2 rounded-full gradient-bg" style={{ width: `${selectedJob.match}%` }} />
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 gradient-bg text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  Apply Now <ArrowUpRight className="w-5 h-5" />
                </button>
                <button className="glass text-white font-semibold px-6 py-3 rounded-xl hover:border-indigo-500/30 transition-colors">
                  Save
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="glass rounded-2xl p-6 border border-white/5">
              <h3 className="font-semibold mb-3">Description</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{selectedJob.description}</p>

              <h3 className="font-semibold mb-3">Required Skills</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedJob.skills.map((s, i) => (
                  <span key={i} className="glass px-3 py-1.5 rounded-lg text-sm text-gray-200 border border-white/5">{s}</span>
                ))}
              </div>

              <h3 className="font-semibold mb-3">Benefits</h3>
              <div className="grid grid-cols-2 gap-2">
                {["Certificate of Completion", "Flexible Hours", "Mentorship Program", "Pre-placement Offer"].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> {b}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/5">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-gray-400">Salary</span><div className="font-semibold text-green-400 mt-1">{selectedJob.salary}</div></div>
                <div><span className="text-gray-400">Duration</span><div className="font-semibold mt-1">{selectedJob.duration}</div></div>
                <div><span className="text-gray-400">Mode</span><div className="font-semibold mt-1">{selectedJob.mode}</div></div>
                <div><span className="text-gray-400">Deadline</span><div className="font-semibold text-red-400 mt-1">{selectedJob.deadline}</div></div>
                <div><span className="text-gray-400">Posted</span><div className="font-semibold mt-1">{selectedJob.posted}</div></div>
                <div><span className="text-gray-400">Applicants</span><div className="font-semibold mt-1">234</div></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
