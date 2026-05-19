import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, CheckCircle2, Loader2, Mail, User, Building, Phone, ChevronRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<'form' | 'loading' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    volume: '5,000 - 10,000'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('loading');
    
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-md z-[100] cursor-pointer"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[101] p-4 font-sans">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-white rounded-[3rem] shadow-3xl w-full max-w-[540px] overflow-hidden pointer-events-auto relative border border-white/20"
            >
               {/* Background Mesh */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100/50 blur-[100px] -z-10 rounded-full" />

              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {step === 'form' && (
                <div className="p-10 lg:p-14">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-[#0284C7] rounded-2xl flex items-center justify-center shadow-lg shadow-sky-200">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tighter">Secure Your Slot</h3>
                      <p className="text-sm text-slate-500 font-medium">15-min discovery & audit call.</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Identity</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                          <input 
                            required
                            type="text" 
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold focus:outline-none focus:border-[#0284C7] focus:ring-4 focus:ring-sky-500/5 transition-all placeholder:text-slate-300 shadow-sm"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Entity</label>
                        <div className="relative">
                          <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                          <input 
                            required
                            type="text" 
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold focus:outline-none focus:border-[#0284C7] focus:ring-4 focus:ring-sky-500/5 transition-all placeholder:text-slate-300 shadow-sm"
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Direct Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                        <input 
                          required
                          type="email" 
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold focus:outline-none focus:border-[#0284C7] focus:ring-4 focus:ring-sky-500/5 transition-all placeholder:text-slate-300 shadow-sm"
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Mobile Access</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                        <input 
                          required
                          type="tel" 
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold focus:outline-none focus:border-[#0284C7] focus:ring-4 focus:ring-sky-500/5 transition-all placeholder:text-slate-300 shadow-sm"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Anticipated Volume</label>
                      <select 
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:border-[#0284C7] transition-all shadow-sm appearance-none cursor-pointer"
                        value={formData.volume}
                        onChange={(e) => setFormData({...formData, volume: e.target.value})}
                      >
                        <option>1,000 - 5,000 monthly dials</option>
                        <option>5,000 - 10,000 monthly dials</option>
                        <option>10,000 - 50,000 monthly dials</option>
                        <option>50,000+ monthly dials</option>
                      </select>
                    </div>

                    <button 
                      type="submit"
                      className="w-full mt-6 py-6 bg-[#0284C7] text-white rounded-2xl font-black text-sm tracking-widest hover:bg-sky-700 hover:shadow-2xl hover:shadow-sky-500/30 transition-all flex items-center justify-center gap-3 group active:scale-95 shadow-xl"
                    >
                      REQUEST NEXUS AUDIT <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <div className="flex items-center justify-center gap-4 pt-4">
                       <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                       <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
                          Typically response in &lt; 15 mins
                       </p>
                    </div>
                  </form>
                </div>
              )}

              {step === 'loading' && (
                <div className="p-20 py-40 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-sky-50 rounded-3xl flex items-center justify-center mb-10 shadow-inner">
                    <Loader2 className="w-10 h-10 text-[#0284C7] animate-spin" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tighter">Synchronizing Pipeline...</h3>
                  <p className="text-slate-500 font-medium">Securing your position in the audit queue.</p>
                </div>
              )}

              {step === 'success' && (
                <div className="p-16 py-32 flex flex-col items-center justify-center text-center">
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-10 shadow-lg shadow-emerald-100"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                  </motion.div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">Audit Request Locked.</h3>
                  <p className="text-slate-500 font-medium mb-12 max-w-xs mx-auto leading-relaxed">
                    Our Senior Closer is reviewing your <span className="text-[#0284C7] font-black">{formData.company}</span> profile. Stand by for contact.
                  </p>
                  <button 
                    onClick={onClose}
                    className="px-12 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs tracking-[0.2em] hover:bg-slate-800 transition-all uppercase shadow-xl"
                  >
                    CLOSE COMMAND
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
