"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function StatItem({ number, label, duration, index }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = number / ((duration * 1000) / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [number, duration]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-background rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 mt-[50px]
                 hover:border-green-600 transition-all duration-300 group flex flex-col items-center justify-center p-6"
      data-aos="fade-up"
      data-aos-delay={index * 100} // AOS delay for staggered animation
    >
      <span className="text-green-600 text-4xl font-playpen font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
        {count}+
      </span>
      <span className="text-gray-600 dark:text-gray-300 text-sm font-josefin uppercase tracking-wider text-center group-hover:text-green-600 transition-colors duration-300">
        {label.split(" ").map((word, i) => (
          <span key={i} className="block">{word}</span>
        ))}
      </span>
    </motion.div>
  );
}

export default function Counter({ statsData }) {
  // Helper function to convert camel case to spaced words
  const formatLabel = (key) => {
    return key
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before uppercase letters
      .replace(/_/g, " ") // Replace underscores with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
  };

  const transformedStats = Object.entries(statsData).map(([key, value]) => ({
    label: formatLabel(key),
    number: value,
    duration: 2, // Adjust duration as needed
  }));

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a default duration
  }, []);

  return (
    <div className="container mx-auto px-4 pt-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl mx-auto cursor-pointer"
      >
        {transformedStats.map((stat, index) => (
          <StatItem
            key={index}
            number={stat.number}
            label={stat.label}
            duration={stat.duration}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
}
