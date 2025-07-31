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
 // ⬅️ new import

const App = () => {
  return (
    <Router>
      
        <div className="relative z-10">
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
