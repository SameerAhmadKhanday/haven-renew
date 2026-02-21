import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import RotatingText from "./RotatingText";
import heroConstruction from "@/assets/hero-construction.jpg";
import heroReconstruction from "@/assets/hero-reconstruction.jpg";
import heroRenovation from "@/assets/hero-renovation.jpg";

const heroImages = [
  { src: heroConstruction, alt: "Modern house under construction at golden hour" },
  { src: heroReconstruction, alt: "House reconstruction with new roof framing" },
  { src: heroRenovation, alt: "Beautifully renovated modern luxury home" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={heroImages[currentIndex].src}
            alt={heroImages[currentIndex].alt}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-semibold tracking-widest uppercase text-sm mb-4"
        >
          Construction · Reconstruction · Renovation
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-secondary-foreground leading-tight max-w-4xl mx-auto"
        >
          Building Dreams Into{" "}
          <RotatingText
            texts={["Reality", "Homes", "Legacy"]}
            className="text-primary"
            rotationInterval={3000}
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-secondary-foreground/70 text-lg max-w-2xl mx-auto"
        >
          M-Square Architects — expert civil engineering services transforming homes with precision craftsmanship,
          structural integrity, and modern design excellence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/projects"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold hover:opacity-90 transition-opacity text-base"
          >
            View Our Work
          </Link>
          <Link
            to="/contact"
            className="border border-secondary-foreground/30 text-secondary-foreground px-8 py-3.5 rounded-md font-semibold hover:border-primary hover:text-primary transition-colors text-base"
          >
            Book Your Session
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary-foreground/50"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
