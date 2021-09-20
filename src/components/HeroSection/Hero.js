import React from "react";
import { HeroContainer, HeroBg, VideoBg } from "./Hero.styles";
import Video from "../../videos/video.mp4";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoplay loop muted src={video} type="video/mp4" />
      </HeroBg>
    </HeroContainer>
  );
};

export default Hero;
