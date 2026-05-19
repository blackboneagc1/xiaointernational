/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PhoneCall, 
  Target, 
  FileText, 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Plus, 
  Minus,
  Briefcase,
  Users,
  Clock,
  ChevronDown,
  Play,
  Sun
} from 'lucide-react';
import Dashboard from './pages/Dashboard';
import LightDashboard from './pages/LightDashboard';
import LightLandingPage from './pages/LightLandingPage';
import BookingModal from './components/BookingModal';

// Hero Image: /src/assets/images/hero_sales_desk_1779187010729.png
// Footer Image: /src/assets/images/executive_meeting_1779187032382.png

interface FAQItemProps {
  question: string;
  answer: string;
  key?: number | string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-dark-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-gold transition-colors duration-300"
      >
        <span className="text-xl font-medium tracking-tight pr-8">{question}</span>
        {isOpen ? <Minus className="shrink-0 w-5 h-5 text-gold" /> : <Plus className="shrink-0 w-5 h-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-neutral-400 leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DarkLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const services = [
    {
      title: "Cold Calling & Appointment Setting",
      description: "We don't just 'dial.' We bridge the gap between cold prospects and closed deals by booking qualified meetings directly into your calendar.",
      icon: <PhoneCall className="w-8 h-8" />,
    },
    {
      title: "Lead Generation & List Building",
      description: "Stop wasting time on bad data. We hunt down high-intent B2B prospects and build lists optimized for conversion, not just volume.",
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Inbound Follow-Ups",
      description: "Speed to lead is everything. We reach out to your inbound inquiries within minutes, ensuring your marketing dollars never go to waste.",
      icon: <Clock className="w-8 h-8" />,
    },
    {
      title: "Sales Script Optimization",
      description: "Your pitch is your weapon. We dissect your current approach and engineer battle-tested scripts that crush objections before they're even spoken.",
      icon: <FileText className="w-8 h-8" />,
    },
  ];

  const usps = [
    {
      title: "100% Transparent Reporting",
      description: "Every dial, every recording, every outcome. Total visibility into your outbound operations.",
      icon: <BarChart3 className="w-6 h-6 text-gold" />,
    },
    {
      title: "Battle-Tested Scripts",
      description: "We use psychologically proven frameworks designed to get 'Yes' from the most stubborn gatekeepers.",
      icon: <ShieldCheck className="w-6 h-6 text-gold" />,
    },
    {
      title: "Zero Long-Term Contracts",
      description: "We eat what we kill. If we don't perform, you don't stay. We earn our keep every single month.",
      icon: <Zap className="w-6 h-6 text-gold" />,
    },
  ];

  const faqs = [
    {
      question: "How do you handle gatekeepers?",
      answer: "We don't try to 'bypass' them; we professionally enroll them. Our callers are trained in high-level executive communication. We treat gatekeepers as allies, gaining the internal clearance needed to land the decision-maker."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We are B2B specialists. If you sell a high-ticket service or complex software (SaaS, Consulting, Logistics, Manufacturing) that requires a human conversation to close, we are your powerhouse."
    },
    {
      question: "How fast can we expect results?",
      answer: "We typically launch within 7-10 business days after the kickoff call. You can expect your first qualified appointments within the first 48 hours of dialing."
    },
    {
      question: "Who are the callers?",
      answer: "We do not use low-cost overseas call centers. Our team consists of native English speakers with deep backgrounds in professional B2B sales. They speak 'Executive' natively."
    },
    {
      question: "Do you use our CRM or yours?",
      answer: "Whatever scales faster. We can work directly inside your HubSpot/Salesforce environment or use our own stack and push qualified meetings to you via automated integration."
    }
  ];

  return (
    <div className="min-h-screen selection:bg-gold selection:text-black">
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold flex items-center justify-center">
              <span className="text-black font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-display font-bold tracking-tight">STRATOS OUTBOUND</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-medium uppercase tracking-widest text-neutral-400">
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#about" className="hover:text-gold transition-colors">Why Us</a>
            <a href="#faq" className="hover:text-gold transition-colors">FAQ</a>
            <Link to="/dashboard" className="flex items-center gap-2 text-gold hover:opacity-80 transition-opacity">
              <Play className="w-4 h-4" /> LIVE DEMO
            </Link>
            <Link to="/dashboard-light" className="flex items-center gap-2 text-white hover:text-sky-400 transition-colors text-[10px] font-bold">
              <Sun className="w-3 h-3" /> LIGHT MODE
            </Link>
            <button 
              onClick={openModal}
              className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
            >
              BOOK A CALL
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/hero_sales_desk_1779187010729.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-linear-to-b from-dark-bg/50 via-dark-bg to-dark-bg" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-4 border border-gold/30 text-gold text-xs font-bold tracking-[0.2em] mb-8 uppercase">
              The Elite Outbound Powerhouse
            </span>
            <h1 className="text-5xl lg:text-8xl font-display font-bold leading-[1.1] mb-8 tracking-tighter">
              Stop Waiting For Leads.<br />
              <span className="text-gradient-gold">Force Your Way In.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg lg:text-xl text-neutral-400 mb-12 leading-relaxed">
              We deploy trained native callers, iron-clad scripts, and dedicated QA to scale your revenue through savage outbound precision. ZERO HASSLE. JUST BOOKED MEETINGS.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={openModal}
                className="group relative px-8 py-5 bg-gold text-black font-bold uppercase tracking-widest text-sm overflow-hidden transition-all duration-300 glow-gold hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  BOOK YOUR DISCOVERY CALL <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <Link to="/dashboard" className="px-8 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all flex items-center gap-3">
                 <Play className="w-4 h-4 text-neon-green" /> DARK TRACKER
              </Link>
              <Link to="/dashboard-light" className="px-8 py-5 bg-white text-slate-900 font-bold uppercase tracking-widest text-sm hover:bg-slate-100 transition-all flex items-center gap-3">
                 <Sun className="w-4 h-4 text-sky-500" /> LIGHT TRACKER
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Pain Point Section */}
      <section className="py-24 border-y border-white/5 bg-dark-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-display font-bold mb-8 tracking-tight">
                In-house sales is a <span className="text-red-500">burn rate</span> disaster.
              </h2>
              <div className="space-y-6">
                {[
                  "Hiring headaches & constant turnover",
                  "Burning cash on unproven SDRs",
                  "Ghost-town pipelines & empty calendars",
                  "Scaling friction that kills momentum"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 bg-red-500/10 border border-red-500/20 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <p className="text-neutral-400 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel p-12 relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-gold text-sm font-bold tracking-widest uppercase mb-6">The Solution</p>
                <h3 className="text-3xl font-display font-bold mb-6">Execution over Excuses.</h3>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                  While your competitors are "optimizing their CRM," we're on the phones closing their leads. Stratos Outbound is the ultimate, stress-free engine for B2B growth. We bring the talent, the tech, and the tactics. You just bring the calendar.
                </p>
                <button 
                  onClick={openModal}
                  className="text-white font-bold text-sm tracking-widest uppercase flex items-center gap-2 hover:text-gold transition-colors group"
                >
                  See how we fix your pipeline <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Users className="w-64 h-64" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-gold text-sm font-bold tracking-widest uppercase block mb-4">Core Offerings</span>
            <h2 className="text-4xl lg:text-6xl font-display font-bold tracking-tight">Built to hunt. <br />Optimized to close.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                onClick={openModal}
                className="glass-panel p-10 flex flex-col items-start gap-6 group hover:border-gold/30 transition-all duration-300 cursor-pointer"
              >
                <div className="text-gold group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold leading-tight">{service.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section id="about" className="py-24 bg-white/2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-16 tracking-tight italic">
              "We're not here to make friends. We're here to make you <span className="text-gold">dominant.</span>"
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {usps.map((usp, i) => (
              <div key={i} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-gold/10 flex items-center justify-center border border-gold/20">
                  {usp.icon}
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-4">{usp.title}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{usp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-20">
            <div>
              <span className="text-gold text-sm font-bold tracking-widest uppercase block mb-4">Intel</span>
              <h2 className="text-4xl lg:text-6xl font-display font-bold tracking-tight mb-8">Objections <br />Crushed.</h2>
              <p className="text-neutral-400 leading-relaxed mb-8 italic font-serif">
                "You have questions. We have revenue."
              </p>
              <div className="p-8 border border-dark-border bg-dark-bg flex items-center gap-6">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center italic font-serif font-bold text-gold">SC</div>
                <div>
                  <p className="text-sm font-bold">Stratos Closer</p>
                  <p className="text-xs text-neutral-500">Lead Senior Partner</p>
                </div>
              </div>
            </div>
            <div className="divide-y divide-dark-border border-t border-dark-border">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Footer */}
      <section className="relative py-32 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/executive_meeting_1779187032382.png" 
            alt="Executive Meeting" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-t from-dark-bg via-transparent to-dark-bg" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-7xl font-display font-bold mb-10 tracking-tight">
            Stop Burning Cash. <br />
            <span className="text-gradient-gold">Start Booking Calls.</span>
          </h2>
          <p className="text-xl text-neutral-400 mb-12">
            Your pipeline is leaking. Every day you wait is a day your competitors gain ground. Let's fix that in 15 minutes.
          </p>
          <button 
            onClick={openModal}
            className="px-12 py-6 bg-gold text-black font-bold uppercase tracking-[0.2em] text-sm hover:scale-105 active:scale-95 transition-all duration-300 font-display glow-gold"
          >
            SECURE YOUR DISCOVERY CALL NOW
          </button>
          
          <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-30 grayscale brightness-200">
            {/* Logo placeholders for social proof */}
            <div className="h-6 w-32 bg-neutral-500 rounded-full" />
            <div className="h-6 w-24 bg-neutral-500 rounded-full" />
            <div className="h-6 w-28 bg-neutral-500 rounded-full" />
            <div className="h-6 w-36 bg-neutral-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Actual Footer */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
            </div>
            <span className="text-sm font-display font-bold tracking-tight opacity-50 uppercase">Stratos Outbound &copy; 2024</span>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-neutral-600">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
            <a href="/contact.html" className="hover:text-gold">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LightLandingPage />} />
        <Route path="/dark" element={<DarkLandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-light" element={<LightDashboard />} />
      </Routes>
    </Router>
  );
}
