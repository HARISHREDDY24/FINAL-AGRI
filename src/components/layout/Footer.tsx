import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Sprout size={24} />
              <span className="text-xl font-bold">AgriConnect</span>
            </Link>
            <p className="text-primary-100 mb-4">
              Empowering farmers with AI-powered crop disease diagnosis and marketplace solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-100 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-100 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-100 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h6 className="font-semibold text-lg mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-100 hover:text-white transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/crop-doctor" className="text-primary-100 hover:text-white transition-colors duration-200">Crop Doctor</Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-primary-100 hover:text-white transition-colors duration-200">Marketplace</Link>
              </li>
              <li>
                <Link to="/weather" className="text-primary-100 hover:text-white transition-colors duration-200">Weather</Link>
              </li>
              <li>
                <Link to="/helpline" className="text-primary-100 hover:text-white transition-colors duration-200">Helpline</Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-lg mb-4">Resources</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors duration-200">Crop Disease Guide</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors duration-200">Market Trends</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors duration-200">Farming Tips</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors duration-200">Success Stories</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors duration-200">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-lg mb-4">Contact Us</h6>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-primary-100">123 Farming Road, Agriculture District, Rural Zone - 560001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} />
                <span className="text-primary-100">+91 12345 67890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} />
                <span className="text-primary-100">support@agriconnect.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-200 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AgriConnect. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-primary-200">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;