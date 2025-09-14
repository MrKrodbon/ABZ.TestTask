import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import React from "react";
import s from "./HomePage.module.scss";
import MainSection from "@/components/MainSection/MainSection";
import FormSection from "@/components/FormSection/FormSection";

const HomePage = () => {
  return (
    <div className={s.container}>
      <Header />
      <HeroSection />
      <section className={s.mainSectionContainer}>
        <MainSection />
      </section>
      <section className={s.formSectionContainer}>
        <FormSection />
      </section>
    </div>
  );
};

export default HomePage;
