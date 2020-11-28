/*eslint-disable */
// modules
import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
// Components
import Logo from "./Logo";
import brandBlack from '../../../../assets/brandlogoBlack.png';

const Wrapper = styled.nav`
  position: fixed;
  z-index: 22;
  height: max-content;
  width: 100%;
  padding: 2rem 4rem;
  background-color: ${(props) => props.theme.color.text_03};
  box-shadow: 0 4px 2px -2px gainsboro;
  .nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .middle-nav {
    display: flex;
    justify-content: center;
  }
  .nav-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 33rem;
    max-width: 50rem;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    .middle-nav {
      display: none;
    }
    .nav {
      display: flex;
      justify-content: center;
    }
  }
`;

const NavLinks = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-style: normal;
  font-size: 1.8rem;
  line-height: 2.5rem;
  max-width: 9rem;
  color: ${(props) => props.theme.color.text_05};
  text-align: center;
  &:hover {
    color: ${(props) => props.theme.color.text_08} !important;
    transition: 0.2s;
  }
`;

const index2 = () => {
  return (
    <Wrapper>
      <div className="nav">
        <Logo brand= {brandBlack} />
        <div className="middle-nav">
          <div className="nav-links">
            <NavLinks exact activeClassName="navbar__link--active" to="/blog">
              {" "}
              Blog{" "}
            </NavLinks>
            <NavLinks activeClassName="navbar__link--active" to="/team">
              Team
            </NavLinks>
            <NavLinks activeClassName="navbar__link--active" to="/login">
              Login
            </NavLinks>
            <NavLinks
              activeClassName="navbar__link--active"
              to="/onboarding/company"
            >
              Sign up
            </NavLinks>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default index2;
