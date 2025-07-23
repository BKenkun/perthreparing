
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Settings, CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const Process = () => {
  const steps = [
    {
      step: "1",
      title: "Contact and Schedule",
      description: "(Essential Appointment)",
      icon: MessageCircle
    },
    {
      step: "2", 
      title: "We Meet in Perth",
      description: "Professional Diagnosis",
      icon: Settings
    },
    {
      step: "3",
      title: "Pick Up and Enjoy!",
      description: "Your Device Working Perfectly",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          Proceso <span className="text-green-400">Simple</span>
        </motion.h2>
        <motion.div className="grid md:grid-cols-3 gap-8" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{ once: true }}>
          {steps.map((step, index) => (
            <motion.div key={index} className="text-center relative" variants={fadeInUp}>
              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-green-400/30">
                <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-slate-900">
                  {step.step}
                </div>
                <step.icon className="w-8 h-8 mx-auto text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-400 to-blue-400"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
