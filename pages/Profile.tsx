import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  CreditCard, 
  Shield, 
  Smartphone, 
  ChevronLeft, 
  Save, 
  CheckCircle2,
  ExternalLink,
  Plus,
  Sun,
  Moon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../src/ThemeContext';

const Profile: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Rahul Sharma',
    email: 'rahul.s@delivery.com',
    phone: '+91 98765 43210',
    license: 'DL-1420230045678',
    vehicle: 'Honda Activa 6G (MH-01-AB-1234)'
  });

  const themeClass = theme === 'dark' ? 'bg-black text-white' : 'bg-zinc-50 text-black';
  const cardClass = theme === 'dark' ? 'bg-zinc-900 border-white/10 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)]' : 'bg-white border-zinc-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)]';
  const textMuted = theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400';
  const inputClass = theme === 'dark' ? 'bg-zinc-800 border-white/10 text-white focus:bg-zinc-700' : 'bg-zinc-100 border-zinc-200 text-black focus:bg-white';

  const [linkedApps] = useState([
    { name: 'Swiggy', status: 'Connected', icon: 'https://picsum.photos/seed/swiggy/40/40' },
    { name: 'Zomato', status: 'Connected', icon: 'https://picsum.photos/seed/zomato/40/40' },
    { name: 'Dunzo', status: 'Not Linked', icon: 'https://picsum.photos/seed/dunzo/40/40' }
  ]);

  const policyDetails = {
    id: 'RG-8821-W',
    plan: 'Pro Rider Plus',
    coverage: '₹5,00,000',
    nextRenewal: 'Jan 22, 2026',
    status: 'Active'
  };

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, this would call an API
  };

  return (
    <div className={`min-h-screen font-sans pb-12 transition-colors duration-300 ${themeClass}`}>
      {/* Header */}
      <header className={`border-b-2 sticky top-0 z-50 transition-colors duration-300 ${theme === 'dark' ? 'bg-zinc-900 border-white/10' : 'bg-white border-zinc-200'}`}>
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className={`p-2 rounded-xl transition-colors border-2 border-transparent ${theme === 'dark' ? 'hover:bg-zinc-800 hover:border-white/10' : 'hover:bg-zinc-100 hover:border-zinc-200'}`}>
              <ChevronLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-xl font-black uppercase tracking-tight">Rider Profile</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl border transition-all ${theme === 'dark' ? 'border-white/10 hover:bg-zinc-800 text-white' : 'border-zinc-200 hover:bg-zinc-100 text-zinc-700'}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl font-black text-xs uppercase tracking-widest transition-all border-2 ${
                isEditing 
                  ? 'bg-green-500 text-white border-green-600 shadow-[4px_4px_0px_0px_rgba(0,255,0,0.1)]' 
                  : (theme === 'dark' ? 'bg-yellow-400 text-black border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]' : 'bg-yellow-400 text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]')
              }`}
            >
              {isEditing ? <Save className="w-4 h-4" /> : <User className="w-4 h-4" />}
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 mt-8 space-y-8">
        {/* Profile Section */}
        <section className={`border-2 rounded-3xl p-8 transition-colors duration-300 ${cardClass}`}>
          <div className="flex items-center gap-6 mb-8">
            <div className={`w-24 h-24 border-2 rounded-2xl flex items-center justify-center relative overflow-hidden group ${theme === 'dark' ? 'bg-zinc-800 border-white/10' : 'bg-zinc-100 border-zinc-200'}`}>
              <img src="https://picsum.photos/seed/rider/200/200" alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              {isEditing && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Smartphone className="text-white w-6 h-6" />
                </div>
              )}
            </div>
            <div>
              <h2 className={`text-2xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{profile.name}</h2>
              <p className={`text-xs font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Verified Rider • Since Oct 2023</p>
              <div className="flex gap-2 mt-2">
                <span className="bg-green-500/10 text-green-500 text-[10px] font-black px-2 py-0.5 rounded-full uppercase border border-green-500/20">KYC Verified</span>
                <span className="bg-blue-500/10 text-blue-500 text-[10px] font-black px-2 py-0.5 rounded-full uppercase border border-blue-500/20">Pro Plan</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className={`text-[10px] font-black uppercase mb-1 block ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input 
                    type="text" 
                    disabled={!isEditing}
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl font-bold text-sm outline-none disabled:opacity-50 transition-all ${inputClass}`}
                  />
                </div>
              </div>
              <div>
                <label className={`text-[10px] font-black uppercase mb-1 block ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input 
                    type="email" 
                    disabled={!isEditing}
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl font-bold text-sm outline-none disabled:opacity-50 transition-all ${inputClass}`}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className={`text-[10px] font-black uppercase mb-1 block ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input 
                    type="text" 
                    disabled={!isEditing}
                    value={profile.phone}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl font-bold text-sm outline-none disabled:opacity-50 transition-all ${inputClass}`}
                  />
                </div>
              </div>
              <div>
                <label className={`text-[10px] font-black uppercase mb-1 block ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Driving License</label>
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input 
                    type="text" 
                    disabled={!isEditing}
                    value={profile.license}
                    onChange={(e) => setProfile({...profile, license: e.target.value})}
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl font-bold text-sm outline-none disabled:opacity-50 transition-all ${inputClass}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Linked Apps Section */}
        <section className={`border-2 rounded-3xl p-8 transition-colors duration-300 ${cardClass}`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-xl font-black uppercase tracking-tight flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <Smartphone className="w-5 h-5 text-blue-500" />
              Linked Delivery Apps
            </h2>
            <button className={`text-[10px] font-black uppercase underline hover:text-blue-500 ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Manage Connections</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {linkedApps.map((app) => (
              <div key={app.name} className={`p-4 border-2 rounded-2xl flex items-center justify-between group transition-colors ${theme === 'dark' ? 'border-white/10 hover:bg-zinc-800' : 'border-zinc-200 hover:bg-zinc-50'}`}>
                <div className="flex items-center gap-3">
                  <img src={app.icon} alt={app.name} className={`w-8 h-8 rounded-lg border ${theme === 'dark' ? 'border-white/10' : 'border-zinc-200'}`} referrerPolicy="no-referrer" />
                  <div>
                    <p className={`text-xs font-black uppercase ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{app.name}</p>
                    <p className={`text-[10px] font-bold uppercase ${app.status === 'Connected' ? 'text-green-500' : (theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400')}`}>
                      {app.status}
                    </p>
                  </div>
                </div>
                {app.status === 'Connected' ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                ) : (
                  <Plus className={`w-4 h-4 transition-colors cursor-pointer ${theme === 'dark' ? 'text-zinc-500 group-hover:text-white' : 'text-zinc-400 group-hover:text-black'}`} />
                )}
              </div>
            ))}
          </div>
          <p className={`mt-4 text-[10px] font-bold uppercase leading-relaxed ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>
            Linking your delivery apps allows RiderGuard to automatically detect when you are on a trip and provide active coverage.
          </p>
        </section>

        {/* Insurance Policy Section */}
        <section className={`border-2 rounded-3xl p-8 transition-colors duration-300 ${theme === 'dark' ? 'bg-zinc-950 border-white/10 text-white' : 'bg-zinc-900 border-black/10 text-white'}`}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-400 p-2 rounded-xl text-black">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight">Policy Details</h2>
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Active Coverage</p>
              </div>
            </div>
            <Link to="/plans" className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-zinc-200 transition-colors">
              Upgrade Plan
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-[10px] font-black text-zinc-500 uppercase mb-1">Policy ID</p>
              <p className="text-sm font-black text-yellow-400">{policyDetails.id}</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-zinc-500 uppercase mb-1">Plan Type</p>
              <p className="text-sm font-black">{policyDetails.plan}</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-zinc-500 uppercase mb-1">Coverage</p>
              <p className="text-sm font-black">{policyDetails.coverage}</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-zinc-500 uppercase mb-1">Next Renewal</p>
              <p className="text-sm font-black">{policyDetails.nextRenewal}</p>
            </div>
          </div>

          <div className={`mt-8 p-4 rounded-2xl flex items-center justify-between border ${theme === 'dark' ? 'bg-zinc-900 border-white/5' : 'bg-zinc-800 border-white/5'}`}>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-xs font-bold uppercase text-zinc-300">Your policy is currently protecting you in 4 risk zones.</p>
            </div>
            <button className="text-[10px] font-black text-yellow-400 uppercase underline">Download Policy PDF</button>
          </div>
        </section>

        {/* Danger Zone */}
        <section className={`pt-8 border-t-2 ${theme === 'dark' ? 'border-white/5' : 'border-black/5'}`}>
          <button className="text-red-500 text-xs font-black uppercase tracking-widest hover:underline">
            Deactivate Account & Cancel Policy
          </button>
        </section>
      </main>
    </div>
  );
};

export default Profile;
