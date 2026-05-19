import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import xiaoLogo from '../assets/images/xiao_logo_1779208556714.png';
import { 
  CheckCircle2, 
  ArrowRight, 
  PhoneIncoming, 
  Users, 
  Zap, 
  Target,
  Calendar,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Send,
  Mail,
  Search,
  Headset,
  TrendingUp,
  Settings,
  MoreVertical,
  Activity,
  MapPin,
  Loader2,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  Globe,
  Monitor,
  Layers,
  Mic,
  Shield,
  MessageSquare,
  X,
  DollarSign,
  Calculator,
  BarChart3
} from 'lucide-react';

// --- AMBIENT SMOKE COMPONENT ---
const AmbientSmoke = ({ position = 'top-right', variant = 'blue' }: { position?: 'top-right' | 'bottom-left' | 'top-left' | 'bottom-right' | 'center', variant?: 'blue' | 'slate' | 'mixed' }) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-right': return 'top-[-20%] right-[-10%]';
      case 'bottom-left': return 'bottom-[-20%] left-[-10%]';
      case 'top-left': return 'top-[-20%] left-[-10%]';
      case 'bottom-right': return 'bottom-[-20%] right-[-10%]';
      case 'center': return 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
      default: return 'top-0 right-0';
    }
  };

  const getGradientColor = () => {
    switch (variant) {
      case 'blue': return 'bg-[#0284C7]/[0.04]';
      case 'slate': return 'bg-slate-200/[0.2]';
      case 'mixed': return 'bg-gradient-to-br from-[#0284C7]/[0.03] to-slate-200/[0.1]';
      default: return 'bg-[#0284C7]/[0.04]';
    }
  };

  return (
    <div className={`absolute ${getPositionClasses()} w-[800px] h-[800px] rounded-full blur-[120px] md:blur-[160px] pointer-events-none -z-10 mix-blend-multiply transition-all duration-1000 overflow-hidden`}>
       <motion.div 
         animate={{ 
           scale: [1, 1.2, 1],
           opacity: [0.6, 1, 0.6],
           x: [0, 50, 0],
           y: [0, -30, 0]
         }}
         transition={{ 
           duration: 15, 
           repeat: Infinity, 
           ease: "easeInOut" 
         }}
         className={`w-full h-full ${getGradientColor()}`}
       />
       <motion.div 
         animate={{ 
           scale: [1.2, 1, 1.2],
           opacity: [0.4, 0.7, 0.4],
           x: [0, -40, 0],
           y: [0, 60, 0]
         }}
         transition={{ 
           duration: 18, 
           repeat: Infinity, 
           ease: "easeInOut",
           delay: 2
         }}
         className="absolute inset-0 w-full h-full bg-slate-100/40 rounded-full blur-[100px]"
       />
    </div>
  );
};

// --- TESTIMONIALS SECTION ---
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO, TechScale Solutions",
      text: "Generated $45k in pipeline within the first 30 days. Their live dashboard tracking is a game-changer!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      name: "Michael Chen",
      role: "VP Sales, SaaSFlow",
      text: "The quality of meetings booked is unparalleled. These aren't just leads; they're genuine opportunities.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    },
    {
      name: "Elena Rodriguez",
      role: "Founder, GrowthOps",
      text: "Stratos transformed our outbound strategy. Their agents sound native and truly understand our product.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
    }
  ];

  return (
    <section className="py-32 px-6 bg-slate-50/30 relative overflow-hidden">
      <SectionBackgroundIcons />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0284C7]"
          >
            ★ TRUSTED BY GLOBAL B2B BRANDS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-black tracking-tighter text-slate-900"
          >
            What Our Clients <span className="text-[#0284C7]">Say About Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-slate-500 font-medium italic"
          >
            High-converting results for high-growth teams.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 lg:p-12 rounded-[3.5rem] border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-100/50 group flex flex-col justify-between h-full"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map(star => (
                      <div key={star} className="w-4 h-4 text-[#0284C7] fill-[#0284C7]">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      </div>
                    ))}
                  </div>
                  <div className="text-slate-100 group-hover:text-sky-100 transition-colors">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/></svg>
                  </div>
                </div>
                <p className="text-lg lg:text-xl text-slate-700 font-medium leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>
              <div className="mt-12 pt-10 border-t border-slate-50 flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 overflow-hidden border border-sky-100 p-1 group-hover:scale-110 transition-transform">
                   <img 
                      src={t.avatar} 
                      alt={t.name}
                      className="w-full h-full object-cover rounded-xl"
                      referrerPolicy="no-referrer"
                   />
                </div>
                <div>
                  <p className="text-base font-black text-slate-900 tracking-tight">{t.name}</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden blur-[1px]">
        {/* Floating 5-Star Badge */}
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] p-4 glass rounded-3xl border-sky-100/50 shadow-xl shadow-sky-500/5 backdrop-blur-md"
        >
          <div className="flex gap-1 text-sky-400">
             {[1,2,3,4,5].map(s => <span key={s} className="text-xs">★</span>)}
          </div>
          <p className="text-[8px] font-black uppercase tracking-widest text-[#0284C7] mt-1 text-center">ELITE QUALITY</p>
        </motion.div>

        {/* Conversation Bubble */}
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[40%] right-[3%] w-16 h-16 glass rounded-2xl border-white/40 flex items-center justify-center text-sky-200 shadow-2xl"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </motion.div>

        {/* Telephone Icon */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] left-[8%] w-14 h-14 glass rounded-full border-sky-100 flex items-center justify-center text-sky-300 shadow-lg"
        >
          <PhoneIncoming size={20} />
        </motion.div>

        {/* Rocket Icon */}
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[35%] right-[10%] w-20 h-20 glass rounded-[2.5rem] border-white/20 flex items-center justify-center text-[#0284C7]/40 shadow-inner"
        >
           <Zap size={32} />
        </motion.div>
      </div>

       {/* Ambient Smoke System */}
       <AmbientSmoke position="top-right" variant="blue" />
       <AmbientSmoke position="bottom-left" variant="slate" />
    </section>
  );
};

// --- NETWORK INSIGHTS SECTION ---
const NetworkInsightsSection = () => {
  const stats = [
    {
      title: "Daily Outbound Power",
      value: 45000,
      suffix: "+",
      metric: "Calls Dialed Today",
      subtext: "~650+ Live Conversations Handled",
      icon: <Zap size={24} className="text-sky-400" />
    },
    {
      title: "Weekly Network Volume",
      value: 225000,
      suffix: "+",
      metric: "Warm Dials",
      subtext: "~3,200+ Decision Makers Reached",
      icon: <Activity size={24} className="text-[#0284C7]" />
    },
    {
      title: "Monthly Pipeline Value",
      value: 1000000,
      suffix: "+",
      metric: "Total Calls",
      subtext: "~15,000+ Qualified Meetings Booked",
      icon: <Globe size={24} className="text-sky-600" />
    }
  ];

  return (
    <section className="py-32 px-6 bg-white overflow-hidden relative">
      <AmbientSmoke position="top-left" variant="mixed" />
      <AmbientSmoke position="bottom-right" variant="blue" />
      <div className="absolute inset-0 bg-slate-50/10 -z-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-100 rounded-full shadow-sm mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                Engine Status: <span className="text-emerald-600">Fully Operational</span>
              </span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-6">
              Our Dialing Engine <br />
              <span className="text-[#0284C7]">in Numbers.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium max-w-xl">
              Real-time look at the volume our elite SDRs generate across the globe.
            </p>
          </div>
          
          <div className="hidden lg:flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
             <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-200" />
                Live Node Status
             </span>
             <span className="w-8 h-px bg-slate-100" />
             <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                Volume Optimization
             </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ y: -8 }}
              className="group bg-white p-10 lg:p-14 rounded-[3.5rem] border border-slate-100 hover:border-sky-100 transition-all duration-300 hover:shadow-[0_40px_80px_-20px_rgba(2,132,199,0.08)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 group-hover:scale-125 transition-all duration-700">
                {stat.icon}
              </div>
              
              <div className="space-y-8 relative z-10">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-sky-50 transition-colors duration-300">
                   {/* We can repeat the icon or use a small variation */}
                   <div className="w-6 h-6 text-slate-400 group-hover:text-[#0284C7] transition-colors">
                      {stat.icon}
                   </div>
                </div>
                
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">{stat.title}</h4>
                  <div className="flex items-baseline gap-1 mb-4">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">{stat.metric}</p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed italic">{stat.subtext}</p>
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0284C7] group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COUNTER COMPONENT ---
const Counter = ({ value, suffix = "", duration = 1.5 }: { value: number, suffix?: string, duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const end = value;
    const totalDuration = duration * 1000;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);
      
      // Easing function (easeOutExpo)
      const easeValue = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const current = Math.floor(easeValue * end);
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [value, duration, hasAnimated]);

  return (
    <motion.span 
      onViewportEnter={() => setHasAnimated(true)}
      className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter tabular-nums"
    >
      {displayValue.toLocaleString()}{suffix}
    </motion.span>
  );
};

// --- ROI CALCULATOR SECTION ---
const ROICalculator = () => {
  const [callers, setCallers] = useState(2);
  const [dealValue, setDealValue] = useState(2000);

  const monthlyLeads = callers * 15;
  const monthlyRevenue = monthlyLeads * 0.20 * dealValue;

  return (
    <section className="py-32 px-6 bg-white overflow-hidden relative border-t border-slate-100">
      <SectionBackgroundIcons />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1.5 bg-sky-50 border border-sky-100 rounded-full text-[#0284C7] text-[10px] font-black uppercase tracking-widest mb-4"
          >
            <Calculator size={14} />
            Profitability Projection
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-7xl font-black tracking-tighter text-slate-900"
          >
            Calculate Your <span className="text-[#0284C7]">Outbound ROI</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-slate-500 font-medium max-w-2xl mx-auto italic"
          >
            See the exact pipeline value our dedicated callers can generate for your high-ticket offer.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column: Inputs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50/50 p-8 lg:p-14 rounded-[4rem] border border-slate-100 space-y-16 shadow-inner"
          >
            <div className="space-y-8">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                   <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2">
                     <Users size={14} className="text-[#0284C7]" />
                     Dedicated Callers
                   </label>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">SDR CLUSTER SIZE</p>
                </div>
                <span className="text-4xl font-black text-[#0284C7] tabular-nums">{callers}</span>
              </div>
              <div className="relative group">
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={callers} 
                  onChange={(e) => setCallers(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-[#0284C7] focus:ring-4 focus:ring-sky-100 transition-all"
                />
                <div className="flex justify-between mt-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
                  <span>ALPHA UNIT (1)</span>
                  <span>FULL SQUAD (10)</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                   <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2">
                     <DollarSign size={14} className="text-[#0284C7]" />
                     Average Deal Value
                   </label>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">CONTRACT REVENUE (LTV)</p>
                </div>
                <div className="relative group">
                   <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-black">$</span>
                   <input 
                    type="number" 
                    value={dealValue} 
                    onChange={(e) => setDealValue(parseInt(e.target.value) || 0)}
                    className="w-40 bg-white border border-slate-200 rounded-2xl py-4 pl-10 pr-6 text-2xl font-black text-[#0284C7] focus:outline-none focus:border-[#0284C7] focus:ring-8 focus:ring-sky-100/50 transition-all shadow-sm"
                  />
                </div>
              </div>
              <div className="p-4 bg-sky-50/50 rounded-2xl border border-sky-100 flex items-center gap-3">
                 <Zap size={16} className="text-[#0284C7] animate-pulse" />
                 <p className="text-[10px] text-[#0284C7] font-black uppercase tracking-widest leading-relaxed">
                   Calculations include our 15 meetings/month SDR benchmark.
                 </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Results Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[#0284C7]/20 blur-[100px] rounded-full -z-10 group-hover:bg-[#0284C7]/30 transition-all duration-700" />
            
            <div className="bg-white p-12 lg:p-20 rounded-[4.5rem] border border-sky-100 shadow-2xl shadow-sky-500/10 space-y-14 relative overflow-hidden group">
               {/* Animated Decor */}
               <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-50 rounded-full -z-10 group-hover:scale-110 transition-transform duration-1000" />
               
               <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Total Pipeline Value</p>
                    <TrendingUp className="text-[#0284C7] animate-bounce-slow" />
                  </div>
                  <div className="relative">
                    <h3 className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter tabular-nums leading-none">
                      ${monthlyRevenue.toLocaleString()}
                    </h3>
                    <div className="w-20 h-2 bg-gradient-to-r from-[#0284C7] to-transparent rounded-full mt-4" />
                  </div>
                  <p className="text-sm font-bold text-slate-500 italic">Estimated monthly revenue based on 20% close rate excellence.</p>
               </div>

               <div className="grid grid-cols-2 gap-8 pt-6">
                  <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group-hover:bg-sky-50/50 transition-colors">
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Meetings / Mo</p>
                     <p className="text-4xl font-black text-[#0284C7] tabular-nums">{monthlyLeads}</p>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-colors">
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Alpha Yield</p>
                     <p className="text-4xl font-black text-slate-900">20%</p>
                  </div>
               </div>

               <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <p className="text-[9px] text-slate-400 leading-relaxed font-bold uppercase tracking-[0.2em] max-w-[280px]">
                    *Benchmark based on 1.4k hours of high-ticket outbound orchestration data.
                  </p>
                  <button className="flex items-center gap-3 text-xs font-black text-[#0284C7] uppercase tracking-widest group/btn">
                    Claim This ROI <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- LOGO MARQUEE SECTION ---
const LogoMarquee = () => {
  return (
    <div className="py-20 border-y border-slate-50 overflow-hidden bg-white/50 relative">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
          Powering Outbound for Industry Titans
        </p>
      </div>
      
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="shrink-0 flex items-center justify-center h-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <img 
               src={xiaoLogo} 
               alt="Xiao International" 
               className="h-full w-auto object-contain"
               referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
      
      {/* Side Fades */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  );
};

// --- SECTION BACKGROUND ICONS ---
const SectionBackgroundIcons = ({ variant = 'light' }: { variant?: 'light' | 'dark' }) => {
  const colorClass = variant === 'light' ? 'text-[#0284C7]' : 'text-white';
  const opacityClass = variant === 'light' ? 'opacity-[0.03]' : 'opacity-[0.05]';
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 hidden md:block">
      <AmbientSmoke position={variant === 'light' ? 'top-right' : 'center'} variant={variant === 'light' ? 'blue' : 'mixed'} />
      <div className={`absolute top-[10%] left-[5%] ${colorClass} ${opacityClass} animate-float-up`}>
        <Headset size={160} strokeWidth={0.5} />
      </div>
      <div className={`absolute top-[60%] left-[12%] ${colorClass} ${opacityClass} animate-float-rotate`}>
        <PhoneIncoming size={120} strokeWidth={0.5} />
      </div>
      <div className={`absolute top-[20%] right-[8%] ${colorClass} ${opacityClass} animate-float-rotate`}>
        <TrendingUp size={140} strokeWidth={0.5} />
      </div>
      <div className={`absolute bottom-[15%] right-[15%] ${colorClass} ${opacityClass} animate-float-up`}>
        <Users size={180} strokeWidth={0.5} />
      </div>
      <div className={`absolute top-[50%] right-[25%] ${colorClass} ${opacityClass} animate-float-up opacity-[0.02]`}>
         <Target size={100} strokeWidth={0.5} />
      </div>
    </div>
  );
};

// --- FAQ SECTION ---
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How do your callers handle gatekeepers and rejections?",
      a: "Our SDRs are trained in advanced behavioral psychology and consultative selling. They don't use rigid scripts; they lead high-level business conversations. We use pattern-interrupt techniques to bypass gatekeepers and turn sharp rejections into discovery opportunities."
    },
    {
      q: "What industries do you specialize in?",
      a: "While our methodology is vertical-agnostic, we excel in B2B SaaS, FinTech, High-Ticket Agencies, and Professional Services. If your client Lifetime Value (LTV) is over $10,000, our surgical outbound engine is designed for you."
    },
    {
      q: "How do I track the progress of my calling campaign?",
      a: "You get full access to our proprietary Live Operations Nexus Dashboard. This allows you to track every dial, listen to recordings, and monitor pipeline health in real-time. Total transparency is our core standard."
    },
    {
      q: "Are there any long-term contracts or hidden setup fees?",
      a: "No. We operate on a performance-first model with month-to-month flexibility. There are zero hidden setup fees. We believe our results should be the only thing keeping you partnered with us."
    },
    {
      q: "How fast can our campaign go live?",
      a: "After your strategy audit and Ideal Customer Profile (ICP) synchronization, we typically launch your dedicated SDR cluster within 7 to 10 business days."
    }
  ];

  return (
    <section className="py-32 px-6 bg-slate-50 relative overflow-hidden">
      <AmbientSmoke position="bottom-right" variant="slate" />
      <SectionBackgroundIcons />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-500 font-medium italic">Have questions? We’ve got sharp answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className={`group rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                activeIndex === i 
                ? 'bg-white border-sky-400 shadow-2xl shadow-sky-100/50' 
                : 'bg-white border-slate-200/60 hover:shadow-xl hover:shadow-sky-100/30'
              }`}
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-8 lg:px-12 py-8 flex items-center justify-between text-left"
              >
                <span className={`text-lg lg:text-xl font-black tracking-tight transition-colors ${activeIndex === i ? 'text-[#0284C7]' : 'text-slate-900'}`}>
                  {faq.q}
                </span>
                <div className={`w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center transition-all duration-500 ${activeIndex === i ? 'rotate-180 bg-sky-50 text-sky-600' : 'text-slate-400'}`}>
                  <ChevronDown size={22} />
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-8 lg:px-12 pb-10">
                       <div className="w-full h-px bg-slate-100 mb-8" />
                       <p className="text-lg text-slate-500 font-medium leading-relaxed">
                         {faq.a}
                       </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100/30 blur-[120px] rounded-full -mr-64 -mt-64 -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 blur-[120px] rounded-full -ml-64 -mb-64 -z-10" />
    </section>
  );
};
// --- HERO BACKGROUND ---
const HeroBackground = () => (
  <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
    <AmbientSmoke position="top-right" variant="blue" />
    <AmbientSmoke position="top-left" variant="slate" />
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(2,132,199,0.06),transparent_70%)]" />
    <div className="absolute inset-0 bg-mesh opacity-[0.03]" />
    <div className="absolute inset-b-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
  </div>
);

import BookingModal from '../components/BookingModal';

const Nav = ({ onBookClick, setView, currentView }: { onBookClick: () => void, setView: (v: 'site' | 'dashboard') => void, currentView: 'site' | 'dashboard' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl z-50 transition-all duration-500">
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl md:rounded-[2.5rem] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between border border-white shadow-2xl shadow-slate-200/50">
        <div className="flex items-center gap-3 md:gap-4 cursor-pointer" onClick={() => { setView('site'); setIsMobileMenuOpen(false); }}>
          <img 
            src={xiaoLogo} 
            alt="Xiao International" 
            className="h-8 md:h-10 w-auto object-contain" 
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="hidden lg:flex items-center gap-10">
          {[
            { label: 'Home', href: '#home' },
            { label: 'Services', href: '#services' },
            { label: 'Why Us', href: '#why-us' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Contact', href: '/contact.html' }
          ].map(item => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-[13px] font-bold text-slate-500 hover:text-[#0284C7] transition-all tracking-tight"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => setView(currentView === 'site' ? 'dashboard' : 'site')}
            className={`hidden sm:flex items-center gap-3 px-6 md:px-8 py-2 md:py-3.5 rounded-full text-[10px] md:text-[12px] font-black transition-all shadow-xl active:scale-95 ${
              currentView === 'site' 
                ? 'bg-slate-950 text-white hover:bg-slate-800 shadow-slate-900/10' 
                : 'bg-rose-500 text-white hover:bg-rose-600 shadow-rose-500/20'
            }`}
          >
            {currentView === 'site' ? (
              <>
                <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span className="hidden md:inline">Live Call Track</span>
                <span className="md:hidden">NEXUS</span>
              </>
            ) : (
              <>
                <X size={16} />
                <span className="hidden md:inline">EXIT DASHBOARD</span>
                <span className="md:hidden">CLOSE</span>
              </>
            )}
          </button>
          <button 
            onClick={onBookClick}
            className="px-6 md:px-8 py-2 md:py-3.5 bg-[#0284C7] text-white rounded-full text-[10px] md:text-[12px] font-black hover:bg-sky-600 transition-all shadow-xl shadow-sky-500/20 active:scale-95"
          >
            BOOK <span className="hidden sm:inline">A CALL</span>
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-slate-50 rounded-xl"
          >
            <div className={`w-5 h-0.5 bg-slate-900 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-5 h-0.5 bg-slate-900 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-slate-900 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-20 left-0 right-0 lg:hidden p-4"
          >
            <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl p-4 flex flex-col gap-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Services', href: '#services' },
                { label: 'Why Us', href: '#why-us' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Contact', href: '/contact.html' }
              ].map(item => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-4 text-sm font-black text-slate-900 hover:bg-slate-50 rounded-2xl transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              <button 
                onClick={() => { setView(currentView === 'site' ? 'dashboard' : 'site'); setIsMobileMenuOpen(false); }}
                className={`w-full px-6 py-4 rounded-2xl text-[12px] font-black flex items-center justify-center gap-3 ${
                  currentView === 'site' ? 'bg-slate-950 text-white' : 'bg-rose-500 text-white'
                }`}
              >
                {currentView === 'site' ? (
                  <>
                    <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
                    DASHBOARD ACCESS
                  </>
                ) : (
                  <>
                    <X size={16} />
                    EXIT DASHBOARD
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- DASHBOARD CONTENT ---
const DashboardContent = () => {
  const [counters, setCounters] = useState({ calls: 4289, leads: 154, meetings: 42 });
  const [agents, setAgents] = useState([
    { name: 'Shourov A.', status: 'In Call', seconds: 765, volume: 84, sentiment: 'Positive' },
    { name: 'Shawon M.', status: 'Ringing', seconds: 8, volume: 62, sentiment: 'Neutral' },
    { name: 'Badhon K.', status: 'In Call', seconds: 502, volume: 91, sentiment: 'Highly Positive' },
    { name: 'Faisal H.', status: 'Idle', seconds: 312, volume: 45, sentiment: 'Neutral' },
    { name: 'Tanvir S.', status: 'Wrap-Up', seconds: 195, volume: 77, sentiment: 'Positive' },
  ]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        calls: prev.calls + Math.floor(Math.random() * 3),
        leads: prev.leads + (Math.random() > 0.8 ? 1 : 0),
        meetings: prev.meetings + (Math.random() > 0.95 ? 1 : 0)
      }));

      setAgents(prev => prev.map(agent => {
        let newStatus = agent.status;
        let newSeconds = agent.seconds + 1;

        if (agent.status === 'Ringing' && Math.random() > 0.7) newStatus = 'In Call';
        if (agent.status === 'In Call' && Math.random() > 0.95) {
          newStatus = 'Wrap-Up';
          newSeconds = 0;
        }
        if (agent.status === 'Wrap-Up' && Math.random() > 0.8) {
           newStatus = 'Idle';
           newSeconds = 0;
        }
        if (agent.status === 'Idle' && Math.random() > 0.8) {
           newStatus = 'Ringing';
           newSeconds = 0;
        }

        return { ...agent, status: newStatus, seconds: newSeconds };
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="pt-24 md:pt-32 min-h-screen bg-slate-50 p-4 md:p-6 lg:p-10 font-sans bg-grid-slate">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">Live Operations <span className="text-[#0284C7]">Nexus</span></h2>
            <p className="text-slate-500 font-medium text-sm md:text-base">Real-time outbound performance & agent orchestration.</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="px-4 py-2 bg-white/80 backdrop-blur-md rounded-2xl flex items-center gap-2 border border-slate-200 shadow-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-600">All Systems Nominal</span>
             </div>
             <button className="p-2 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-sky-600 transition-all shadow-sm"><Activity size={18} /></button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {[
            { label: 'Real-time Dials', value: counters.calls.toLocaleString(), icon: <PhoneIncoming />, color: 'sky' },
            { label: 'Qualified Opportunities', value: counters.leads, icon: <Target />, color: 'emerald' },
            { label: 'Today’s Yield', value: counters.meetings, icon: <Calendar />, color: 'indigo' },
          ].map((stat, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-white/80 backdrop-blur-md p-6 md:p-8 lg:p-10 rounded-3xl md:rounded-[2.5rem] border border-white flex items-center justify-between group hover:-translate-y-1 transition-all shadow-sm"
            >
              <div>
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 md:mb-3">{stat.label}</p>
                <p className="text-2xl md:text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter">{stat.value}</p>
              </div>
              <div className={`w-10 h-10 md:w-12 lg:w-14 md:h-12 lg:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg text-[#0284C7] group-hover:scale-110 transition-transform`}>
                {React.cloneElement(stat.icon as React.ReactElement, { size: 24 })}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-white rounded-[3rem] border border-slate-100 shadow-soft overflow-hidden">
              <div className="p-6 md:p-10 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                <div>
                  <h3 className="text-lg md:text-xl font-black text-slate-900 tracking-tight">Active Extraction Feed</h3>
                  <p className="text-[10px] md:text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-[0.15em]">SDR Intelligence Cluster</p>
                </div>
                <div className="flex gap-2">
                   <div className="w-8 h-8 md:w-10 md:h-10 bg-white border border-slate-100 rounded-lg flex items-center justify-center text-slate-400 cursor-pointer hover:bg-slate-50 transition-colors"><Search size={14} /></div>
                   <div className="hidden sm:flex w-8 h-8 md:w-10 md:h-10 bg-white border border-slate-100 rounded-lg flex items-center justify-center text-slate-400 cursor-pointer hover:bg-slate-50 transition-colors"><Settings size={14} /></div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50/50">
                    <tr>
                      <th className="px-6 md:px-10 py-4 md:py-6 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">Agent Architecture</th>
                      <th className="hidden sm:table-cell px-6 md:px-10 py-4 md:py-6 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">Connection Status</th>
                      <th className="hidden lg:table-cell px-6 md:px-10 py-4 md:py-6 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">Yield Sentiment</th>
                      <th className="px-6 md:px-10 py-4 md:py-6 text-right text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {agents.map((agent, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="px-6 md:px-10 py-6 md:py-8">
                          <div className="flex items-center gap-3 md:gap-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-sky-50 to-white text-[#0284C7] flex items-center justify-center font-black text-xs md:text-sm shadow-sm border border-sky-100 shrink-0">
                              {agent.name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-xs md:text-sm font-black text-slate-900">{agent.name}</p>
                              <div className="flex flex-col sm:hidden mt-0.5">
                                 <span className={`text-[8px] font-black uppercase tracking-widest ${
                                   agent.status === 'In Call' ? 'text-emerald-500' : 
                                   agent.status === 'Ringing' ? 'text-sky-500' : 
                                   agent.status === 'Wrap-Up' ? 'text-indigo-500' :
                                   'text-slate-400'
                                 }`}>
                                    {agent.status} • {formatTime(agent.seconds)}
                                 </span>
                              </div>
                              <p className="hidden sm:block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Enterprise SDR</p>
                            </div>
                          </div>
                        </td>
                        <td className="hidden sm:table-cell px-6 md:px-10 py-6 md:py-8">
                          <div className={`inline-flex items-center justify-between gap-4 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest min-w-[140px] md:min-w-[160px] border ${
                            agent.status === 'In Call' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 
                            agent.status === 'Ringing' ? 'bg-sky-50 text-sky-600 border-sky-100 animate-pulse' : 
                            agent.status === 'Wrap-Up' ? 'bg-indigo-50 text-indigo-600 border-indigo-100' :
                            'bg-slate-50 text-slate-400 border-slate-100'
                          }`}>
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${
                                agent.status === 'In Call' ? 'bg-emerald-500' : 
                                agent.status === 'Ringing' ? 'bg-sky-500' : 
                                agent.status === 'Wrap-Up' ? 'bg-indigo-500' :
                                'bg-slate-300'
                              }`} />
                              {agent.status}
                            </div>
                            <span className="font-mono text-[10px] md:text-xs opacity-70">{formatTime(agent.seconds)}</span>
                          </div>
                        </td>
                        <td className="hidden lg:table-cell px-6 md:px-10 py-6 md:py-8">
                          <div className="space-y-2">
                             <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                <span>{agent.sentiment}</span>
                                <span>{agent.volume}%</span>
                             </div>
                             <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }} 
                                  animate={{ width: `${agent.volume}%` }} 
                                  className={`h-full ${agent.sentiment.includes('Highly') ? 'bg-emerald-500' : 'bg-[#0284C7]'}`} 
                                />
                             </div>
                          </div>
                        </td>
                        <td className="px-6 md:px-10 py-6 md:py-8 text-right">
                          <button className="p-2 text-slate-300 hover:text-[#0284C7] transition-all"><MoreVertical size={18} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Side Panels */}
          <div className="space-y-12">
            <div className="bg-slate-900 rounded-[3rem] p-6 md:p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                   <h4 className="text-lg font-black tracking-tight">Recent Pipelines</h4>
                   <TrendingUp className="text-emerald-400 w-5 h-5" />
                </div>
                <div className="space-y-6">
                  {[
                    { company: 'Acme Digital', value: 'Booked', time: '2m ago' },
                    { company: 'Global SaaS', value: 'Qualified', time: '14m ago' },
                    { company: 'Nexus Fin', value: 'Decision Made', time: '28m ago' },
                  ].map((win, i) => (
                    <motion.div 
                      key={i}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex items-center justify-between p-5 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer group/win"
                    >
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white font-black text-xs">
                            {win.company.charAt(0)}
                         </div>
                         <div>
                            <p className="text-sm font-black text-white">{win.company}</p>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{win.time}</p>
                         </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-[9px] font-black uppercase tracking-widest">
                           {win.value}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284C7]/20 blur-[120px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            </div>

            <div className="glass p-6 md:p-10 rounded-[3rem] border-slate-200">
               <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8 underline underline-offset-8 decoration-[#0284C7]">Cluster Performance</h4>
               <div className="space-y-10">
                 {[
                   { label: 'Uptime Integrity', value: '100%', color: 'emerald' },
                   { label: 'Detection Accuracy', value: '98.4%', color: 'sky' },
                   { label: 'Mean Response', value: '12ms', color: 'indigo' },
                 ].map((stat, i) => (
                   <div key={i} className="space-y-3">
                     <div className="flex items-center justify-between">
                       <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                       <span className="text-xs font-black text-slate-900">{stat.value}</span>
                     </div>
                     <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        className={`h-full bg-${stat.color}-500/60 shadow-[0_0_10px_rgba(2,132,199,0.3)]`} 
                       />
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- WHATSAPP SUPPORT BUTTON ---
const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/your-number-here" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-10 right-10 z-[100] flex items-center gap-3 group"
    >
      <div className="absolute inset-0 bg-[#25D366] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse" />
      
      <div className="hidden md:flex flex-col items-end pointer-events-none opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
        <div className="bg-white px-4 py-2 rounded-2xl shadow-xl border border-slate-100 text-[11px] font-black uppercase tracking-widest text-slate-900 mb-2">
          Chat with Support
        </div>
      </div>

      <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl shadow-[#25D366]/40 relative overflow-hidden">
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <motion.div 
          animate={{ x: [-100, 200] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
          className="absolute inset-0 bg-white/20 -skew-x-12 translate-x-[-100%]"
        />
      </div>
    </motion.a>
  );
};

export default function LightLandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState<'site' | 'dashboard'>('site');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Nav onBookClick={openModal} setView={setView} currentView={view} />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
      <WhatsAppButton />

      <AnimatePresence mode="wait">
        {view === 'site' ? (
          <motion.div
            key="site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
                {/* Hero Section */}
            <section id="home" className="relative pt-40 md:pt-64 pb-20 md:pb-32 px-6 overflow-hidden min-h-screen flex items-center">
              <HeroBackground />
              
              {/* Image-accurate floating icons */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
                {/* Left Side */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute left-[8%] top-[35%] flex flex-col gap-12"
                >
                  <motion.div 
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 rounded-full bg-white shadow-xl border border-slate-50 flex items-center justify-center text-slate-800 relative group"
                  >
                    <Clock size={28} />
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-sky-100 rounded-full flex items-center justify-center">
                       <ArrowRight size={10} className="-rotate-45" />
                    </div>
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, 15, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="w-16 h-16 rounded-full bg-white shadow-xl border border-slate-50 flex items-center justify-center text-slate-800 relative"
                  >
                    <div className="absolute -left-8 flex gap-1 opacity-20">
                       <div className="w-1 h-8 bg-sky-400 rounded-full" />
                       <div className="w-1 h-5 bg-sky-400 rounded-full mt-1.5" />
                    </div>
                    <CheckCircle2 size={28} />
                    <div className="absolute -right-8 flex gap-1 opacity-20">
                       <div className="w-1 h-5 bg-sky-400 rounded-full mt-1.5" />
                       <div className="w-1 h-8 bg-sky-400 rounded-full" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right Side Icons */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="absolute right-[12%] top-[30%] flex flex-col gap-24 items-end"
                >
                   {/* Bar Chart Icon */}
                   <motion.div 
                    animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                   >
                     <div className="w-20 h-20 bg-white rounded-3xl shadow-2xl border border-slate-100 flex items-center justify-center">
                        <TrendingUp size={40} className="text-[#0284C7]" />
                     </div>
                     <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -top-4 -right-4 w-12 h-12 bg-sky-100 rounded-full -z-10"
                     />
                   </motion.div>

                   {/* Handshake/Shield Icon */}
                   <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="w-20 h-20 bg-white rounded-3xl shadow-2xl border border-slate-100 flex items-center justify-center"
                   >
                      <Users size={40} className="text-sky-400" />
                   </motion.div>
                </motion.div>

                {/* Mini Dashboard Card (Bottom Right) */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute right-[5%] bottom-[15%] w-80 glass p-6 rounded-[2rem] border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] hidden xl:block"
                >
                  <div className="flex justify-between items-center mb-6">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Call Volume</p>
                      <p className="text-xl font-black text-slate-900">1,14k</p>
                    </div>
                    <div className="space-y-1 text-right">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Meetings Booked</p>
                      <p className="text-xl font-black text-sky-500">338</p>
                    </div>
                  </div>
                  <div className="flex items-end gap-2 h-20">
                    {[40, 70, 45, 90, 65, 80].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 1.5 + (i * 0.1), duration: 0.8 }}
                        className="flex-1 bg-sky-400/20 rounded-t-lg relative group overflow-hidden"
                      >
                         <div className="absolute inset-0 bg-[#0284C7] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[9px] font-black text-slate-600">LIVE FEED ACTIVE</span>
                     </div>
                     <span className="text-[9px] font-bold text-slate-400 uppercase">Feb - May</span>
                  </div>
                </motion.div>
              </div>

              <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="flex flex-col items-center text-center space-y-10">
                   {/* Top Badge */}
                   <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="px-6 py-2.5 bg-white/50 backdrop-blur-md border border-white rounded-full flex items-center gap-4 shadow-sm select-none"
                   >
                     <div className="flex -space-x-1.5">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-slate-100">
                             <img src={`https://api.dicebear.com/7.x/open-peeps/svg?seed=${i + 123}`} alt="SDR" />
                          </div>
                        ))}
                     </div>
                     <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                     <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-600">512 ELITE SDRs LIVE NOW</span>
                     <div className="w-1 w-1 bg-slate-200 rounded-full" />
                     <span className="text-sky-500"><Monitor size={14} className="animate-spin-slow" /></span>
                   </motion.div>

                   {/* Main Headline */}
                   <motion.div 
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8 }}
                     className="space-y-4 md:space-y-6"
                   >
                     <h1 className="text-4xl sm:text-6xl lg:text-[82px] font-black tracking-tighter leading-[0.95] text-slate-900">
                        No More <span className="text-[#0284C7]">Dead Leads.</span> <br />
                        Just Pure, Closed-Deal <br />
                        <span className="italic text-slate-800">Revenue on Autopilot.</span>
                     </h1>
                     <p className="max-w-2xl mx-auto text-lg md:text-2xl text-slate-500 font-medium leading-relaxed px-4">
                        Elite SDR orchestration for high-growth B2B firms. We don't book meetings; we secure <span className="text-slate-900 underline decoration-sky-400 decoration-2 md:decoration-4 underline-offset-4">Revenue Nexus</span>.
                     </p>
                   </motion.div>

                   {/* CTA Buttons */}
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.4 }}
                     className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto mt-8 md:mt-12 px-6"
                   >
                     <button 
                       onClick={openModal}
                       className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-7 bg-[#0284C7] text-white rounded-3xl md:rounded-[2.5rem] font-black text-lg md:text-xl tracking-tight shadow-3xl shadow-sky-400/20 hover:bg-sky-600 hover:-translate-y-1 transition-all flex items-center justify-center gap-4 active:scale-95"
                     >
                        START SCALING <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                     </button>
                     <button 
                       onClick={() => setView('dashboard')}
                       className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-7 bg-white text-slate-900 rounded-3xl md:rounded-[2.5rem] font-black text-lg md:text-xl border border-slate-100 shadow-xl shadow-slate-100/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-4 active:scale-95"
                     >
                        <div className="w-3 h-3 bg-sky-500 rounded-full animate-pulse" />
                        LIVE DASHBOARD
                     </button>
                   </motion.div>

                   {/* Bottom Trust Badges */}
                   <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 1 }}
                     className="pt-20 flex flex-wrap justify-center gap-x-16 gap-y-8 select-none"
                   >
                      <div className="flex items-center gap-3 font-black text-[11px] uppercase tracking-[0.2em] text-slate-400 group cursor-default">
                         <div className="p-2 glass rounded-lg group-hover:text-sky-500 transition-colors"><ShieldCheck size={18} /></div>
                         SECURE V6
                      </div>
                      <div className="flex items-center gap-3 font-black text-[11px] uppercase tracking-[0.2em] text-slate-400 group cursor-default">
                         <div className="p-2 glass rounded-lg group-hover:text-sky-500 transition-colors"><Globe size={18} /></div>
                         GLOBAL OPS
                      </div>
                      <div className="flex items-center gap-3 font-black text-[11px] uppercase tracking-[0.2em] text-slate-400 group cursor-default">
                         <div className="p-2 glass rounded-lg group-hover:text-sky-500 transition-colors"><Activity size={18} /></div>
                         NO LATENCY
                      </div>
                      <div className="flex items-center gap-3 font-black text-[11px] uppercase tracking-[0.2em] text-slate-400 group cursor-default">
                         <div className="p-2 glass rounded-lg group-hover:text-sky-500 transition-colors"><Monitor size={18} /></div>
                         100% TRANSPARENT
                      </div>
                   </motion.div>
                </div>
              </div>
            </section>

            <LogoMarquee />

            {/* Interactive Services Section */}
            <section id="services" className="py-32 px-6 bg-slate-50/50 relative overflow-hidden">
               <SectionBackgroundIcons />
               <div className="max-w-7xl mx-auto relative z-10">
                  <div className="text-center mb-20">
                     <h2 className="text-4xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6">
                        Surgical <span className="text-[#0284C7]">Solutions.</span>
                     </h2>
                     <p className="text-xl text-slate-500 font-medium italic">Elite outbound services engineered for high-ticket growth.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                     {/* Card 1: Appointment Setting */}
                     <motion.div 
                        whileHover={{ y: -10 }}
                        className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-soft hover:shadow-sky transition-all duration-500 group flex flex-col items-center text-center"
                     >
                        <div className="w-24 h-24 bg-sky-50 rounded-[2rem] flex items-center justify-center text-[#0284C7] mb-10 relative overflow-hidden">
                           <motion.div
                              animate={{ 
                                 rotate: [-10, 10, -10, 10, 0],
                                 scale: [1, 1.05, 1, 1.05, 1]
                              }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                           >
                              <Headset size={48} strokeWidth={1.5} />
                           </motion.div>
                           <div className="absolute inset-0 bg-sky-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h3 className="text-2xl font-black tracking-tight mb-4 text-slate-900">Appointment Setting</h3>
                        <p className="text-slate-500 font-medium leading-relaxed">
                           We deploy elite SDRs to bypass gatekeepers and lock in direct meetings with high-intent decision makers.
                        </p>
                     </motion.div>

                     {/* Card 2: Lead Generation */}
                     <motion.div 
                        whileHover={{ y: -10 }}
                        className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-soft hover:shadow-sky transition-all duration-500 group flex flex-col items-center text-center"
                     >
                        <div className="w-24 h-24 bg-sky-50 rounded-[2rem] flex items-center justify-center text-[#0284C7] mb-10 relative">
                           <motion.div
                              animate={{ 
                                 scale: [1, 1.2, 1],
                                 opacity: [1, 0.8, 1]
                              }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                              className="relative z-10"
                           >
                              <Target size={48} strokeWidth={1.5} />
                           </motion.div>
                           <motion.div 
                              animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                              className="absolute w-12 h-12 border-2 border-[#0284C7] rounded-full"
                           />
                           <motion.div 
                              animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                              className="absolute w-12 h-12 border border-[#0284C7] rounded-full"
                           />
                        </div>
                        <h3 className="text-2xl font-black tracking-tight mb-4 text-slate-900">Lead Generation</h3>
                        <p className="text-slate-500 font-medium leading-relaxed">
                           Proprietary data mining and ICP synchronization to target the highest-value prospects in your industry.
                        </p>
                     </motion.div>

                     {/* Card 3: Inbound Follow-up */}
                     <motion.div 
                        whileHover={{ y: -10 }}
                        className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-soft hover:shadow-sky transition-all duration-500 group flex flex-col items-center text-center"
                     >
                        <div className="w-24 h-24 bg-sky-50 rounded-[2rem] flex items-center justify-center text-[#0284C7] mb-10 relative">
                           <motion.div
                              animate={{ 
                                 rotate: 360
                              }}
                              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                           >
                              <Clock size={48} strokeWidth={1.5} />
                           </motion.div>
                           <motion.div 
                              animate={{ opacity: [0, 1, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute top-4 right-4 w-3 h-3 bg-red-400 rounded-full border-2 border-white shadow-sm"
                           />
                        </div>
                        <h3 className="text-2xl font-black tracking-tight mb-4 text-slate-900">Inbound Follow-up</h3>
                        <p className="text-slate-500 font-medium leading-relaxed">
                           Don't let hot leads freeze. We react within seconds to inbound signals, maintaining momentum to close the gap.
                        </p>
                     </motion.div>
                  </div>
               </div>
            </section>

            {/* NEW: Cold Calling Engine Section */}
            <section className="py-32 px-6 bg-white overflow-hidden relative">
               <AmbientSmoke position="center" variant="blue" />
               <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/30 -skew-x-12 translate-x-1/4 -z-10" />
               <div className="max-w-7xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-20 items-center">
                     <div>
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-sky-50 border border-sky-100 rounded-full text-[#0284C7] text-[10px] font-black uppercase tracking-widest mb-8">
                           <Zap size={14} className="animate-pulse" />
                           Proprietary Infrastructure
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[0.95] mb-10">
                           The Cold Calling <br />
                           <span className="text-[#0284C7]">Execution Engine.</span>
                        </h2>
                        <div className="space-y-8">
                           {[
                              { 
                                 icon: <Layers size={24} />, 
                                 title: "Multi-Channel Synthesis", 
                                 desc: "We don't just call. We orbit prospects with email and LinkedIn touches to warm up the cold dial." 
                              },
                              { 
                                 icon: <Mic size={24} />, 
                                 title: "Acoustic Excellence", 
                                 desc: "Studio-grade audio hardware and latency-zero fiber lines. Every word is heard with crystal clarity." 
                              },
                              { 
                                 icon: <Shield size={24} />, 
                                 title: "Compliance Shield", 
                                 desc: "Full TCPA and GDPR adherence with automated scrubbing against localized DNC registries." 
                              }
                           ].map((feature, i) => (
                              <motion.div 
                                 key={i}
                                 initial={{ opacity: 0, x: -20 }}
                                 whileInView={{ opacity: 1, x: 0 }}
                                 transition={{ delay: i * 0.1 }}
                                 className="flex gap-6 group hover:translate-x-2 transition-transform"
                              >
                                 <div className="shrink-0 w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#0284C7] group-hover:border-[#0284C7]/30 group-hover:bg-sky-50 transition-all">
                                    {feature.icon}
                                 </div>
                                 <div>
                                    <h4 className="text-xl font-black text-slate-900 mb-2">{feature.title}</h4>
                                    <p className="text-slate-500 font-medium leading-relaxed max-w-sm">{feature.desc}</p>
                                 </div>
                              </motion.div>
                           ))}
                        </div>
                     </div>

                     <div className="relative">
                        <div className="grid grid-cols-2 gap-6 relative z-10">
                           <div className="space-y-6 pt-12">
                              <div className="glass p-8 rounded-[2.5rem] border-sky-100 shadow-soft">
                                 <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-[#0284C7] mb-6">
                                    <TrendingUp size={24} />
                                 </div>
                                 <p className="text-3xl font-black text-slate-900 mb-2">98%</p>
                                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Connection Stability</p>
                              </div>
                              <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                                 <div className="absolute inset-0 bg-grid-white opacity-10" />
                                 <div className="relative z-10">
                                    <div className="w-12 h-12 bg-[#0284C7] rounded-xl flex items-center justify-center text-white mb-6">
                                       <MessageSquare size={24} />
                                    </div>
                                    <p className="text-3xl font-black text-white mb-2">Real-time</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Live Call Monitoring</p>
                                 </div>
                              </div>
                           </div>
                           <div className="space-y-6">
                              <div className="bg-[#0284C7] p-8 rounded-[2.5rem] shadow-xl text-white">
                                 <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6">
                                    <PhoneIncoming size={24} />
                                 </div>
                                 <p className="text-3xl font-black mb-2">450+</p>
                                 <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Avg. Dials Daily / SDR</p>
                              </div>
                              <div className="glass p-8 rounded-[2.5rem] border-slate-100 shadow-soft">
                                 <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 mb-6">
                                    <Target size={24} />
                                 </div>
                                 <p className="text-3xl font-black text-slate-900 mb-2">100%</p>
                                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Verified ICP Only</p>
                              </div>
                           </div>
                        </div>
                        {/* Decorative background elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-100/50 blur-[120px] -z-10 rounded-full" />
                     </div>
                  </div>
               </div>
            </section>

            <ROICalculator />
            <NetworkInsightsSection />

            {/* Why Us / Trust Section */}
            <section id="why-us" className="py-20 md:py-32 px-6 relative overflow-hidden bg-slate-900">
               <SectionBackgroundIcons variant="dark" />
               <div className="absolute inset-0 bg-grid-white opacity-5 -z-10" />
               <div className="max-w-7xl mx-auto relative z-10">
                  <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                     <div className="space-y-10">
                        <div className="inline-block px-4 py-1 bg-[#0284C7]/20 border border-[#0284C7]/30 rounded-full text-sky-400 text-[10px] font-black uppercase tracking-widest">The Stratos Advantage</div>
                        <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-white leading-[0.95]">
                           Engineered for <br />
                           <span className="text-[#0284C7]">Elite Outbound.</span>
                        </h2>
                        <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl">
                           Most agencies fail because they prioritize volume over intelligence. We prioritize surgical precision and behavioral psychology.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-8">
                           {[
                             { title: "Native SDRs", desc: "Native speakers trained in consultative selling." },
                             { title: "No Tech Debt", desc: "We use our proprietary dialers for maximum parity." },
                             { title: "Zero Lag", desc: "Real-time sync to your CRM for instant action." },
                             { title: "Behavioral AI", desc: "Sentiment analysis on every live call." },
                           ].map((item, i) => (
                             <div key={i} className="space-y-3">
                                <h4 className="text-lg font-black text-white flex items-center gap-3">
                                   <div className="w-2 h-2 bg-[#0284C7] rounded-full" /> {item.title}
                                </h4>
                                <p className="text-sm font-medium text-slate-500 leading-relaxed">{item.desc}</p>
                             </div>
                           ))}
                        </div>
                     </div>
                     <div className="relative">
                        <div className="relative z-10 glass border-white/10 rounded-[3rem] p-4 group overflow-hidden">
                           <img 
                             src="/src/assets/images/clean_bright_office_1779187817163.png" 
                             alt="Professional Ops" 
                             className="rounded-[2.5rem] w-full aspect-square object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000 scale-[1.02]"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent pointer-events-none" />
                           <div className="absolute bottom-12 left-12 right-12 z-20">
                              <p className="text-sm font-black text-[#0284C7] uppercase tracking-[0.2em] mb-4">Command Center</p>
                              <p className="text-2xl font-black text-white tracking-tight">Our agents operate from high-security, high-tech hubs optimized for performance.</p>
                           </div>
                        </div>
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#0284C7]/20 blur-[150px] rounded-full pointer-events-none" />
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />
                     </div>
                  </div>
               </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-32 px-6 bg-white relative overflow-hidden">
               <SectionBackgroundIcons />
               <div className="max-w-7xl mx-auto text-center relative z-10">
                <div className="max-w-2xl mx-auto mb-20">
                  <h2 className="text-4xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6">Invest in <span className="text-[#0284C7]">Revenue.</span></h2>
                  <p className="text-xl text-slate-500 font-medium">Transparent, ROI-mapped pricing for growing firms.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto text-left">
                   {[
                     { title: "Foundation", price: "2.4", features: ["20 Verified Meetings", "Shared Alpha SDR", "Market Analysis", "Live Dashboard"] },
                     { title: "Momentum", price: "4.9", highlighted: true, features: ["50 Verified Meetings", "2 Dedicated SDRs", "ICP Data Mining", "Full CRM Sync", "Monthly Strategy"] },
                     { title: "Dominance", price: "Custom", features: ["Unlimited Pipeline", "Dedicated SDR Cluster", "Priority Dial Access", "White-glove Ops"] },
                   ].map((plan, i) => (
                     <div key={i} className={`p-12 rounded-[3.5rem] border transition-all duration-500 relative group overflow-hidden ${plan.highlighted ? 'bg-slate-900 border-slate-800 scale-105 z-10 text-white' : 'bg-white border-slate-100 hover:border-[#0284C7] hover:shadow-sky'}`}>
                        {plan.highlighted && <div className="absolute top-0 right-0 w-32 h-32 bg-[#0284C7] blur-[80px] rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />}
                        <h4 className={`text-xs font-black uppercase tracking-[0.2em] mb-6 ${plan.highlighted ? 'text-[#0284C7]' : 'text-slate-400'}`}>{plan.title}</h4>
                        <div className="flex items-baseline gap-2 mb-10">
                           <span className="text-xs font-black self-start mt-2">$</span>
                           <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                           {plan.price !== 'Custom' && <span className="text-sm font-bold opacity-60">k/mo</span>}
                        </div>
                        <ul className="space-y-6 mb-12 relative z-10">
                          {plan.features.map((f, j) => (
                            <li key={j} className="flex items-center gap-4 text-sm font-bold opacity-80">
                               <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? 'text-emerald-400' : 'text-[#0284C7]'}`} />
                               {f}
                            </li>
                          ))}
                        </ul>
                        <button 
                          onClick={openModal}
                          className={`w-full py-5 rounded-[2rem] font-black tracking-tight text-sm transition-all active:scale-95 relative z-10 ${plan.highlighted ? 'bg-[#0284C7] text-white hover:bg-sky-700 shadow-2xl shadow-sky-900/40' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                        >
                          ACTIVATE {plan.title.toUpperCase()}
                        </button>
                     </div>
                   ))}
                </div>
              </div>
            </section>

            <TestimonialsSection />
            <FAQSection />

            {/* Final CTA Section */}
            <section className="py-32 relative overflow-hidden bg-slate-950">
               <div className="absolute inset-0 bg-gradient-to-br from-[#0284C7] to-blue-900 -z-10 opacity-30" />
               <div className="absolute inset-0 bg-grid-white -z-10 opacity-5" />
               
               <div className="absolute top-0 left-0 w-full h-full bg-mesh -z-20 opacity-[0.03]" />

               <div className="absolute top-[20%] left-[10%] opacity-10 animate-float-slow">
            <Globe size={120} className="text-white" />
          </div>
          <div className="absolute bottom-[20%] right-[10%] opacity-10 animate-float-delayed">
            <Zap size={140} className="text-[#0284C7]" />
          </div>
          <div className="absolute top-[40%] right-[15%] opacity-5 animate-pulse">
            <Target size={80} className="text-white" />
          </div>
          <div className="absolute bottom-[30%] left-[15%] opacity-5 animate-float">
            <Calendar size={60} className="text-white" />
          </div>

          <div className="max-w-7xl mx-auto px-6 text-center text-white relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                  >
                    <span className="inline-flex items-center gap-3 px-5 py-2 glass border-white/10 rounded-full text-[10px] font-black tracking-[0.2em] mb-12 text-[#0284C7] uppercase">
                       <ShieldCheck size={14} className="animate-pulse" />
                       Nexus Connection Established
                    </span>
                    <h2 className="text-5xl lg:text-[85px] font-black tracking-tighter mb-10 leading-[0.9] text-white">
                      Your Calendar is <br />
                      <span className="text-[#0284C7] italic">Waiting to be Flooded.</span>
                    </h2>
                    
                    <p className="text-2xl text-slate-400 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                      Scale your B2B revenue by 4x without hiring a single internal SDR. Guaranteed quality, 100% transparency.
                    </p>
 
                    <div className="flex flex-col items-center gap-10">
                       <button 
                         onClick={openModal}
                         className="w-full md:w-[440px] h-[80px] bg-white text-[#0284C7] rounded-[2rem] font-black text-[20px] tracking-tighter shadow-[0_30px_60px_-15px_rgba(255,255,255,0.1)] hover:scale-[1.02] active:scale-95 transition-all group flex items-center justify-center gap-4"
                       >
                         BOOK YOUR STRATEGY CALL <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                       </button>

                       <div className="flex flex-wrap justify-center gap-12 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                          <div className="flex items-center gap-3 group">
                             <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#0284C7]/20 transition-all">
                                <Zap className="text-white w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                             </div>
                             Zero Setup
                          </div>
                          <div className="flex items-center gap-3 group">
                             <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#0284C7]/20 transition-all">
                                <Activity className="text-white w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                             </div>
                             Performance Linked
                          </div>
                          <div className="flex items-center gap-3 group">
                             <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#0284C7]/20 transition-all">
                                <Users className="text-white w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                             </div>
                             Elite SDRs
                          </div>
                       </div>
                    </div>
                  </motion.div>
               </div>
            </section>

            {/* Footer */}
            <footer className="bg-white pt-32 pb-12 overflow-hidden border-t border-slate-100 relative">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 -z-10" />
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-32 border border-slate-100 rounded-[3rem] overflow-hidden bg-white shadow-sm">
                  <div className="p-12 lg:p-16 space-y-10 border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50/30">
                    <div className="flex flex-col gap-6">
                      <img 
                        src={xiaoLogo} 
                        alt="Xiao International" 
                        className="h-12 w-auto object-contain self-start" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black tracking-[0.3em] text-[#0284C7] uppercase">Foundry Tier</span>
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed font-bold max-w-xs">
                       Engineering high-ticket revenue engines for the elite. We own the outbound stack so you can own the market.
                    </p>
                    <div className="flex items-center gap-4">
                      {[<Linkedin /> , <Twitter />, <Facebook />, <Youtube />].map((icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0284C7] hover:border-[#0284C7] transition-all duration-300 shadow-sm hover:scale-110">
                          {React.cloneElement(icon as React.ReactElement, { size: 18 })}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-slate-100 relative group overflow-hidden">
                     <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
                        <Settings size={120} />
                     </div>
                     <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-slate-400 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                        Operations
                     </h4>
                     <ul className="space-y-6 relative z-10">
                        {[
                          { label: "SaaS Cluster", icon: <Globe size={14} /> },
                          { label: "FinTech Node", icon: <ShieldCheck size={14} /> },
                          { label: "GovTech Proxy", icon: <Target size={14} /> },
                          { label: "Scale Agencies", icon: <Zap size={14} /> }
                        ].map(item => (
                          <li key={item.label}>
                            <a href="#" className="group flex items-center gap-3 text-slate-600 hover:text-[#0284C7] transition-all text-xs font-black uppercase tracking-widest">
                              <span className="text-slate-300 group-hover:text-[#0284C7] transition-colors">{item.icon}</span>
                              {item.label}
                            </a>
                          </li>
                        ))}
                     </ul>
                  </div>

                  <div className="p-12 lg:p-16 border-b md:border-b-0 md:border-r border-slate-100 relative group overflow-hidden">
                     <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
                        <Mail size={120} />
                     </div>
                     <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-slate-400 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                        Foundation
                     </h4>
                     <ul className="space-y-6 relative z-10">
                        {[
                          { label: "Our Mission", icon: <TrendingUp size={14} /> },
                          { label: "Intelligence", icon: <Search size={14} /> },
                          { label: "Case Vault", icon: <Calendar size={14} /> },
                          { label: "Contact HQ", icon: <Mail size={14} /> }
                        ].map(item => (
                          <li key={item.label}>
                            <a href="#" className="group flex items-center gap-3 text-slate-600 hover:text-[#0284C7] transition-all text-xs font-black uppercase tracking-widest">
                              <span className="text-slate-300 group-hover:text-[#0284C7] transition-colors">{item.icon}</span>
                              {item.label}
                            </a>
                          </li>
                        ))}
                     </ul>
                  </div>

                  <div className="p-12 lg:p-16 bg-[#0284C7]/[0.02]">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-slate-400 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-pulse" />
                        Nexus Feed
                    </h4>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-relaxed mb-8">Synchronize with 5,000+ founders receiving weekly outbound intelligence payload.</p>
                    <div className="flex flex-col gap-3">
                       <input 
                         type="email" 
                         placeholder="IDENTIFY EMAIL" 
                         className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 text-[10px] font-black tracking-widest focus:outline-none focus:border-[#0284C7] focus:ring-4 focus:ring-sky-100/50 transition-all shadow-sm" 
                       />
                       <button className="w-full bg-[#0284C7] text-white py-4 rounded-2xl hover:bg-sky-700 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-sky-500/20 font-black text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-3">
                         AUTHENTICATE <Send size={14} />
                       </button>
                    </div>
                  </div>
                </div>

                <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400">
                  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] font-mono whitespace-nowrap">© 2026 STRATOS OUTBOUND STACK</p>
                    <div className="hidden md:flex h-4 w-px bg-slate-200" />
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] font-mono max-w-xs text-center md:text-left opacity-60">DISTRIBUTED AUTONOMOUS REVENUE ORCHESTRATION PROTOCOL V1.0.4</p>
                  </div>
                  
                  <div className="flex items-center gap-8 text-[9px] font-black tracking-[0.2em] uppercase">
                    <div className="flex items-center gap-3 px-4 py-2 glass border-slate-100 rounded-full">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                      <span>SECURE OPS ONLINE</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-help">
                      <Activity size={12} />
                      <span>PING: 14MS</span>
                    </div>
                  </div>
                </div>
              </div>
            </footer>

          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -10 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <DashboardContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
