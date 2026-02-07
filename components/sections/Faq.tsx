"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqData } from "@/constants/data";

const FaqItem = ({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.03, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`mb-4 overflow-hidden rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-[#F37036]/50 bg-white/5 shadow-[0_0_20px_rgba(243,112,54,0.1)]"
          : "border-white/10 bg-white/2 hover:border-white/20"
      }`}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-5 text-left md:p-6"
      >
        <div className="flex items-center gap-4">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-lg ${
              isOpen ? "bg-[#F37036] text-white" : "bg-white/10 text-gray-400"
            } transition-colors duration-300`}
          >
            <HelpCircle size={18} />
          </div>
          <span
            className={`text-lg font-medium md:text-xl ${isOpen ? "text-white" : "text-gray-300"}`}
          >
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`${isOpen ? "text-[#F37036]" : "text-gray-500"}`}
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.25, ease: "easeOut" },
              opacity: { duration: 0.15 },
            }}
          >
            <div className="border-t border-white/5 p-5 pt-0 text-gray-400 md:p-6 md:pt-0 leading-relaxed">
              <p className="pl-12">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden py-24 px-4 md:px-8"
    >
      {/* Background Orbs */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#F37036]/10 blur-[120px]" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#007DC5]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full bg-[#F37036]/10 px-4 py-1.5 text-sm font-semibold tracking-wider text-[#F37036] uppercase"
          >
            Got Questions?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Frequently Asked{" "}
            <span className="bg-linear-to-r from-[#F37036] to-[#007DC5] bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-lg text-gray-400"
          >
            Everything you need to know about how Stiryum is revolutionizing the
            recruitment process with AI technology.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400">
            Still have questions?{" "}
            <a
              href="mailto:solutions@divdash.com"
              className="font-semibold text-[#F37036] hover:underline"
            >
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
