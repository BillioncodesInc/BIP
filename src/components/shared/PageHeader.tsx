import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
}

export const PageHeader = ({ title, description, image, children }: PageHeaderProps) => {
  return (
    <div className="relative bg-blue-800 text-white pt-24 pb-16">
      {image && (
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-blue-100"
            >
              {description}
            </motion.p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;