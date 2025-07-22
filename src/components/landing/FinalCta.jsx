import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Zap } from 'lucide-react';

const FinalCta = () => {
    const handleWhatsApp = () => window.open('https://api.whatsapp.com/send?phone=61456534558', '_blank');
    const handleCall = () => window.open('tel:+61456534558', '_blank');

    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    className="relative rounded-2xl overflow-hidden p-8 md:p-12 border-2 border-green-400/50 text-center bg-gradient-to-r from-green-500/10 to-blue-500/10"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="absolute -inset-2 bg-slate-900/70 backdrop-blur-sm"></div>
                    <div className="relative z-10">
                        <motion.div 
                            className="inline-block p-4 bg-white/10 rounded-full mb-6"
                            animate={{ rotate: [0, 10, -10, 0], transition: { duration: 1, repeat: Infinity, repeatType: 'mirror' } }}
                        >
                            <Zap className="w-10 h-10 text-yellow-300" />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Ready to Get Your Device Fixed?
                        </h2>
                        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                            Don't wait any longer. Get your productivity back and ditch the tech frustrations today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={handleWhatsApp}
                                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                                size="lg"
                            >
                                <MessageCircle className="w-6 h-6 mr-2" />
                                Chat on WhatsApp Now
                            </Button>
                            <Button
                                onClick={handleCall}
                                variant="outline"
                                className="border-blue-400 text-blue-300 hover:bg-blue-500/20 px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
                                size="lg"
                            >
                                <Phone className="w-6 h-6 mr-2" />
                                Call +61 456 534 558
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCta;