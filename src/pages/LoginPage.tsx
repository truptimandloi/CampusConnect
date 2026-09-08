import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Brain, Eye, EyeOff, ArrowRight, GraduationCap, Building2, BookOpen, Shield } from "lucide-react";

type Role = "student" | "company" | "college" | "admin";

const roles: { id: Role; label: string; icon: typeof GraduationCap; color: string; path: string }[] = [
  { id: "student", label: "Student", icon: GraduationCap, color: "from-indigo-500 to-purple-500", path: "/student" },
  { id: "company", label: "Company", icon: Building2, color: "from-purple-500 to-cyan-500", path: "/company" },
  { id: "college", label: "College", icon: BookOpen, color: "from-cyan-500 to-blue-500", path: "/college" },
  { id: "admin", label: "Admin", icon: Shield, color: "from-blue-500 to-indigo-500", path: "/admin" },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<Role>("student");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [step, setStep] = useState<"login" | "otp">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const role = roles.find((r) => r.id === selectedRole);
    if (role) navigate(role.path);
  };

  const handleOtpChange = (idx: number, val: string) => {
    if (val.length > 1) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    if (val && idx < 5) {
      const el = document.getElementById(`otp-${idx + 1}`);
      el?.focus();
    }
  };

  return (
    <div className="min-h-screen mesh-bg flex">
      {/* Left panel */}
      <div className="hidden lg:flex flex-col w-1/2 p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-cyan-500/10" />
        <div className="relative z-10 flex flex-col h-full">
          <Link to="/" className="flex items-center gap-2 mb-auto">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">CampusConnect</span>
          </Link>

          <div className="my-auto">
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Your AI-Powered<br />
              <span className="gradient-text">Career Co-Pilot</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Sign in to access your personalized skill map, job recommendations, and AI-powered placement readiness score.
            </p>

            <div className="space-y-4">
              {[
                { icon: "🎯", text: "AI Skill Matching with 94% accuracy" },
                { icon: "📈", text: "Personalized learning roadmap" },
                { icon: "🏆", text: "Compete on national leaderboard" },
                { icon: "💼", text: "One-click apply to 10,000+ internships" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto text-xs text-gray-500">
            © 2026 CampusConnect Inc. All rights reserved.
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="glass rounded-3xl p-8 border border-white/10">
            {/* Role selector */}
            <div className="mb-8">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-semibold">Sign in as</p>
              <div className="grid grid-cols-4 gap-2">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-xl transition-all ${
                      selectedRole === role.id
                        ? "bg-gradient-to-br " + role.color + " text-white shadow-lg"
                        : "glass text-gray-400 hover:text-white"
                    }`}
                  >
                    <role.icon className="w-5 h-5" />
                    <span className="text-xs font-semibold">{role.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {step === "login" ? (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  {isSignup ? "Create account" : "Welcome back"}
                </h2>

                <form onSubmit={handleLogin} className="space-y-4">
                  {isSignup && (
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">Full Name</label>
                      <input
                        type="text"
                        className="w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-500/50 border border-transparent transition-colors"
                        placeholder="Rahul Sharma"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">Email address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-500/50 border border-transparent transition-colors"
                      placeholder="rahul@college.edu"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-500/50 border border-transparent transition-colors pr-12"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {!isSignup && (
                    <div className="flex justify-between items-center">
                      <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                        <input type="checkbox" className="rounded" /> Remember me
                      </label>
                      <button
                        type="button"
                        onClick={() => setStep("otp")}
                        className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        Forgot password?
                      </button>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full gradient-bg text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    {isSignup ? "Create Account" : "Sign In"} <ArrowRight className="w-5 h-5" />
                  </button>
                </form>

                <div className="my-6 flex items-center gap-3">
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="text-xs text-gray-500">or continue with</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="glass rounded-xl py-3 flex items-center justify-center gap-2 text-sm font-medium hover:border-white/20 transition-colors">
                    <span className="font-bold text-base text-red-400">G</span> Google
                  </button>
                  <button className="glass rounded-xl py-3 flex items-center justify-center gap-2 text-sm font-medium hover:border-white/20 transition-colors">
                    <span className="font-bold text-blue-400 text-xs bg-blue-500/20 px-1 rounded">in</span> LinkedIn
                  </button>
                </div>

                <p className="text-center text-sm text-gray-400 mt-6">
                  {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
                  <button
                    onClick={() => setIsSignup(!isSignup)}
                    className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
                  >
                    {isSignup ? "Sign in" : "Sign up"}
                  </button>
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-2">OTP Verification</h2>
                <p className="text-gray-400 text-sm mb-8">Enter the 6-digit code sent to {email || "your email"}</p>
                <div className="flex gap-3 justify-center mb-8">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      id={`otp-${i}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      className="w-12 h-14 text-center text-xl font-bold glass rounded-xl border border-white/10 focus:border-indigo-500/50 outline-none transition-colors"
                    />
                  ))}
                </div>
                <button
                  onClick={handleLogin}
                  className="w-full gradient-bg text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mb-4"
                >
                  Verify & Sign In <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setStep("login")}
                  className="w-full text-sm text-gray-400 hover:text-white transition-colors"
                >
                  ← Back to login
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
