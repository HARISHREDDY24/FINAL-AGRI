import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, location, quote, rating, image }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="card-glass h-full"
    >
      <div className="flex items-center mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-neutral-500 text-sm">{location}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "text-warning-500 fill-warning-500" : "text-neutral-300"} 
          />
        ))}
      </div>
      <p className="text-neutral-600 italic">"{quote}"</p>
    </motion.div>
  );
};

export default TestimonialCard;