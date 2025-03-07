import React from 'react';
import Header from '../organisms/Header';
import HeroSection from '../organisms/HeroSection';
import ServicesSection from '../organisms/ServicesSection';
import PortfolioSection from '../organisms/PortfolioSection';
import Footer from '../organisms/Footer';

export default function HomeTemplate() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <Footer />
    </>
  );
}