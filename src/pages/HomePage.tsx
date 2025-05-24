import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { 
  Sprout, 
  Leaf, 
  ShoppingBag, 
  Cloud, 
  Phone, 
  Star,
  ArrowRight,
  Check
} from 'lucide-react';

// Components
import FeatureCard from '../components/ui/FeatureCard';
import TestimonialCard from '../components/ui/TestimonialCard';

const HomePage: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const features = [
    {
      id: 1,
      title: 'AI Crop Doctor',
      description: 'Upload photos of your crops to get instant disease diagnosis and treatment recommendations.',
      icon: <Leaf className="text-primary-500" size={24} />,
      link: '/crop-doctor'
    },
    {
      id: 2,
      title: 'Farmer Marketplace',
      description: 'Connect directly with buyers and get the best prices for your produce without middlemen.',
      icon: <ShoppingBag className="text-secondary-500" size={24} />,
      link: '/marketplace'
    },
    {
      id: 3,
      title: 'Weather Alerts',
      description: 'Receive timely weather alerts and forecasts to plan your farming activities effectively.',
      icon: <Cloud className="text-accent-500" size={24} />,
      link: '/weather'
    },
    {
      id: 4,
      title: 'Farmer Helpline',
      description: 'Get expert advice and support through our dedicated helpline service.',
      icon: <Phone className="text-success-500" size={24} />,
      link: '/helpline'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Haryana',
      quote: 'AgriConnect helped me identify a disease in my wheat crop early, saving me from a huge loss.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'Lakshmi Devi',
      location: 'Tamil Nadu',
      quote: 'I found buyers directly through the marketplace and got 20% more profit than selling to middlemen.',
      rating: 5,
      image: 'https://images.pexels.com/photos/7551665/pexels-photo-7551665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'Mohan Singh',
      location: 'Punjab',
      quote: 'The weather alerts are accurate and helped me plan my irrigation schedule efficiently.',
      rating: 4,
      image: 'https://images.pexels.com/photos/5648031/pexels-photo-5648031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Parallax 
        bgImage="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        strength={500}
        className="mb-20"
      >
        <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-50">
          <div className="container mx-auto px-4 py-20 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 inline-flex items-center justify-center"
            >
              <Sprout size={40} className="mr-2" />
              <h1 className="text-4xl md:text-6xl font-bold">AgriConnect</h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              AI-Powered Crop Doctor & Farmer Marketplace
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg mb-12 max-w-3xl mx-auto"
            >
              Empowering farmers with advanced technology for better yields and higher profits
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/crop-doctor" className="btn-primary group">
                <span>Try Crop Doctor</span>
                <ArrowRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/marketplace" className="btn-outline text-white border-white">
                <span>Explore Marketplace</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </Parallax>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h6 className="text-primary-600 font-semibold mb-2">OUR SERVICES</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How AgriConnect Helps Farmers</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our platform provides comprehensive tools and services to help farmers improve productivity, 
              increase profits, and make informed decisions.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature) => (
              <motion.div key={feature.id} variants={itemVariants}>
                <FeatureCard 
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  link={feature.link}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h6 className="text-primary-600 font-semibold mb-2">HOW IT WORKS</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Process for Farmers</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our platform is designed to be easy to use, even for farmers with limited technical knowledge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-glass relative"
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
              <h4 className="text-xl font-semibold mb-4 mt-4">Take a Photo</h4>
              <p className="text-neutral-600 mb-4">
                Simply take a photo of your crop showing signs of disease using your smartphone.
              </p>
              <div className="rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/4497631/pexels-photo-4497631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Farmer taking photo" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-glass relative"
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
              <h4 className="text-xl font-semibold mb-4 mt-4">Get AI Diagnosis</h4>
              <p className="text-neutral-600 mb-4">
                Our AI system analyzes the image and provides an accurate disease diagnosis instantly.
              </p>
              <div className="rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/8471961/pexels-photo-8471961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="AI diagnosis" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-glass relative"
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
              <h4 className="text-xl font-semibold mb-4 mt-4">Receive Treatment Plan</h4>
              <p className="text-neutral-600 mb-4">
                Get detailed treatment recommendations and remedy options in your local language.
              </p>
              <div className="rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/2219485/pexels-photo-2219485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Treatment plan" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-accent-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h6 className="text-accent-600 font-semibold mb-2">SUCCESS STORIES</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Farmers Say About Us</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Hear from farmers who have successfully used AgriConnect to improve their farming practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard 
                  name={testimonial.name}
                  location={testimonial.location}
                  quote={testimonial.quote}
                  rating={testimonial.rating}
                  image={testimonial.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Transform Your Farming?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg mb-8"
            >
              Join thousands of farmers who are already benefiting from AgriConnect's innovative solutions.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/crop-doctor" className="btn bg-white text-primary-600 hover:bg-primary-50">
                Try Crop Doctor Now
              </Link>
              <Link to="/marketplace" className="btn bg-transparent border border-white text-white hover:bg-primary-700">
                Explore Marketplace
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;