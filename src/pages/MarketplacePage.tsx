import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Phone, 
  ChevronDown, 
  Plus, 
  ShoppingCart, 
  TrendingUp,
  Filter,
  Search,
  CheckCircle
} from 'lucide-react';

// Mock data
interface Crop {
  id: number;
  name: string;
  quantity: string;
  price: number;
  location: string;
  quality: string;
  farmer: string;
  contact: string;
  postedDate: string;
  marketPrice: number;
  priceChange: number;
  image: string;
}

interface Buyer {
  id: number;
  name: string;
  company: string;
  location: string;
  buying: string[];
  contact: string;
  verified: boolean;
}

const crops: Crop[] = [
  {
    id: 1,
    name: 'Potatoes',
    quantity: '100 kg',
    price: 15.50,
    location: 'Haryana',
    quality: 'Premium',
    farmer: 'Rajesh Kumar',
    contact: '+91 98765 43210',
    postedDate: '2 days ago',
    marketPrice: 14.25,
    priceChange: 8.77,
    image: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Tomatoes',
    quantity: '50 kg',
    price: 25.00,
    location: 'Punjab',
    quality: 'Standard',
    farmer: 'Sukhwinder Singh',
    contact: '+91 87654 32109',
    postedDate: '1 day ago',
    marketPrice: 22.75,
    priceChange: 9.89,
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Rice',
    quantity: '200 kg',
    price: 35.75,
    location: 'West Bengal',
    quality: 'Premium',
    farmer: 'Amit Das',
    contact: '+91 76543 21098',
    postedDate: '3 days ago',
    marketPrice: 33.50,
    priceChange: 6.72,
    image: 'https://images.pexels.com/photos/1886930/pexels-photo-1886930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    name: 'Wheat',
    quantity: '150 kg',
    price: 22.25,
    location: 'Uttar Pradesh',
    quality: 'Standard',
    farmer: 'Vijay Sharma',
    contact: '+91 65432 10987',
    postedDate: 'Today',
    marketPrice: 21.00,
    priceChange: 5.95,
    image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    name: 'Onions',
    quantity: '75 kg',
    price: 18.50,
    location: 'Maharashtra',
    quality: 'Premium',
    farmer: 'Ganesh Patil',
    contact: '+91 54321 09876',
    postedDate: '2 days ago',
    marketPrice: 17.25,
    priceChange: 7.25,
    image: 'https://images.pexels.com/photos/144206/pexels-photo-144206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const buyers: Buyer[] = [
  {
    id: 1,
    name: 'Agrotech Industries',
    company: 'Agrotech Ltd.',
    location: 'Delhi NCR',
    buying: ['Potatoes', 'Tomatoes', 'Onions'],
    contact: '+91 12345 67890',
    verified: true
  },
  {
    id: 2,
    name: 'Fresh Foods Co.',
    company: 'Fresh Foods Private Ltd.',
    location: 'Mumbai',
    buying: ['Rice', 'Wheat', 'Pulses'],
    contact: '+91 23456 78901',
    verified: true
  },
  {
    id: 3,
    name: 'Rural Exports',
    company: 'Rural Exports Inc.',
    location: 'Chennai',
    buying: ['Rice', 'Spices', 'Cotton'],
    contact: '+91 34567 89012',
    verified: false
  }
];

const MarketplacePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sell' | 'buy'>('sell');
  const [searchTerm, setSearchTerm] = useState('');
  const [smsMessage, setMessage] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [matchedBuyers, setMatchedBuyers] = useState<Buyer[]>([]);

  // Function to handle SMS parsing
  const parseSMS = () => {
    setIsMessageSent(false);
    
    if (smsMessage.trim() === '') {
      alert('Please enter a message');
      return;
    }
    
    // Simple regex to extract crop and quantity
    const regex = /(\d+)\s*kg\s+(\w+)/i;
    const match = smsMessage.match(regex);
    
    if (match) {
      const quantity = match[1];
      const crop = match[2];
      
      // Find matching buyers
      const matches = buyers.filter(buyer => 
        buyer.buying.some(item => item.toLowerCase().includes(crop.toLowerCase()))
      );
      
      setMatchedBuyers(matches);
      setIsMessageSent(true);
    } else {
      alert('Could not parse message. Please use format like "100kg potato"');
    }
  };

  // Filter crops based on search term
  const filteredCrops = crops.filter(crop => 
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-20 pb-20 min-h-screen bg-gradient-to-b from-secondary-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Farmer Marketplace</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Connect directly with buyers and sellers. Get the best prices for your crops without middlemen.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex mb-6 border-b border-neutral-200">
            <button 
              onClick={() => setActiveTab('sell')}
              className={`px-4 py-2 font-medium ${
                activeTab === 'sell' 
                  ? 'text-secondary-600 border-b-2 border-secondary-600' 
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              <ShoppingCart size={18} className="inline mr-2" />
              Available Crops
            </button>
            <button 
              onClick={() => setActiveTab('buy')}
              className={`px-4 py-2 font-medium ${
                activeTab === 'buy' 
                  ? 'text-secondary-600 border-b-2 border-secondary-600' 
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              <ShoppingBag size={18} className="inline mr-2" />
              Find Buyers
            </button>
          </div>

          {activeTab === 'sell' ? (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Search and filter bar */}
              <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
                  <input 
                    type="text" 
                    placeholder="Search crops..." 
                    className="input pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <button className="btn-outline flex items-center">
                    <Filter size={16} className="mr-2" />
                    Filter
                  </button>
                  <button className="btn-primary flex items-center">
                    <Plus size={16} className="mr-2" />
                    List Your Crop
                  </button>
                </div>
              </div>

              {/* Market Price Summary */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Current Market Prices</h3>
                  <div className="text-sm text-neutral-500">Updated 2 hours ago</div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-neutral-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Crop</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Market Price (₹/kg)</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Change</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Trend</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      {crops.map((crop) => (
                        <tr key={crop.id} className="hover:bg-neutral-50">
                          <td className="px-6 py-4 whitespace-nowrap">{crop.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap">₹{crop.marketPrice.toFixed(2)}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`${crop.priceChange >= 0 ? 'text-success-600' : 'text-error-600'}`}>
                              {crop.priceChange >= 0 ? '+' : ''}{crop.priceChange.toFixed(2)}%
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <TrendingUp 
                              size={18} 
                              className={`${crop.priceChange >= 0 ? 'text-success-600' : 'text-error-600'}`} 
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Crop Listings */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCrops.map((crop) => (
                  <motion.div 
                    key={crop.id}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="card-glass h-full"
                  >
                    <div className="relative mb-4 rounded-lg overflow-hidden h-48">
                      <img 
                        src={crop.image} 
                        alt={crop.name} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute top-2 right-2">
                        <span className="badge-primary">
                          {crop.quality}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{crop.name}</h3>
                      <div className="text-lg font-bold text-secondary-600">₹{crop.price.toFixed(2)}/kg</div>
                    </div>
                    <div className="flex items-center text-sm text-neutral-500 mb-3">
                      <span>{crop.location}</span>
                      <span className="mx-2">•</span>
                      <span>{crop.postedDate}</span>
                    </div>
                    <div className="text-neutral-700 mb-2">
                      Quantity: <span className="font-medium">{crop.quantity}</span>
                    </div>
                    <div className="text-neutral-700 mb-4">
                      Farmer: <span className="font-medium">{crop.farmer}</span>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <button className="btn-primary">
                        Contact Seller
                      </button>
                      <button className="btn-outline">
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6 border-b border-neutral-200">
                <h2 className="text-xl font-semibold mb-4">SMS Parser - Find Buyers</h2>
                <p className="text-neutral-600 mb-6">
                  Enter the details of your crop in the format "100kg potato" to find matching buyers.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <input 
                    type="text" 
                    placeholder="e.g., 100kg potato" 
                    className="input flex-grow"
                    value={smsMessage}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button 
                    onClick={parseSMS} 
                    className="btn-primary whitespace-nowrap"
                  >
                    Find Buyers
                  </button>
                </div>
              </div>
              
              {isMessageSent && (
                <div className="p-6">
                  <div className="flex items-center text-success-600 mb-4">
                    <CheckCircle size={20} className="mr-2" />
                    <span className="font-medium">Message parsed successfully!</span>
                  </div>
                  
                  {matchedBuyers.length > 0 ? (
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Matching Buyers Found ({matchedBuyers.length})</h3>
                      <div className="space-y-4">
                        {matchedBuyers.map((buyer) => (
                          <div key={buyer.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex justify-between">
                              <div>
                                <h4 className="font-semibold text-lg flex items-center">
                                  {buyer.name}
                                  {buyer.verified && (
                                    <span className="ml-2 text-accent-500" title="Verified Buyer">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                      </svg>
                                    </span>
                                  )}
                                </h4>
                                <p className="text-neutral-500">{buyer.company}</p>
                              </div>
                              <div className="text-sm text-neutral-500">
                                {buyer.location}
                              </div>
                            </div>
                            <div className="mt-3">
                              <div className="text-sm text-neutral-600 mb-1">Buying:</div>
                              <div className="flex flex-wrap gap-2">
                                {buyer.buying.map((crop, index) => (
                                  <span key={index} className="badge-secondary">{crop}</span>
                                ))}
                              </div>
                            </div>
                            <div className="mt-4 flex justify-end">
                              <button className="btn-outline text-sm flex items-center">
                                <Phone size={14} className="mr-1" />
                                {buyer.contact}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="text-neutral-400 mb-3">
                        <ShoppingBag size={48} className="mx-auto" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">No Matching Buyers Found</h3>
                      <p className="text-neutral-600">
                        Try a different crop or quantity, or check back later.
                      </p>
                    </div>
                  )}
                </div>
              )}
              
              {/* Registered Buyers */}
              <div className="border-t border-neutral-200 p-6">
                <h3 className="text-lg font-semibold mb-4">All Registered Buyers</h3>
                <div className="space-y-4">
                  {buyers.map((buyer) => (
                    <div key={buyer.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-semibold text-lg flex items-center">
                            {buyer.name}
                            {buyer.verified && (
                              <span className="ml-2 text-accent-500" title="Verified Buyer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                              </span>
                            )}
                          </h4>
                          <p className="text-neutral-500">{buyer.company}</p>
                        </div>
                        <div className="text-sm text-neutral-500">
                          {buyer.location}
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="text-sm text-neutral-600 mb-1">Buying:</div>
                        <div className="flex flex-wrap gap-2">
                          {buyer.buying.map((crop, index) => (
                            <span key={index} className="badge-secondary">{crop}</span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <button className="btn-outline text-sm flex items-center">
                          <Phone size={14} className="mr-1" />
                          {buyer.contact}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;