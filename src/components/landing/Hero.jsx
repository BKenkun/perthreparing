
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Clock, Wrench, MessageCircle, Mail, Phone, CheckCircle, Zap, AlertTriangle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const Hero = () => {
  const handleWhatsApp = () => window.open('https://api.whatsapp.com/send?phone=61456534558', '_blank');
  const handleEmail = () => window.open('mailto:xusbyte@gmail.com', '_blank');
  const handleCall = () => window.open('tel:+61456534558', '_blank');

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-pink-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-400 rounded-full animate-pulse delay-500"></div>
      </div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-8" initial="initial" animate="animate" variants={staggerContainer}>
            <motion.div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400 rounded-full px-4 py-2 text-red-300" variants={fadeInUp}>
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">URGENT! Every minute counts</span>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Is Your Device{' '}
                <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                  Failing You
                </span>{' '}
                in Perth?
              </h1>
              <p className="text-xl md:text-2xl text-blue-300 font-semibold mt-4">
                Get Your Productivity Back TODAY!
              </p>
            </motion.div>
            <motion.div className="space-y-4" variants={fadeInUp}>
              <div className="flex items-start gap-3 text-lg">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span>PC, Mac, or mobile running slow, wasting valuable time?</span>
              </div>
              <div className="flex items-start gap-3 text-lg">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span>Annoying errors or crashes ruining your day?</span>
              </div>
              <div className="flex items-start gap-3 text-lg">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span>Cracked screens or battery issues?</span>
              </div>
            </motion.div>
            <motion.div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400 rounded-2xl p-6" variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-3">
                <Wrench className="w-6 h-6 text-green-400" />
                <h2 className="text-xl font-bold text-green-300">GET A FREE, NO-OBLIGATION DIAGNOSIS!</h2>
              </div>
              <p className="text-gray-300">
                Find out exactly what's wrong and its cost, completely free.
              </p>
            </motion.div>
            <motion.div className="space-y-4" variants={fadeInUp}>
              <p className="text-lg font-semibold">Ready for a solution? Contact Us!</p>
              <Button onClick={handleWhatsApp} className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </motion.div>
          </motion.div>
          <motion.div className="relative" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img  alt="Technician repairing a complex electronic device with precision tools" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1658212662417-a2a76efe25df" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-green-500 rounded-full p-3 shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-4 left-4 bg-blue-500 rounded-full p-3 shadow-lg animate-pulse">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <motion.div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center" variants={fadeInUp}>
              <Button onClick={handleEmail} variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-500/20 px-6 py-3">
                <Mail className="w-4 h-4 mr-2" />
                Email for a Quote
              </Button>
              <Button onClick={handleCall} variant="outline" className="border-blue-400 text-blue-300 hover:bg-blue-500/20 px-6 py-3">
                <Phone className="w-4 h-4 mr-2" />
                Call Us Directly
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
