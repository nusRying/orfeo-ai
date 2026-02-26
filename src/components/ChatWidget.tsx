'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquarePlus } from 'lucide-react';

export default function ChatWidget() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-white shadow-lg shadow-accent/20 hover:scale-110 transition-transform duration-300">
        <MessageSquarePlus size={24} />
      </button>
    </motion.div>
  );
}
