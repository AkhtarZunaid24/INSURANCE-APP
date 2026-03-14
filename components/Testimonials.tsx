import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marco S.',
    role: 'E-bike Courier',
    quote: 'RiderGuard is a lifesaver. When I had a collision last month, the claims process was incredibly fast. I was back on the road in no time.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Sarah J.',
    role: 'Full-time Delivery Driver',
    quote: 'The liability coverage gives me huge peace of mind. It’s affordable and specifically designed for what I do. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'David K.',
    role: 'Scooter Rider',
    quote: 'Finally, an insurance company that understands gig workers. The high-contrast app is actually useful when I’m checking my policy in the sun.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-4 uppercase">RIDER VOICES</h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto font-medium">
            Hear from the thousands of professionals who trust RiderGuard every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col"
            >
              <div className="mb-6">
                <Quote className="w-10 h-10 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-lg font-bold text-black mb-8 flex-1 leading-tight">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-100">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full border-2 border-black object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-black text-black uppercase tracking-tight">{t.name}</h4>
                  <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
