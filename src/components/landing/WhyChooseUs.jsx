import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Users, Zap } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "in tech repairing and programming."
    },
    {
      icon: Star,
      title: "TOP Quality Repairs",
      description: "We restore, not just fix; new components for longer device life."
    },
    {
      icon: Users,
      title: "Exceptional Service",
      description: "Your satisfaction is our priority."
    },
    {
      icon: Zap,
      title: "Fast & Fair Pricing",
      description: "Quick turnaround, clear quotes."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          Why Choose <span className="text-purple-400">Xusbyte?</span>
        </motion.h2>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{ once: true }}>
          {features.map((feature, index) => (
            <motion.div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-2xl p-6 border border-purple-400/30 hover:border-purple-400 transition-all duration-300 hover:scale-105" variants={fadeInUp}>
              <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-purple-300">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;