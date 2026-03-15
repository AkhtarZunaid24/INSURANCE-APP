import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  AlertTriangle, 
  Wallet, 
  CloudRain, 
  Wind, 
  Map as MapIcon, 
  ArrowUpRight, 
  History,
  CheckCircle2,
  RefreshCw,
  TrendingUp,
  ChevronRight,
  Info,
  User,
  MessageSquare,
  X,
  Send,
  Package,
  IndianRupee,
  AlertOctagon,
  Camera,
  Upload
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  const [autoRenew, setAutoRenew] = useState(true);
  const [riskScore, setRiskScore] = useState(3.2);
  const [historyTab, setHistoryTab] = useState('deliveries');
  const [isIncidentModalOpen, setIsIncidentModalOpen] = useState(false);
  const [incidentType, setIncidentType] = useState('Accident');
  const [incidentDesc, setIncidentDesc] = useState('');
  const [incidentReported, setIncidentReported] = useState(false);

  const historyData = {
    deliveries: [
      { id: 1, title: 'Swiggy Delivery', detail: '4.2 km • 15 mins', amount: '₹45', date: 'Today, 2:30 PM', status: 'Completed' },
      { id: 2, title: 'Zomato Delivery', detail: '1.8 km • 8 mins', amount: '₹30', date: 'Today, 1:15 PM', status: 'Completed' },
      { id: 3, title: 'Swiggy Delivery', detail: '3.5 km • 12 mins', amount: '₹40', date: 'Yesterday', status: 'Completed' },
    ],
    earnings: [
      { id: 1, title: 'Daily Payout', detail: '12 Deliveries', amount: '₹850', date: 'Yesterday', status: 'Credited' },
      { id: 2, title: 'Rain Bonus', detail: 'Severe Weather', amount: '₹150', date: 'Jan 15', status: 'Credited' },
      { id: 3, title: 'Weekly Incentive', detail: '50+ Deliveries', amount: '₹500', date: 'Jan 14', status: 'Credited' },
    ],
    incidents: [
      { id: 1, title: 'Minor Collision', detail: 'Reported via App', amount: '--', date: 'Jan 10', status: 'Under Review' },
      { id: 2, title: 'Speeding Alert', detail: 'Exceeded 60km/h', amount: '--', date: 'Jan 05', status: 'Warning' },
    ]
  };

  // Simulate real-time risk updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRiskScore(prev => {
        const change = (Math.random() - 0.5) * 1.5;
        const next = Math.max(1.5, Math.min(8.5, prev + change));
        return parseFloat(next.toFixed(1));
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Mock data for the chart
  const chartData = [
    { name: 'Week 1', saved: 450, paid: 120 },
    { name: 'Week 2', saved: 150, paid: 120 },
    { name: 'Week 3', saved: 600, paid: 120 },
    { name: 'Week 4', saved: 300, paid: 120 },
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F5] text-black font-sans pb-12">
      {/* 1. Header: The "Safety Status" Bar */}
      <header className="bg-white border-b-2 border-black sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
              <div className="relative bg-green-500 text-white p-2 rounded-full">
                <Shield className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-zinc-500">Status</span>
                <span className="flex items-center gap-1 text-green-600 font-black text-sm uppercase">
                  <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                  Covered
                </span>
              </div>
              <h1 className="text-lg font-black leading-tight uppercase">Safety Dashboard</h1>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4">
              <div className="relative w-16 h-10">
                <svg viewBox="0 0 100 60" className="w-full h-full transform -rotate-0">
                  {/* Background Track */}
                  <path 
                    d="M 10 50 A 40 40 0 0 1 90 50" 
                    fill="none" 
                    stroke="#F4F4F5" 
                    strokeWidth="12" 
                    strokeLinecap="round"
                  />
                  {/* Progress Track */}
                  <motion.path 
                    d="M 10 50 A 40 40 0 0 1 90 50" 
                    fill="none" 
                    stroke={riskScore > 7 ? "#ef4444" : riskScore > 4 ? "#eab308" : "#22c55e"}
                    strokeWidth="12" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: riskScore / 10 }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                  />
                </svg>
                <motion.div 
                  key={riskScore}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-black"
                >
                  {riskScore}
                </motion.div>
              </div>
              <div className="text-right">
                <div className="text-xs font-black uppercase tracking-wider text-zinc-500">Risk Score</div>
                <div className="flex items-center justify-end gap-1">
                  <span className={`text-[10px] font-black uppercase ${riskScore > 7 ? 'text-red-500' : riskScore > 4 ? 'text-yellow-500' : 'text-green-500'}`}>
                    {riskScore > 7 ? 'High' : riskScore > 4 ? 'Moderate' : 'Low'}
                  </span>
                </div>
              </div>
            </div>
            <div className="h-10 w-[2px] bg-zinc-100 hidden md:block"></div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs font-black uppercase tracking-wider text-zinc-500">Wallet Balance</div>
                <div className="text-2xl font-black text-black">₹2,450.00</div>
              </div>
              <Link 
                to="/profile" 
                className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center hover:bg-zinc-800 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] border-2 border-black"
              >
                <User className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 mt-8 space-y-8">
        
        {/* 2. Live "Trigger" Monitor */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              Live Trigger Monitor
            </h2>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Real-time Updates</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Weather Card */}
            <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                Trigger: 15mm
              </div>
              <div className="flex justify-between items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                  <CloudRain className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-xs font-black text-zinc-400 uppercase">Rainfall</div>
                  <div className="text-2xl font-black">12.5 <span className="text-sm">mm</span></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase">
                  <span>Current</span>
                  <span className="text-blue-600">83% of Trigger</span>
                </div>
                <div className="w-full bg-zinc-100 h-3 rounded-full overflow-hidden border border-black/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '83%' }}
                    className="h-full bg-blue-500"
                  />
                </div>
                <p className="text-[10px] font-bold text-zinc-400 uppercase">Automatic payout at 15mm/hr</p>
              </div>
            </div>

            {/* AQI Card */}
            <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                Trigger: 300+
              </div>
              <div className="flex justify-between items-start mb-4">
                <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                  <Wind className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-xs font-black text-zinc-400 uppercase">AQI Index</div>
                  <div className="text-2xl font-black">184</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase">
                  <span>Status</span>
                  <span className="text-orange-600">Unhealthy</span>
                </div>
                <div className="w-full bg-zinc-100 h-3 rounded-full overflow-hidden border border-black/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '60%' }}
                    className="h-full bg-orange-500"
                  />
                </div>
                <p className="text-[10px] font-bold text-zinc-400 uppercase">Payout triggers at 'Severe' (300+)</p>
              </div>
            </div>

            {/* Heatmap Card */}
            <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative group">
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="bg-red-100 p-3 rounded-xl text-red-600">
                  <MapIcon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-xs font-black text-zinc-400 uppercase">High Risk Zones</div>
                  <div className="text-2xl font-black">4 <span className="text-sm">Active</span></div>
                </div>
              </div>
              <div className="h-32 bg-zinc-100 rounded-xl border border-black/5 relative overflow-hidden cursor-crosshair">
                {/* Mock Map Background */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                
                {/* Risk Zones (Aggressive Pulsating) */}
                <div className="absolute top-4 left-12 w-12 h-12 bg-red-500/30 rounded-full animate-ping"></div>
                <div className="absolute top-8 left-16 w-4 h-4 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
                
                <div className="absolute bottom-4 right-8 w-16 h-16 bg-red-500/20 rounded-full animate-ping [animation-delay:1s]"></div>
                <div className="absolute bottom-10 right-14 w-6 h-6 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>

                {/* User Location Marker */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-blue-500/20 rounded-full animate-pulse"></div>
                    <div className="absolute -inset-2 bg-blue-500/40 rounded-full animate-ping"></div>
                    <div className="relative bg-blue-600 w-4 h-4 rounded-full border-2 border-white shadow-xl flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-[8px] font-black px-2 py-0.5 rounded-sm uppercase whitespace-nowrap shadow-md border border-white/20">
                      Current Location
                    </div>
                  </div>
                </motion.div>

                {/* Interactive Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                  <button className="bg-black text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest hover:scale-110 active:scale-95 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] border border-white/10">
                    Explore Live Map
                  </button>
                </div>

                {/* Map Coordinates Label */}
                <div className="absolute bottom-2 left-3 text-[8px] font-bold text-zinc-400 uppercase tracking-tighter">
                  Lat: 19.0760° N | Lon: 72.8777° E
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 3. Earnings & Protection Stats */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border-2 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl font-black uppercase tracking-tight">Earnings & Protection</h2>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Last 4 Weeks Performance</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-black rounded-sm"></div>
                    <span className="text-[10px] font-black uppercase">Payouts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-zinc-200 rounded-sm"></div>
                    <span className="text-[10px] font-black uppercase">Premiums</span>
                  </div>
                </div>
              </div>

              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fontWeight: 800, fill: '#A1A1AA' }}
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fontWeight: 800, fill: '#A1A1AA' }}
                    />
                    <Tooltip 
                      cursor={{ fill: '#F4F4F5' }}
                      contentStyle={{ 
                        borderRadius: '12px', 
                        border: '2px solid black',
                        boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        fontSize: '12px'
                      }}
                    />
                    <Bar dataKey="saved" fill="#000000" radius={[4, 4, 0, 0]} barSize={40} />
                    <Bar dataKey="paid" fill="#E4E4E7" radius={[4, 4, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t-2 border-zinc-50">
                <div className="bg-zinc-50 p-4 rounded-2xl border border-black/5">
                  <div className="text-[10px] font-black text-zinc-400 uppercase mb-1">Total Payouts</div>
                  <div className="text-2xl font-black">₹1,500</div>
                  <div className="flex items-center gap-1 text-green-600 text-[10px] font-bold mt-1">
                    <TrendingUp className="w-3 h-3" />
                    +12% vs last month
                  </div>
                </div>
                <div className="bg-zinc-50 p-4 rounded-2xl border border-black/5 relative group/tooltip">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-[10px] font-black text-zinc-400 uppercase">Net Protection</div>
                    <Info className="w-3 h-3 text-zinc-300 cursor-help" />
                  </div>
                  <div className="text-2xl font-black">₹1,020</div>
                  <div className="text-[10px] font-bold text-zinc-400 mt-1 uppercase">After premiums</div>
                  
                  {/* Tooltip Content */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-black text-white text-[10px] font-bold rounded-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-50 shadow-xl border border-white/10">
                    <p className="leading-relaxed">
                      Calculated as: <br/>
                      <span className="text-yellow-400">Total Payouts Received</span> <br/>
                      minus <br/>
                      <span className="text-zinc-400">Total Premiums Paid</span>.
                    </p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Rider History */}
            <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                  <History className="w-4 h-4" />
                  Rider History
                </h2>
                <button className="text-[10px] font-black text-zinc-400 hover:text-black uppercase underline">View Full Log</button>
              </div>
              
              {/* Tabs */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                <button 
                  onClick={() => setHistoryTab('deliveries')}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-colors border-2 ${historyTab === 'deliveries' ? 'bg-black text-white border-black' : 'bg-zinc-50 text-zinc-500 border-transparent hover:border-black/20'}`}
                >
                  Deliveries
                </button>
                <button 
                  onClick={() => setHistoryTab('earnings')}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-colors border-2 ${historyTab === 'earnings' ? 'bg-black text-white border-black' : 'bg-zinc-50 text-zinc-500 border-transparent hover:border-black/20'}`}
                >
                  Earnings
                </button>
                <button 
                  onClick={() => setHistoryTab('incidents')}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-colors border-2 ${historyTab === 'incidents' ? 'bg-black text-white border-black' : 'bg-zinc-50 text-zinc-500 border-transparent hover:border-black/20'}`}
                >
                  Incidents
                </button>
              </div>

              <div className="space-y-4">
                {historyTab === 'deliveries' && historyData.deliveries.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-black/5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                        <Package className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase">{item.title}</div>
                        <div className="text-[10px] font-bold text-zinc-400 uppercase">{item.detail} • {item.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-black">{item.amount}</div>
                      <div className="text-[10px] font-bold text-green-600 uppercase">{item.status}</div>
                    </div>
                  </div>
                ))}

                {historyTab === 'earnings' && historyData.earnings.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-black/5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-green-100 text-green-600">
                        <IndianRupee className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase">{item.title}</div>
                        <div className="text-[10px] font-bold text-zinc-400 uppercase">{item.detail} • {item.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-black text-green-600">{item.amount}</div>
                      <div className="text-[10px] font-bold text-green-600 uppercase">{item.status}</div>
                    </div>
                  </div>
                ))}

                {historyTab === 'incidents' && historyData.incidents.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-black/5">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${item.status === 'Warning' ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'}`}>
                        <AlertOctagon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase">{item.title}</div>
                        <div className="text-[10px] font-bold text-zinc-400 uppercase">{item.detail} • {item.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-zinc-500 uppercase">{item.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Active Insurance Policy */}
            <div className="bg-black text-white rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-yellow-400" />
                <h2 className="text-sm font-black uppercase tracking-widest">Active Policy</h2>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] font-black text-zinc-400 uppercase mb-1">Policy Number</div>
                    <div className="text-sm font-black text-yellow-400">RG-8821-W</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-zinc-400 uppercase mb-1">Coverage Type</div>
                    <div className="text-sm font-black">Pro Rider Plus</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-zinc-400 uppercase mb-1">Expiry Date</div>
                    <div className="text-sm font-black">Jan 22, 2026</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-zinc-400 uppercase mb-1">Status</div>
                    <div className="bg-zinc-800 px-3 py-1 rounded-full text-[10px] font-black uppercase text-yellow-400 border border-yellow-400/20 inline-block">
                      Active
                    </div>
                  </div>
                </div>

                <div className="h-[1px] bg-zinc-800 w-full"></div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-black uppercase">Auto-Renew Policy</div>
                    <div className="text-[10px] font-bold text-zinc-500 uppercase">Renew on Jan 22, 2026</div>
                  </div>
                  <button 
                    onClick={() => setAutoRenew(!autoRenew)}
                    className={`w-12 h-6 rounded-full transition-colors relative border border-white/10 ${autoRenew ? 'bg-yellow-400' : 'bg-zinc-700'}`}
                  >
                    <motion.div 
                      animate={{ x: autoRenew ? 24 : 2 }}
                      className="absolute top-1 left-0 w-4 h-4 bg-white rounded-full shadow-sm"
                    />
                  </button>
                </div>

                <button className="w-full bg-white text-black py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group">
                  Manage Coverage
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link 
                  to="/submit-claim"
                  className="w-full bg-red-500 text-white py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-red-600 transition-colors flex items-center justify-center gap-2 group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black"
                >
                  <AlertTriangle className="w-4 h-4" />
                  File a Claim
                </Link>

                <button 
                  onClick={() => setIsIncidentModalOpen(true)}
                  className="w-full bg-yellow-400 text-black py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black mt-4"
                >
                  <AlertOctagon className="w-4 h-4" />
                  Quick Report Incident
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Navigation (Floating) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-4 rounded-2xl flex items-center gap-8 shadow-2xl border border-white/10 md:hidden z-40">
        <Link to="/dashboard" className="text-yellow-400"><TrendingUp className="w-6 h-6" /></Link>
        <button className="text-zinc-500"><MapIcon className="w-6 h-6" /></button>
        <button className="text-zinc-500"><Wallet className="w-6 h-6" /></button>
        <Link to="/profile" className="text-zinc-500"><User className="w-6 h-6" /></Link>
      </div>

      {/* Floating Support Button */}
      <Link 
        to="/support"
        className="fixed bottom-6 right-6 w-14 h-14 bg-yellow-400 text-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:scale-105 transition-transform z-50"
      >
        <MessageSquare className="w-6 h-6" />
      </Link>

      {/* Incident Reporting Modal */}
      {isIncidentModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 border-b-2 border-black flex justify-between items-center bg-yellow-400">
              <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
                <AlertOctagon className="w-6 h-6" />
                Report Incident
              </h3>
              <button 
                onClick={() => {
                  setIsIncidentModalOpen(false);
                  setIncidentReported(false);
                  setIncidentDesc('');
                }}
                className="p-2 hover:bg-black/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              {incidentReported ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-600">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-2xl font-black uppercase mb-2">Incident Reported</h4>
                  <p className="text-zinc-500 font-medium mb-8">Your report has been submitted successfully. Our team will review it shortly.</p>
                  <button 
                    onClick={() => {
                      setIsIncidentModalOpen(false);
                      setIncidentReported(false);
                      setIncidentDesc('');
                    }}
                    className="w-full bg-black text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-black uppercase text-zinc-500 mb-2">Incident Type</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Accident', 'Vehicle Issue', 'Theft', 'Other'].map(type => (
                        <button
                          key={type}
                          onClick={() => setIncidentType(type)}
                          className={`py-3 px-4 rounded-xl border-2 font-bold text-sm transition-all ${incidentType === type ? 'border-black bg-black text-white' : 'border-zinc-200 bg-zinc-50 text-zinc-500 hover:border-black/30'}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-zinc-500 mb-2">Description</label>
                    <textarea 
                      value={incidentDesc}
                      onChange={(e) => setIncidentDesc(e.target.value)}
                      placeholder="Briefly describe what happened..."
                      className="w-full p-4 rounded-xl border-2 border-zinc-200 bg-zinc-50 focus:border-black focus:bg-white outline-none transition-all resize-none h-32 font-medium"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-zinc-500 mb-2">Photos (Optional)</label>
                    <div className="grid grid-cols-3 gap-3">
                      <label className="aspect-square rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-50 flex flex-col items-center justify-center cursor-pointer hover:border-black hover:bg-zinc-100 transition-all text-zinc-400 hover:text-black">
                        <Camera size={24} className="mb-2" />
                        <span className="text-[10px] font-black uppercase">Take Photo</span>
                        <input type="file" accept="image/*" capture="environment" className="hidden" />
                      </label>
                      <label className="aspect-square rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-50 flex flex-col items-center justify-center cursor-pointer hover:border-black hover:bg-zinc-100 transition-all text-zinc-400 hover:text-black">
                        <Upload size={24} className="mb-2" />
                        <span className="text-[10px] font-black uppercase">Upload</span>
                        <input type="file" accept="image/*" className="hidden" />
                      </label>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIncidentReported(true)}
                    disabled={!incidentDesc.trim()}
                    className="w-full bg-red-500 text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-red-600 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  >
                    Submit Report
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
