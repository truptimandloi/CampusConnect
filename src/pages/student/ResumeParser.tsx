import { useState } from "react";
import {
  Upload, FileText, Sparkles, CheckCircle2, ArrowRight,
  Code2, GraduationCap, Briefcase, Award, RefreshCw
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ResumeParser() {
  const [parsing, setParsing] = useState(false);
  const [parsedData, setParsedData] = useState<any>(null);

  const simulateParse = (fileName: string) => {
    setParsing(true);
    setTimeout(() => {
      setParsing(false);
      setParsedData({
        fileName,
        candidateName: "Rahul Sharma",
        email: "rahul.sharma@iitd.ac.in",
        phone: "+91 98765 43210",
        college: "Indian Institute of Technology (IIT) Delhi",
        degree: "B.Tech Computer Science & Engineering",
        cgpa: "8.92 / 10",
        extractedSkills: [
          { name: "Python", confidence: 98 },
          { name: "React.js", confidence: 95 },
          { name: "Node.js", confidence: 91 },
          { name: "PostgreSQL", confidence: 89 },
          { name: "Docker", confidence: 84 },
          { name: "TensorFlow", confidence: 80 },
          { name: "Data Structures & Algorithms", confidence: 96 },
        ],
        extractedProjects: [
          "AI-Powered Resume ATS Optimizer (FastAPI + React)",
          "Collaborative Realtime Code IDE (WebSockets + Docker)",
        ],
        extractedCertifications: [
          "AWS Certified Cloud Practitioner",
          "Deep Learning Specialization - Coursera",
        ],
        confidenceScore: 96,
      });
    }, 1200);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">AI Resume Parser & Profile Auto-Fill</h1>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30">
            LLM Extractor
          </span>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          Upload any PDF or DOCX resume. Our machine learning parser extracts entities and updates your verified skill portfolio instantly.
        </p>
      </div>

      {/* Upload Dropzone */}
      <div className="glass rounded-3xl p-8 border-2 border-dashed border-indigo-500/30 text-center space-y-4 hover:border-indigo-500/60 transition-all bg-indigo-500/[0.02]">
        <div className="w-16 h-16 rounded-2xl mx-auto gradient-bg flex items-center justify-center text-white shadow-xl shadow-indigo-500/20">
          <Upload className="w-8 h-8" />
        </div>

        <div>
          <h3 className="font-bold text-base text-gray-100">Drag and drop your resume file here</h3>
          <p className="text-xs text-gray-400 mt-1">Supports PDF, DOCX, TXT up to 10MB</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <label className="gradient-bg text-white text-xs font-semibold px-5 py-2.5 rounded-xl cursor-pointer hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20">
            <span>Browse Files</span>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.docx,.doc,.txt"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  simulateParse(e.target.files[0].name);
                }
              }}
            />
          </label>
          <span className="text-xs text-gray-500">or</span>
          <button
            onClick={() => simulateParse("Rahul_Sharma_IITD_CV.pdf")}
            className="glass text-indigo-300 text-xs font-semibold px-4 py-2.5 rounded-xl border border-indigo-500/30 hover:bg-indigo-500/10 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Try Sample Resume (Demo)</span>
          </button>
        </div>
      </div>

      {/* Parsing state */}
      {parsing && (
        <div className="glass rounded-2xl p-8 border border-white/8 text-center space-y-3 animate-pulse">
          <RefreshCw className="w-8 h-8 text-indigo-400 animate-spin mx-auto" />
          <h4 className="font-semibold text-sm text-gray-200">Analyzing Document Entities...</h4>
          <p className="text-xs text-gray-400">Extracting skills, university records, and project contributions with NLP.</p>
        </div>
      )}

      {/* Parsed Output Card */}
      {parsedData && !parsing && (
        <div className="glass-strong rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6 animate-slide-up">
          <div className="flex items-center justify-between pb-4 border-b border-white/8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-gray-100">{parsedData.fileName}</h3>
                <span className="text-xs text-green-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Successfully Extracted ({parsedData.confidenceScore}% Confidence)
                </span>
              </div>
            </div>

            <Link
              to="/student/profile"
              className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 hover:opacity-90 shadow-md shadow-indigo-500/20"
            >
              <span>Applied to Profile</span> <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Academic info extracted */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass p-4 rounded-xl border border-white/5 space-y-1">
              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" /> University & Degree
              </span>
              <div className="text-xs font-bold text-gray-200">{parsedData.college}</div>
              <div className="text-[11px] text-gray-400">{parsedData.degree} · CGPA: {parsedData.cgpa}</div>
            </div>

            <div className="glass p-4 rounded-xl border border-white/5 space-y-1">
              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-yellow-400" /> Extracted Certifications
              </span>
              <div className="space-y-1">
                {parsedData.extractedCertifications.map((c: string, idx: number) => (
                  <div key={idx} className="text-xs font-semibold text-gray-200">✓ {c}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Extracted Skills with Confidence */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-cyan-400" /> Extracted Competencies ({parsedData.extractedSkills.length} Detected)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {parsedData.extractedSkills.map((s: any, idx: number) => (
                <div key={idx} className="glass p-2.5 rounded-xl border border-white/5 flex items-center justify-between text-xs">
                  <span className="font-semibold text-gray-200">{s.name}</span>
                  <span className="text-[10px] font-bold text-green-400">{s.confidence}% conf</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
