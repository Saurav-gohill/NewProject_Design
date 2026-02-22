import { Rocket, Timer, ArrowRight, BarChart2, Info, CircleDot, CheckCircle2, Bookmark, RotateCcw, Grid, ArrowLeft, Settings } from 'lucide-react';

export default function AptitudeArena() {
  return (
    <div className="bg-[#0a0f18] text-slate-100 font-sans min-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-[#0a0f18]/80 backdrop-blur-md border-b border-white/5 px-8 py-4 flex items-center justify-between z-30">
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 bg-gradient-to-br from-[#38bdf8] to-primary rounded-xl flex items-center justify-center text-white shadow-[0_0_15px_rgba(56,189,248,0.3)]">
            <Rocket size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">Aptitude Arena</h1>
            <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">Elite Mock Test Series • TCS NQT</p>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-1">Session Ends In</span>
            <div className="flex items-center gap-2 text-[#38bdf8] font-bold text-2xl drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
              <Timer size={20} />
              <span>24:15</span>
            </div>
          </div>
          <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 group cursor-pointer">
            Finish Assessment
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden">
        <section className="flex-1 overflow-y-auto custom-scrollbar p-8 lg:p-16 flex justify-center bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1e293b]/30 via-[#0a0f18] to-[#0a0f18]">
          <div className="max-w-4xl w-full">
            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-10 rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-10">
                <span className="bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20 px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest">Question 12</span>
                <span className="text-slate-500 text-sm font-medium">Quantitative Ability</span>
                <div className="ml-auto flex items-center gap-2 bg-amber-500/10 text-amber-500 px-3 py-1 rounded-lg border border-amber-500/20">
                  <BarChart2 size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Level: Medium</span>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-3xl font-semibold text-white leading-[1.4] tracking-tight">
                  If a train 150m long passes a telegraph pole in 12 seconds, what is the speed of the train in km/hr?
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                  Consider the relative speed of the train with respect to the stationary object (pole). The length of the train serves as the total distance covered.
                </p>
                <div className="bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden p-4 my-10 group">
                  <div className="relative rounded-xl overflow-hidden bg-slate-800/50 h-64 flex items-center justify-center">
                     {/* Placeholder image */}
                     <span className="text-slate-500">Diagram Visualization</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-4 text-slate-500 text-xs italic tracking-wide">
                    <Info size={14} />
                    Fig 1.2: Train motion relative to a static reference point
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="w-[480px] flex flex-col bg-slate-900/40 backdrop-blur-xl border-l border-white/10 p-8 gap-8 overflow-y-auto">
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] flex items-center gap-3">
              <CircleDot size={18} />
              Your Response
            </h3>
            <div className="space-y-3">
              {[
                  { id: 'A', text: '40 km/hr', selected: false },
                  { id: 'B', text: '45 km/hr', selected: true, correct: true },
                  { id: 'C', text: '50 km/hr', selected: false },
                  { id: 'D', text: '55 km/hr', selected: false }
              ].map((option) => (
                <label key={option.id} className="group cursor-pointer block">
                  <input type="radio" name="answer" className="hidden peer" defaultChecked={option.selected} />
                  <div className={`flex items-center gap-4 p-5 rounded-2xl border transition-all ${
                      option.selected 
                        ? 'border-[#38bdf8] bg-[#38bdf8]/10 shadow-[0_0_15px_rgba(56,189,248,0.3)]' 
                        : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10'
                    }`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all ${
                        option.selected 
                            ? 'bg-[#38bdf8] text-white' 
                            : 'border border-white/10 text-slate-500'
                    }`}>{option.id}</div>
                    <span className={`font-medium transition-colors ${option.selected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{option.text}</span>
                    {option.correct && option.selected && <CheckCircle2 className="ml-auto text-[#38bdf8]" size={20} />}
                  </div>
                </label>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/5 text-slate-400 hover:text-amber-500 py-4 rounded-2xl font-bold transition-all cursor-pointer">
                <Bookmark size={18} />
                Flag Question
              </button>
              <button className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 hover:bg-white/5 text-slate-400 hover:text-white py-4 rounded-2xl font-bold transition-all cursor-pointer">
                <RotateCcw size={18} />
                Clear Choice
              </button>
            </div>
          </div>
          
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] flex items-center gap-3">
                <Grid size={18} />
                Navigation
              </h3>
              <span className="text-[10px] font-black bg-white/5 text-slate-300 px-3 py-1 rounded-md border border-white/10">12 / 30</span>
            </div>
            <div className="grid grid-cols-6 gap-3">
              {[...Array(18)].map((_, i) => {
                  const num = i + 1;
                  let status = 'empty';
                  if (num <= 11 && num !== 6) status = 'answered'; // Example logic
                  if (num === 6) status = 'flagged';
                  if (num === 12) status = 'current';
                  
                  // Tailwind classes based on status
                  let classes = "w-10 h-10 rounded-xl font-black text-xs flex items-center justify-center cursor-pointer transition-all ";
                  if (status === 'answered') classes += "bg-[#10b981] text-white border-b-2 border-emerald-700 shadow-[0_0_15px_rgba(16,185,129,0.3)]";
                  else if (status === 'flagged') classes += "bg-amber-500 text-white border-b-2 border-amber-700";
                  else if (status === 'current') classes += "bg-[#38bdf8] text-white ring-4 ring-[#38bdf8]/30 scale-110 shadow-[0_0_15px_rgba(56,189,248,0.3)]";
                  else classes += "bg-white/[0.03] text-slate-500 border border-white/5 hover:border-white/10";

                  return <button key={num} className={classes}>{num < 10 ? `0${num}` : num}</button>;
              })}
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.3)]"></span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Answered</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Flagged</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-white/10"></span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Empty</span>
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0f18] border-t border-white/5 px-10 py-5 flex items-center justify-between z-30">
        <div className="flex gap-4">
          <button className="bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 px-8 py-3 rounded-2xl font-bold transition-all flex items-center gap-3 border border-white/5 cursor-pointer">
            <ArrowLeft size={18} />
            Previous
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white px-10 py-3 rounded-2xl font-bold transition-all flex items-center gap-3 border border-white/10 cursor-pointer">
            Next Question
            <ArrowRight size={18} />
          </button>
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Assessment Progress</span>
              <span className="text-[10px] text-[#38bdf8] font-black tracking-widest">40%</span>
            </div>
            <div className="w-64 h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-[#38bdf8] to-primary w-[40%] h-full rounded-full shadow-[0_0_15px_rgba(56,189,248,0.3)]"></div>
            </div>
          </div>
          <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 cursor-pointer">
            <Settings size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
}
