import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background-dark text-slate-200 antialiased selection:bg-primary/30 font-sans pb-24">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[128px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[128px] translate-x-1/2 -translate-y-1/2" />
      </div>

      <Sidebar />
      
      <main className="max-w-[1400px] mx-auto px-6 py-10 relative z-10">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
