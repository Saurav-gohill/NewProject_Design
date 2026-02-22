import { Bell, Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
      <div className="space-y-1">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <Terminal className="text-white" size={20} strokeWidth={3} />
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-white uppercase">
            Prep<span className="text-primary">Flow</span>
          </h2>
        </div>
        <h1 className="text-3xl font-bold text-white">
          Morning, Alex <span className="text-primary">.</span>
        </h1>
        <p className="text-slate-400">
          Your readiness score improved by <span className="text-emerald-400 font-semibold">+14%</span> since last week.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4 glass-card px-4 py-2 rounded-2xl border-white/5">
          <div className="flex flex-col text-right">
            <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Global Rank</span>
            <span className="text-sm font-bold text-white">#1,284</span>
          </div>
          <img 
            alt="Profile" 
            className="w-10 h-10 rounded-xl object-cover ring-2 ring-primary/30" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUjTN1SIj7OHlJ5sgA0aeUwAn_HZN50UKgyRPY4kk0SKORmxYrL0B1tNhawLn8Fxoq4be_szn4iTju7ENZ_3uROFaZ1NXQ-aytKG6c7BG3c-iSkGMU_6eSwstu80PNeSwJSVDWARxhJKgHMj4BC360hKyU8xunxMoBJxm4VgDrh0HmvaMZpTK-0NeN6op9dhEaxbkg3tZMmM3tiB4kDCadBBc9G-NWCbQEkzNwp7SPYA33xCCYZbbix6FUlZba1njs09nTW7ek-e4" 
          />
        </div>
        <button className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-slate-300 hover:text-white hover:border-primary/50 transition-all cursor-pointer">
          <Bell size={20} />
        </button>
      </div>
    </header>
  );
}
