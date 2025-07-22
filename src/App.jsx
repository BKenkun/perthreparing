
import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/landing/Hero';
import Repairs from '@/components/landing/Repairs';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import Process from '@/components/landing/Process';
import Faq from '@/components/landing/Faq';
import FinalCta from '@/components/landing/FinalCta';
import Footer from '@/components/landing/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Xusbyte - Expert Device Repair Solutions in Perth | PC, Mac, Mobile</title>
        <meta name="description" content="Professional device repair services in Perth. Expert repairs for PC, Mac, iPhone, Samsung, tablets. 10+ years of experience. Free diagnosis. Fast turnaround guaranteed." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white overflow-x-hidden">
        <main>
          <Hero />
          <Repairs />
          <WhyChooseUs />
          <Process />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
