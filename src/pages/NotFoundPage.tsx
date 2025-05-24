import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, AlertCircle } from 'lucide-react';

import { Player } from '@lottiefiles/react-lottie-player';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-white px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="mb-6">
          <Player
            autoplay
            loop
            src="https://lottie.host/0762b8e0-db96-49ca-bcf4-afa1b4ae1db6/rIDvOEeQAx.json"
            style={{ height: '240px', width: '240px', margin: '0 auto' }}
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-700">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
        
        <p className="text-neutral-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <Link 
          to="/" 
          className="btn-primary"
        >
          <Home size={16} className="mr-2" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;