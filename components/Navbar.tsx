import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Globe, Zap, BarChart3, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', path: '/services', icon: Zap },
    { name: 'Technology', path: '/technology', icon: Cpu },
    { name: 'About', path: '/about', icon: Globe },
    { name: 'Analytics', path: '/', icon: BarChart3 },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-premium ${
      scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group relative">
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/10 group-hover:rotate-12 transition-premium">
            <Zap className="text-white w-6 h-6 fill-white" />
          </div>
          <span className="text-2xl font-black font-orbitron tracking-tighter text-white">
            VIANTRAS
          </span>
          {/* Subtle underline indicator for logo */}
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-premium" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-premium hover:text-white flex items-center space-x-2 relative group ${
                isActive(link.path) ? 'text-white' : 'text-slate-400'
              }`}
            >
              <link.icon className={`w-3.5 h-3.5 ${isActive(link.path) ? 'text-indigo-400' : 'text-slate-500'}`} />
              <span>{link.name}</span>
              <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-indigo-500 transition-premium ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
          <Link 
            to="/contact"
            className="px-8 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full transition-premium shadow-lg shadow-indigo-600/20 flex items-center space-x-2 group"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>OPERATIONS HUB</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-100 p-2 glass-card rounded-xl border-white/10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full glass-card border-b border-white/5 transition-premium origin-top ${
        isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'
      }`}>
        <div className="p-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-4 text-lg font-bold text-slate-300 hover:text-indigo-400 py-2 group"
            >
              <link.icon className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-premium" />
              <span className="font-orbitron tracking-tight">{link.name}</span>
            </Link>
          ))}
          <Link 
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center py-4 bg-indigo-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-indigo-600/20"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;