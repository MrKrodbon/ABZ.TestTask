import React from "react";
import Hero from "@assets/images/background-image.jpeg";
import s from "./HeroSection.module.scss";
import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <section className={s.hero}>
      <div className={s.heroImage}>
        <img src={Hero} alt="landscape with wheat and sky" />
      </div>
      <div className={s.overlay}>
        <div className={s.contentContainer}>
          <div className={s.title}>
            <p>Test assignment for front-end developer</p>
          </div>
          <div className={s.content}>
            <p>
              What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they'll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving.
            </p>
          </div>
          <Button label="Sign up" variant="primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
