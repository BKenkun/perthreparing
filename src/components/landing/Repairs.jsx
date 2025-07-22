import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Laptop, Monitor, Tablet, CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const Repairs = () => {
  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We Repair? <span className="text-purple-400">ALL Brands/Models!</span>
          </h2>
          <p className="text-xl text-gray-300">MacBook, iPhone, Samsung, Tablets, PCs, iMacs</p>
        </motion.div>
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{ once: true }}>
          {[
            { icon: Smartphone, label: "Mobiles" },
            { icon: Laptop, label: "Laptops" },
            { icon: Monitor, label: "Desktop PCs" },
            { icon: Tablet, label: "Tablets" }
          ].map((item, index) => (
            <motion.div key={index} className="text-center group" variants={fadeInUp}>
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-purple-400/30 group-hover:border-purple-400 transition-all duration-300 group-hover:scale-105">
                <item.icon className="w-12 h-12 mx-auto text-purple-400 mb-4" />
                <p className="font-semibold">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-400/30" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="text-orange-400">Experts in:</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Cracked screens",
              "Charging/power issues", 
              "Slowness optimization",
              "Liquid damage",
              "Data recovery",
              "Hardware upgrades"
            ].map((service, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Repairs;