import { Calendar, CheckCircle2, Flame, TrendingUp, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="space-y-10">
      {/* Top Grid - Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Next Big Event */}
        <div className="md:col-span-1 relative overflow-hidden group border-2 border-slate-800 shadow-[4px_4px_0px_0px_rgba(99,102,241,1)] transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(99,102,241,1)] bg-slate-900 p-6 rounded-2xl">
          <div className="relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Next Big Event</span>
            <div className="mt-4">
              <span className="text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">14</span>
              <span className="text-slate-500 font-bold ml-1">DAYS</span>
            </div>
            <p className="mt-2 text-sm text-primary font-bold">FAANG Interview Drive</p>
          </div>
          <Calendar className="absolute -right-4 -bottom-4 text-slate-800/50 group-hover:text-primary/10 transition-all duration-500" size={120} />
        </div>

        {/* Mastery Progress */}
        <div className="glass-card p-6 rounded-2xl md:col-span-2 flex items-center justify-between border-white/5">
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-400 text-xs font-black uppercase tracking-widest">Mastery Progress</h3>
              <p className="text-3xl font-extrabold text-white mt-1">70.4%</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded-lg border border-emerald-500/20">DSA: 88%</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-lg border border-primary/20">SYSTEMS: 42%</span>
            </div>
          </div>
          <div className="relative w-28 h-28">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-slate-800" cx="56" cy="56" fill="transparent" r="48" stroke="currentColor" strokeWidth="8"></circle>
              <circle className="text-primary" cx="56" cy="56" fill="transparent" r="48" stroke="currentColor" strokeDasharray="301.6" strokeDashoffset="89.4" strokeLinecap="round" strokeWidth="8"></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-black text-white">70%</span>
            </div>
          </div>
        </div>

        {/* Daily Streak */}
        <div className="glass-card p-6 rounded-2xl border-white/5 flex flex-col justify-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <Flame className="text-orange-500" size={24} fill="currentColor" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Daily Streak</span>
              <p className="text-2xl font-black text-white">12 Days</p>
            </div>
          </div>
          <div className="mt-4 flex gap-1.5">
            {[...Array(4)].map((_, i) => (
              <div key={`active-${i}`} className="h-1.5 flex-1 bg-orange-500 rounded-full"></div>
            ))}
            {[...Array(3)].map((_, i) => (
              <div key={`inactive-${i}`} className="h-1.5 flex-1 bg-slate-800 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Submissions */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card rounded-3xl overflow-hidden border-white/5">
            <div className="p-8 flex justify-between items-center border-b border-white/5">
              <div>
                <h3 className="font-bold text-lg text-white">Recent Submissions</h3>
                <p className="text-slate-500 text-sm">Real-time performance metrics</p>
              </div>
              <Link to="/aptitude-arena" className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-xl transition-all uppercase tracking-widest cursor-pointer">Explore All</Link>
            </div>
            <div className="p-2">
              <div className="grid grid-cols-1 divide-y divide-white/5">
                {[
                  { title: "LRU Cache Implementation", category: "Data Structures • Medium", score: "95%", color: "text-emerald-500", bg: "bg-emerald-500/10", barColor: "bg-emerald-500", metric: "O(1)", metricLabel: "Complexity" },
                  { title: "Database Sharding Strategies", category: "System Design • Hard", score: "78%", color: "text-blue-500", bg: "bg-blue-500/10", barColor: "bg-blue-500", metric: "A+", metricLabel: "Score" }
                ].map((item, i) => (
                  <div key={i} className="p-6 flex items-center group hover:bg-white/[0.02] transition-colors rounded-2xl">
                    <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mr-4`}>
                      <CheckCircle2 size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">{item.category}</p>
                    </div>
                    <div className="text-right flex items-center gap-6">
                      <div className="hidden sm:block">
                        <p className="text-xs text-slate-500 font-bold uppercase">{item.metricLabel}</p>
                        <p className="text-sm font-bold text-white">{item.metric}</p>
                      </div>
                      <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full ${item.barColor}`} style={{ width: item.score }}></div>
                      </div>
                      <span className={`text-xs font-black ${item.color.replace('text-', 'text-emerald-400').replace('blue-500', 'blue-400')}`}>{item.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">
          {/* Focus Sessions */}
          <div className="glass-card rounded-3xl p-8 border-white/5">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-white">Focus Sessions</h3>
              <button className="w-8 h-8 flex items-center justify-center bg-primary/20 text-primary rounded-lg hover:bg-primary hover:text-white transition-all cursor-pointer">
                <span className="text-xl leading-none">+</span>
              </button>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 items-start relative pb-6 border-l border-white/10 ml-2 pl-6">
                <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-primary rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                <div className="flex-1">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Today, 18:00</span>
                  <h4 className="text-sm font-bold text-white mt-1">Distributed Systems Review</h4>
                  <p className="text-xs text-slate-500 mt-1">Mentor session with Senior SDE</p>
                </div>
              </div>
              <div className="flex gap-4 items-start relative pb-2 border-l border-transparent ml-2 pl-6">
                <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-slate-700 rounded-full"></div>
                <div className="flex-1">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Oct 26, 14:00</span>
                  <h4 className="text-sm font-bold text-white mt-1">Mock Behavioral Interview</h4>
                  <p className="text-xs text-slate-500 mt-1">HR round simulation</p>
                </div>
              </div>
            </div>
            <Link to="/interview-hub" className="w-full mt-6 py-4 rounded-2xl bg-primary text-white text-xs font-black uppercase tracking-widest hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 block text-center">
              Launch Virtual Room
            </Link>
          </div>

          {/* Pro Access */}
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-black italic mb-2">PRO ACCESS</h3>
              <p className="text-sm text-white/80 mb-6">Unlock exclusive company-specific interview questions and AI-driven feedback.</p>
              <button className="px-6 py-2 bg-white text-primary text-xs font-black rounded-full hover:scale-105 transition-transform cursor-pointer">UPGRADE NOW</button>
            </div>
            <div className="absolute -right-6 -bottom-6 text-white/10 transform rotate-[-15deg] group-hover:rotate-12 transition-transform duration-700">
               {/* Using a lucide icon equivalent or empty div if custom SVGs needed */}
               <TrendingUp size={160} />
            </div>
          </div>
        </div>
      </div>

      {/* Target Modules */}
      <section className="mt-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h3 className="text-2xl font-black text-white">Target Modules</h3>
            <p className="text-slate-500 text-sm mt-1">Curated tracks based on your career interests</p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-xl hover:bg-white/5 text-slate-400 cursor-pointer">
              <span className="text-lg">←</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-xl hover:bg-white/5 text-slate-400 cursor-pointer">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            { title: "Infrastructure Mastery", sub: "AWS, Azure & Google Cloud Ops", duration: "12.5 hrs", level: "ADVANCED", badge: "CLOUD", badges: ["A", "W"] },
            { title: "Financial Systems Eng", sub: "High-frequency Trading Logic", duration: "8.2 hrs", level: "CORE", badge: "FINTECH", badges: ["J"] },
            { title: "Neural Architecture", sub: "Transformers & LLM Fundamentals", duration: "15.0 hrs", level: "SPECIALIST", badge: "AI/ML", badges: [] },
            { title: "UI Performance Opt", sub: "Web Vitals & Browser Engine", duration: "6.4 hrs", level: "CREATIVE", badge: "FRONTEND", badges: [] },
          ].map((item, i) => (
            <div key={i} className="glass-card group p-2 rounded-[32px] border-white/5 hover:border-primary/50 transition-all hover:translate-y-[-4px]">
              <div className="h-40 rounded-[24px] bg-slate-800 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <span className="text-white font-black text-4xl opacity-20 group-hover:opacity-40 transition-opacity">{item.badge}</span>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] font-bold text-white border border-white/10">{item.level}</span>
                  <div className="flex -space-x-2">
                    {item.badges.map((b, idx) => (
                      <div key={idx} className="w-6 h-6 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[8px] font-bold text-white">{b}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-white font-bold group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1">{item.sub}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Duration</span>
                    <span className="text-sm font-bold text-white">{item.duration}</span>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-primary flex items-center justify-center text-white transition-all cursor-pointer">
                    <Play size={20} fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
