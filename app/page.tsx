import React from "react";
import HeroSection from "./components/HeroSection";
import BookingSection from "./components/BookingSection";
import FeedbackWidget from "./components/FeedBackWidget";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <BookingSection />
      </main>
      <Footer />
      <FeedbackWidget />
    </div>
  );
};

export default HomePage;
