// modules
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Button from '../../../common/Button';
import Container from '../../../common/Container';
import Logo from './Logo';


export default function Header() {
	return (
		<Nav>
			<Container>
				<div>
					<Logo />
				</div>

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
			</Container>
		</Nav>
	);
}

const Nav = styled.nav`
  height: max-content;
  width: 100%;
  background: rgba(203, 243, 240, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0rem;
`;

const breakPoint = '1000px';


const NavLinks = styled(NavLink)`
display: inline-block;
  padding: 13px 32px;
  font-family: cursive;
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

