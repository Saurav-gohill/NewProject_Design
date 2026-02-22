import { Code, CheckCircle, Video, TrendingUp, User, GraduationCap, Calendar, Mail, Lock, EyeOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Background3D from '../components/Background3D';

export default function Signup() {
  return (
    <div className="font-sans min-h-screen flex flex-col justify-center items-center p-4 relative overflow-hidden text-slate-200">
      <Background3D />
      
      {/* Navbar/Logo */}
      <div className="mb-8 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="bg-primary p-2 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            <Code className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white drop-shadow-md">
            Placement<span className="text-primary">Hub</span>
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-4xl glass-card rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/10 relative z-10 backdrop-blur-xl bg-slate-900/40">
        {/* Left Side: Visual/Context */}
        <div className="hidden md:flex md:w-5/12 bg-primary/10 p-10 flex-col justify-between border-r border-white/5">
          <div>
            <h1 className="text-3xl font-bold text-white leading-tight mb-4">Master Your Future Career.</h1>
            <p className="text-slate-400">Join 50,000+ students preparing for top-tier tech roles with mock interviews and coding rounds.</p>
          </div>
          <div className="space-y-4">
            {[
              { icon: CheckCircle, text: "Curated DSA Patterns" },
              { icon: Video, text: "AI-Powered Mock Interviews" },
              { icon: TrendingUp, text: "Track Your Progress" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center shadow-lg border border-white/5">
                  <item.icon className="text-primary" size={20} />
                </div>
                <span className="text-sm font-medium text-slate-300">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="relative w-full aspect-square mt-8 bg-slate-800/50 rounded-xl overflow-hidden border border-white/5">
             {/* Placeholder for image */}
             <div className="w-full h-full bg-gradient-to-br from-slate-700/30 to-slate-900/30 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 bg-slate-900/90 p-4 rounded-lg shadow-xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-600"></div>)}
                </div>
                <span className="text-xs font-bold text-primary">+4.2k active today</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Sign Up Form */}
        <div className="w-full md:w-7/12 p-8 md:p-12 bg-slate-900/20">
          {/* Progress Stepper */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Step 1 of 2</span>
              <span className="text-xs font-medium text-slate-500">Profile Details</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-primary rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">Create your account</h2>
            <p className="text-slate-400 mt-1">Fill in the details below to get started.</p>
          </div>

          <form className="space-y-4">
            {/* Form Fields */}
            {[
              { id: 'full-name', label: 'Full Name', type: 'text', placeholder: 'John Doe', icon: User },
              { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@university.edu', icon: Mail },
            ].map((field) => (
              <div key={field.id}>
                <label className="block text-sm font-semibold text-slate-300 mb-1.5" htmlFor={field.id}>{field.label}</label>
                <div className="relative group">
                  <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={20} />
                  <input className="w-full pl-11 pr-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-white placeholder:text-slate-600" id={field.id} placeholder={field.placeholder} type={field.type} />
                </div>
              </div>
            ))}

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-1.5" htmlFor="college">College Name</label>
                <div className="relative group">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={20} />
                   <input className="w-full pl-11 pr-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-white placeholder:text-slate-600" id="college" placeholder="IIT Bombay" type="text" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-1.5" htmlFor="grad-year">Grad Year</label>
                <div className="relative group">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={20} />
                  <select className="w-full pl-11 pr-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-white appearance-none cursor-pointer" id="grad-year" defaultValue="">
                    <option disabled value="">Year</option>
                    {[2024, 2025, 2026, 2027].map(y => <option key={y} value={y} className="bg-slate-900 text-slate-300">{y}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-1.5" htmlFor="password">Password</label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={20} />
                <input className="w-full pl-11 pr-12 py-3 bg-slate-950/50 border border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-white placeholder:text-slate-600" id="password" placeholder="••••••••" type="password" />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white cursor-pointer transition-colors">
                  <EyeOff size={20} />
                </button>
              </div>
            </div>

            <Link to="/dashboard" className="w-full bg-gradient-to-r from-primary to-indigo-600 hover:to-indigo-500 text-white font-bold py-3.5 rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all flex items-center justify-center gap-2 group mt-6 active:scale-[0.98]">
              <span>Continue</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </form>

          {/* Social Logins */}
          <div className="relative py-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#0f172a] px-3 text-slate-500 font-bold rounded-full">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {['Google', 'GitHub'].map(provider => (
              <button key={provider} className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-700 rounded-xl hover:bg-slate-800 hover:border-slate-600 transition-all cursor-pointer group" type="button">
                <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">{provider}</span>
              </button>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Already have an account? 
            <Link className="text-primary font-bold hover:text-primary/80 hover:underline ml-1 transition-colors" to="/login">Log In</Link>
          </p>
        </div>
      </div>
       
       <div className="mt-8 flex gap-6 text-xs font-medium text-slate-600 relative z-10">
          <a className="hover:text-slate-400 transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-slate-400 transition-colors" href="#">Terms</a>
          <a className="hover:text-slate-400 transition-colors" href="#">Support</a>
        </div>
    </div>
  );
}
