import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    // margin-top: -80px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1rem
    position:sticky;
    top:0;
    z-index:10;

    @media screen and (max-width: 960px) {
transition: .8s all ease;
    }

`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  z-index: 1;
  width: 100%;
  padding: 0 1.5rem;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -1.2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 2.5rem;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #00bfa6;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 2.5rem;
  background: #00bfa6;
  white-space: nowrap;
  padding: 0.8rem 1.2rem;
  color: #010606;
  font-size: 1rem;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
