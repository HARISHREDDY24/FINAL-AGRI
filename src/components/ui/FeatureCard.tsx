import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, link }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="card-glass h-full"
    >
      <div className="mb-4 p-3 rounded-full bg-primary-50 w-fit">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group"
      >
        Learn more 
        <ArrowRight size={16} className="ml-1 transform transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};

export default FeatureCard;