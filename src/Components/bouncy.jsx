// AnimatedText.js
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <h1>ISRO</h1>
    </motion.div>  );
};

export default AnimatedText;
