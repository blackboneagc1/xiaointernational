import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line,
  AreaChart,
  Area
} from 'recharts';
import { 
  Phone, 
  Users, 
  Calendar, 
  Activity, 
  TrendingUp, 
  LayoutDashboard, 
  List, 
  Settings, 
  PieChart, 
  LogOut,
  Bell,
  Search,
  CheckCircle2,
  AlertCircle,
  MoreVertical,
  Play
} from 'lucide-react';

// --- Types & Data ---

type CallStatus = 'Ringing' | 'In Call' | 'Wrap-up' | 'Idle';

interface Agent {
  id: string;
  name: string;
  status: CallStatus;
  duration: number;
  leadNumber: string;
  totalCalls: number;
}

interface Conversion {
  id: string;
  agentName: string;
  companyName: string;
  timestamp: Date;
}

const INITIAL_AGENTS: Agent[] = [
  { id: '1', name: 'Shourov A.', status: 'In Call', duration: 142, leadNumber: '+1 (555) 012-3498', totalCalls: 112 },
  { id: '2', name: 'Sarah K.', status: 'Ringing', duration: 12, leadNumber: '+1 (555) 982-1102', totalCalls: 98 },
  { id: '3', name: 'Michael R.', status: 'Wrap-up', duration: 45, leadNumber: '+1 (555) 443-9081', totalCalls: 104 },
  { id: '4', name: 'Elena V.', status: 'In Call', duration: 320, leadNumber: '+1 (555) 776-5541', totalCalls: 87 },
  { id: '5', name: 'David L.', status: 'Idle', duration: 0, leadNumber: '-', totalCalls: 120 },
  { id: '6', name: 'Jessica M.', status: 'In Call', duration: 88, leadNumber: '+1 (555) 221-0092', totalCalls: 95 },
  { id: '7', name: 'Robert P.', status: 'Wrap-up', duration: 15, leadNumber: '+1 (555) 112-8832', totalCalls: 110 },
  { id: '8', name: 'Linda T.', status: 'In Call', duration: 215, leadNumber: '+1 (555) 990-2231', totalCalls: 102 },
];

const INITIAL_CHART_DATA = [
  { hour: '08:00', calls: 120, leads: 8 },
  { hour: '09:00', calls: 450, leads: 24 },
  { hour: '10:00', calls: 820, leads: 31 },
  { hour: '11:00', calls: 1100, leads: 42 },
  { hour: '12:00', calls: 950, leads: 38 },
  { hour: '13:00', calls: 1250, leads: 52 },
  { hour: '14:00', calls: 1420, leads: 58 },
];

const COMPANIES = ["Rezwayeena LLC", "Apex Global", "Titan Systems", "Nexus Corp", "Elevate SaaS", "Vanguard Industries"];

// --- Components ---

const SidebarLink = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <button className={`w-full flex items-center gap-4 px-6 py-4 transition-all duration-300 group ${active ? 'bg-electric-blue/10 text-electric-blue border-r-2 border-electric-blue' : 'text-neutral-500 hover:text-white'}`}>
    <div className={`${active ? 'text-electric-blue' : 'text-neutral-600 group-hover:text-white'} transition-colors`}>
      {icon}
    </div>
    <span className="text-sm font-bold uppercase tracking-widest">{label}</span>
  </button>
);

const StatCard = ({ icon, label, value, trend, trendValue, colorClass }: { icon: React.ReactNode, label: string, value: string | number, trend: 'up' | 'down', trendValue: string, colorClass: string }) => (
  <div className="bg-dark-surface border border-dark-border p-6 rounded-sm relative overflow-hidden group">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-2 bg-dark-bg border border-dark-border text-neutral-400 group-hover:${colorClass} transition-colors`}>
        {icon}
      </div>
      <div className={`flex items-center gap-1 text-xs font-bold ${trend === 'up' ? 'text-neon-green' : 'text-red-500'}`}>
        {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingUp className="w-3 h-3 rotate-180" />}
        {trendValue}
      </div>
    </div>
    <div className="space-y-1">
      <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold">{label}</p>
      <h3 className="text-3xl font-display font-bold tabular-nums">{value}</h3>
    </div>
    <div className={`absolute bottom-0 left-0 h-1 bg-current opacity-5 w-full ${colorClass.replace('text-', 'bg-')}`} />
  </div>
);

export default function Dashboard() {
  const [agents, setAgents] = useState<Agent[]>(INITIAL_AGENTS);
  const [totalCalls, setTotalCalls] = useState(1420);
  const [leadsBooked, setLeadsBooked] = useState(38);
  const [conversions, setConversions] = useState<Conversion[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Simulation: Time and Incremental stats
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      
      // Randomly increment calls
      if (Math.random() > 0.3) {
        setTotalCalls(prev => prev + 1);
      }
      
      // Randomly increment leads and add conversion
      if (Math.random() > 0.95) {
        const agent = agents[Math.floor(Math.random() * agents.length)];
        const company = COMPANIES[Math.floor(Math.random() * COMPANIES.length)];
        setLeadsBooked(prev => prev + 1);
        setConversions(prev => [{
          id: Math.random().toString(36).substr(2, 9),
          agentName: agent.name,
          companyName: company,
          timestamp: new Date()
        }, ...prev.slice(0, 4)]);
      }

      // Update agent timers and status
      setAgents(prev => prev.map(agent => {
        if (agent.status === 'In Call' || agent.status === 'Wrap-up' || agent.status === 'Ringing') {
          let nextDuration = agent.duration + 1;
          let nextStatus = agent.status;

          // Transition logic
          if (agent.status === 'Ringing' && nextDuration > 10 && Math.random() > 0.7) {
            nextStatus = 'In Call';
            nextDuration = 0;
          } else if (agent.status === 'In Call' && nextDuration > 45 && Math.random() > 0.95) {
            nextStatus = 'Wrap-up';
            nextDuration = 0;
          } else if (agent.status === 'Wrap-up' && nextDuration > 15 && Math.random() > 0.8) {
            nextStatus = 'Ringing';
            nextDuration = 0;
            const randNum = Math.floor(1000 + Math.random() * 9000);
            return { ...agent, status: nextStatus, duration: nextDuration, leadNumber: `+1 (555) 012-${randNum}`, totalCalls: agent.totalCalls + 1 };
          }

          return { ...agent, status: nextStatus, duration: nextDuration };
        }
        return agent;
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
    <div className="flex h-screen bg-dark-bg text-white overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-dark-border bg-dark-surface flex flex-col pt-8">
        <div className="px-6 mb-12 flex items-center gap-3">
          <div className="w-8 h-8 bg-gold flex items-center justify-center font-bold text-black">S</div>
          <span className="text-sm font-display font-bold tracking-tighter">STRATOS LIVE</span>
        </div>

        <nav className="flex-1">
          <SidebarLink icon={<LayoutDashboard className="w-5 h-5" />} label="Overview" active />
          <SidebarLink icon={<Activity className="w-5 h-5" />} label="Live Tracker" />
          <SidebarLink icon={<PieChart className="w-5 h-5" />} label="Campaigns" />
          <SidebarLink icon={<List className="w-5 h-5" />} label="Lead Lists" />
          <SidebarLink icon={<LogOut className="w-5 h-5" />} label="Logout" />
        </nav>

        <div className="p-6 border-t border-dark-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-gold font-bold">JD</div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider">John Doe</p>
              <p className="text-[10px] text-neutral-500 font-bold">ADMIN ACCOUNT</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden bg-dark-bg">
        {/* Header */}
        <header className="h-20 border-b border-dark-border flex items-center justify-between px-8 bg-dark-surface/50 backdrop-blur-md">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-display font-bold tracking-tight uppercase">Live Operations Board</h1>
            <div className="flex items-center gap-2 bg-neon-green/10 text-neon-green px-3 py-1 text-[10px] font-bold tracking-widest border border-neon-green/20 rounded-full animate-pulse-subtle">
              <div className="w-1.5 h-1.5 bg-neon-green rounded-full shadow-[0_0_8px_#39FF14]" />
              SYSTEM OPERATIONAL
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search Agent or Deal..." 
                className="bg-dark-bg border border-dark-border rounded-sm pl-10 pr-4 py-2 text-xs focus:outline-none focus:border-gold/50 transition-colors w-64"
              />
            </div>
            <button className="relative p-2 text-neutral-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-dark-bg" />
            </button>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              icon={<Phone className="w-5 h-5" />} 
              label="Calls Today" 
              value={totalCalls.toLocaleString()} 
              trend="up" 
              trendValue="+12%" 
              colorClass="text-electric-blue"
            />
            <StatCard 
              icon={<Activity className="w-5 h-5" />} 
              label="Answer Rate" 
              value="42.4%" 
              trend="up" 
              trendValue="+2.1%" 
              colorClass="text-gold"
            />
            <StatCard 
              icon={<Calendar className="w-5 h-5" />} 
              label="Appts Booked" 
              value={leadsBooked} 
              trend="up" 
              trendValue="+8%" 
              colorClass="text-neon-green"
            />
            <StatCard 
              icon={<Users className="w-5 h-5" />} 
              label="Live Agents" 
              value="12/15" 
              trend="down" 
              trendValue="-1" 
              colorClass="text-neutral-400"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
            {/* Live Agent Tracker */}
            <div className="glass-panel rounded-sm flex flex-col">
              <div className="p-6 border-b border-dark-border flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Play className="w-4 h-4 text-neon-green" />
                  <h3 className="font-display font-bold uppercase tracking-widest text-sm text-neutral-300">Live Agent Feed</h3>
                </div>
                <button className="text-[10px] font-bold uppercase text-neutral-500 hover:text-white flex items-center gap-1 transition-colors">
                  View All <MoreVertical className="w-3 h-3" />
                </button>
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-dark-border/50 text-[10px] font-bold uppercase tracking-widest text-neutral-500 bg-black/20">
                        <th className="px-6 py-4">Agent Name</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Current Lead</th>
                        <th className="px-6 py-4">Duration</th>
                        <th className="px-6 py-4 text-right">Dials</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-dark-border/30">
                      {agents.map((agent) => (
                        <tr key={agent.id} className="hover:bg-white/[0.02] transition-colors group">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-neutral-800 text-[10px] font-bold flex items-center justify-center border border-white/5">
                                {agent.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <span className="text-sm font-medium">{agent.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            {agent.status === 'Ringing' && (
                              <span className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter bg-blinking-amber/10 text-blinking-amber border border-blinking-amber/20 flex items-center gap-1.5 w-fit animate-pulse">
                                <div className="w-1 h-1 bg-blinking-amber rounded-full" />
                                Ringing
                              </span>
                            )}
                            {agent.status === 'In Call' && (
                              <span className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter bg-neon-green/10 text-neon-green border border-neon-green/20 flex items-center gap-1.5 w-fit">
                                <div className="w-1 h-1 bg-neon-green rounded-full animate-ping" />
                                In Call
                              </span>
                            )}
                            {agent.status === 'Wrap-up' && (
                              <span className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter bg-electric-blue/10 text-electric-blue border border-electric-blue/20 flex items-center gap-1.5 w-fit">
                                <div className="w-1 h-1 bg-electric-blue rounded-full" />
                                Wrap-up
                              </span>
                            )}
                            {agent.status === 'Idle' && (
                              <span className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter bg-neutral-700/30 text-neutral-500 border border-neutral-700/30 flex items-center gap-1.5 w-fit text-[9px]">
                                <div className="w-1 h-1 bg-neutral-600 rounded-full" />
                                Offline
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                            {agent.leadNumber}
                          </td>
                          <td className="px-6 py-4 text-xs font-bold tabular-nums">
                            {agent.status !== 'Idle' ? formatTime(agent.duration) : '--:--'}
                          </td>
                          <td className="px-6 py-4 text-right text-xs font-bold tabular-nums text-neutral-500">
                            {agent.totalCalls}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="glass-panel rounded-sm p-6 flex flex-col">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-4 h-4 text-electric-blue" />
                  <h3 className="font-display font-bold uppercase tracking-widest text-sm text-neutral-300">Conversion Trend</h3>
                </div>
                <select className="bg-dark-bg border border-dark-border text-[9px] font-bold uppercase py-1 px-2 focus:outline-none focus:border-electric-blue/50">
                  <option>Last 12 Hours</option>
                  <option>Last 24 Hours</option>
                </select>
              </div>
              <div className="flex-1 min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={INITIAL_CHART_DATA}>
                    <defs>
                      <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0070FF" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#0070FF" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#39FF14" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#39FF14" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1F1F1F" vertical={false} />
                    <XAxis 
                      dataKey="hour" 
                      stroke="#444" 
                      fontSize={10} 
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      stroke="#444" 
                      fontSize={10} 
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#121212', border: '1px solid #1F1F1F', fontSize: '10px' }}
                      itemStyle={{ fontWeight: 'bold' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="calls" 
                      stroke="#0070FF" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorCalls)" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="leads" 
                      stroke="#39FF14" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorLeads)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-dark-bg/50 border border-dark-border rounded-sm">
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">Peak Dials/Hr</p>
                  <p className="text-xl font-display font-bold text-electric-blue">1,250</p>
                </div>
                <div className="p-4 bg-dark-bg/50 border border-dark-border rounded-sm">
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">Avg Lead Cost</p>
                  <p className="text-xl font-display font-bold text-neon-green">$12.42</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Conversions / Wins Feed */}
          <div className="glass-panel rounded-sm overflow-hidden">
            <div className="px-6 py-3 bg-white/[0.03] border-b border-dark-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-neon-green" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Winning Activity Stream</span>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-600">Updated Real-Time</span>
            </div>
            <div className="h-32 px-6 flex items-center">
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  {conversions.length > 0 ? (
                    <motion.div 
                      key={conversions[0].id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center text-3xl">🎉</div>
                        <div>
                          <p className="text-xl font-display font-medium">
                            <span className="text-gold font-bold">Agent {conversions[0].agentName}</span> just booked a high-ticket enterprise meeting with <span className="text-electric-blue font-bold tracking-tight">{conversions[0].companyName}!</span>
                          </p>
                          <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest mt-1">
                            {conversions[0].timestamp.toLocaleTimeString()} — 15 Mins Discovery Blocked
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <button className="px-6 py-2 border border-dark-border text-[10px] font-bold uppercase tracking-widest hover:border-gold transition-colors">
                          View Recording
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-neutral-600 text-center uppercase tracking-widest text-sm animate-pulse-subtle">
                      Waiting for the next win...
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* System Footer Status */}
        <footer className="h-10 border-t border-dark-border bg-black/40 px-8 flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-neutral-600">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-neon-green rounded-full mr-1 shadow-[0_0_5px_#39FF14]" />
              Latancy: 22ms
            </div>
            <div>Sync: Global v4.2</div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
               Current Time: <span className="text-neutral-400 tabular-nums">{currentTime.toLocaleTimeString()}</span>
            </div>
            <div className="flex items-center gap-1.5">
               Instance ID: <span className="text-neutral-400">S-7729-OUTBOUND-CLUSTER</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
