import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "This platform has transformed how we handle purchasing. The buyer tools are intuitive and have saved us countless hours.",
    name: "Sarah Johnson",
    role: "Procurement Manager",
    company: "TechCorp Inc.",
    initials: "SJ",
    color: "bg-blue-600"
  },
  {
    quote: "Our sales increased by 40% after implementing this platform. The seller features are best-in-class.",
    name: "Mike Rhee",
    role: "Market Manager",
    company: "Ha's Apple Farm",
    initials: "MR",
    color: "bg-blue-600"
  },
  {
    quote: "The management dashboard gives me complete visibility across all operations. It's an essential tool for our business.",
    name: "Emily Rodriguez",
    role: "Operations Manager",
    company: "NextGen Enterprises",
    initials: "ER",
    color: "bg-blue-600"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-textMain mb-4 leading-tight">
            Trusted by Markets,<br className="sm:hidden" /> Farmers and Shoppers
          </h2>
          <p className="text-[15px] sm:text-[17px] text-textMuted max-w-2xl mx-auto px-2">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1050px] mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-6 lg:p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col h-full">
              <div className="flex gap-1 mb-4 lg:mb-5">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-[16px] h-[16px] lg:w-[18px] lg:h-[18px] fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-[14px] lg:text-[15px] font-medium text-textMuted italic leading-[1.65] mb-auto pb-6 lg:pb-8">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-3 lg:gap-4 mt-auto">
                <div className={`w-9 h-9 lg:w-10 lg:h-10 rounded-full ${t.color} flex items-center justify-center text-white font-semibold text-xs lg:text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-[14px] lg:text-[14.5px] font-bold text-textMain leading-tight mb-0.5">
                    {t.name}
                  </h4>
                  <p className="text-[12px] lg:text-[13px] text-textMuted leading-snug">
                    {t.role}<br/>{t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
