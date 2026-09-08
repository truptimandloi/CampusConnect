import { useState } from "react";
import {
  Building2, Globe, MapPin, Users, CheckCircle2,
  Briefcase, Sparkles, ShieldCheck, ExternalLink, Heart
} from "lucide-react";

export default function CompanyProfile() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Company Header Card */}
      <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <div className="w-24 h-24 rounded-2xl gradient-bg flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-indigo-500/20 shrink-0">
            RZ
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
              <h1 className="text-2xl font-bold">Razorpay Software Private Limited</h1>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified Enterprise Recruiter
              </span>
            </div>
            <p className="text-xs text-gray-400">
              India&apos;s leading payments & banking platform for businesses. Powering digital commerce for 10M+ businesses.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-gray-400 pt-1">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-indigo-400" /> Bangalore, Karnataka</span>
              <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-cyan-400" /> 2,800+ Employees</span>
              <a href="https://razorpay.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-indigo-400 hover:underline">
                <Globe className="w-3.5 h-3.5" /> razorpay.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack & Engineering Culture */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-6 border border-white/8 space-y-3">
          <h3 className="font-semibold text-sm text-indigo-300">Core Engineering Tech Stack</h3>
          <p className="text-xs text-gray-400">Technologies actively used in our production microservices:</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "Go (Golang)", "Python", "React.js", "TypeScript", "Kafka",
              "Docker", "Kubernetes", "PostgreSQL", "Redis", "AWS Cloud"
            ].map((t, i) => (
              <span key={i} className="glass px-3 py-1 rounded-xl text-xs text-gray-200 border border-white/5 font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6 border border-white/8 space-y-3">
          <h3 className="font-semibold text-sm text-cyan-300">Engineering Culture & Values</h3>
          <div className="space-y-2 text-xs text-gray-300">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
              <span><strong>Day 1 Ownership:</strong> Interns ship production code within their first two weeks.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
              <span><strong>Mentorship:</strong> Paired with a Senior SDE for weekly architecture reviews.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
              <span><strong>PPO Conversion:</strong> 78% of our interns receive full-time Pre-Placement Offers.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="glass rounded-2xl p-6 border border-white/8 space-y-3">
        <h3 className="font-semibold text-sm text-gray-100">Primary Office Hubs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="glass p-3.5 rounded-xl border border-white/5">
            <span className="font-bold text-gray-200 block">Bangalore HQ</span>
            <span className="text-gray-400 mt-1 block">Koramangala Industrial Layout, 5th Block</span>
          </div>
          <div className="glass p-3.5 rounded-xl border border-white/5">
            <span className="font-bold text-gray-200 block">Mumbai Tech Hub</span>
            <span className="text-gray-400 mt-1 block">Bandra Kurla Complex (BKC)</span>
          </div>
          <div className="glass p-3.5 rounded-xl border border-white/5">
            <span className="font-bold text-gray-200 block">Remote / Hybrid</span>
            <span className="text-gray-400 mt-1 block">Available across Tier 1 engineering roles</span>
          </div>
        </div>
      </div>
    </div>
  );
}
