import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import CropDoctorPage from './pages/CropDoctorPage';
import MarketplacePage from './pages/MarketplacePage';
import WeatherPage from './pages/WeatherPage';
import HelplinePage from './pages/HelplinePage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/crop-doctor" element={<CropDoctorPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/helpline" element={<HelplinePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;