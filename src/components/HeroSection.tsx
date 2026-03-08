import heroImg from "@/assets/hero-shipyard.jpg";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Shipyard at dusk"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 bg-gradient-hero" />

    <div className="relative z-10 container mx-auto px-6 text-center pt-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl mx-auto"
      >
        Engineering Excellence for the{" "}
        <span className="text-gradient">Maritime Industry</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#services"
          className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold hover:opacity-90 transition-opacity text-sm"
        >
          Explore Services
        </a>
        <a
          href="#contact"
          className="border border-border text-foreground px-8 py-3.5 rounded-md font-semibold hover:bg-muted transition-colors text-sm"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
