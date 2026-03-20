import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="bg-primary py-16 md:py-20 lg:py-24 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-bold text-white leading-[1.15] mb-5 lg:mb-6">
          Ready to join our<br className="hidden sm:block" /> marketplace?
        </h2>
        <p className="text-[15px] sm:text-[17px] text-white/90 mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of customers already using Farmersmarketsocal to buy, sell and manage markets across southern California
        </p>
        <button className="bg-[#0f172a] hover:bg-black text-white px-6 py-3 lg:px-7 rounded-lg text-[14px] lg:text-[15px] font-medium flex items-center gap-2 transition-colors mx-auto w-full sm:w-auto justify-center">
          Contact Us <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </section>
  );
}
