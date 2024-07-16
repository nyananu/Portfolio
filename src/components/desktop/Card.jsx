import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React, { useState } from "react";


export const Card = ({ containerRef, top, left, rotate, className, title, children }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.div
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-white p-4 text-center rounded-md bg-solid",
        className
      )}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      // dragMomentum={false}
      dragElastic={0.65}
    >
      <h3 className="text-lg font-custom font-bold mb-2">---{title}---</h3>
      <div>{children}</div>
    </motion.div>
  );
};
