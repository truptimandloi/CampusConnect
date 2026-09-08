import { useState } from "react";
import {
  ShieldCheck, CheckCircle2, XCircle, Clock, Building2,
  GraduationCap, Search, AlertCircle, FileText, Check
} from "lucide-react";

interface ApprovalItem {
  id: number;
  name: string;
  type: "Company" | "College";
  submitted: string;
  gstinOrAicte: string;
  repName: string;
  status: "Pending" | "Approved" | "Rejected";
}

export default function AdminApprovals() {
  const [approvals, setApprovals] = useState<ApprovalItem[]>([
    { id: 1, name: "Meesho Technologies", type: "Company", submitted: "2 hours ago", gstinOrAicte: "GSTIN-29AAECM1092F", repName: "Rohit Bansal (VP HR)", status: "Pending" },
    { id: 2, name: "Chandigarh University", type: "College", submitted: "5 hours ago", gstinOrAicte: "AICTE-CU-PB-2009", repName: "Dr. RS Bawa (Registrar)", status: "Pending" },
    { id: 3, name: "Ola Electric Mobility", type: "Company", submitted: "1 day ago", gstinOrAicte: "GSTIN-27AAFCO8821D", repName: "Bhavish Aggarwal (Talent Lead)", status: "Pending" },
    { id: 4, name: "Amity University Delhi", type: "College", submitted: "1 day ago", gstinOrAicte: "AICTE-AM-DL-2005", repName: "Prof. S. Sharma (Dean TPO)", status: "Pending" },
    { id: 5, name: "VNIT Nagpur", type: "College", submitted: "3 days ago", gstinOrAicte: "NIT-VNIT-MH-1960", repName: "Dr. P. Deshpande", status: "Approved" },
    { id: 6, name: "Fake Corp Global", type: "Company", submitted: "4 days ago", gstinOrAicte: "INVALID-TAX-ID", repName: "Spam Bot", status: "Rejected" },
  ]);

  const handleAction = (id: number, status: "Approved" | "Rejected") => {
    setApprovals(
      approvals.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Institution & Corporate Verification Queue</h1>
          <p className="text-xs text-gray-400 mt-1">
            Validate AICTE university credentials and MCA corporate registrations before allowing access to student talent pools.
          </p>
        </div>

        <div className="glass px-3 py-1.5 rounded-xl border border-white/5 text-xs font-semibold text-indigo-300">
          {approvals.filter((a) => a.status === "Pending").length} Pending Verifications
        </div>
      </div>

      <div className="space-y-3">
        {approvals.map((item) => (
          <div
            key={item.id}
            className="glass rounded-2xl p-5 border border-white/8 card-hover flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white shadow shrink-0 ${
                  item.type === "Company" ? "gradient-bg" : "bg-gradient-to-br from-cyan-500 to-blue-600"
                }`}
              >
                {item.type === "Company" ? <Building2 className="w-6 h-6" /> : <GraduationCap className="w-6 h-6" />}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-base text-gray-100">{item.name}</h3>
                  <span className="text-xs text-gray-400 font-medium">({item.type})</span>
                </div>
                <div className="text-xs text-gray-400 mt-0.5">Contact: {item.repName} · {item.submitted}</div>
                <div className="text-[11px] text-gray-500 font-mono mt-1">
                  Credential ID: <strong className="text-gray-300">{item.gstinOrAicte}</strong>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-auto">
              {item.status === "Pending" ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleAction(item.id, "Approved")}
                    className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 hover:opacity-90 shadow-md shadow-indigo-500/20"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" /> Approve
                  </button>
                  <button
                    onClick={() => handleAction(item.id, "Rejected")}
                    className="glass text-red-400 text-xs font-semibold px-3 py-2 rounded-xl hover:bg-red-500/10 border border-red-500/20"
                  >
                    Reject
                  </button>
                </div>
              ) : item.status === "Approved" ? (
                <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-green-500/20 text-green-400 border border-green-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Active
                </span>
              ) : (
                <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5" /> Application Rejected
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
