// modules
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import brandlogoBlue from '../../../assets/brandlogoBlue.png';
import atIcon from '../../../assets/emailAt.svg';
import facebookIcon from '../../../assets/facebook.svg';
import greenflower from '../../../assets/greenflower.png';
import homeIcon from '../../../assets/home.svg';
import logo from '../../../assets/logo.png';
import addressIcon from '../../../assets/map.svg';
import callIcon from '../../../assets/phone.svg';
import pillarIcon from '../../../assets/pillars.svg';
import twitterIcon from '../../../assets/twitter.svg';
import abtIcon from '../../../assets/userGroup.svg';
import whatsappIcon from '../../../assets/whatsapp.svg';
import Container from '../../common/Container';

const Wrapper = styled.div`
	background-color: ${(props) => props.theme.color.text_03};
	border-top: 1px solid rgba(141, 184, 56, 0.3);
	position: relative;
	.footer {
		display: grid;
		grid-template-columns: 42% 55%;
		grid-gap: 3%;
		padding: 6rem 0rem;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			display: block;
		}
	}
	.footer-info {
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			margin-bottom: 30px;
		}
	}
	.footer_nav_header .brandlogoBlue {
		margin-left: 2rem;
		height: 45px;
	}
	.footer_nav_header .logo {
		height: 73px;
	}
	.copyright {
		/* width: 20px; */
		margin-right: 1rem;
		text-align: center;
	}
	.info-top {
		padding-bottom: 15px;
		margin-top: 5px;
	}
	.blue {
		color: ${(props) => props.theme.color.brand_02};
		font-weight: 400;
	}
	.footer_nav .footer_nav_header {
		img {
			width: 48px;
			margin-right: 1rem;
		}
	}
	.footer_nav {
		display: grid;
		grid-auto-flow: column;
		grid-gap: 5rem;
		grid-template-columns: 1fr 1fr 1fr;
		margin-top: 30px;
		/* font-family: Avenir; */
		z-index: 44;
		position: relative;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			display: block;
		}
	}

	.footer_nav_section {
		display: flex;
		flex-direction: column;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			margin-bottom: 30px;
		}
		.icon img.icons {
			width: 20px;
			height: 20px;
			margin-right: 10px;
			vertical-align: middle;
		}
	}

	.footer_nav_header {
		justify-content: start;
		color: ${(props) => props.theme.color.brand_02};

		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
		}
	}

	.footer_nav_link {
		text-decoration: none;
		color: ${(props) => props.theme.color.text_05};
		font-weight: 500;
		padding: 7px 0;
		&:hover {
			color: ${(props) => props.theme.color.brand_02};
			transition: 0.3s;
		}
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
		}
	}
	.shapes {
		background-color: ${(props) => props.theme.color.brand_03};
	}
	.irreg-left {
		width: 70%;
		height: 0;
		border-top: 115px solid ${(props) => props.theme.color.brand_02};
		border-right: 100px solid transparent;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			border-top: 78px solid ${(props) => props.theme.color.brand_02};
			border-right: 60px solid transparent;
		}
	}

	.greenflower {
		position: absolute;
		height: 250px;
		top: 120px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			top: 300px;
		}
	}
	.arrow img {
		width: 80px;
		margin-bottom: 5px;
	}
`;

export default function Footer({
	arrow,
	onClick,
	onClickAbout,
	onClickPillar,
}) {
	return (
		<Wrapper>
			<img className="greenflower" src={greenflower} alt="greenflower" />
			<Container>
				<div className="footer">
					<div className="footer-info">
						<h5 className="footer_nav_header flex">
							<span>
								<img className="logo" src={logo} alt="brand" />
							</span>
							<img
								className="brandlog"
								src={brandlogoBlue}
								alt="brandlog"
							/>
						</h5>
						<div className="info">
							<h1>We are just a step away</h1>
							<p className="info-top">
								At Choose Life, we understand that what goes
								into your body Is the most important part of
								your health. This is why we offer support
								through personalized nutrition plans and recipe
								on how to make healthier versions of the Foods
								you already love.{' '}
							</p>
						</div>
					</div>
					<div className="footer_nav">
						<div className="footer_nav_section">
							<h4 className="footer_nav_header">
								Site Links
							</h4>
							<div className="footer_nav_link" onClick={onClick}>
								<span className="icon">
									<img
										className="icons"
										src={homeIcon}
										alt="homeIcon"
									/>
								</span>
								Home
							</div>
							<div
								className="footer_nav_link"
								onClick={onClickPillar}
							>
								<span className="icon">
									<img
										className="icons"
										src={pillarIcon}
										alt="pillarIcon"
									/>
								</span>
								Pillars
							</div>
							<div
								className="footer_nav_link"
								onClick={onClickAbout}
							>
								<span className="icon">
									<img
										className="icons abtIcon"
										src={abtIcon}
										alt="abtIcon"
									/>
								</span>
								About
							</div>
						</div>

						<div className="footer_nav_section">
							<h4 className="footer_nav_header">
								Contact Us
							</h4>
							<a
								href="tel:+2348026484048"
								className="footer_nav_link"
								target="_blank"
								rel="noreferrer"
							>
								<span className="icon">
									<img
										className="icons"
										src={callIcon}
										alt="callIcon"
									/>
								</span>
								<span>
									<b>0802 648 4048</b>
								</span>
							</a>
							<a
								href="tel:+2348026483318"
								className="footer_nav_link"
								target="_blank"
								rel="noreferrer"
							>
								<span className="icon">
									<img
										className="icons"
										src={callIcon}
										alt="callIcon"
									/>
								</span>
								<span>
									<b>0802 648 3318</b>
								</span>
							</a>
							<a
								className="footer_nav_link"
								target="_blank"
								rel="noreferrer"
								style={{ whiteSpace: 'pre' }}
								href="mailto:chooselife@fitnessfairng.com"
							>
								<span className="icon">
									<img
										className="icons"
										src={atIcon}
										alt="atIcon"
									/>
								</span>
								<span>chooselife@fitnessfairng.com</span>
							</a>
							<a
								href="https://goo.gl/maps/tz9eTPMRhUfk8Rdk9"
								className="footer_nav_link"
								target="_blank"
								rel="noreferrer"
							>
								<span className="icon">
									<img
										className="icons addressIcon"
										src={addressIcon}
										alt="addressIcon"
									/>
								</span>
								<span>
									2, Banana Island Shopping Complex, Banana
									Island, Ikoyi-Lagos, Nigeria
								</span>
							</a>
						</div>

						<div className="footer_nav_section">
							<h4 className="footer_nav_header">
								Social Media
							</h4>
							<a
								className="footer_nav_link"
								target="_blank"
								rel="noreferrer"
								href="https://twitter.com/fitnessfairng"
							>
								<span className="icon">
									<img
										className="icons"
										src={twitterIcon}
										alt="twitterIcon"
									/>
								</span>
								Twitter
							</a>
							<a
								className="footer_nav_link"
								target="_blank"
								rel="noreferrer"
								href="https://web.facebook.com/FitnessFairNG/?_rdc=1&_rdr"
							>
								<span className="icon">
									<img
										className="icons"
										src={facebookIcon}
										alt="facebookIcon"
									/>
								</span>
								Facebook
							</a>
							<a
								className="footer_nav_link"
								target="_blank"
								rel="noreferrer"
								href="https://wa.link/suqxdt"
							>
								<span className="icon">
									<img
										className="icons"
										src={whatsappIcon}
										alt="whatsapp"
									/>
								</span>
								WhatsApp
							</a>
							{/* <a className="footer_nav_link" target="_blank" href="#">
								<span className="icon">
									<img
										className="icons"
										src={instagramIcon}
										alt="instagramIcon"
									/>
								</span>
                Instagram
							</a> */}
						</div>
					</div>
				</div>
				<div className="arrow flex">
					<img src={arrow} />
				</div>
				<div className="copyright">
					<p className="info-bottom">
						<b>
							<span>&copy;</span>
							{new Date().getFullYear()}
						</b>{' '}
						Choose Life Ltd. All Rights Reserved
					</p>
				</div>
			</Container>

			<div className="shapes">
				<div className="irreg-left"></div>
				<div className="irreg-right"></div>
			</div>
		</Wrapper>
	);
}

Footer.propTypes = {
	arrow: PropTypes.any,
	onClick: PropTypes.func,
	onClickPillar: PropTypes.func,
	onClickAbout: PropTypes.func,
};
