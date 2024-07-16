import React from "react";
import { motion } from "framer-motion";
import cardData from "./data/mCardData";

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const MobileCard = ({ heading, children, colorClass }) => {
  return (
    <motion.div
      className={`card-container ${colorClass} p-8 rounded-xl shadow-lg font-custom text-black text-center`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants}
    >
      <h3 className="text-lg font-custom font-bold mb-2">{heading}</h3>
      <div>{children}</div>
    </motion.div>
  );
}

export const MobileCardMap = () => {
  return (
    <div className="space-y-24 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
      {cardData.map(({ heading, children, colorClass }, index) => (
        <MobileCard 
          key={index} 
          heading={heading} 
          children={children} 
          colorClass={colorClass} 
        />
      ))}
    </div>
  );
}
