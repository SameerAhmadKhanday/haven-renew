import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingTextProps {
  texts: string[];
  rotationInterval?: number;
  className?: string;
}

const RotatingText = ({ texts, rotationInterval = 2500, className }: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % texts.length);
  }, [texts.length]);

  useEffect(() => {
    const interval = setInterval(next, rotationInterval);
    return () => clearInterval(interval);
  }, [next, rotationInterval]);

  const characters = useMemo(() => {
    return Array.from(texts[currentIndex]);
  }, [texts, currentIndex]);

  return (
    <span className={`inline-flex overflow-hidden ${className ?? ""}`}>
      <span className="sr-only">{texts[currentIndex]}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentIndex}
          className="inline-flex"
          aria-hidden="true"
        >
          {characters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                delay: i * 0.03,
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;
