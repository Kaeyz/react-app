// modules
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

// Components
import brand from '../../../assets/brand.png';
import Button from '../../common/Button';


// import "../App.css";
// import "../css/header.css";
//import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
// import history from "./../History";
// import  primaryBtn from '../components/Button'
// import hamburger from "../assets/hamburger.png"
// import { Link } from "react-router-dom";


export default function Header() {
	return (
		<Nav className=" nav flex">
			<NavCheck type="checkbox" id="nav-check" />
			<NavHeader>
				<NavLink to="/" className="nav-title">
					<img src={brand} alt="logo" />
				</NavLink>
			</NavHeader>

			<NavBtn className="nav-btn">
				<BreadCrumbs className="label" for="nav-check">
					<BreadCrumb></BreadCrumb>
					<BreadCrumb></BreadCrumb>
					<BreadCrumb></BreadCrumb>{' '}
				</BreadCrumbs>
			</NavBtn>

			<NavLinksAll className="nav-links flex">
				<div style={{ padding: '0 50px' }}>
					<NavLinks exact activeClassName="navbar__link--active" to="/">
            Home
					</NavLinks>
					<NavLinks activeClassName="navbar__link--active" to="/about">
            About Us
					</NavLinks>
					<NavLinks activeClassName="navbar__link--active" to="/wellness">
            Wellness
					</NavLinks>
					<NavLinks activeClassName="navbar__link--active" to="/fitnessFair">
            Fitness Fair
					</NavLinks>
					<NavLinks activeClassName="navbar__link--active" to="/contactUs">
            Contact Us
					</NavLinks>
				</div>
				<div className="nav-buttons">
					<Button value="Log In" theme="green" style={{ marginRight: '18px' }}>
						{' '}
            Log In
					</Button>
					<Link to="/signUp">
						<Button value="Join Us" theme="yellow">
							{' '}
              Join Us
						</Button>
					</Link>
				</div>
			</NavLinksAll>
		</Nav>
	);
}

const Nav = styled.nav`
  height: 67px;
  width: 100%;
  background: rgba(203, 243, 240, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: center;
`;
const NavHeader = styled.div`
  display: inline;
  margin-right: 10px;
`;
const NavCheck = styled.input`
  display: none;
`;
const breakPoint = '1000px';
const NavBtn = styled.div`
  display: block;

  @media (max-width: ${breakPoint}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const BreadCrumbs = styled.label`
  @media (max-width: ${breakPoint}) {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    };
  }`;

const BreadCrumb = styled.span`
  @media (max-width: ${breakPoint}) {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
`;

const NavLinks = styled(NavLink)`
display: inline-block;
  padding: 13px 32px;
  font-family: Captain;
  text-decoration: none;
  /* text-transform: lowercase; */
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 25px;
  color: #1d1d1d;
  &:hover {
    color: #fcb813;
  transition: 0.2s;
  };
`;


const NavLinksAll = styled.div`
  @media (max-width: ${breakPoint}) {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }`;

// const linkStyle = {
//   textDecoration: "none",
//   color: "#1d1d1d",
// };
