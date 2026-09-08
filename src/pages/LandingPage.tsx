import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Brain, Zap, BarChart3, Users, Building2, GraduationCap,
  ArrowRight, Star, CheckCircle, ChevronRight, Play,
  TrendingUp, Award, Globe, Shield, Sparkles, Target,
  BookOpen, Briefcase, MessageSquare, Bell
} from "lucide-react";

const stats = [
  { value: "50,000+", label: "Students Placed" },
  { value: "2,500+", label: "Partner Companies" },
  { value: "800+", label: "Colleges Onboard" },
  { value: "94%", label: "Placement Rate" },
];

const features = [
  {
    icon: Brain,
    title: "AI Skill Mapping Engine",
    description: "Our proprietary algorithm compares your skill profile against live industry requirements and calculates a precise match percentage.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Target,
    title: "Personalized Roadmaps",
    description: "Get a step-by-step learning path tailored to close your specific skill gaps with curated courses from Coursera, NPTEL, and YouTube.",
    color: "from-purple-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Deep analytics on placement trends, skill demand, hiring patterns, and your career readiness score — all in real time.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Award,
    title: "AI Placement Readiness Score",
    description: "A composite score from 0–100 based on skills, projects, CGPA, certifications, assessments, and communication quality.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Zap,
    title: "Smart Candidate Ranking",
    description: "Companies see AI-ranked candidates, not just a list of 500 resumes. Ranked by relevance, not just keywords.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: Globe,
    title: "Industry Demand Dashboard",
    description: "Real-time pulse on the top in-demand skills, fastest-growing technologies, and highest-paying roles across sectors.",
    color: "from-purple-600 to-pink-500",
  },
];

const steps = [
  { number: "01", title: "Create Your Profile", desc: "Upload resume, add skills, projects, certifications, and connect GitHub & LinkedIn." },
  { number: "02", title: "Take Skill Assessments", desc: "MCQ, coding, aptitude, and communication tests with AI-generated scores." },
  { number: "03", title: "Get AI Match Score", desc: "Our engine maps your skills to thousands of live job requirements instantly." },
  { number: "04", title: "Follow Your Roadmap", desc: "AI generates a personalized learning path to close skill gaps and boost readiness." },
  { number: "05", title: "Apply & Get Placed", desc: "Apply with one click, track applications, schedule interviews, and accept offers." },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer @ Google",
    college: "IIT Bombay",
    text: "CampusConnect's AI skill mapping showed me exactly which skills I was missing. I followed the roadmap and got placed in 3 months.",
    avatar: "PS",
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Rahul Verma",
    role: "Data Analyst @ Microsoft",
    college: "NIT Trichy",
    text: "The mock interviews and communication score feature completely transformed how I performed in real interviews. Highly recommend.",
    avatar: "RV",
    color: "from-purple-500 to-cyan-500",
  },
  {
    name: "Ananya Patel",
    role: "Backend Engineer @ Flipkart",
    college: "BITS Pilani",
    text: "The resume builder's ATS score helped me crack the initial screening at 8 out of 10 companies I applied to.",
    avatar: "AP",
    color: "from-cyan-500 to-blue-500",
  },
];

const companies = ["Google", "Microsoft", "Flipkart", "Amazon", "Infosys", "TCS", "Wipro", "Swiggy", "Razorpay", "PhonePe"];

export default function LandingPage() {
  const [activeRole, setActiveRole] = useState<"student" | "company" | "college">("student");

  return (
    <div className="min-h-screen mesh-bg text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">CampusConnect</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">How It Works</a>
            <a href="#testimonials" className="text-sm text-gray-400 hover:text-white transition-colors">Success Stories</a>
            <a href="#partners" className="text-sm text-gray-400 hover:text-white transition-colors">Partners</a>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login" className="text-sm text-gray-300 hover:text-white transition-colors px-4 py-2">
              Sign In
            </Link>
            <Link to="/login" className="gradient-bg text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-indigo-300">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Career Intelligence Platform</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Connecting Students,{" "}
                <span className="gradient-text">Colleges & Industry</span>{" "}
                Through AI Skill Mapping
              </h1>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Discover internships, identify skill gaps, receive personalized recommendations,
                and build an industry-ready career — all powered by our proprietary AI engine.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/login"
                  className="gradient-bg text-white font-semibold px-8 py-4 rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity animate-pulse-glow"
                >
                  Get Started Free <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/login"
                  className="glass text-white font-semibold px-8 py-4 rounded-xl flex items-center gap-2 hover:border-indigo-500/50 transition-colors"
                >
                  <Briefcase className="w-5 h-5" /> Explore Jobs
                </Link>
                <button
                  onClick={() => alert("Welcome to CampusConnect! Explore student, company, college, and admin workspaces below.")}
                  className="text-indigo-400 font-semibold px-4 py-4 flex items-center gap-2 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  </div>
                  Watch Demo
                </button>
              </div>

              {/* Quick Role Workspaces */}
              <div className="mt-8 p-4 glass rounded-2xl border border-indigo-500/30 bg-indigo-500/5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Unified Stakeholder Portals (Select Role):
                  </span>
                  <span className="text-[10px] text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded-full">
                    Live Workspaces
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <Link
                    to="/student"
                    className="glass p-2.5 rounded-xl border border-white/10 hover:border-indigo-500/40 text-center card-hover group"
                  >
                    <div className="text-base mb-1">👨‍🎓</div>
                    <span className="text-xs font-bold text-gray-200 group-hover:text-indigo-300 block">Student</span>
                    <span className="text-[10px] text-gray-400">Rahul Sharma</span>
                  </Link>
                  <Link
                    to="/company"
                    className="glass p-2.5 rounded-xl border border-white/10 hover:border-cyan-500/40 text-center card-hover group"
                  >
                    <div className="text-base mb-1">🏢</div>
                    <span className="text-xs font-bold text-gray-200 group-hover:text-cyan-300 block">Company</span>
                    <span className="text-[10px] text-gray-400">Razorpay HR</span>
                  </Link>
                  <Link
                    to="/college"
                    className="glass p-2.5 rounded-xl border border-white/10 hover:border-purple-500/40 text-center card-hover group"
                  >
                    <div className="text-base mb-1">🏛️</div>
                    <span className="text-xs font-bold text-gray-200 group-hover:text-purple-300 block">College</span>
                    <span className="text-[10px] text-gray-400">IIT Delhi TPO</span>
                  </Link>
                  <Link
                    to="/admin"
                    className="glass p-2.5 rounded-xl border border-white/10 hover:border-amber-500/40 text-center card-hover group"
                  >
                    <div className="text-base mb-1">🛡️</div>
                    <span className="text-xs font-bold text-gray-200 group-hover:text-amber-300 block">Admin</span>
                    <span className="text-[10px] text-gray-400">Command Hub</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative animate-float">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Central flow diagram */}
                <div className="glass rounded-3xl p-8 border border-indigo-500/20">
                  <div className="flex flex-col items-center gap-4">
                    {[
                      { icon: Users, label: "50K+ Students", color: "from-indigo-500 to-purple-500" },
                      { icon: Brain, label: "Skill Mapping Engine", color: "from-purple-500 to-cyan-500" },
                      { icon: Building2, label: "2,500+ Companies", color: "from-cyan-500 to-blue-500" },
                      { icon: Briefcase, label: "Active Internships", color: "from-blue-500 to-indigo-500" },
                      { icon: Award, label: "Placements & Offers", color: "from-indigo-500 to-purple-600" },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center gap-2 w-full">
                        <div className={`glass rounded-2xl px-6 py-3 flex items-center gap-3 w-full border border-white/10 card-hover cursor-default`}>
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0`}>
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold text-sm">{item.label}</span>
                          <div className="ml-auto flex gap-1">
                            {[...Array(3)].map((_, j) => (
                              <div key={j} className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${item.color}`} style={{ opacity: 0.5 + j * 0.25 }} />
                            ))}
                          </div>
                        </div>
                        {i < 4 && (
                          <div className="flex items-center gap-2">
                            <div className="w-px h-6 bg-gradient-to-b from-indigo-500/50 to-purple-500/50" />
                            <ChevronRight className="w-3 h-3 text-indigo-400 rotate-90" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 border border-green-500/30">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-semibold text-green-400">AI Match: 94%</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 border border-cyan-500/30">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-semibold text-cyan-400">+1,240 placed this month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 text-sm text-indigo-300">
              <Zap className="w-4 h-4" />
              <span>Core Features</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Everything you need to get placed</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From skill mapping to offer letters — CampusConnect handles every step of the career journey with AI precision.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="glass rounded-2xl p-6 card-hover border border-white/5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4`}>
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Selector */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Built for every stakeholder</h2>
            <p className="text-gray-400">One platform, three powerful modules tailored for each role.</p>
          </div>
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {([
              { id: "student", label: "Students", icon: GraduationCap },
              { id: "company", label: "Companies", icon: Building2 },
              { id: "college", label: "Colleges", icon: BookOpen },
            ] as const).map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  activeRole === role.id
                    ? "gradient-bg text-white shadow-lg"
                    : "glass text-gray-400 hover:text-white"
                }`}
              >
                <role.icon className="w-5 h-5" /> {role.label}
              </button>
            ))}
          </div>

          <div className="glass rounded-3xl p-8 border border-white/5">
            {activeRole === "student" && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Student Portal</h3>
                  <p className="text-gray-400 mb-6">Track your career journey from profile setup to offer letter with AI-powered guidance at every step.</p>
                  <div className="space-y-3">
                    {["AI Skill Mapping & Match Score", "Personalized Learning Roadmap", "One-Click Job Applications", "Resume Builder with ATS Score", "Mock Interviews & Assessments", "Digital Portfolio & Certificates"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/student" className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-6 py-3 rounded-xl mt-6 hover:opacity-90 transition-opacity">
                    Open Student Dashboard <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="glass rounded-2xl p-6 border border-indigo-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold">AI Readiness Score</span>
                    <span className="text-3xl font-bold gradient-text">83</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { skill: "Python", yours: 80, required: 70, color: "from-indigo-500 to-purple-500" },
                      { skill: "SQL", yours: 50, required: 60, color: "from-purple-500 to-cyan-500" },
                      { skill: "React", yours: 70, required: 65, color: "from-cyan-500 to-blue-500" },
                      { skill: "ML Basics", yours: 40, required: 55, color: "from-blue-500 to-indigo-500" },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-300">{item.skill}</span>
                          <span className={item.yours >= item.required ? "text-green-400" : "text-red-400"}>
                            {item.yours}% / {item.required}% req.
                          </span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${item.color}`}
                            style={{ width: `${item.yours}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeRole === "company" && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Company Portal</h3>
                  <p className="text-gray-400 mb-6">Find the best-fit candidates from thousands of verified students, ranked by AI — not just resumes.</p>
                  <div className="space-y-3">
                    {["AI-Ranked Candidate List", "Post Internships in Minutes", "Smart Candidate Filtering", "Interview Scheduling & Calendar", "Hiring Analytics Dashboard", "Offer Letter Management"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/company" className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-6 py-3 rounded-xl mt-6 hover:opacity-90 transition-opacity">
                    Open Company Dashboard <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="glass rounded-2xl p-6 border border-purple-500/20">
                  <div className="font-semibold mb-4">AI Candidate Ranking</div>
                  {[
                    { name: "Rahul Mehta", score: 92, skills: ["Python", "ML", "SQL"], college: "IIT Delhi" },
                    { name: "Priya Singh", score: 89, skills: ["React", "Node.js", "AWS"], college: "NIT Trichy" },
                    { name: "Ankit Kumar", score: 86, skills: ["Java", "Spring", "Docker"], college: "BITS Pilani" },
                  ].map((c, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors mb-2">
                      <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-xs font-bold">#{i + 1}</div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{c.name}</div>
                        <div className="text-xs text-gray-400">{c.college}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-indigo-400">{c.score}%</div>
                        <div className="flex gap-1 mt-1">
                          {c.skills.slice(0, 2).map((s, j) => (
                            <span key={j} className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeRole === "college" && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">College Portal</h3>
                  <p className="text-gray-400 mb-6">Track department-wise placement data, identify skill gaps at scale, and recommend targeted training programs.</p>
                  <div className="space-y-3">
                    {["Department Analytics & Heatmaps", "Curriculum Gap Insights", "Training Recommendations", "Placement Cell Management", "Company Partnership Tracker", "Student Cohort Analytics"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/college" className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-6 py-3 rounded-xl mt-6 hover:opacity-90 transition-opacity">
                    Open College Dashboard <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="glass rounded-2xl p-6 border border-cyan-500/20">
                  <div className="font-semibold mb-4">Department Performance</div>
                  {[
                    { dept: "Computer Science", placed: 94, students: 120 },
                    { dept: "Electronics", placed: 78, students: 95 },
                    { dept: "Mechanical", placed: 62, students: 110 },
                    { dept: "Civil", placed: 51, students: 80 },
                  ].map((d, i) => (
                    <div key={i} className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{d.dept}</span>
                        <span className="text-cyan-400 font-semibold">{d.placed}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                          style={{ width: `${d.placed}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400">From signup to placement in 5 simple steps.</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-cyan-500/50" />
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className={`flex items-center gap-8 ${i % 2 === 1 ? "flex-row-reverse" : ""}`}>
                  <div className={`flex-1 ${i % 2 === 1 ? "text-right" : ""}`}>
                    <div className="glass rounded-2xl p-6 card-hover border border-white/5 inline-block">
                      <div className="text-sm font-mono text-indigo-400 mb-2">{step.number}</div>
                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-sm">{step.desc}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center shrink-0 z-10 shadow-lg shadow-indigo-500/30">
                    <span className="font-bold text-sm">{i + 1}</span>
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-400">Real students. Real results. Real careers.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="glass rounded-2xl p-6 card-hover border border-white/5">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                    <div className="text-xs text-indigo-400">{t.college}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section id="partners" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Trusted by leading companies</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {companies.map((c, i) => (
              <div key={i} className="glass rounded-xl px-6 py-3 text-sm font-semibold text-gray-400 hover:text-white hover:border-indigo-500/30 transition-all card-hover border border-white/5">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-12 border border-indigo-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-cyan-500/10" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Ready to transform your career?</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Join 50,000+ students who used CampusConnect to land their dream internships and jobs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/login" className="gradient-bg text-white font-semibold px-8 py-4 rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity">
                  Start For Free <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/login?role=company" className="glass text-white font-semibold px-8 py-4 rounded-xl hover:border-indigo-500/30 transition-colors">
                  I&apos;m a Company
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold gradient-text">CampusConnect</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                AI-powered academia–industry collaboration platform bridging student talent, universities, and enterprise hiring.
              </p>
            </div>
            {[
              { title: "Platform", links: ["For Students", "For Companies", "For Colleges", "Admin Portal"] },
              { title: "Features", links: ["Skill Mapping", "AI Roadmap", "Job Portal", "Analytics"] },
              { title: "Company", links: ["About Us", "Blog", "Careers", "Contact"] },
            ].map((col, i) => (
              <div key={i}>
                <div className="font-semibold text-sm mb-4">{col.title}</div>
                <div className="space-y-2">
                  {col.links.map((link, j) => (
                    <div key={j} className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">{link}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© 2026 CampusConnect Inc. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Shield className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-500">Privacy Policy</span>
              <span className="text-xs text-gray-500">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
