"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <>
      <motion.div
        className="cursor hidden sm:block h-8 w-8 bg-gray-900 rounded-full fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        variants={variants}
        animate="default"
      />
    </>
  );
};

export default CustomCursor;
