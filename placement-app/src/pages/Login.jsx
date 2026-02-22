import { GraduationCap, Mail, Lock, ArrowRight, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import Background3D from '../components/Background3D';

export default function Login() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center p-4 md:p-8 overflow-x-hidden relative bg-slate-900 text-white">
      <Background3D />

      <div className="relative z-10 w-full max-w-5xl flex flex-col lg:flex-row glass-card rounded-2xl overflow-hidden min-h-[700px]">
        {/* Left Side */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden p-12 flex-col justify-between">
          <div className="absolute inset-0 z-0">
            {/* Placeholder for image */}
            <div className="w-full h-full bg-slate-800 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-background-dark/90"></div>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-16">
              <div className="w-11 h-11 bg-primary flex items-center justify-center rounded-xl shadow-lg shadow-primary/30">
                <GraduationCap className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">PrepPro</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Launch Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Dream Career.</span>
            </h1>
            <p className="text-blue-100/70 text-lg max-w-md font-light leading-relaxed">
              Personalized paths, mock interviews, and advanced coding challenges designed for the next generation of engineers.
            </p>
          </div>
          <div className="relative z-10 space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                <p className="text-3xl font-bold text-white mb-1">50k+</p>
                <p className="text-xs uppercase tracking-wider text-blue-300 font-semibold">Success Stories</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                <p className="text-3xl font-bold text-white mb-1">98%</p>
                <p className="text-xs uppercase tracking-wider text-blue-300 font-semibold">Placement Rate</p>
              </div>
            </div>
            <p className="text-xs text-blue-100/40">Trusted by students from 200+ universities worldwide.</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-12 lg:p-16 bg-white/5 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none">
          <div className="lg:hidden flex items-center gap-2 mb-10">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <GraduationCap className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">PrepPro</span>
          </div>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Welcome Back</h2>
            <p className="text-slate-400 font-light">Enter your credentials to access your dashboard.</p>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest mb-2" htmlFor="email">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={20} />
                <input className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all" id="email" placeholder="name@company.com" type="email" />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest" htmlFor="password">Password</label>
                <a className="text-xs font-semibold text-primary hover:text-blue-400 transition-colors uppercase tracking-widest" href="#">Forgot?</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={20} />
                <input className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all" id="password" placeholder="••••••••" type="password" />
              </div>
            </div>
            <div className="flex items-center">
              <input className="w-4 h-4 text-primary bg-white/5 border-white/10 rounded focus:ring-offset-background-dark focus:ring-primary" id="remember" type="checkbox" />
              <label className="ml-2 block text-sm text-slate-400" htmlFor="remember">Keep me signed in</label>
            </div>
            <Link to="/dashboard" className="w-full bg-gradient-to-r from-primary to-blue-600 text-white font-bold py-4 px-6 rounded-xl shadow-[0_0_15px_rgba(19,91,236,0.4)] hover:shadow-[0_0_25px_rgba(19,91,236,0.6)] hover:-translate-y-px flex items-center justify-center gap-3 transition-all">
              <span>Sign In</span>
              <ArrowRight size={20} />
            </Link>
          </form>
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest">
              <span className="px-4 text-slate-500 bg-transparent backdrop-blur-sm">Or sign in with</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-10">
            <button className="flex items-center justify-center gap-3 px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group cursor-pointer">
              {/* Google G Logo Placeholder or use text */}
              <span className="text-sm font-medium text-slate-300">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group cursor-pointer">
              {/* LinkedIn Logo Placeholder */}
              <span className="text-sm font-medium text-slate-300">LinkedIn</span>
            </button>
          </div>
          <p className="mt-auto text-center text-slate-400 text-sm">
            New to the platform? 
            <Link className="font-bold text-primary hover:text-blue-400 transition-colors ml-1 underline decoration-primary/30 underline-offset-4" to="/signup">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
