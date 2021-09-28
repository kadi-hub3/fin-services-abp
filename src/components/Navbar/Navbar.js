import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLink,
  NavItem,
  NavBtn,
  NavBtnLink,
} from "./Navbar.styles";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNavBg = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const scrollHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLogo to="/" onClick={scrollHome}>
            Thunk
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Discover
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Services
              </NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
