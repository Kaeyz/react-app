// modules
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Container from '../../common/Container';
//import PropTypes from 'prop-types';

const Wrapper = styled.div`

	background-color: ${props => props.theme.color.brand_02};

	.footer {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 3rem 0rem 10rem 0rem;
	}

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
		color: ${props => props.theme.color.ui_01}
	}

	.footer_nav_link {
		text-decoration: none;
		color: ${props => props.theme.color.ui_01};
		font-weight: 500;
		font-size: 1.2rem;
	}

	.socials {
		display: flex;
		flex-wrap: wrap;
	}
	.social {
		margin-right: 2rem;
		margin-bottom: 1rem;
		background-color: ${props => props.theme.color.ui_01};
		color: ${props => props.theme.color.brand_02};
	}
`;

export default function Footer() {
	return (
		<Wrapper>
			<Container>
				<div className="footer">
					<div className="footer_nav">

						<div className="footer_nav_section">
							<h5 className="footer_nav_header">About Us</h5>
							<Link className="footer_nav_link" to="/about">Our Story</Link>
							<Link className="footer_nav_link" to="press_kit">Press Kit</Link>
							<Link className="footer_nav_link" to="/cookie_policy">Cookie Policy</Link>
							<Link className="footer_nav_link" to="/terms_of_use">Terms of Use</Link>
						</div>

						<div className="footer_nav_section">
							<h5 className="footer_nav_header">Wellness</h5>
							<Link className="footer_nav_link" to="/wellness/individual/health">Health</Link>
							<Link className="footer_nav_link" to="/wellness/individual/fitness">Fitness</Link>
							<Link className="footer_nav_link" to="/wellness/individual/lifestyle">Lifestyle</Link>
							<Link className="footer_nav_link" to="/wellness/individual/nutrition">Nutrition</Link>
						</div>

						<div className="footer_nav_section">
							<h5 className="footer_nav_header">Business</h5>
							<Link className="footer_nav_link" to="/book_visit">Book a Visit</Link>
							<Link className="footer_nav_link" to="/onboarding/company">Sign Up for a Corporate Package</Link>
							<Link className="footer_nav_link" to="/blogPost">Blog</Link>
						</div>

					</div>

					<div>
						<h5 className="footer_nav_header">Follow Us</h5>
						<div className="socials">
							<a href='https://web.facebook.com/FitnessFairNG/?_rdc=1&_rdr' rel="noopener noreferrer" target='_blank' >
								<Avatar className="social">
									<FacebookIcon fontSize="large"/>
								</Avatar>
							</a>
							<a href='https://twitter.com/fitnessfairng' rel="noopener noreferrer" target='_blank' >
								<Avatar className="social">
									<TwitterIcon fontSize="large" />
								</Avatar>
							</a>

							<Avatar className="social">
								<InstagramIcon fontSize="large"/>
							</Avatar>
						</div>
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}

Footer.propTypes = {
	//PropTypes
	//TODO: footer prop types goes here
};