import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinks,
  FooterLink,
  FooterLinkTitle,
} from "./Footer.styles";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
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
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
