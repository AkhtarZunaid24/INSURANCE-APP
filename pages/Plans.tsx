import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Check, CloudRain, Wind, Zap, Bike, Car, Truck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Plans: React.FC = () => {
  const plans = [
    {
      name: "Lite Rider",
      price: "₹49",
      period: "per week",
      description: "Essential protection for part-time delivery partners.",
      icon: <Bike className="w-8 h-8" />,
      features: [
        "Rainfall Payout (15mm+)",
        "Accident Coverage up to ₹50k",
        "24/7 Roadside Assistance",
        "Digital Dashboard Access"
      ],
      color: "bg-zinc-100",
      buttonColor: "bg-black text-white hover:bg-zinc-800"
    },
    {
      name: "City Pro",
      price: "₹120",
      period: "per week",
      description: "The most popular choice for full-time gig workers.",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Rainfall Payout (10mm+)",
        "AQI Payout (Severe/300+)",
        "Accident Coverage up to ₹2L",
        "Medical Reimbursement",
        "Vehicle Repair Discount"
      ],
      color: "bg-yellow-400",
      buttonColor: "bg-black text-white hover:bg-zinc-800",
      popular: true
    },
    {
      name: "Fleet Master",
      price: "₹250",
      period: "per week",
      description: "Premium coverage for heavy-duty delivery vehicles.",
      icon: <Truck className="w-8 h-8" />,
      features: [
        "Rainfall Payout (5mm+)",
        "AQI Payout (Very Poor/200+)",
        "Accident Coverage up to ₹5L",
        "Income Protection (Daily)",
        "Priority Support Line"
      ],
      color: "bg-black text-white",
      buttonColor: "bg-yellow-400 text-black hover:bg-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-black text-black mb-6 uppercase leading-none">
              WEEKLY PROTECTION <br />
              <span className="text-yellow-500">FOR EVERY RIDER</span>
            </h1>
            <p className="text-xl text-zinc-500 font-bold max-w-2xl mx-auto uppercase tracking-wider">
              No long-term commitments. Pay weekly, stay protected daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative flex flex-col p-8 rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-2 ${plan.color}`}
              >
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest border-2 border-white">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <div className={`p-4 rounded-2xl inline-block ${plan.name === 'Fleet Master' ? 'bg-zinc-800' : 'bg-white/50'}`}>
                    {plan.icon}
                  </div>
                </div>

                <h3 className="text-3xl font-black uppercase mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-sm font-bold uppercase opacity-70">{plan.period}</span>
                </div>
                
                <p className="text-sm font-bold mb-8 opacity-80 leading-relaxed">
                  {plan.description}
                </p>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3">
                      <div className={`p-1 rounded-full ${plan.name === 'Fleet Master' ? 'bg-yellow-400 text-black' : 'bg-black text-white'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm font-black uppercase tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/signup"
                  className={`w-full py-4 rounded-xl font-black text-center uppercase tracking-widest transition-all ${plan.buttonColor}`}
                >
                  Select Plan
                </Link>
              </div>
            ))}
          </div>

          {/* Comparison Note */}
          <div className="mt-20 bg-zinc-50 border-4 border-black rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black uppercase mb-6">Why Weekly?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-yellow-400 p-3 rounded-xl h-fit">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-lg">Instant Activation</h4>
                      <p className="text-sm font-bold text-zinc-500">Coverage starts the moment you pay. No waiting periods.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-400 p-3 rounded-xl h-fit text-white">
                      <CloudRain className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-lg">Weather Triggers</h4>
                      <p className="text-sm font-bold text-zinc-500">Automatic payouts when weather conditions make riding dangerous.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-3xl rotate-3 -z-10"></div>
                <div className="bg-black text-white p-8 rounded-3xl border-4 border-black">
                  <h3 className="text-2xl font-black uppercase mb-4">Risk-Free Trial</h3>
                  <p className="font-bold text-zinc-400 mb-6">
                    Try any plan for 7 days. If you're not satisfied with the safety alerts and coverage, we'll refund your first week's premium.
                  </p>
                  <Link to="/signup" className="inline-block bg-white text-black px-8 py-3 rounded-xl font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors">
                    Start Trial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Plans;
