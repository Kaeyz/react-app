/*eslint-disable */
// modules
import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

// Components
import brandWhite from '../../../../assets/brandlogo.png';
import brandBlack from '../../../../assets/brandlogoBlack.png';
import Logo from "./Logo";

const Wrapper = styled.nav`
  position: fixed;
  z-index: 53;
  height: max-content;
  width: 100%;
  padding: 2rem 4rem;
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
    min-width: 40rem;
    max-width: 60rem;
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
  max-width: 12rem;
  text-align: center;
  &:hover {
    color: ${(props) => props.theme.color.text_08} !important;
    transition: 0.2s;
  }
`;



export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 450) {
        if (this.state.status !== "amir") {
          this.setState({ status: "amir" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
	    return (
      <Wrapper style={{
		backgroundColor: this.state.status === "top" ? "" : "white",
		boxShadow: this.state.status === "top" ? "" : "0 4px 2px -2px gainsboro" 
	  }}>
        <div
          className="nav"
          
        >
          <Logo brand={this.state.status === "top" ? brandWhite : brandBlack}/>

          <div className="middle-nav">
            <div className="nav-links">
              <NavLinks
                exact
                activeClassName="navbar__link--active"
                to="/blog"
                style={{
                  color: this.state.status === "top" ? "white" : "black",
                }}
              >
                {" "}
                Blog{" "}
              </NavLinks>
              <NavLinks
                activeClassName="navbar__link--active"
                to="/team"
                style={{
                  color: this.state.status === "top" ? "white" : "black",
                }}
              >
                Team
              </NavLinks>
              <NavLinks
                activeClassName="navbar__link--active"
                to="/contact_us"
                style={{
                  color: this.state.status === "top" ? "white" : "black",
                }}
              >
                Contact Us
              </NavLinks>
              <NavLinks
                activeClassName="navbar__link--active"
                to="/login"
                style={{
                  color: this.state.status === "top" ? "white" : "black",
                }}
              >
                Login
              </NavLinks>
              <NavLinks
                activeClassName="navbar__link--active"
                to="/onboarding/company"
               A style={{
                  color: this.state.status === "top" ? "white" : "black",
                }}
              >
                Sign up
              </NavLinks>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}
