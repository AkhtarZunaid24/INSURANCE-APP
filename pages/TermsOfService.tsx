import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronLeft, CheckCircle2 } from 'lucide-react';

const TermsOfService: React.FC = () => {
  const terms = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using RiderGuard, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the service."
    },
    {
      title: "2. Eligibility",
      content: "You must be at least 18 years old and hold a valid operator's license for your vehicle type to register as a rider."
    },
    {
      title: "3. Insurance Coverage",
      content: "Coverage is only active while you are 'Clocked In' on the platform. RiderGuard provides supplemental insurance and does not replace mandatory third-party liability insurance."
    },
    {
      title: "4. Rider Conduct",
      content: "Riders are expected to follow all traffic laws. Reckless driving, as determined by our AI safety scoring, may result in policy termination or premium increases."
    },
    {
      title: "5. Claims Process",
      content: "Claims must be reported within 24 hours of the incident. Accurate evidence, including photos and police reports, is required for processing."
    },
    {
      title: "6. Privacy & Data",
      content: "We collect GPS and vehicle data to provide real-time protection and risk assessment. Your data is encrypted and handled according to our Privacy Policy."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Shield className="w-8 h-8 text-yellow-500" />
            <span className="text-2xl font-display font-bold text-black uppercase tracking-tighter">RIDERGUARD</span>
          </Link>
          <Link to="/signup" className="flex items-center gap-2 text-sm font-black text-zinc-400 hover:text-black uppercase tracking-widest transition-colors">
            <ChevronLeft size={18} />
            Back to Signup
          </Link>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-4xl font-black text-black mb-4 uppercase tracking-tight">Terms of Service</h1>
          <p className="text-zinc-500 font-bold mb-10 uppercase tracking-wider">Last Updated: March 14, 2026</p>

          <div className="space-y-10">
            {terms.map((term, index) => (
              <section key={index} className="relative pl-8">
                <div className="absolute left-0 top-1">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                </div>
                <h2 className="text-xl font-black text-black mb-3 uppercase tracking-tight">{term.title}</h2>
                <p className="text-zinc-600 font-medium leading-relaxed">
                  {term.content}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t-2 border-zinc-100">
            <p className="text-sm text-zinc-400 font-bold text-center uppercase tracking-widest">
              By creating an account, you acknowledge that you have read and understood these terms.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/signup" 
            className="inline-block px-10 py-4 bg-black text-white rounded-xl font-black text-lg hover:bg-zinc-800 transition-all shadow-lg uppercase tracking-widest"
          >
            I Understand, Let's Ride
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
