import React from "react";
import Container from "../Container";

import heroImg from "../../assets/images/hero-img.png";
import { StyledHeroSection } from "./styled";
import BookButton from "../BookButton";

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <Container>
        <div className="leftColumn">
          <h1 className="heroTitle">Міжнародні пасажирські перевезення </h1>
          <p className="heroText">
            З нами надійно та безпечно на кожному етапі вашої подорожі Україна -
            Німеччина - Нідерланди
          </p>

          <BookButton />
        </div>
        {/* <img className="heroImg" src={heroImg} alt="image of bus" /> */}
      </Container>
    </StyledHeroSection>
  );
};

export default HeroSection;
