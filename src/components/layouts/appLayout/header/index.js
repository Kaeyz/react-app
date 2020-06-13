// modules
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Button from '../../../common/Button';
import Container from '../../../common/Container';
import Logo from './Logo';


const Wrapper = styled.nav`
	height: max-content;
	width: 100%;
	background: rgba(203, 243, 240, 0.1);
	border: 1px solid rgba(0, 0, 0, 0.1);
	padding: 0.5rem 0rem;
	.nav {
		width: 100%;
		display: grid;
		grid-template-columns: max-content 1fr max-content;
		justify-content: space-between;
		align-items: center;
		grid-gap: 1rem;
	}
	.middle-nav{
		display: flex;
		justify-content: center;
	}
	.nav-links {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		min-width: 35rem;
		max-width: 50rem;
	}
	.nav-buttons {
	 display: grid;
	 grid-gap: 1rem;
	 grid-template-columns: max-content max-content;
	}
	@media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
		.middle-nav, .nav-buttons {
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
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 2.5rem;
	color: ${props => props.theme.color.text_01};
	max-width: 9rem;
	text-align: center;
	&:hover {
		color: #fcb813;
		 transition: 0.2s;
	};
`;

const buttonStyles = {
	minWidth : '8rem',
	maxWidth : '10rem',
	paddingLeft: '1rem',
	paddingRight: '1rem',
};

export default function Header() {
	return (
		<Wrapper>
			<Container>
				<div className="nav">

					<Logo />

					<div className="middle-nav">
						<div className="nav-links">
							<NavLinks exact activeClassName="navbar__link--active" to="/"> Home </NavLinks>
							<NavLinks activeClassName="navbar__link--active" to="/about">About Us</NavLinks>
							<NavLinks activeClassName="navbar__link--active" to="/wellness/individual/health">Wellness</NavLinks>
							<NavLinks activeClassName="navbar__link--active" to="/fitnessFair">Fitness Fair</NavLinks>
							<NavLinks activeClassName="navbar__link--active" to="/contactUs">Contact Us</NavLinks>
						</div>
					</div>

					<div className="nav-buttons">
						<Link to="/signUp">
							<Button value="Log In" theme="green" style={buttonStyles}>Log In</Button>
						</Link>
						<Link to="/signUp">
							<Button value="Join Us" theme="darkGreen" style={buttonStyles}>Join Us</Button>
						</Link>
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}



