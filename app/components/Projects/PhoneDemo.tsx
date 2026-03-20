"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

interface PhoneDemoProps {
  isOpen: boolean;
  onClose: () => void;
  demoUrl: string;
  title: string;
  layoutId: string;
}

export default function PhoneDemo({
  isOpen,
  onClose,
  demoUrl,
  title,
  layoutId,
}: PhoneDemoProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0"
            style={{ background: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(8px)" }}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Phone frame */}
          <motion.div
            layoutId={layoutId}
            className="relative z-10 flex flex-col"
            style={{
              width: "375px",
              height: "780px",
              maxHeight: "90vh",
              borderRadius: "44px",
              background: "var(--bg-secondary, #1a1a2e)",
              border: "3px solid var(--border-color, #333)",
              boxShadow: "0 25px 80px rgba(0, 0, 0, 0.6), 0 0 40px rgba(124, 58, 237, 0.15)",
              padding: "12px",
            }}
            transition={{
              layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
            }}
          >
            {/* Notch */}
            <div className="flex justify-center mb-2">
              <div
                className="rounded-full"
                style={{
                  width: "120px",
                  height: "28px",
                  background: "var(--bg-primary, #0a0a1a)",
                  borderRadius: "14px",
                }}
              />
            </div>

            {/* Close button */}
            <motion.button
              onClick={onClose}
              className="absolute top-2 right-2 z-20 flex items-center justify-center rounded-full transition-colors"
              style={{
                width: "32px",
                height: "32px",
                background: "rgba(255, 255, 255, 0.1)",
                color: "var(--text-secondary, #999)",
              }}
              whileHover={{ scale: 1.1, background: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <IoClose size={18} />
            </motion.button>

            {/* App title bar */}
            <div
              className="text-center py-1.5 text-xs font-medium tracking-wide"
              style={{ color: "var(--text-muted, #666)" }}
            >
              {title}
            </div>

            {/* Screen / iframe */}
            <motion.div
              className="flex-1 overflow-hidden"
              style={{ borderRadius: "32px", background: "#fff" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.3 }}
            >
              <iframe
                src={demoUrl}
                title={`${title} Demo`}
                className="w-full h-full border-0"
                style={{ borderRadius: "32px" }}
                allow="clipboard-read; clipboard-write"
              />
            </motion.div>

            {/* Home indicator */}
            <div className="flex justify-center mt-2">
              <div
                className="rounded-full"
                style={{
                  width: "134px",
                  height: "5px",
                  background: "var(--text-muted, #666)",
                  opacity: 0.3,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
