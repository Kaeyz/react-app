/*eslint-disable */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import linkedin from '../assets/linkedIn.png';
import team1 from '../assets/testimony3.png';
import AppLayout from '../components/layouts/appLayout/AppLayout';
import Header from '../components/layouts/appLayout/header/index2';

const Wrapper = styled.div`
	padding-top: 10rem;
	margin-bottom: 150px;
	@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
		margin-bottom: 70px;
	}
	.head {
		width: 41%;
		margin: auto auto 40px auto;
		text-align: center;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			width: 80%;
		}
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			width: 100%;
			padding: 0 25px;
		}
	}
	.head h1 {
		font-size: 4rem;
		position: relative;
		line-height: 7.1rem;
		font-weight: 400;
		margin-bottom: 20px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			font-size: 3rem;
		}
	}
	.head h1::after {
		content: ' ';
		position: absolute;
		top: 82%;
		width: 50px;
		height: 5px;
		background-color: ${(props) => props.theme.color.text_08};
		border-radius: 14px;
		left: 45%;
	}
	.team {
		padding: 7rem 0 10rem 0rem;
		height: 500px;
		position: relative;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			height: 400px;
		}
	}

	.blue-bg {
		background-color: rgba(46, 196, 182, 0.05);
		height: 100%;
	}
	.member {
		text-align: center;
		position: absolute;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			max-width: 30%;
		}
		.img {
			background-image: url(${team1});
		}
	}
	.one .img {
		background-image: url('https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto/v1607309840/chooseLife/ceo_xero8q.jpg');
	}
	.two .img {
		background-image: url('https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto/v1607309840/chooseLife/eke_gwouoy.jpg');
	}
	.three .img {
		background-image: url('https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto/v1607312175/chooseLife/joel_bcbizs.jpg');
	}
	.four .img {
		background-image: url('https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto/v1607309840/chooseLife/prince_tahnhg.jpg');
	}
	.five .img {
		background-image: url('https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto/v1607309840/chooseLife/soteye_l2rm67.jpg');
	}
	.six .img {
		background-image: url('https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto/v1607312175/chooseLife/adenike_froorz.jpg');
	}
	.one {
		top: 0;
		left: 15%;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			left: 5%;
		}
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			top: 10%;
		}
	}

	.two {
		top: 0;
		left: 50%;
		transform: translate(-50%, 0%);
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			top: 10%;
		}
	}
	.three {
		top: 0;
		right: 15%;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			right: 5%;
		}
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			top: 10%;
		}
	}
	.four {
		left: 15%;
		bottom: -83px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			bottom: 0;
			left: 5%;
		}
	}
	.five {
		left: 50%;
		transform: translate(-50%, 0%);
		bottom: -83px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			bottom: 0;
		}
	}
	.six {
		right: 15%;
		bottom: -83px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			bottom: 0;
			right: 5%;
		}
	}
	.member .img {
		display: inline-block;
		width: 170px;
		height: 170px;
		border-radius: 50%;
		background-size: cover;
		background-position: center 0px;
		background-repeat: no-repeat;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			width: 100px;
			height: 100px;
		}
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			width: 70px;
			height: 70px;
		}
	}
	.text {
		opacity: 0.8;
		font-weight: 400;
	}
	.name {
		font-size: 2rem;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			font-size: 1.5rem;
			line-height: 12px;
		}
	}
	.role {
		font-size: 1.5rem;
		line-height: 12px;
		margin-top: 5px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			font-size: 1.3rem;
		}
	}
	.social {
		margin-top: 15px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			margin-top: 0;
		}
		img {
			width: auto;
			height: 20px;
			@media screen and (max-width: ${(props) =>
					props.theme.breakpoint.md}) {
				height: 15px;
			}
		}
		.pd {
			margin: 0 15px;
			@media screen and (max-width: ${(props) =>
					props.theme.breakpoint.sm}) {
				margin: 0 5px;
			}
		}
	}
`;
function ScrollToTopOnMount() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return null;
}
function Team(props) {
	const toPillar = (e) => {
		const anchor = document.querySelector('#pillar');
		anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
	};
	const toAbout = (e) => {
		const anchor = document.querySelector('#aboutUs');
		anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
	};
	return (
		<AppLayout header={<Header />}>
			<ScrollToTopOnMount />
			<Wrapper>
				<div className="head">
					<h1>OUR TEAM</h1>
					<p>Meet the wellness team.</p>
				</div>

				<div className="team">
					<div className="blue-bg"></div>
					<div className="member one">
						<div className="img"></div>
						<h2 className="name text">Dr. Uganze Eke</h2>
						<h3 className="role text">CEO</h3>
						<div className="social flex">
							<a
								href="https://www.linkedin.com/in/uganze-eke-22a1946b/"
								target="_blank"
							>
								<img src={linkedin} alt="linkedin" />
							</a>

							{/* <img className="pd" src={twitter} alt="twitter" />
              <img src={mail} alt="mail" /> */}
						</div>
					</div>
					<div className="member two">
						<div className="img"></div>
						<h2 className="name text">Mr. UK Eke</h2>
						<h3 className="role text">Chairman</h3>
						<div className="social flex">
							<a
								href="https://www.linkedin.com/in/u-k-eke-076647200/"
								target="_blank"
							>
								<img src={linkedin} alt="linkedin" />
							</a>

							{/* <img className="pd" src={twitter} alt="twitter" />
              <img src={mail} alt="mail" /> */}
						</div>
					</div>
					<div className="member three">
						<div className="img"></div>
						<h2 className="name text">Mr. Joel Uzamere</h2>
						<h3 className="role text">
							Certified Fitness Consultant
						</h3>
						<div className="social flex">
							<a
								href="https://www.linkedin.com/in/joel-uzamere-805395b"
								target="_blank"
							>
								<img src={linkedin} alt="linkedin" />
							</a>
							{/* <img className="pd" src={twitter} alt="twitter" />
              <img src={mail} alt="mail" /> */}
						</div>
					</div>
					<div className="member four">
						<div className="img"></div>
						<h2 className="name text">Mr. Prince Anusiem</h2>
						<h3 className="role text">Chief Operations Manager</h3>
						<div className="social flex">
							<a
								href="https://www.linkedin.com/in/prince-anusiem-362085146"
								target="_blank"
							>
								<img src={linkedin} alt="linkedin" />
							</a>
							{/* <img className="pd" src={twitter} alt="twitter" />
              <img src={mail} alt="mail" /> */}
						</div>
					</div>
					<div className="member five">
						<div className="img"></div>
						<h2 className="name text">Mr. Soteye Babatunde</h2>
						<h3 className="role text">Consultant Nutritionist</h3>
						<div className="social flex">
							<a
								href="https://www.linkedin.com/in/soteyeheinrich-babatunde-6531127b"
								target="_blank"
							>
								<img src={linkedin} alt="linkedin" />
							</a>
							{/* <img className="pd" src={twitter} alt="twitter" />
              <img src={mail} alt="mail" /> */}
						</div>
					</div>
					<div className="member six">
						<div className="img"></div>
						<h2 className="name text">Mrs. Adenike Adeyemi</h2>
						<h3 className="role text">
							Corporate Strategy Adviser
						</h3>
						<div className="social flex">
							<a
								href="https://www.linkedin.com/in/adenike-adeyemi-8286a81"
								target="_blank"
							>
								<img src={linkedin} alt="linkedin" />
							</a>
							{/* <img className="pd" src={twitter} alt="twitter" />
              <img src={mail} alt="mail" /> */}
						</div>
					</div>
				</div>
			</Wrapper>
		</AppLayout>
	);
}

export { ScrollToTopOnMount };
export default Team;
