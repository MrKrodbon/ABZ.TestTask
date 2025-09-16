import React from "react";
import Hero from "@assets/images/background-image.jpeg";
import s from "./HeroSection.module.scss";
import Button from "../Button/Button";
import Title from "../Title/Title";

const HeroSection = () => {
  return (
    <section className={s.hero}>
      <div className={s.heroImage}>
        <img src={Hero} alt="landscape with wheat and sky" />
      </div>
      <div className={s.overlay}>
        <div className={s.contentContainer}>
          <Title
            title={"Test assignment for front-end developer"}
            isSectionTitle
          />

          <div className={s.content}>
            <p>
              What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they'll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving.
            </p>
          </div>
          <Button
            label="Sign up"
            variant="primary"
            className={s.signUpButton}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
