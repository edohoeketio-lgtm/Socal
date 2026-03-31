import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebflowAuthInjector from './components/WebflowAuthInjector';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import { shoppersData, farmersData, managersData } from './data/features';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function LandingPage() {
  return (
    <>
      <main>
        <Hero />
        <FeatureSection {...shoppersData} />
        <FeatureSection {...farmersData} />
        <FeatureSection {...managersData} />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <WebflowAuthInjector />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
