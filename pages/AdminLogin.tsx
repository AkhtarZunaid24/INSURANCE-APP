import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Lock, Mail, Globe, ShieldCheck } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Admin login logic would go here
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 font-sans">
      {/* Company Logo */}
      <div className="mb-8 flex items-center gap-2">
        <Shield className="w-8 h-8 text-black" />
        <span className="text-xl font-bold tracking-tighter text-black uppercase">RiderGuard Enterprise</span>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white p-10 rounded-2xl border border-zinc-200 shadow-2xl shadow-zinc-200/50">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">Enterprise Login</h1>
          <p className="text-zinc-500 text-sm mt-1">Access the administrative control center.</p>
        </div>

        <form className="space-y-5" onSubmit={handleAdminLogin}>
          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Corporate Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
              <input 
                type="email" 
                required
                placeholder="admin@riderguard.com"
                className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black rounded-lg outline-none text-sm transition-all"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest">Password</label>
              <Link to="/forgot-password" size="sm" className="text-xs font-semibold text-zinc-400 hover:text-black transition-colors">
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
              <input 
                type="password" 
                required
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black rounded-lg outline-none text-sm transition-all"
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-black text-white py-3 rounded-lg font-semibold text-sm hover:bg-zinc-800 transition-all shadow-md"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-100"></div>
          </div>
          <div className="relative flex justify-center text-[10px]">
            <span className="px-4 bg-white text-zinc-400 font-bold uppercase tracking-[0.2em]">Security Protocol</span>
          </div>
        </div>

        <button className="mt-6 w-full flex items-center justify-center gap-2 py-3 border border-zinc-200 rounded-lg font-semibold text-sm hover:bg-zinc-50 transition-all text-zinc-600">
          <Globe className="w-4 h-4" />
          Login with SSO
        </button>
      </div>

      {/* Secure Environment Badge */}
      <div className="mt-12 flex items-center gap-2 px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-full">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Secure Environment</span>
      </div>

      <Link to="/login" className="mt-8 text-xs font-semibold text-zinc-400 hover:text-black transition-colors">
        Return to Rider Login
      </Link>
    </div>
  );
};

export default AdminLogin;
