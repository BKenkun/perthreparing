import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Faq = () => {
    const faqs = [
        {
            question: "Is the diagnosis really free?",
            answer: "Absolutely! We perform a complete diagnosis of your device at no cost or obligation. You'll know exactly what the problem is and how much the repair will cost before you decide."
        },
        {
            question: "How long do repairs take?",
            answer: "Our goal is speed. Many common repairs are completed the same day. For more complex issues, we'll give you a clear estimated time after the diagnosis."
        },
        {
            question: "Do I need an appointment?",
            answer: "Yes, an appointment is essential. This allows us to dedicate the necessary time for a quality diagnosis and service for your device. Contact us to schedule easily."
        }
    ];

    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-300">Quick answers to your most common questions.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Accordion type="single" collapsible className="w-full bg-slate-800/50 rounded-lg p-6 border border-purple-400/30">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-lg text-left text-purple-300 hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-300">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};

export default Faq;