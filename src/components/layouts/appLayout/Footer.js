// modules
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

const Wrapper = styled.div`

	background-color: ${props => props.theme.color.green};
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 3rem 10rem 10rem 10rem;

	.footer_nav {
		display: grid;
		grid-auto-flow: column;
		grid-gap: 3rem;
	}

	.footer_nav_section {
		display: flex;
		flex-direction: column;
	}

	.footer_nav_header {
		font-size: 1.5rem;
		font-style: normal;
		color: ${props => props.theme.color.white}
	}

	.footer_nav_link {
		text-decoration: none;
		color: ${props => props.theme.color.white};
		font-weight: 500;
		font-size: 1.2rem;
	}

	.socials {
		display: flex;
		flex-wrap: wrap;
	}
	.social {
		margin-right: 1rem;
		margin-bottom: 1rem;
	}
`;

export default function Footer() {
	return (
		<Wrapper>
			<div className="footer_nav">

				<div className="footer_nav_section">
					<h5 className="footer_nav_header">About Us</h5>
					<Link className="footer_nav_link" to="/our_story">Our Story</Link>
					<Link className="footer_nav_link" to="press_kit">Press Kit</Link>
					<Link className="footer_nav_link" to="/cookie_policy">Cookie Policy</Link>
					<Link className="footer_nav_link" to="/terms_of_use">Terms of Use</Link>
				</div>

				<div className="footer_nav_section">
					<h5 className="footer_nav_header">Wellness</h5>
					<Link className="footer_nav_link" to="/health">Health</Link>
					<Link className="footer_nav_link" to="/fitness">Fitness</Link>
					<Link className="footer_nav_link" to="/lifestyle">Lifestyle</Link>
					<Link className="footer_nav_link" to="/nutrition">Nutrition</Link>
				</div>

				<div className="footer_nav_section">
					<h5 className="footer_nav_header">Business</h5>
					<Link className="footer_nav_link" to="/book_visit">Book a Visit</Link>
					<Link className="footer_nav_link" to="/signup_corporate">Sign Up for a Corporate Package</Link>
					<Link className="footer_nav_link" to="/blog">Blog</Link>
				</div>

			</div>

			<div>
				<h5 className="footer_nav_header">Follow Us</h5>
				<div className="socials">
					<div className="social">Facebook</div>
					<div className="social">Twitter</div>
					<div className="social">Instagram</div>
				</div>
			</div>

		</Wrapper>
	);
}

Footer.propTypes = {
	//PropTypes
	//TODO: footer prop types goes here
};