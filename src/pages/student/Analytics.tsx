import {
  LineChart, Line, BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend
} from "recharts";

const skillGrowth = [
  { month: "Apr", python: 40, sql: 30, react: 20 },
  { month: "May", python: 50, sql: 35, react: 40 },
  { month: "Jun", python: 60, sql: 42, react: 55 },
  { month: "Jul", python: 65, sql: 48, react: 62 },
  { month: "Aug", python: 72, sql: 50, react: 68 },
  { month: "Sep", python: 80, sql: 50, react: 70 },
];

const weeklyHours = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 4 },
  { day: "Wed", hours: 1.5 },
  { day: "Thu", hours: 5 },
  { day: "Fri", hours: 3 },
  { day: "Sat", hours: 6 },
  { day: "Sun", hours: 2 },
];

const applicationHeatmap = [
  [0,1,0,2,0,1,0],
  [1,0,3,1,2,0,1],
  [0,2,1,0,4,1,0],
  [2,0,1,3,0,2,1],
];

const readinessHistory = [
  { month: "Apr", score: 52 },
  { month: "May", score: 61 },
  { month: "Jun", score: 68 },
  { month: "Jul", score: 73 },
  { month: "Aug", score: 78 },
  { month: "Sep", score: 83 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-xl p-3 border border-white/10 text-sm">
        <div className="text-gray-400 mb-1">{label}</div>
        {payload.map((p: any, i: number) => (
          <div key={i} style={{ color: p.color }} className="font-semibold">
            {p.name}: {p.value}{p.name === "score" ? "" : "%"}
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function Analytics() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">Analytics</h2>
        <p className="text-gray-400 text-sm">Track your skill growth, learning consistency, and placement readiness.</p>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Readiness Score", value: "83", delta: "+31 pts since Apr", color: "text-indigo-400" },
          { label: "Total Learning Hours", value: "142h", delta: "+24h this month", color: "text-purple-400" },
          { label: "Skills Mastered", value: "8", delta: "3 in progress", color: "text-cyan-400" },
          { label: "Streak", value: "14 days", delta: "Personal best!", color: "text-green-400" },
        ].map((kpi, i) => (
          <div key={i} className="glass rounded-2xl p-5 border border-white/5">
            <div className={`text-2xl font-bold ${kpi.color} mb-1`}>{kpi.value}</div>
            <div className="text-sm font-medium text-gray-200 mb-1">{kpi.label}</div>
            <div className="text-xs text-gray-400">{kpi.delta}</div>
          </div>
        ))}
      </div>

      {/* Charts row 1 */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-6 border border-white/5">
          <h3 className="font-semibold mb-4">Skill Growth Over Time</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={skillGrowth}>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} axisLine={false} tickLine={false} domain={[0, 100]} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 12, color: "#9ca3af" }} />
              <Line type="monotone" dataKey="python" name="Python" stroke="#6366f1" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="sql" name="SQL" stroke="#8b5cf6" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="react" name="React" stroke="#06b6d4" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="glass rounded-2xl p-6 border border-white/5">
          <h3 className="font-semibold mb-4">AI Readiness Score History</h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={readinessHistory}>
              <defs>
                <linearGradient id="readinessGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} axisLine={false} tickLine={false} domain={[40, 100]} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="score" name="score" stroke="#6366f1" strokeWidth={2} fill="url(#readinessGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts row 2 */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-6 border border-white/5">
          <h3 className="font-semibold mb-4">Weekly Learning Hours</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyHours}>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
              <XAxis dataKey="day" tick={{ fill: "#6b7280", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="hours" name="hours" fill="url(#barGrad)" radius={[6, 6, 0, 0]}>
                <defs>
                  <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Application Heatmap */}
        <div className="glass rounded-2xl p-6 border border-white/5">
          <h3 className="font-semibold mb-4">Application Activity Heatmap</h3>
          <div className="flex gap-1 flex-wrap">
            {applicationHeatmap.flat().map((val, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-sm"
                style={{
                  background: val === 0 ? "rgba(255,255,255,0.04)" :
                    val === 1 ? "rgba(99,102,241,0.3)" :
                    val === 2 ? "rgba(99,102,241,0.55)" :
                    val === 3 ? "rgba(99,102,241,0.75)" :
                    "rgba(99,102,241,1)",
                }}
                title={`${val} applications`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 mt-4 text-xs text-gray-400">
            <span>Less</span>
            {[0.04, 0.3, 0.55, 0.75, 1].map((op, i) => (
              <div key={i} className="w-4 h-4 rounded-sm" style={{ background: `rgba(99,102,241,${op})` }} />
            ))}
            <span>More</span>
          </div>

          <div className="mt-6 space-y-2">
            <div className="text-sm font-semibold mb-2">Skill Gap Summary</div>
            {[
              { skill: "ML Basics", gap: -15, action: "Enroll in NPTEL course" },
              { skill: "SQL", gap: -10, action: "Practice on HackerRank" },
              { skill: "Communication", gap: -5, action: "Toastmasters or mock HR" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between glass rounded-lg px-3 py-2 border border-red-500/10">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-red-400 font-bold bg-red-500/10 px-2 py-0.5 rounded">{item.gap}%</span>
                  <span className="text-sm">{item.skill}</span>
                </div>
                <span className="text-xs text-gray-400">{item.action}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
