import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinks,
  FooterLink,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
} from "./Footer.styles";
import UseAnimations from "react-useanimations";
import facebook from "react-useanimations/lib/facebook";
import instagram from "react-useanimations/lib/instagram";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";

const Footer = () => {
  const scrollHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinks>
            <FooterLinkTitle>About us</FooterLinkTitle>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinks>
          <FooterLinks>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/">Submit Video</FooterLink>
            <FooterLink to="/">Ambassadors</FooterLink>
            <FooterLink to="/">Agency</FooterLink>
            <FooterLink to="/">Influencer</FooterLink>
          </FooterLinks>
          <FooterLinks>
            <FooterLinkTitle>Contact us</FooterLinkTitle>
            <FooterLink to="/">Contact</FooterLink>
            <FooterLink to="/">Support</FooterLink>
            <FooterLink to="/">Destination</FooterLink>
            <FooterLink to="/">Sponsorship</FooterLink>
          </FooterLinks>
          <FooterLinks>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/">Instagram</FooterLink>
            <FooterLink to="/">Facebook</FooterLink>
            <FooterLink to="/">Youtube</FooterLink>
            <FooterLink to="/">Twitter</FooterLink>
          </FooterLinks>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={scrollHome}>
              besecure
            </SocialLogo>
            <WebsiteRights>
              besecure © {new Date().getFullYear()}
              All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <UseAnimations animation={facebook} size={40} />
              <UseAnimations animation={instagram} size={40} />
              <UseAnimations animation={linkedin} size={40} />
              <UseAnimations animation={github} size={40} />
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
