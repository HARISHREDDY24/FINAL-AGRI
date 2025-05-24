// Mock data for AgriConnect application

// Crop Diseases data
export const cropDiseases = [
  {
    id: 1,
    name: 'Early Blight',
    cropType: 'Tomato',
    symptoms: 'Brown spots with concentric rings forming a "bull\'s-eye" pattern.',
    cause: 'Fungal pathogen Alternaria solani',
    treatment: 'Remove infected leaves. Apply a copper-based fungicide every 7-10 days. Ensure proper spacing between plants for adequate air circulation.',
    preventiveMeasures: 'Crop rotation, adequate plant spacing, avoid overhead irrigation.',
    severity: 'medium',
    image: 'https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg'
  },
  {
    id: 2,
    name: 'Powdery Mildew',
    cropType: 'Cucumber',
    symptoms: 'White powdery spots on leaves and stems.',
    cause: 'Fungal pathogen from the order Erysiphales',
    treatment: 'Apply sulfur-based fungicide. Remove and destroy infected plant parts.',
    preventiveMeasures: 'Plant resistant varieties, ensure good air circulation.',
    severity: 'medium',
    image: 'https://images.pexels.com/photos/5560441/pexels-photo-5560441.jpeg'
  },
  {
    id: 3,
    name: 'Bacterial Wilt',
    cropType: 'Potato',
    symptoms: 'Rapid wilting of the plant, even with adequate soil moisture.',
    cause: 'Bacterial pathogen Ralstonia solanacearum',
    treatment: 'No effective chemical control. Remove and destroy infected plants.',
    preventiveMeasures: 'Crop rotation, use disease-free seed potatoes, improve soil drainage.',
    severity: 'high',
    image: 'https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg'
  },
  {
    id: 4,
    name: 'Leaf Rust',
    cropType: 'Wheat',
    symptoms: 'Orange-brown pustules on leaves.',
    cause: 'Fungal pathogen Puccinia triticina',
    treatment: 'Apply fungicide at the first sign of infection.',
    preventiveMeasures: 'Plant resistant varieties, early planting.',
    severity: 'medium',
    image: 'https://images.pexels.com/photos/533982/pexels-photo-533982.jpeg'
  },
  {
    id: 5,
    name: 'Rice Blast',
    cropType: 'Rice',
    symptoms: 'Diamond-shaped lesions with gray centers on leaves.',
    cause: 'Fungal pathogen Magnaporthe oryzae',
    treatment: 'Apply fungicides, balance nitrogen fertilization.',
    preventiveMeasures: 'Plant resistant varieties, maintain water level in paddy.',
    severity: 'high',
    image: 'https://images.pexels.com/photos/1126/sky-field-agriculture-nature.jpg'
  }
];

// Market Prices data
export const marketPrices = [
  {
    id: 1,
    cropName: 'Rice',
    variety: 'Basmati',
    price: 45.75,
    unit: 'kg',
    location: 'Delhi',
    date: '2023-05-15',
    change: 2.5
  },
  {
    id: 2,
    cropName: 'Wheat',
    variety: 'Common',
    price: 22.50,
    unit: 'kg',
    location: 'Punjab',
    date: '2023-05-15',
    change: -1.2
  },
  {
    id: 3,
    cropName: 'Potato',
    variety: 'Table',
    price: 15.25,
    unit: 'kg',
    location: 'Uttar Pradesh',
    date: '2023-05-15',
    change: 5.7
  },
  {
    id: 4,
    cropName: 'Tomato',
    variety: 'Hybrid',
    price: 35.00,
    unit: 'kg',
    location: 'Karnataka',
    date: '2023-05-15',
    change: 8.3
  },
  {
    id: 5,
    cropName: 'Onion',
    variety: 'Red',
    price: 18.50,
    unit: 'kg',
    location: 'Maharashtra',
    date: '2023-05-15',
    change: -3.5
  }
];

// Weather Forecast data
export const weatherForecast = [
  {
    date: new Date(Date.now()).toLocaleDateString(),
    temp: 28,
    condition: 'sunny',
    humidity: 65,
    windSpeed: 12,
    precipitation: 0
  },
  {
    date: new Date(Date.now() + 86400000).toLocaleDateString(),
    temp: 29,
    condition: 'sunny',
    humidity: 60,
    windSpeed: 10,
    precipitation: 0
  },
  {
    date: new Date(Date.now() + 2 * 86400000).toLocaleDateString(),
    temp: 27,
    condition: 'cloudy',
    humidity: 70,
    windSpeed: 15,
    precipitation: 0
  },
  {
    date: new Date(Date.now() + 3 * 86400000).toLocaleDateString(),
    temp: 25,
    condition: 'rainy',
    humidity: 80,
    windSpeed: 20,
    precipitation: 15
  },
  {
    date: new Date(Date.now() + 4 * 86400000).toLocaleDateString(),
    temp: 26,
    condition: 'rainy',
    humidity: 75,
    windSpeed: 18,
    precipitation: 10
  },
  {
    date: new Date(Date.now() + 5 * 86400000).toLocaleDateString(),
    temp: 28,
    condition: 'cloudy',
    humidity: 65,
    windSpeed: 12,
    precipitation: 0
  }
];

// Weather Alerts data
export const weatherAlerts = [
  {
    id: 1,
    type: 'Heavy Rain',
    message: 'Heavy rain expected in 3 days. Consider postponing any planned fertilizer application.',
    date: new Date(Date.now() + 3 * 86400000).toLocaleDateString(),
    severity: 'medium'
  },
  {
    id: 2,
    type: 'Heat Wave',
    message: 'Unusually high temperatures expected next week. Ensure adequate irrigation for crops.',
    date: new Date(Date.now() + 7 * 86400000).toLocaleDateString(),
    severity: 'high'
  },
  {
    id: 3,
    type: 'Cold Wave',
    message: 'Cold wave expected next month. Prepare to protect sensitive crops.',
    date: new Date(Date.now() + 30 * 86400000).toLocaleDateString(),
    severity: 'medium'
  }
];

// Buyers data
export const buyers = [
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
  },
  {
    id: 4,
    name: 'Organic Harvest',
    company: 'Organic Harvest Pvt Ltd.',
    location: 'Bengaluru',
    buying: ['Vegetables', 'Fruits', 'Herbs'],
    contact: '+91 45678 90123',
    verified: true
  },
  {
    id: 5,
    name: 'Bharat Food Supply',
    company: 'Bharat Food Supply Chain',
    location: 'Hyderabad',
    buying: ['Pulses', 'Grains', 'Oilseeds'],
    contact: '+91 56789 01234',
    verified: true
  }
];

// Crops for sale data
export const cropsForSale = [
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
    image: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg'
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
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg'
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
    image: 'https://images.pexels.com/photos/1886930/pexels-photo-1886930.jpeg'
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
    image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg'
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
    image: 'https://images.pexels.com/photos/144206/pexels-photo-144206.jpeg'
  },
  {
    id: 6,
    name: 'Soybeans',
    quantity: '120 kg',
    price: 42.00,
    location: 'Madhya Pradesh',
    quality: 'Premium',
    farmer: 'Prakash Yadav',
    contact: '+91 43210 98765',
    postedDate: '3 days ago',
    marketPrice: 40.50,
    priceChange: 3.70,
    image: 'https://images.pexels.com/photos/2234337/pexels-photo-2234337.jpeg'
  }
];