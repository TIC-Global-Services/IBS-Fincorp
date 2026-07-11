"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConsultationForm } from './consultation-form';
import { CloseIcon } from '@/components/ui/icons';

export const OPEN_MODAL_EVENT = 'open-consultation-modal';

export const openConsultationModal = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(OPEN_MODAL_EVENT));
  }
};

export function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener(OPEN_MODAL_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_MODAL_EVENT, handleOpen);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative w-full max-w-[720px] rounded-2xl shadow-2xl overflow-hidden"
            style={{ background: '#1c1c1e', maxHeight: '90vh' }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 text-white/50 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-1.5"
            >
              <CloseIcon width={20} height={20} strokeWidth={1.5} />
            </button>

            {/* Tally iframe */}
            <div className="overflow-y-auto pt-6" style={{ maxHeight: '90vh' }}>
              <ConsultationForm />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
