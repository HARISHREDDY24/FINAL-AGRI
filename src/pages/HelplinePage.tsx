import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Headphones, 
  BookOpen,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

import { Player } from '@lottiefiles/react-lottie-player';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

const HelplinePage: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: 1,
      question: 'How can I identify a crop disease using AgriConnect?',
      answer: 'To identify a crop disease, open the Crop Doctor feature, take a clear photo of the affected plant part, and upload it. Our AI will analyze the image and provide you with a diagnosis and treatment recommendations.',
      isOpen: false
    },
    {
      id: 2,
      question: 'How do I list my crops for sale on the marketplace?',
      answer: 'To list your crops for sale, go to the Marketplace section, click on "List Your Crop" button, fill in the details including crop type, quantity, price, and quality, then submit the form. Buyers will be able to see your listing and contact you directly.',
      isOpen: false
    },
    {
      id: 3,
      question: 'Can I use AgriConnect without internet access?',
      answer: 'Yes, certain features of AgriConnect work without internet access. You can receive SMS weather alerts and use the IVR helpline by calling our support number. For features like Crop Doctor and Marketplace, you need internet connectivity.',
      isOpen: false
    },
    {
      id: 4,
      question: 'How accurate is the disease diagnosis?',
      answer: 'Our AI-powered disease diagnosis has an accuracy rate of over 90% for common crop diseases. The system is trained on thousands of images and is continuously improving. For best results, upload clear, well-lit photos of the affected plant parts.',
      isOpen: false
    },
    {
      id: 5,
      question: 'How do I get voice notes in my regional language?',
      answer: 'After receiving a disease diagnosis, you can click on the "Play Voice Note" button and select your preferred language from the dropdown menu. Our system supports multiple Indian languages including Hindi, Telugu, Tamil, Marathi, and more.',
      isOpen: false
    }
  ]);

  const toggleFAQ = (id: number) => {
    setFaqs(faqs.map(faq => 
      faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
    ));
  };

  const openIVRPopup = () => {
    alert('Connecting to IVR Helpline at +91 1800 123 4567...');
  };

  return (
    <div className="pt-20 pb-20 min-h-screen bg-gradient-to-b from-success-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Farmer Helpline</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Get expert advice and support for all your farming needs. Our helpline is available 24/7 to assist you.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* IVR Helpline Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-success-500 to-success-600 text-white p-6">
                <h2 className="text-2xl font-semibold mb-2">IVR Helpline</h2>
                <p className="text-white/80">
                  Call our toll-free number to speak with agricultural experts in your language.
                </p>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0">
                    <Player
                      autoplay
                      loop
                      src="https://lottie.host/2b1d8c89-20f8-41c7-95d8-33f819ab6ba2/e8wnX0QeQp.json"
                      style={{ height: '240px', width: '240px', margin: '0 auto' }}
                    />
                  </div>
                  <div className="md:w-1/2 md:pl-6">
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-semibold mb-4">24/7 Expert Support</h3>
                      <p className="text-neutral-600 mb-6">
                        Our helpline connects you with agricultural experts who can provide guidance on crop diseases, 
                        farming techniques, market prices, and more.
                      </p>
                      <div className="text-2xl font-bold text-success-600 mb-6 flex justify-center md:justify-start items-center">
                        <Phone size={24} className="mr-2" />
                        +91 1800 123 4567
                      </div>
                      <button 
                        onClick={openIVRPopup} 
                        className="btn-success"
                      >
                        <Headphones size={16} className="mr-2" />
                        Call Helpline Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Options */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6">Other Ways to Reach Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="card-glass"
              >
                <div className="p-3 rounded-full bg-success-100 w-fit mb-4">
                  <Mail size={24} className="text-success-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                <p className="text-neutral-600 mb-4">
                  Send us your queries and get a response within 24 hours.
                </p>
                <a href="mailto:support@agriconnect.com" className="text-success-600 font-medium hover:text-success-700">
                  support@agriconnect.com
                </a>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="card-glass"
              >
                <div className="p-3 rounded-full bg-success-100 w-fit mb-4">
                  <MessageCircle size={24} className="text-success-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">WhatsApp Support</h3>
                <p className="text-neutral-600 mb-4">
                  Chat with our support team via WhatsApp for quick assistance.
                </p>
                <a href="#" className="text-success-600 font-medium hover:text-success-700">
                  +91 98765 43210
                </a>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="card-glass"
              >
                <div className="p-3 rounded-full bg-success-100 w-fit mb-4">
                  <MapPin size={24} className="text-success-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Field Offices</h3>
                <p className="text-neutral-600 mb-4">
                  Visit our field offices for in-person assistance and demos.
                </p>
                <a href="#" className="text-success-600 font-medium hover:text-success-700">
                  Find Nearest Office
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* FAQs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.id} className="border rounded-lg overflow-hidden">
                    <button 
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full text-left p-4 flex justify-between items-center focus:outline-none hover:bg-neutral-50"
                    >
                      <span className="font-medium flex items-center">
                        <HelpCircle size={18} className="text-success-600 mr-2" />
                        {faq.question}
                      </span>
                      {faq.isOpen ? 
                        <ChevronUp size={18} /> : 
                        <ChevronDown size={18} />
                      }
                    </button>
                    {faq.isOpen && (
                      <div className="p-4 pt-0 border-t">
                        <p className="text-neutral-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Knowledge Resources */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Knowledge Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-success-100 flex-shrink-0">
                    <BookOpen size={24} className="text-success-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Crop Disease Guide</h3>
                    <p className="text-neutral-600 mb-4">
                      A comprehensive guide to identifying and treating common crop diseases in India.
                    </p>
                    <a href="#" className="text-success-600 font-medium hover:text-success-700">
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-success-100 flex-shrink-0">
                    <BookOpen size={24} className="text-success-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Seasonal Farming Calendar</h3>
                    <p className="text-neutral-600 mb-4">
                      Plan your farming activities with our seasonal calendar for different regions.
                    </p>
                    <a href="#" className="text-success-600 font-medium hover:text-success-700">
                      View Calendar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HelplinePage;