import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative bg-primary overflow-hidden pt-14 pb-16 lg:pt-20 lg:pb-24">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="text-white max-w-xl mx-auto text-center lg:text-left">
            <h1 className="text-[40px] sm:text-5xl lg:text-[56px] font-bold leading-[1.15] mb-5 tracking-tight">
              Customer<br className="hidden sm:block"/> solutions for<br/>Farmers Markets
            </h1>
            <p className="text-[15px] sm:text-[1.1rem] lg:text-[1.15rem] text-white/90 mb-8 whitespace-pre-line leading-[1.6]">
              Whether you're buying, selling, or<br className="hidden sm:block"/>
              managing—find out how<br className="hidden sm:block"/>
              farmersmarketsocal is helping all<br className="hidden sm:block"/>
              members of the community
            </p>
            
            <Link to="/register" className="bg-[#0f172a] hover:bg-black text-white px-6 py-3 rounded-lg text-[15px] font-medium inline-flex items-center justify-center lg:justify-start gap-2 transition-colors mb-10 w-full sm:w-auto mx-auto lg:mx-0">
              Get Started <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 text-left">
              {[
                'Free to join',
                'No monthly fees',
                'No obligation'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90 text-[15px] sm:text-base font-medium">
                  <CheckCircle2 className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column / Image */}
          <div className="relative mt-8 lg:mt-0 px-2 sm:px-0">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/Assets/Hero Image.png" 
                alt="People at farmers market" 
                className="w-full object-cover"
              />
            </div>
            {/* Overlay Card - Adjusted for mobile limits */}
            <div className="absolute -bottom-4 right-0 sm:-left-6 sm:right-auto sm:-bottom-6 bg-white rounded-xl p-4 sm:p-5 shadow-xl min-w-[140px] sm:min-w-[150px] border border-gray-100/50">
              <p className="text-[10px] sm:text-[11px] text-textMuted font-medium mb-1 uppercase tracking-wide">Trusted by</p>
              <p className="text-xl sm:text-2xl font-bold text-textMain leading-none mb-1">1,000+</p>
              <p className="text-[11px] sm:text-xs font-medium text-textMuted leading-snug mb-2 sm:mb-3">
                Community<br/>Members
              </p>
              {/* Added profile avatars per user request */}
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/100?img=32" alt="Community member" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border-[1.5px] border-white" />
                <img src="https://i.pravatar.cc/100?img=44" alt="Community member" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border-[1.5px] border-white" />
                <img src="https://i.pravatar.cc/100?img=68" alt="Community member" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border-[1.5px] border-white" />
                <img src="https://i.pravatar.cc/100?img=12" alt="Community member" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border-[1.5px] border-white" />
                <img src="https://i.pravatar.cc/100?img=21" alt="Community member" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border-[1.5px] border-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
