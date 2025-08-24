import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import FeatureSection from './components/FeatureSection';
import Flow from './components/Flow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimaonial';
import Footer from './components/Footer';
import SearchPage from './components/Search';
import Login from './components/Login';
import Create_account from './components/Create_account';
import { AuthProvider } from './AuthContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        {/* Full screen gradient background */}
        <div className="relative min-h-screen bg-gradient-to-b from-black via-blue-900 to-blue-700 text-white overflow-hidden">
          
          {/* Animated white threads */}
          <div className="absolute inset-0 -z-10">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`absolute h-[2px] w-[200%] bg-white opacity-20 top-[${i * 10}%] animate-thread`}
                style={{
                  transform: `rotate(${i * 15}deg)`,
                  animationDelay: `${i * 0.5}s`,
                }}
              ></div>
            ))}
          </div>

          <Navbar />
          <div className="max-w-7xl mx-auto pt-20 px-6">
            <Routes>
              <Route path="/Login" element={<Login />} />
              <Route path="/Create_account" element={<Create_account />} />
              <Route path="/" element={<HeroSection />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};

const HeroSection = () => (
  <>
    <Hero />
    <FeatureSection />
    <Flow />
    {/* <Pricing /> */}
    <Testimonials />
  </>
);

export default App;
