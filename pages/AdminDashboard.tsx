import React, { useState, useMemo } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  BarChart3, 
  Search, 
  Bell, 
  Moon, 
  Sun, 
  Map as MapIcon, 
  AlertTriangle, 
  TrendingUp, 
  Download, 
  Filter,
  MoreVertical,
  CheckCircle2,
  XCircle,
  Clock,
  ShieldCheck,
  Wallet,
  Activity,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie
} from 'recharts';

// Mock Data
const POLICY_DATA = [
  { name: 'Mon', new: 45, renewals: 30 },
  { name: 'Tue', new: 52, renewals: 35 },
  { name: 'Wed', new: 48, renewals: 40 },
  { name: 'Thu', new: 61, renewals: 38 },
  { name: 'Fri', new: 55, renewals: 45 },
  { name: 'Sat', new: 67, renewals: 50 },
  { name: 'Sun', new: 40, renewals: 30 },
];

const REVENUE_BY_CITY = [
  { name: 'Mumbai', value: 450000, accidents: 12 },
  { name: 'Delhi', value: 380000, accidents: 15 },
  { name: 'Bangalore', value: 320000, accidents: 8 },
  { name: 'Hyderabad', value: 280000, accidents: 10 },
  { name: 'Pune', value: 210000, accidents: 5 },
];

const RECENT_CLAIMS = [
  { id: 'CLM-9021', rider: 'Rahul Sharma', type: 'Accident', status: 'Urgent', time: '2 mins ago', amount: '₹12,000' },
  { id: 'CLM-9020', rider: 'Amit Patel', type: 'Theft', status: 'Pending', time: '15 mins ago', amount: '₹45,000' },
  { id: 'CLM-9019', rider: 'Suresh Kumar', type: 'Medical', status: 'Review', time: '1 hour ago', amount: '₹8,500' },
];

const RIDERS = [
  { id: 'RD-101', name: 'Vikram Singh', vehicle: 'Honda Activa', kyc: 'Verified', score: 92, balance: '₹1,250', status: 'Active' },
  { id: 'RD-102', name: 'Priya Das', vehicle: 'TVS XL100', kyc: 'Pending', score: 78, balance: '₹450', status: 'Active' },
  { id: 'RD-103', name: 'Arjun Reddy', vehicle: 'Bajaj Pulsar', kyc: 'Verified', score: 65, balance: '₹2,100', status: 'Inactive' },
];

const AdminDashboard: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'ops' | 'crm' | 'claims' | 'finance'>('ops');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const themeClass = isDarkMode ? 'bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-900';
  const cardClass = isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200';

  return (
    <div className={`min-h-screen flex transition-colors duration-300 ${themeClass}`}>
      {/* Sidebar */}
      <aside className={`w-64 border-r flex flex-col ${isDarkMode ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'}`}>
        <div className="p-6 flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-yellow-500" />
          <span className="font-black text-xl tracking-tighter uppercase">RIDERGUARD</span>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <button 
            onClick={() => setActiveTab('ops')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'ops' ? 'bg-black text-white' : 'hover:bg-zinc-100 dark:hover:bg-zinc-900'}`}
          >
            <LayoutDashboard size={18} />
            Operations
          </button>
          <button 
            onClick={() => setActiveTab('crm')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'crm' ? 'bg-black text-white' : 'hover:bg-zinc-100 dark:hover:bg-zinc-900'}`}
          >
            <Users size={18} />
            Rider CRM
          </button>
          <button 
            onClick={() => setActiveTab('claims')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'claims' ? 'bg-black text-white' : 'hover:bg-zinc-100 dark:hover:bg-zinc-900'}`}
          >
            <FileText size={18} />
            Claims
          </button>
          <button 
            onClick={() => setActiveTab('finance')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'finance' ? 'bg-black text-white' : 'hover:bg-zinc-100 dark:hover:bg-zinc-900'}`}
          >
            <BarChart3 size={18} />
            Financials
          </button>
        </nav>

        <div className="p-4 border-t border-zinc-100 dark:border-zinc-800">
          <div className={`p-4 rounded-2xl ${isDarkMode ? 'bg-zinc-900' : 'bg-zinc-50'}`}>
            <p className="text-[10px] font-black uppercase text-zinc-400 mb-2">System Status</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold">All Systems Nominal</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className={`h-20 border-b flex items-center justify-between px-8 ${isDarkMode ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'}`}>
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search Rider, Policy ID, or License Plate..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-2.5 rounded-xl border text-sm font-medium outline-none transition-all ${isDarkMode ? 'bg-zinc-900 border-zinc-800 focus:border-yellow-500' : 'bg-zinc-50 border-zinc-200 focus:border-black'}`}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl border transition-all ${isDarkMode ? 'border-zinc-800 hover:bg-zinc-900' : 'border-zinc-200 hover:bg-zinc-100'}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="relative">
              <button className={`p-2.5 rounded-xl border transition-all ${isDarkMode ? 'border-zinc-800 hover:bg-zinc-900' : 'border-zinc-200 hover:bg-zinc-100'}`}>
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-zinc-950" />
              </button>
            </div>
            <div className="h-10 w-px bg-zinc-200 dark:bg-zinc-800 mx-2" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden md:block">
                <p className="text-sm font-black uppercase tracking-tighter">Super Admin</p>
                <p className="text-[10px] font-bold text-zinc-400">Enterprise Access</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center font-black text-black">
                SA
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className={`p-6 rounded-3xl border shadow-sm ${cardClass}`}>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-500/10 rounded-2xl">
                  <Activity className="w-6 h-6 text-blue-500" />
                </div>
                <span className="text-xs font-bold text-emerald-500">+12% vs LW</span>
              </div>
              <p className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-1">Active Riders</p>
              <h3 className="text-3xl font-black tracking-tighter">12,482</h3>
            </div>

            <div className={`p-6 rounded-3xl border shadow-sm ${cardClass}`}>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-yellow-50 dark:bg-yellow-500/10 rounded-2xl">
                  <TrendingUp className="w-6 h-6 text-yellow-600" />
                </div>
                <span className="text-xs font-bold text-emerald-500">+5.2%</span>
              </div>
              <p className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-1">Loss Ratio</p>
              <h3 className="text-3xl font-black tracking-tighter">42.8%</h3>
            </div>

            <div className={`p-6 rounded-3xl border shadow-sm ${cardClass}`}>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-purple-50 dark:bg-purple-500/10 rounded-2xl">
                  <Wallet className="w-6 h-6 text-purple-500" />
                </div>
                <span className="text-xs font-bold text-zinc-400">Forecasted</span>
              </div>
              <p className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-1">Pending Payouts</p>
              <h3 className="text-3xl font-black tracking-tighter">₹8.4L</h3>
            </div>

            <div className={`p-6 rounded-3xl border shadow-sm ${cardClass}`}>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-red-50 dark:bg-red-500/10 rounded-2xl">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <span className="px-2 py-1 bg-red-500 text-white text-[10px] font-black rounded-lg animate-pulse">LIVE</span>
              </div>
              <p className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-1">Active Claims</p>
              <h3 className="text-3xl font-black tracking-tighter">142</h3>
            </div>
          </div>

          {activeTab === 'ops' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Policy Volume Chart */}
                <div className={`lg:col-span-2 p-8 rounded-3xl border shadow-sm ${cardClass}`}>
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="text-xl font-black tracking-tight uppercase">Policy Volume</h3>
                      <p className="text-sm text-zinc-400 font-medium">New Sign-ups vs Renewals</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl text-xs font-bold">7 Days</button>
                      <button className="px-4 py-2 rounded-xl text-xs font-bold text-zinc-400">30 Days</button>
                    </div>
                  </div>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={POLICY_DATA}>
                        <defs>
                          <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#EAB308" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#EAB308" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? '#27272a' : '#f4f4f5'} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600}} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: isDarkMode ? '#18181b' : '#fff', 
                            border: 'none', 
                            borderRadius: '16px',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                          }} 
                        />
                        <Area type="monotone" dataKey="new" stroke="#EAB308" fillOpacity={1} fill="url(#colorNew)" strokeWidth={3} />
                        <Area type="monotone" dataKey="renewals" stroke="#000" fillOpacity={0} strokeWidth={2} strokeDasharray="5 5" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Live Claim Alerts */}
                <div className={`p-8 rounded-3xl border shadow-sm ${cardClass}`}>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-black tracking-tight uppercase">Live Alerts</h3>
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                  </div>
                  <div className="space-y-4">
                    {RECENT_CLAIMS.map((claim) => (
                      <div key={claim.id} className={`p-4 rounded-2xl border transition-all hover:scale-[1.02] cursor-pointer ${isDarkMode ? 'border-zinc-800 bg-zinc-900/50' : 'border-zinc-100 bg-zinc-50'}`}>
                        <div className="flex justify-between items-start mb-2">
                          <span className={`px-2 py-0.5 rounded-lg text-[10px] font-black uppercase ${claim.status === 'Urgent' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-black'}`}>
                            {claim.status}
                          </span>
                          <span className="text-[10px] font-bold text-zinc-400">{claim.time}</span>
                        </div>
                        <h4 className="font-black text-sm mb-1">{claim.rider}</h4>
                        <div className="flex justify-between items-center">
                          <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">{claim.type} • {claim.id}</p>
                          <p className="text-sm font-black">{claim.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-6 py-3 rounded-xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all">
                    View All Incidents
                  </button>
                </div>
              </div>

              {/* Active Riders Map Placeholder */}
              <div className={`p-8 rounded-3xl border shadow-sm overflow-hidden relative ${cardClass}`}>
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-xl font-black tracking-tight uppercase">Active Coverage Map</h3>
                    <p className="text-sm text-zinc-400 font-medium">Real-time rider density and risk zones</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                      <span className="text-xs font-bold">Safe Zone</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <span className="text-xs font-bold">High Risk</span>
                    </div>
                  </div>
                </div>
                <div className="h-[400px] w-full bg-zinc-100 dark:bg-zinc-900 rounded-2xl relative overflow-hidden">
                  {/* Decorative Map Elements */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
                  <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-red-500/20 rounded-full blur-3xl" />
                  
                  {/* Mock Rider Pins */}
                  {[...Array(15)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"
                      style={{ 
                        top: `${Math.random() * 80 + 10}%`, 
                        left: `${Math.random() * 80 + 10}%` 
                      }}
                    />
                  ))}

                  <div className="absolute bottom-6 left-6 p-4 bg-black/80 backdrop-blur-md text-white rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center text-black font-black">
                        12K
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-zinc-400">Riders Online</p>
                        <p className="text-sm font-bold">Pan-India Coverage</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'crm' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-black uppercase tracking-tight">Rider Management</h2>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl text-xs font-bold">
                    <Download size={16} /> Export CSV
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl text-xs font-bold">
                    <Filter size={16} /> Advanced Filter
                  </button>
                </div>
              </div>

              <div className={`rounded-3xl border shadow-sm overflow-hidden ${cardClass}`}>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className={`border-b ${isDarkMode ? 'border-zinc-800' : 'border-zinc-100'}`}>
                      <th className="p-6 text-[10px] font-black uppercase text-zinc-400 tracking-widest">Rider Details</th>
                      <th className="p-6 text-[10px] font-black uppercase text-zinc-400 tracking-widest">KYC Status</th>
                      <th className="p-6 text-[10px] font-black uppercase text-zinc-400 tracking-widest">Safety Score</th>
                      <th className="p-6 text-[10px] font-black uppercase text-zinc-400 tracking-widest">Wallet Balance</th>
                      <th className="p-6 text-[10px] font-black uppercase text-zinc-400 tracking-widest">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RIDERS.map((rider) => (
                      <tr key={rider.id} className={`border-b last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors ${isDarkMode ? 'border-zinc-800' : 'border-zinc-100'}`}>
                        <td className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-black">
                              {rider.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="font-black text-sm">{rider.name}</p>
                              <p className="text-xs text-zinc-400 font-bold">{rider.vehicle} • {rider.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-6">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${rider.kyc === 'Verified' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400'}`}>
                            {rider.kyc}
                          </span>
                        </td>
                        <td className="p-6">
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden max-w-[100px]">
                              <div 
                                className={`h-full rounded-full ${rider.score > 80 ? 'bg-emerald-500' : rider.score > 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                style={{ width: `${rider.score}%` }}
                              />
                            </div>
                            <span className="text-sm font-black">{rider.score}</span>
                          </div>
                        </td>
                        <td className="p-6">
                          <p className="text-sm font-black">{rider.balance}</p>
                        </td>
                        <td className="p-6">
                          <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                            <MoreVertical size={16} className="text-zinc-400" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'claims' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Evidence Viewer */}
                <div className={`p-8 rounded-3xl border shadow-sm ${cardClass}`}>
                  <h3 className="text-xl font-black tracking-tight uppercase mb-6">Evidence Viewer</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-2xl flex flex-col items-center justify-center p-4 border-2 border-dashed border-zinc-200 dark:border-zinc-800">
                      <img src="https://picsum.photos/seed/accident1/400/400" alt="Evidence 1" className="w-full h-full object-cover rounded-xl mb-2" referrerPolicy="no-referrer" />
                      <p className="text-[10px] font-black uppercase text-zinc-400">Vehicle Damage</p>
                    </div>
                    <div className="aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-2xl flex flex-col items-center justify-center p-4 border-2 border-dashed border-zinc-200 dark:border-zinc-800">
                      <img src="https://picsum.photos/seed/accident2/400/400" alt="Evidence 2" className="w-full h-full object-cover rounded-xl mb-2" referrerPolicy="no-referrer" />
                      <p className="text-[10px] font-black uppercase text-zinc-400">Police Report</p>
                    </div>
                  </div>
                  <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-50 border-zinc-100'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <AlertTriangle className="text-red-500 w-4 h-4" />
                      <p className="text-xs font-black uppercase text-red-500">Fraud Detection Flag</p>
                    </div>
                    <p className="text-xs font-medium text-zinc-500 leading-relaxed">
                      GPS coordinates at time of incident (12.9716, 77.5946) match a known high-fraud zone. Incident reported 45 minutes after occurrence.
                    </p>
                  </div>
                </div>

                {/* Approval Workflow */}
                <div className={`p-8 rounded-3xl border shadow-sm ${cardClass}`}>
                  <h3 className="text-xl font-black tracking-tight uppercase mb-6">Claim Processing</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900">
                      <div className="w-12 h-12 rounded-xl bg-yellow-500 flex items-center justify-center text-black font-black">RS</div>
                      <div>
                        <p className="font-black">Rahul Sharma</p>
                        <p className="text-xs text-zinc-400 font-bold">Policy: RG-8821-W • Claim: CLM-9021</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                        <p className="text-[10px] font-black uppercase text-zinc-400 mb-1">Claim Amount</p>
                        <p className="text-xl font-black">₹12,450</p>
                      </div>
                      <div className="p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                        <p className="text-[10px] font-black uppercase text-zinc-400 mb-1">Incident Time</p>
                        <p className="text-xl font-black">11:42 AM</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-center gap-2 py-4 bg-emerald-500 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-600 transition-all">
                        <CheckCircle2 size={20} /> Approve Payout
                      </button>
                      <button className="w-full flex items-center justify-center gap-2 py-4 bg-red-500 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-red-600 transition-all">
                        <XCircle size={20} /> Reject Claim
                      </button>
                      <button className="w-full flex items-center justify-center gap-2 py-4 border-2 border-black dark:border-white rounded-2xl font-black uppercase tracking-widest hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all">
                        <Clock size={20} /> Request Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'finance' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Revenue Heatmap */}
                <div className={`p-8 rounded-3xl border shadow-sm ${cardClass}`}>
                  <h3 className="text-xl font-black tracking-tight uppercase mb-8">Revenue vs Risk Heatmap</h3>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={REVENUE_BY_CITY}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? '#27272a' : '#f4f4f5'} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600}} />
                        <Tooltip 
                          cursor={{fill: isDarkMode ? '#27272a' : '#f4f4f5'}}
                          contentStyle={{ 
                            backgroundColor: isDarkMode ? '#18181b' : '#fff', 
                            border: 'none', 
                            borderRadius: '16px',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                          }} 
                        />
                        <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                          {REVENUE_BY_CITY.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.accidents > 12 ? '#ef4444' : '#EAB308'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-6 flex justify-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <span className="text-xs font-bold">High Revenue</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <span className="text-xs font-bold">High Loss Ratio</span>
                    </div>
                  </div>
                </div>

                {/* Payout Forecasting */}
                <div className={`p-8 rounded-3xl border shadow-sm ${cardClass}`}>
                  <h3 className="text-xl font-black tracking-tight uppercase mb-8">Payout Forecasting</h3>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: 'Approved', value: 45 },
                            { name: 'Pending', value: 30 },
                            { name: 'Reserve', value: 25 },
                          ]}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          <Cell fill="#10b981" />
                          <Cell fill="#eab308" />
                          <Cell fill="#3b82f6" />
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="text-center">
                      <p className="text-[10px] font-black uppercase text-zinc-400 mb-1">Approved</p>
                      <p className="text-lg font-black">₹4.2L</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-black uppercase text-zinc-400 mb-1">Pending</p>
                      <p className="text-lg font-black">₹2.8L</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-black uppercase text-zinc-400 mb-1">Reserve</p>
                      <p className="text-lg font-black">₹1.4L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
