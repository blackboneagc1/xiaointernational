import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Users, 
  Target, 
  BarChart3, 
  LayoutDashboard, 
  MessageSquare, 
  Database, 
  Settings, 
  Bell, 
  Search, 
  Clock, 
  ChevronRight, 
  MoreHorizontal,
  CheckCircle2,
  Play,
  ArrowUpRight
} from 'lucide-react';

// --- Types & Data ---

type CallStatus = 'Ringing' | 'In Call' | 'Wrap-Up' | 'Idle';

interface Agent {
  id: string;
  name: string;
  campaign: string;
  targetLead: string;
  duration: number;
  status: CallStatus;
  totalCalls: number;
}

const INITIAL_AGENTS: Agent[] = [
  { id: '1', name: 'Alex Johnson', campaign: 'Enterprise Q3', targetLead: 'TechSolutions Inc.', duration: 42, status: 'In Call', totalCalls: 84 },
  { id: '2', name: 'Maria Gomez', campaign: 'SaaS Outreach', targetLead: 'Global Logistics', duration: 125, status: 'In Call', totalCalls: 92 },
  { id: '3', name: 'James Wilson', campaign: 'FinTech 2024', targetLead: 'Urban Bank', duration: 8, status: 'Ringing', totalCalls: 76 },
  { id: '4', name: 'Sarah Parker', campaign: 'Real Estate Leads', targetLead: 'Metro Realty', duration: 32, status: 'Wrap-Up', totalCalls: 104 },
  { id: '5', name: 'Kevin Lee', campaign: 'Enterprise Q3', targetLead: 'Quantum Dynamics', duration: 0, status: 'Idle', totalCalls: 65 },
  { id: '6', name: 'Emma Davis', campaign: 'SaaS Outreach', targetLead: 'Cloud Nine', duration: 210, status: 'In Call', totalCalls: 88 },
];

const CAMPAIGNS = [
  { name: 'Enterprise Q3', progress: 65, color: '#0EA5E9' },
  { name: 'SaaS Outreach', progress: 42, color: '#38BDF8' },
  { name: 'FinTech 2024', progress: 88, color: '#7DD3FC' },
];

// --- Components ---

const SidebarLink = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <button className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group ${active ? 'bg-sky-50 text-sky-600' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
    <div className={`${active ? 'text-sky-600' : 'text-slate-400 group-hover:text-slate-600'} transition-colors`}>
      {icon}
    </div>
    <span className="text-sm font-medium">{label}</span>
  </button>
);

const KPICard = ({ icon, label, value, trend, colorClass }: { icon: React.ReactNode, label: string, value: string | number, trend?: string, colorClass: string }) => (
  <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-2.5 rounded-lg ${colorClass} bg-opacity-10`}>
        {icon}
      </div>
      {trend && (
        <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
          <ArrowUpRight className="w-3 h-3" />
          {trend}
        </div>
      )}
    </div>
    <p className="text-sm text-slate-500 font-medium mb-1">{label}</p>
    <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
  </div>
);

const StatusBadge = ({ status }: { status: CallStatus }) => {
  const styles = {
    'Ringing': 'bg-amber-50 text-amber-700 border-amber-100',
    'In Call': 'bg-sky-50 text-sky-700 border-sky-100',
    'Wrap-Up': 'bg-slate-50 text-slate-600 border-slate-100',
    'Idle': 'bg-slate-50 text-slate-400 border-slate-100 italic'
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${styles[status]} flex items-center gap-1.5 w-fit`}>
      {status === 'In Call' && <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse" />}
      {status === 'Ringing' && <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" />}
      {status}
    </span>
  );
};

interface Notification {
  id: string;
  text: string;
  time: string;
}

export default function LightDashboard() {
  const [agents, setAgents] = useState<Agent[]>(INITIAL_AGENTS);
  const [totalCalls, setTotalCalls] = useState(2145);
  const [successfulAppts, setSuccessfulAppts] = useState(54);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Simulation: Time and Incremental stats
  useEffect(() => {
    const timer = setInterval(() => {
      // Randomly increment calls
      if (Math.random() > 0.4) setTotalCalls(prev => prev + 1);
      
      // Randomly increment appointments
      if (Math.random() > 0.96) {
        const agent = agents[Math.floor(Math.random() * agents.length)];
        const now = new Date();
        setSuccessfulAppts(prev => prev + 1);
        setNotifications(prev => [
          {
            id: Math.random().toString(36).substr(2, 9),
            text: `New lead booked by ${agent.name}`,
            time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
          },
          ...prev.slice(0, 4)
        ]);
      }

      // Update agent timers and status
      setAgents(prev => prev.map(agent => {
        let nextDuration = agent.duration + 1;
        let nextStatus = agent.status;
        let nextLead = agent.targetLead;
        let nextTotal = agent.totalCalls;

        if (agent.status === 'Idle') {
          if (nextDuration > 5 && Math.random() > 0.8) {
            nextStatus = 'Ringing';
            nextDuration = 0;
            const leads = ["Growth Corp", "Tech Solutions", "Apex Systems", "Global Logistics", "Urban Bank", "Cloud Nine", "Metro Realty", "Quantum Dynamics"];
            nextLead = leads[Math.floor(Math.random() * leads.length)];
          }
        } else if (agent.status === 'Ringing') {
          if (nextDuration > 10 && Math.random() > 0.6) {
            nextStatus = 'In Call';
            nextDuration = 0;
          } else if (nextDuration > 30) {
            // No answer, go back to idle
            nextStatus = 'Idle';
            nextDuration = 0;
            nextLead = '-';
            nextTotal += 1;
          }
        } else if (agent.status === 'In Call') {
          if (nextDuration > 45 && Math.random() > 0.9) {
            nextStatus = 'Wrap-Up';
            nextDuration = 0;
          }
        } else if (agent.status === 'Wrap-Up') {
          if (nextDuration > 15 && Math.random() > 0.7) {
            nextStatus = 'Idle';
            nextDuration = 0;
            nextLead = '-';
            nextTotal += 1;
          }
        }

        return { ...agent, status: nextStatus, duration: nextDuration, targetLead: nextLead, totalCalls: nextTotal };
      }));

    }, 1000);

    return () => clearInterval(timer);
  }, [agents]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col p-6">
        <div className="flex items-center gap-2.5 mb-10 px-2">
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
            <Phone className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">Stratos <span className="text-sky-500">Call</span></span>
        </div>

        <nav className="flex-1 space-y-1">
          <SidebarLink icon={<LayoutDashboard className="w-4 h-4" />} label="Dashboard" active />
          <SidebarLink icon={<Play className="w-4 h-4" />} label="Live Feed" />
          <SidebarLink icon={<Target className="w-4 h-4" />} label="Campaigns" />
          <SidebarLink icon={<Database className="w-4 h-4" />} label="Leads" />
          <SidebarLink icon={<MessageSquare className="w-4 h-4" />} label="Recordings" />
          <SidebarLink icon={<BarChart3 className="w-4 h-4" />} label="Analytics" />
        </nav>

        <div className="pt-6 border-t border-slate-100">
          <SidebarLink icon={<Settings className="w-4 h-4" />} label="Settings" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-slate-950 border-b border-white/5 flex items-center justify-between px-8 shrink-0 shadow-lg relative z-10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(14,165,233,0.6)]" />
              <span className="text-xs font-bold text-white uppercase tracking-widest leading-none">Live Monitoring</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="relative group">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-white transition-colors" />
              <input 
                type="text" 
                placeholder="Find agent or campaign..." 
                className="bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-1.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500/50 transition-all w-64"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg relative transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-950" />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              <div className="text-right">
                <p className="text-xs font-bold text-white">Admin User</p>
                <p className="text-[10px] text-slate-500 font-medium">Operations Chief</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-white/10 shadow-inner">
                <Users className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <KPICard 
              icon={<Phone className="w-5 h-5 text-sky-600" />} 
              label="Total Calls Today" 
              value={totalCalls.toLocaleString()} 
              trend="+14.2%" 
              colorClass="text-sky-600"
            />
            <KPICard 
              icon={<Clock className="w-5 h-5 text-indigo-600" />} 
              label="Avg Call Duration" 
              value="3:12 mins" 
              colorClass="text-indigo-600"
            />
            <KPICard 
              icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />} 
              label="Successful Appts" 
              value={successfulAppts} 
              trend="+8.4%" 
              colorClass="text-emerald-600"
            />
            <KPICard 
              icon={<BarChart3 className="w-5 h-5 text-amber-600" />} 
              label="Connection Rate" 
              value="48.2%" 
              colorClass="text-amber-600"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Live Feed Table */}
            <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
              <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Live Activity Feed</h3>
                <button className="text-[11px] font-bold text-sky-600 hover:text-sky-700 uppercase">Export Log</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      <th className="px-6 py-4">Agent</th>
                      <th className="px-6 py-4">Campaign</th>
                      <th className="px-6 py-4">Target Lead</th>
                      <th className="px-6 py-4">Duration</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {agents.map((agent) => (
                      <tr key={agent.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-full bg-sky-50 text-sky-600 text-[10px] font-bold flex items-center justify-center">
                              {agent.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="text-xs font-bold text-slate-900">{agent.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-xs text-slate-500 font-medium">{agent.campaign}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-xs text-slate-900 font-medium">{agent.targetLead}</span>
                        </td>
                        <td className="px-6 py-4 font-mono text-[11px] text-slate-500 tabular-nums">
                          {agent.status !== 'Idle' ? formatTime(agent.duration) : '--:--'}
                        </td>
                        <td className="px-6 py-4">
                          <StatusBadge status={agent.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Side Analytics & Wins */}
            <div className="space-y-8">
              {/* Campaign Progress */}
              <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Campaign Volume</h3>
                <div className="space-y-6">
                  {CAMPAIGNS.map((c, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span className="text-slate-600">{c.name}</span>
                        <span className="text-slate-900">{c.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${c.progress}%` }}
                          className="h-full rounded-full" 
                          style={{ backgroundColor: c.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Wins */}
              <div className="bg-sky-50 border border-sky-100 rounded-xl p-6 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    <h3 className="text-sm font-bold text-sky-900 uppercase tracking-widest">Recent Bookings</h3>
                  </div>
                  <div className="space-y-3 max-h-[280px] overflow-y-auto custom-scrollbar pr-1">
                    <AnimatePresence initial={false}>
                      {notifications.map((note) => (
                        <motion.div 
                          key={note.id}
                          initial={{ opacity: 0, y: -20, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="bg-white border border-sky-200 p-3 rounded-lg flex items-start gap-3 shadow-sm mb-3"
                        >
                          <div className="shrink-0 mt-0.5">🎉</div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-bold text-slate-700 leading-tight truncate">{note.text}</p>
                            <p className="text-[9px] text-sky-500 font-bold mt-1 uppercase tracking-tighter">{note.time}</p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    {notifications.length === 0 && (
                      <p className="text-xs text-sky-600/50 italic py-4">Waiting for next conversion...</p>
                    )}
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 opacity-5 rotate-12">
                  <Play className="w-32 h-32 text-sky-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
