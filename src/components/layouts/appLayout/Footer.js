// modules
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import abtIcon from '../../../assets/abtIcon.png';
import addressIcon from '../../../assets/addressIcon.png';
import atIcon from '../../../assets/atIcon.png';
import brandlogoBlue from '../../../assets/brandlogoBlue.png';
import callIcon from '../../../assets/callIcon.png';
import copyright from '../../../assets/copyright.png';
import facebookIcon from '../../../assets/facebookIcon.png';
import greenflower from '../../../assets/greenflower.png';
import homeIcon from '../../../assets/homeIcon.png';
import pillarIcon from '../../../assets/ionic-pillarIcon.png';
import logo from '../../../assets/logo.png';
import twitterIcon from '../../../assets/twitterIcon.png';
import whatsappIcon from '../../../assets/whatsapp.png';
import Container from '../../common/Container';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.text_03};
  border-top: 1px solid rgba(141, 184, 56, 0.3);
  position: relative;
  .footer {
    display: grid;
    grid-template-columns: 42% 53%;
    grid-gap: 5%;
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
  .copyright{
    width: 20px;
    margin-right: 1rem;
  }
  .info-top {
    padding-bottom: 15px;
    line-height: 27px;
    margin-top: 5px;
    img{

    }
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
    grid-gap: 3rem;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 30px;
    font-family: Avenir;
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
    .abtIcon {
      height: 13px !important;
    }
    .addressIcon {
      height: 17px !important;
    }
  }

  .footer_nav_header {
    justify-content: start;
    font-size: 1.5rem;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      font-size: 1.7rem;
    }
  }

  .footer_nav_link {
    text-decoration: none;
    color: ${(props) => props.theme.color.text_05};
    font-weight: 500;
    font-size: 1.2rem;
    padding: 7px 0;
    &:hover {
      color: ${(props) => props.theme.color.brand_02};
      transition: 0.3s;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      font-size: 1.4rem;
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

export default function Footer({ arrow, onClick, onClickAbout, onClickPillar }) {
	return (
		<Wrapper>
			<img className="greenflower" src={greenflower} alt="greenflower" />
			<Container>
				<div className="footer">
					<div className="footer-info">
						<h5 className="footer_nav_header blue flex">
							<span>
								<img className="logo" src={logo} alt="brand" />
							</span>
							<img
								className="brandlogoBlue"
								src={brandlogoBlue}
								alt="brandlogoBlue"
							/>
						</h5>
						<div className="info">
							<p className="info-top">
								At Choose Life, we understand that what goes
								into your body Is the most important part of
								your health. This is why we offer support
								through personalized nutrition plans and recipe
								on how to make healthier versions of the Foods
								you already love.{' '}
							</p>
							<p className="info-bottom">
								<span>
									<img
										className="copyright"
										src={copyright}
										alt="copyright"
									/>
								</span>
								2020 Choose Life Ltd. All Rights Reserved
							</p>
						</div>
					</div>
					<div className="footer_nav">
						<div className="footer_nav_section">
							<h5 className="footer_nav_header blue">
								Site Links
							</h5>
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
								Choose Life Pillars
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
								About us
							</div>
						</div>

						<div className="footer_nav_section">
							<h5 className="footer_nav_header blue">
								Contact Us
							</h5>
							<Link>
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
							</Link>
							<Link
								className="flex"
								style={{
									justifyContent: 'start',
									alignItems: 'baseline',
								}}
							>
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
							</Link>
							<Link className="footer_nav_link">
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
							</Link>
							<Link className="footer_nav_link">
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
										2, Banana Island Shopping Complex,
										Banana Island, Ikoyi-Lagos,Nigeria
									</span>
								</a>
							</Link>
						</div>

						<div className="footer_nav_section">
							<h5 className="footer_nav_header blue">
								Social Media
							</h5>
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
