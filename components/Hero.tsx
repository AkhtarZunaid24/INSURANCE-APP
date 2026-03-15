import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1626228067612-81092d79477b?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#535050] backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white leading-none mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          PROTECTING THE <br />
          <span className="text-yellow-400">PULSE OF THE CITY</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-200 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
          Specialized insurance for delivery riders. Whether you're on two wheels or four, we've got your back.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto bg-white p-2 rounded-2xl md:rounded-full shadow-2xl">
          <label htmlFor="vehicle-type" className="sr-only">Enter your vehicle type</label>
          <input 
            id="vehicle-type"
            type="text" 
            placeholder="Enter your vehicle type (e.g. E-bike)"
            className="w-full px-6 py-4 text-black font-semibold focus:outline-none rounded-full"
            aria-label="Vehicle type for rate check"
          />
          <button 
            className="w-full md:w-auto bg-yellow-400 text-black px-8 py-4 rounded-xl md:rounded-full font-black text-lg hover:bg-yellow-500 transition-all flex items-center justify-center gap-2 whitespace-nowrap focus:outline-none focus:ring-4 focus:ring-yellow-200"
            aria-label="Check your rate"
          >
            CHECK YOUR RATE
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>
        
        <p className="mt-6 text-zinc-400 text-sm font-bold uppercase tracking-widest">
          Trusted by 50,000+ riders nationwide
        </p>
      </div>
    </section>
  );
};

export default Hero;
