import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Droplets, 
  Wind, 
  Sun, 
  CloudRain, 
  CloudLightning,
  Smartphone, 
  AlertTriangle,
  ThermometerSun
} from 'lucide-react';

import { Player } from '@lottiefiles/react-lottie-player';

// Mock weather data
interface WeatherData {
  date: string;
  temp: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'stormy';
  humidity: number;
  windSpeed: number;
  precipitation: number;
  icon: React.ReactNode;
}

interface WeatherAlert {
  id: number;
  type: string;
  message: string;
  date: string;
  severity: 'low' | 'medium' | 'high';
}

const WeatherPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<WeatherData[]>([]);
  const [alerts, setAlerts] = useState<WeatherAlert[]>([]);

  useEffect(() => {
    // Mock API call to get weather data
    const fetchWeatherData = () => {
      // Current weather
      const mockCurrentWeather: WeatherData = {
        date: new Date().toLocaleDateString(),
        temp: 28,
        condition: 'sunny',
        humidity: 65,
        windSpeed: 12,
        precipitation: 0,
        icon: <Sun size={24} className="text-warning-500" />
      };
      
      // Forecast for next 5 days
      const mockForecast: WeatherData[] = [
        {
          date: new Date(Date.now() + 86400000).toLocaleDateString(),
          temp: 29,
          condition: 'sunny',
          humidity: 60,
          windSpeed: 10,
          precipitation: 0,
          icon: <Sun size={24} className="text-warning-500" />
        },
        {
          date: new Date(Date.now() + 2 * 86400000).toLocaleDateString(),
          temp: 27,
          condition: 'cloudy',
          humidity: 70,
          windSpeed: 15,
          precipitation: 0,
          icon: <Cloud size={24} className="text-neutral-500" />
        },
        {
          date: new Date(Date.now() + 3 * 86400000).toLocaleDateString(),
          temp: 25,
          condition: 'rainy',
          humidity: 80,
          windSpeed: 20,
          precipitation: 15,
          icon: <CloudRain size={24} className="text-accent-500" />
        },
        {
          date: new Date(Date.now() + 4 * 86400000).toLocaleDateString(),
          temp: 26,
          condition: 'rainy',
          humidity: 75,
          windSpeed: 18,
          precipitation: 10,
          icon: <CloudRain size={24} className="text-accent-500" />
        },
        {
          date: new Date(Date.now() + 5 * 86400000).toLocaleDateString(),
          temp: 28,
          condition: 'cloudy',
          humidity: 65,
          windSpeed: 12,
          precipitation: 0,
          icon: <Cloud size={24} className="text-neutral-500" />
        }
      ];
      
      // Weather alerts
      const mockAlerts: WeatherAlert[] = [
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
        }
      ];
      
      setCurrentWeather(mockCurrentWeather);
      setForecast(mockForecast);
      setAlerts(mockAlerts);
    };
    
    fetchWeatherData();
  }, []);

  const handleSubscribe = () => {
    if (phoneNumber.trim() === '') {
      alert('Please enter a valid phone number');
      return;
    }
    
    setIsSubscribed(true);
    // In a real app, this would make an API call to subscribe the user
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun size={24} className="text-warning-500" />;
      case 'cloudy':
        return <Cloud size={24} className="text-neutral-500" />;
      case 'rainy':
        return <CloudRain size={24} className="text-accent-500" />;
      case 'stormy':
        return <CloudLightning size={24} className="text-error-500" />;
      default:
        return <Sun size={24} className="text-warning-500" />;
    }
  };

  const getAlertSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-success-100 text-success-800';
      case 'medium':
        return 'bg-warning-100 text-warning-800';
      case 'high':
        return 'bg-error-100 text-error-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  return (
    <div className="pt-20 pb-20 min-h-screen bg-gradient-to-b from-accent-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Weather Alerts & Forecast</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Stay informed about weather conditions that may affect your crops. 
            Receive SMS alerts for important weather changes.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Current Weather */}
          {currentWeather && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-semibold mb-1">Today's Weather</h2>
                      <p className="text-white/80">{currentWeather.date}</p>
                    </div>
                    <div className="text-4xl font-bold">{currentWeather.temp}°C</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center space-x-3">
                      <Droplets size={24} className="text-accent-500" />
                      <div>
                        <div className="text-sm text-neutral-500">Humidity</div>
                        <div className="font-medium">{currentWeather.humidity}%</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Wind size={24} className="text-accent-500" />
                      <div>
                        <div className="text-sm text-neutral-500">Wind Speed</div>
                        <div className="font-medium">{currentWeather.windSpeed} km/h</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CloudRain size={24} className="text-accent-500" />
                      <div>
                        <div className="text-sm text-neutral-500">Precipitation</div>
                        <div className="font-medium">{currentWeather.precipitation}%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Weather Forecast */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold mb-4">5-Day Forecast</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x">
                {forecast.map((day, index) => (
                  <div key={index} className="p-4">
                    <div className="text-neutral-500 mb-2">{day.date}</div>
                    <div className="flex items-center space-x-2 mb-2">
                      {getWeatherIcon(day.condition)}
                      <span className="font-semibold">{day.temp}°C</span>
                    </div>
                    <div className="text-sm text-neutral-500">
                      <div className="flex items-center space-x-1 mb-1">
                        <Droplets size={14} />
                        <span>{day.humidity}%</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CloudRain size={14} />
                        <span>{day.precipitation}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Weather Alerts */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Weather Alerts</h2>
              <div className="bg-white rounded-lg shadow-lg h-full">
                <div className="p-6">
                  {alerts.length > 0 ? (
                    <div className="space-y-4">
                      {alerts.map((alert) => (
                        <div key={alert.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-lg flex items-center">
                              <AlertTriangle size={18} className="text-warning-500 mr-2" />
                              {alert.type}
                            </h3>
                            <span className={`badge ${getAlertSeverityColor(alert.severity)}`}>
                              {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                            </span>
                          </div>
                          <p className="text-neutral-600 mb-2">{alert.message}</p>
                          <div className="text-sm text-neutral-500">Expected on {alert.date}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <Sun size={48} className="mx-auto text-warning-500 mb-3" />
                      <p className="text-neutral-600">No weather alerts at this time.</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* SMS Subscription */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">SMS Weather Alerts</h2>
              <div className="bg-white rounded-lg shadow-lg h-full">
                <div className="p-6">
                  <div className="mb-6 text-center">
                    <Player
                      autoplay
                      loop
                      src="https://lottie.host/ef7da11d-c00a-4b1a-b5cf-53da307042d2/TRgNJRa5rQ.json"
                      style={{ height: '160px', width: '160px', margin: '0 auto' }}
                    />
                  </div>
                  
                  {!isSubscribed ? (
                    <div>
                      <p className="text-neutral-600 mb-4">
                        Subscribe to receive important weather alerts via SMS, even when you don't have internet access.
                      </p>
                      <div className="flex flex-col md:flex-row gap-3 mb-4">
                        <div className="relative flex-grow">
                          <Smartphone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
                          <input 
                            type="tel" 
                            placeholder="Enter your phone number" 
                            className="input pl-10"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                        </div>
                        <button 
                          onClick={handleSubscribe} 
                          className="btn-accent whitespace-nowrap"
                        >
                          Subscribe
                        </button>
                      </div>
                      <div className="text-sm text-neutral-500">
                        You'll receive alerts about significant weather events that may affect your crops.
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="mb-4 text-success-500 flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Successfully Subscribed!</h3>
                      <p className="text-neutral-600 mb-4">
                        You will now receive SMS alerts for important weather events at {phoneNumber}.
                      </p>
                      <button 
                        onClick={() => setIsSubscribed(false)} 
                        className="btn-outline"
                      >
                        Update Phone Number
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Farming Recommendations */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Weather-based Farming Recommendations</h2>
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <ThermometerSun size={20} className="text-warning-500" />
                      <h3 className="font-semibold">High Temperature</h3>
                    </div>
                    <p className="text-neutral-600 text-sm">
                      With temperatures expected to reach 29°C, ensure adequate irrigation for your crops, 
                      especially during the hottest part of the day.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <CloudRain size={20} className="text-accent-500" />
                      <h3 className="font-semibold">Expected Rainfall</h3>
                    </div>
                    <p className="text-neutral-600 text-sm">
                      Rain is expected in 3 days. Consider postponing any planned fertilizer application 
                      to avoid runoff and nutrient loss.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Wind size={20} className="text-secondary-500" />
                      <h3 className="font-semibold">Wind Conditions</h3>
                    </div>
                    <p className="text-neutral-600 text-sm">
                      Moderate winds are expected. This is a good time for activities like pesticide 
                      application when done early in the morning.
                    </p>
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

export default WeatherPage;