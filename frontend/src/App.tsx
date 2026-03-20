import React from 'react';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import { shoppersData, farmersData, managersData } from './data/features';

function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <FeatureSection {...shoppersData} />
        <FeatureSection {...farmersData} />
        <FeatureSection {...managersData} />
        <TestimonialsSection />
        <CTASection />
      </main>
    </div>
  );
}

export default App;
