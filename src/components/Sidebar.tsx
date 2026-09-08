import { Link, useLocation } from "react-router-dom";
import { Brain, LogOut, Bell, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type NavItem = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
};

type SidebarProps = {
  items: NavItem[];
  role: string;
  userName: string;
  avatar: string;
};

export default function Sidebar({ items, role, userName, avatar }: SidebarProps) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`glass-strong flex flex-col h-full border-r border-white/8 transition-all duration-300 ${collapsed ? "w-16" : "w-64"} shrink-0`}>
      {/* Logo */}
      <div className="p-4 border-b border-white/5 flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shrink-0">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-sm gradient-text">CampusConnect</span>
          </div>
        )}
        {collapsed && (
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center mx-auto">
            <Brain className="w-5 h-5 text-white" />
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Role badge */}
      {!collapsed && (
        <div className="px-4 py-3 border-b border-white/5">
          <div className="text-xs text-gray-500 uppercase tracking-widest">{role}</div>
        </div>
      )}

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {items.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active ? "active text-indigo-300 bg-indigo-500/10" : "text-gray-400"
              } ${collapsed ? "justify-center" : ""}`}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
              {active && !collapsed && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-white/5 space-y-2">
        <button className={`sidebar-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-400 ${collapsed ? "justify-center" : ""}`}>
          <Bell className="w-5 h-5 shrink-0" />
          {!collapsed && <span>Notifications</span>}
        </button>
        <Link
          to="/"
          className={`sidebar-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-400 ${collapsed ? "justify-center" : ""}`}
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!collapsed && <span>Sign Out</span>}
        </Link>

        {!collapsed && (
          <div className="flex items-center gap-3 px-3 py-2 mt-2">
            <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-xs font-bold shrink-0">
              {avatar}
            </div>
            <div className="overflow-hidden">
              <div className="text-sm font-semibold truncate">{userName}</div>
              <div className="text-xs text-gray-500 truncate">{role}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
