import { Rocket, Grid, PlayCircle, Brain, Terminal, Play, Plus, Video, CameraOff, Mic, Settings, ChevronRight, FileText, Flame } from 'lucide-react';

export default function InterviewHub() {
  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen flex font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-20 lg:w-64 border-r border-white/5 bg-slate-950/50 flex flex-col sticky top-0 h-screen z-50">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Rocket className="text-white" size={24} />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white hidden lg:block">PREPHUB</span>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-6">
          <a className="flex items-center gap-4 px-4 py-3 bg-indigo-500/10 text-indigo-400 rounded-xl font-semibold transition-all" href="#">
            <Grid size={20} />
            <span className="hidden lg:block">Browse Hub</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white rounded-xl transition-all" href="#">
            <PlayCircle size={20} />
            <span className="hidden lg:block">My Library</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white rounded-xl transition-all" href="#">
            <Brain size={20} />
            <span className="hidden lg:block">Simulations</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white rounded-xl transition-all" href="#">
            <Terminal size={20} />
            <span className="hidden lg:block">Coding Lab</span>
          </a>
        </nav>
        <div className="p-4 mt-auto border-t border-white/5">
          <div className="flex items-center gap-3 p-2 bg-white/5 rounded-2xl">
            <img alt="Profile" className="w-10 h-10 rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlQN2PUerEXm-0v1FPnfmqDwMcovCvXhDnhYx8IsBMDxyD3-k47fEP8gaL76YFK9_OCOy7zbExBVbd6zZ6e4On2aMovnJy3Q0I17rvPMa9N8HyTNIYMXtX8QPTVF6SUfydYYb7PfQd63ANe9mAtQEJfPgkAkIcsUrfHhnezr3Icr1FghVcnIxxslBKcECXb6SGY0fTwqOH_iTUW16WjsxUWpYd8ZeGf12snBRhhmJkvp0Fb8RVvML0L6iA-1Vmpvq1dWfGGYkd93Q" />
            <div className="flex-1 overflow-hidden hidden lg:block">
              <p className="text-sm font-bold text-white truncate">Alex Johnson</p>
              <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">Premium Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative pb-20 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        <header className="relative h-[450px] flex items-end px-12 pb-16 overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-slate-900">
             {/* Placeholder for Hero Image */}
             <div className="w-full h-full bg-gradient-to-br from-indigo-900/40 to-slate-900"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617]/90"></div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-indigo-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-tighter">New Series</span>
              <span className="text-slate-400 text-sm font-medium">Placement Season 2024</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]">The Engineering Interview <span className="text-indigo-500">Masterclass</span></h1>
            <div className="flex gap-4">
              <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-slate-200 transition-all scale-100 active:scale-95 cursor-pointer">
                <Play className="fill-current" size={20} /> Resume Learning
              </button>
              <button className="bg-white/[0.03] backdrop-blur-md border border-white/10 px-8 py-4 rounded-xl font-bold text-white flex items-center gap-3 hover:bg-white/10 transition-all cursor-pointer">
                <Plus size={20} /> My List
              </button>
            </div>
          </div>
        </header>

        <div className="px-12 -mt-10 relative z-20 space-y-12">
          {/* Continue Preparation */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Continue Your Preparation</h2>
              <a className="text-indigo-400 text-sm font-bold hover:underline" href="#">View All</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Top 50 HR Questions", category: "Soft Skills", color: "indigo", progress: 64, lessons: 32 },
                { title: "System Design Basics", category: "Architecture", color: "emerald", progress: 33, lessons: 5 },
                { title: "STAR Method Mastery", category: "Strategy", color: "amber", progress: 80, lessons: 8 },
              ].map((item, i) => (
                <div key={i} className="group relative aspect-[16/10] rounded-3xl overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <span className={`text-${item.color}-400 font-bold text-xs uppercase tracking-widest mb-1 block`}>{item.category}</span>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-950 transition-colors">
                        <Play className="fill-current" size={20} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className={`h-full bg-${item.color}-500 rounded-full`} style={{ width: `${item.progress}%` }}></div>
                      </div>
                      <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                        <span>{item.lessons} Lessons Watched</span>
                        <span>{item.progress}% Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Practice Studio & Schedule */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    Practice Studio
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  </h2>
                  <p className="text-slate-400 text-sm">Review your non-verbal cues and speech clarity.</p>
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer">
                  <Video size={20} />
                  Enter Studio
                </button>
              </div>
              
              <div className="relative group rounded-[32px] overflow-hidden bg-slate-900 border border-white/5 shadow-2xl">
                <div className="aspect-video relative">
                   {/* Camera Feed Placeholder */}
                   <div className="absolute inset-0 bg-slate-800 flex flex-col items-center justify-center">
                      <div className="w-20 h-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white mb-4">
                        <CameraOff size={32} />
                      </div>
                      <p className="font-bold text-white tracking-tight">Camera Feed Disconnected</p>
                      <p className="text-slate-400 text-sm mt-1">Ready to start recording session</p>
                   </div>
                   
                   <div className="absolute top-8 left-8 right-8 flex justify-center z-20">
                    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 px-8 py-5 rounded-2xl max-w-xl text-center">
                      <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-indigo-400 mb-2 block">Active Prompt</span>
                      <h4 className="text-lg font-bold text-white italic leading-tight">"Tell me about a time you handled a difficult team dynamic. What did you do?"</h4>
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center z-20">
                    <div className="flex items-center gap-4">
                      <div className="px-4 py-2 bg-white/[0.03] backdrop-blur-xl border border-red-500/20 rounded-xl flex items-center gap-3">
                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                        <span className="font-mono text-white font-bold tracking-widest">00:00:00</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="w-12 h-12 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all text-white cursor-pointer">
                        <Mic size={20} />
                      </button>
                      <button className="w-12 h-12 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all text-white cursor-pointer">
                        <Settings size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Upcoming Screenings</h3>
                <div className="space-y-3">
                  {[
                    { day: "24", month: "Oct", title: "Technical Screening", person: "Sarah Miller", time: "2:00 PM", color: "indigo" },
                    { day: "26", month: "Oct", title: "Culture Fit Round", person: "David Chen", time: "11:30 AM", color: "emerald" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:border-white/20 transition-all cursor-pointer group">
                      <div className={`w-14 h-14 bg-${item.color}-500/10 rounded-xl flex flex-col items-center justify-center text-${item.color}-400 border border-${item.color}-500/20`}>
                        <span className="text-[10px] font-bold uppercase">{item.month}</span>
                        <span className="text-xl font-extrabold leading-none">{item.day}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white text-sm">{item.title}</h4>
                        <p className="text-xs text-slate-400">{item.person} • {item.time}</p>
                      </div>
                      <ChevronRight className="text-slate-600 group-hover:text-white transition-colors" size={20} />
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 py-3 rounded-2xl border border-dashed border-white/10 text-slate-400 text-sm font-bold hover:bg-white/5 transition-colors cursor-pointer">
                  + Schedule New Session
                </button>
              </div>

               <div className="relative overflow-hidden rounded-[32px] p-8 group border border-white/5">
                <div className="absolute inset-0 bg-indigo-900/80 backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <FileText className="text-white mb-4" size={40} />
                  <h3 className="text-xl font-extrabold text-white mb-2">Resume AI Review</h3>
                  <p className="text-indigo-100 text-sm mb-6 leading-relaxed">Boost your shortlisting chances by 40% with our automated feedback engine.</p>
                  <button className="w-full bg-white text-indigo-900 py-3 rounded-xl font-extrabold text-sm shadow-xl shadow-black/20 hover:bg-indigo-50 transition-all active:scale-95 cursor-pointer">
                    Upload PDF
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: "Readiness", value: "72%", sub: "+4% this week", subColor: "text-emerald-400" },
              { label: "Daily Streak", value: "12", icon: Flame, iconColor: "text-amber-500" },
              { label: "Practice Time", value: "4.5h", sub: "Goal: 5h", subColor: "text-slate-500" },
              { label: "Rank", value: "#42", sub: "Top 5%", subColor: "text-indigo-400" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">{stat.label}</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-extrabold text-white leading-none">{stat.value}</span>
                  {stat.sub && <span className={`${stat.subColor} text-xs font-bold mb-1`}>{stat.sub}</span>}
                  {stat.icon && <stat.icon className={`${stat.iconColor} mb-1 fill-current`} size={24} />}
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
