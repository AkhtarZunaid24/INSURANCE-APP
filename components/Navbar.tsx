import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Shield className="w-8 h-8 text-yellow-500" />
          <span className="text-2xl font-display tracking-tight font-bold text-black">RIDERGUARD</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/plans" className="text-sm font-semibold text-black hover:text-yellow-600 transition-colors">Plans</Link>
          <a href="#features" className="text-sm font-semibold text-black hover:text-yellow-600 transition-colors">Coverage</a>
          <a href="#trust" className="text-sm font-semibold text-black hover:text-yellow-600 transition-colors">Partners</a>
          <a href="#support" className="text-sm font-semibold text-black hover:text-yellow-600 transition-colors">Support</a>
          <Link to="/login" className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-zinc-800 transition-all focus:ring-4 focus:ring-yellow-400">
            Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-black focus:ring-2 focus:ring-yellow-400 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 py-4 px-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top duration-200">
          <Link to="/plans" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold py-2 border-b border-zinc-50">Plans</Link>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold py-2 border-b border-zinc-50">Coverage</a>
          <a href="#trust" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold py-2 border-b border-zinc-50">Partners</a>
          <a href="#support" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold py-2 border-b border-zinc-50">Support</a>
          <Link 
            to="/login" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full bg-black text-white py-4 rounded-xl text-lg font-bold mt-2 text-center"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
