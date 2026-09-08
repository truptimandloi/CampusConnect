import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/LoginPage";
import StudentDashboard from "@/pages/student/StudentDashboard";
import CompanyDashboard from "@/pages/company/CompanyDashboard";
import CollegeDashboard from "@/pages/college/CollegeDashboard";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import DigitalPortfolio from "@/pages/student/DigitalPortfolio";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/portfolio/:id" element={<DigitalPortfolio />} />
        <Route path="/student/*" element={<StudentDashboard />} />
        <Route path="/company/*" element={<CompanyDashboard />} />
        <Route path="/college/*" element={<CollegeDashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
