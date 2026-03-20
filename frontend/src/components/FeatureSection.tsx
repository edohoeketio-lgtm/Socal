import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  features: FeatureItem[];
  imagePath: string;
  imageAlt: string;
  reverse?: boolean;
  grayBackground?: boolean;
}

export default function FeatureSection({
  title,
  subtitle,
  icon,
  features,
  imagePath,
  imageAlt,
  reverse = false,
  grayBackground = false,
}: FeatureSectionProps) {
  return (
    <section className={`py-16 md:py-20 lg:py-28 overflow-hidden ${grayBackground ? 'bg-secondary' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col gap-12 lg:gap-24 items-center ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          
          {/* Text Content */}
          <div className="flex-1 w-full max-w-[540px] mx-auto lg:mx-0">
            <div className="w-12 h-12 lg:w-[52px] lg:h-[52px] rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-6 lg:mb-8">
              {icon}
            </div>
            
            <h2 className="text-[32px] sm:text-[36px] lg:text-[44px] font-bold text-textMain leading-[1.15] mb-4 lg:mb-5 tracking-tight whitespace-pre-line">
              {title.replace('\\n', ' ')}
            </h2>
            
            {subtitle && (
              <p className="text-[15px] sm:text-[17px] text-textMuted leading-[1.6] mb-8 lg:mb-12">
                {subtitle}
              </p>
            )}

            <div className="space-y-6 lg:space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 lg:gap-5">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-4 h-4 lg:w-[18px] lg:h-[18px] rounded-full bg-emerald-100/80 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 lg:w-[8px] lg:h-[8px] rounded-full bg-accent"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[16px] lg:text-[17px] font-semibold text-textMain mb-1 lg:mb-1.5 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-[14px] lg:text-[15px] text-textMuted leading-[1.6]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 w-full flex justify-center lg:justify-end px-2 sm:px-0">
            <img 
              src={imagePath} 
              alt={imageAlt}
              className="w-full max-w-full sm:max-w-[550px] h-auto object-cover rounded-xl shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
