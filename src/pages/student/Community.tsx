import { useState } from "react";
import {
  MessageSquare, Users, Calendar, Award, Sparkles, Send,
  ThumbsUp, MessageCircle, ExternalLink, UserCheck, Star
} from "lucide-react";

export default function Community() {
  const [activeTab, setActiveTab] = useState<"discussions" | "hackathons" | "mentors">("discussions");
  const [newPost, setNewPost] = useState("");

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Priya Patel",
      college: "IIT Bombay",
      avatar: "PP",
      time: "2 hours ago",
      title: "How to prepare for Razorpay's backend systems design round?",
      content: "Has anyone interviewed recently for the SDE intern role? What kind of depth do they expect around Redis pub/sub and distributed locks?",
      likes: 24,
      replies: 8,
      tags: ["Backend", "Interview", "Razorpay"],
    },
    {
      id: 2,
      author: "Rahul Sharma",
      college: "IIT Delhi",
      avatar: "RS",
      time: "5 hours ago",
      title: "National Hackathon Finalist: Team looking for UI/UX & Tailwind expert!",
      content: "We are building an AI-powered academia-industry skill mapping portal. Looking for 1 teammate with strong frontend skills.",
      likes: 42,
      replies: 15,
      tags: ["Hackathon", "TeamFinder", "Frontend"],
    },
  ]);

  const mentors = [
    {
      name: "Siddharth Rao",
      role: "Senior Staff SDE",
      company: "Google",
      experience: "8+ yrs",
      rating: 4.9,
      reviews: 142,
      specialty: "Distributed Systems & System Design",
      avatar: "SR",
    },
    {
      name: "Ananya Deshmukh",
      role: "Lead Machine Learning Engineer",
      company: "Microsoft Research",
      experience: "6+ yrs",
      rating: 4.95,
      reviews: 98,
      specialty: "LLMs, RAG & NLP Architectures",
      avatar: "AD",
    },
    {
      name: "Vikram Malhotra",
      role: "Engineering Manager",
      company: "Razorpay",
      experience: "10+ yrs",
      rating: 4.88,
      reviews: 210,
      specialty: "Fintech Platforms & Microservices",
      avatar: "VM",
    },
  ];

  const hackathons = [
    {
      title: "National Innovation Hackathon 2026",
      org: "Ministry of Education & Innovation Council",
      deadline: "30 Sep 2025",
      prize: "₹1,00,000 per problem statement",
      mode: "National · Onsite & Online",
      tags: ["AI", "Education", "Government"],
    },
    {
      title: "Razorpay FTX Hackathon",
      org: "Razorpay",
      deadline: "15 Oct 2025",
      prize: "₹5,00,000 + Direct PPIs",
      mode: "Hybrid · Bangalore",
      tags: ["Fintech", "Web3", "Scale"],
    },
  ];

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    setPosts([
      {
        id: Date.now(),
        author: "Rahul Sharma",
        college: "IIT Delhi",
        avatar: "RS",
        time: "Just now",
        title: newPost.slice(0, 50) + "...",
        content: newPost,
        likes: 1,
        replies: 0,
        tags: ["General", "Discussion"],
      },
      ...posts,
    ]);
    setNewPost("");
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">CampusConnect Community & Mentorship</h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">
              50k+ Active Scholars
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Connect with peer engineers, assemble hackathon squads, and book 1-on-1 mentorship with engineers from FAANG and high-growth unicorns.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 p-1 glass rounded-xl border border-white/8 w-fit">
        {[
          { id: "discussions", label: "Discussions & Q&A", icon: MessageSquare },
          { id: "mentors", label: "1-on-1 Mentorship", icon: UserCheck },
          { id: "hackathons", label: "Hackathons & Events", icon: Award },
        ].map((t) => {
          const Icon = t.icon;
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
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

      {/* Content */}
      {activeTab === "discussions" && (
        <div className="space-y-5">
          {/* Post composer */}
          <form onSubmit={handleCreatePost} className="glass rounded-2xl p-4 border border-white/8 space-y-3">
            <textarea
              rows={2}
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="Ask a technical question, share an interview tip, or seek teammates..."
              className="w-full glass p-3 rounded-xl text-xs border border-white/10 outline-none text-gray-200 focus:border-indigo-500 resize-none"
            />
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-gray-500">Posting as Rahul Sharma (IIT Delhi)</span>
              <button
                type="submit"
                className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 hover:opacity-90 transition-all shadow-md shadow-indigo-500/20"
              >
                <Send className="w-3.5 h-3.5" /> Post Discussion
              </button>
            </div>
          </form>

          {/* Posts Feed */}
          <div className="space-y-4">
            {posts.map((p) => (
              <div key={p.id} className="glass rounded-2xl p-5 border border-white/8 card-hover space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center font-bold text-xs text-white">
                    {p.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-gray-200">{p.author}</span>
                      <span className="text-[10px] text-gray-500">· {p.college}</span>
                    </div>
                    <span className="text-[10px] text-gray-500">{p.time}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-sm text-gray-100">{p.title}</h4>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">{p.content}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-indigo-300 font-semibold">
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2 border-t border-white/5 text-xs text-gray-400">
                  <button className="flex items-center gap-1 hover:text-indigo-400 transition-colors">
                    <ThumbsUp className="w-3.5 h-3.5" /> {p.likes}
                  </button>
                  <button className="flex items-center gap-1 hover:text-indigo-400 transition-colors">
                    <MessageCircle className="w-3.5 h-3.5" /> {p.replies} Replies
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "mentors" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {mentors.map((m, idx) => (
            <div key={idx} className="glass rounded-2xl p-5 border border-white/8 card-hover flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center font-bold text-white shadow-lg">
                    {m.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-100">{m.name}</h3>
                    <div className="text-xs text-indigo-300 font-medium">{m.role} · {m.company}</div>
                  </div>
                </div>

                <p className="text-xs text-gray-400">{m.specialty}</p>

                <div className="flex items-center gap-3 text-xs mt-3 pt-3 border-t border-white/5">
                  <span className="text-yellow-400 font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400" /> {m.rating}
                  </span>
                  <span className="text-gray-400">({m.reviews} sessions)</span>
                  <span className="text-gray-500">· {m.experience}</span>
                </div>
              </div>

              <button
                onClick={() => alert(`1-on-1 Mentorship session requested with ${m.name}!`)}
                className="w-full gradient-bg text-white text-xs font-semibold py-2 rounded-xl hover:opacity-90 transition-all shadow-md shadow-indigo-500/20"
              >
                Book 30-min Free Session
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === "hackathons" && (
        <div className="space-y-4">
          {hackathons.map((h, i) => (
            <div key={i} className="glass rounded-2xl p-5 border border-white/8 card-hover flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-base text-gray-100">{h.title}</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 font-bold">
                    Official Hackathon
                  </span>
                </div>
                <div className="text-xs text-gray-400">{h.org} · {h.mode}</div>
                <div className="text-xs text-green-400 font-semibold">Prize: {h.prize}</div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400">Deadline: {h.deadline}</span>
                <button
                  onClick={() => alert(`Registered for ${h.title}!`)}
                  className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-xl hover:opacity-90 transition-all shadow-md shadow-indigo-500/20"
                >
                  Register Team
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
