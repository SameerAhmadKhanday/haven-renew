import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingTextProps {
  texts: string[];
  rotationInterval?: number;
  className?: string;
  staggerDuration?: number;
  transition?: any;
  initial?: any;
  animate?: any;
  exit?: any;
}

const RotatingText = ({
  texts,
  rotationInterval = 2500,
  className,
  staggerDuration = 0.03,
  transition = { type: "spring", damping: 25, stiffness: 300 },
  initial = { y: "100%", opacity: 0 },
  animate = { y: 0, opacity: 1 },
  exit = { y: "-120%", opacity: 0 },
}: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % texts.length);
  }, [texts.length]);

  useEffect(() => {
    const interval = setInterval(next, rotationInterval);
    return () => clearInterval(interval);
  }, [next, rotationInterval]);

  const elements = useMemo(() => {
    const currentText = texts[currentIndex];
    const words = currentText.split(" ");
    return words.map((word, i) => ({
      characters: Array.from(word),
      needsSpace: i !== words.length - 1,
    }));
  }, [texts, currentIndex]);

  const totalChars = useMemo(() => {
    return elements.reduce((sum, word) => sum + word.characters.length, 0);
  }, [elements]);

  return (
    <motion.span
      className={`inline-flex overflow-hidden ${className ?? ""}`}
      layout
      transition={transition}
    >
      <span className="sr-only">{texts[currentIndex]}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentIndex}
          className="inline-flex flex-wrap"
          aria-hidden="true"
          layout
        >
          {elements.map((wordObj, wordIndex, array) => {
            const previousCharsCount = array
              .slice(0, wordIndex)
              .reduce((sum, word) => sum + word.characters.length, 0);

            return (
              <span key={wordIndex} className="inline-flex">
                {wordObj.characters.map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{
                      ...transition,
                      delay: (previousCharsCount + charIndex) * staggerDuration,
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                {wordObj.needsSpace && (
                  <span className="inline-block" style={{ whiteSpace: "pre" }}>
                    {" "}
                  </span>
                )}
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
};

export default RotatingText;
