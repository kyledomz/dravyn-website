import React from "react";
import "./Hero.css";
import { motion } from 'framer-motion';

function Hero() {
  return (
   <div className="hero-wrapper">
      <motion.img 
        src="/clothe.png"
        alt="Background"
        className="hero-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}

export default Hero;