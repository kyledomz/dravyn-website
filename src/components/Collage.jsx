import React from "react";
import "./Collage.css";
import { motion } from "framer-motion";

function Collage() {

    const images = [
    { src: "clothes.jpg", alt: "Description 1", text: "Justin" },
    { src: "clothes.jpg", alt: "Description 2", text: "Justin" },
    { src: "clothes.jpg", alt: "Description 3", text: "Justin" },
  ];
    return (
        <div className="collage">
      {images.map((img, i) => (
        <motion.div
          className="collage-image"
          key={i}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="image-text">{img.text}</div>
          <img src={img.src} alt={img.alt} />
        </motion.div>
      ))}
    </div>
    ) 
}

export default Collage;