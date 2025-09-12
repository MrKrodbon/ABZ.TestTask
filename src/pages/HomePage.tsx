import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import React from "react";
import s from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={s.container}>
      <Header />
      <HeroSection />
    </div>
  );
};

export default HomePage;
