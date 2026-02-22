import { LayoutDashboard, Compass, Code, BarChart3, Settings, Terminal, Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function Sidebar() {
  const location = useLocation();
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Compass, label: 'Explore', path: '/interview-hub' },
    { icon: Code, label: 'Practice', path: '/aptitude-arena' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 glass-card rounded-2xl z-50 border border-white/5">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={clsx(
              "p-3 rounded-xl transition-all duration-300",
              isActive 
                ? "bg-primary text-white shadow-lg shadow-primary/25" 
                : "text-slate-400 hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
          </Link>
        );
      })}
      <div className="w-px h-6 bg-white/10 mx-1"></div>
      <Link
        to="/settings"
        className="p-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all"
      >
        <Settings size={24} />
      </Link>
    </nav>
  );
}
