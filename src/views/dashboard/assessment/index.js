import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import smallImg from '../../../assets/Activity.svg';
import greenFlower from '../../../assets/greenFlower.svg';
import pinkFlower from '../../../assets/pinkFlower.svg';
// import ProgressSection from '../../../components/dashboard/common/ProgressSection';
import absoluteImg from '../../../assets/undraw_through_the_park.svg';
import yellowFlower from '../../../assets/yellowFlower.svg';
import Button from '../../../components/common/Button';
import PreliminaryCard from '../../../components/dashboard/common/PreliminaryCard';
import DashboardLayout from '../../../components/layouts/dashboardLayout/DashboardLayout';
import { fetchHraResponse } from '../../../store/actions/hraActions';

const Wrapper = styled.div`
	padding-top: 3rem;
	.heading {
		.paper {
			padding: 3.3rem 3rem;
		}
		h1 {
			font-weight: bold;
			font-size: 2.4rem;
			line-height: 2.4rem;
			margin-bottom: 2rem;
			letter-spacing: -0.2px;
			color: ${(props) => props.theme.color.ui_05};
		}
		p {
			line-height: 2.5rem;
			letter-spacing: 0.2px;
		}
	}
	.sub-heading {
		margin: 7.7rem 0 3.9rem;
		justify-content: start;
		h3 {
			letter-spacing: -0.2px;
			font-weight: normal;
			margin-left: 2rem;
			color: ${(props) => props.theme.color.ui_06};
			@media screen and (max-width: ${(props) =>
		props.theme.breakpoint.md}) {
				line-height: 2.5rem;
			}
		}
	}
	.withAbsImg {
		position: relative;
		padding: 0 3rem;
		margin-top: 9rem;
		margin-bottom: 6rem;
		height: 240px;
		border: 1px solid ${(props) => props.theme.color.text_09};
		box-shadow: 20px 12px 20px rgba(233, 233, 233, 0.25);
		border-radius: 10px;
		justify-content: flex-end;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			justify-content: start;
			padding: 2rem;
			margin-top: 4rem;
		}

		.withPicture {
			width: 516px;
			max-width: 60%;
			justify-content: space-between;
			@media screen and (max-width: ${(props) =>
		props.theme.breakpoint.md}) {
				flex-direction: column;
				align-items: start;
				height: 100%;
				justify-content: center;
			}
		}
		img {
			width: 300px;
			height: 240px;
			bottom: 54px;
			left: 30px;
			max-width: 35%;
			position: absolute;
			@media screen and (max-width: ${(props) =>
		props.theme.breakpoint.md}) {
				left: unset;
				right: -13px;
				width: 300px;
				height: 200px;
				max-width: 43%;
				bottom: 23px;
			}
			@media screen and (max-width: ${(props) =>
		props.theme.breakpoint.sm}) {
				right: -8px;
				bottom: 0;
			}
		}

		p {
			letter-spacing: 0.2px;
			color: ${(props) => props.theme.color.ui_05};
			@media screen and (max-width: ${(props) =>
		props.theme.breakpoint.md}) {
				line-height: 2.5rem;
				max-width: 100%;
				margin-bottom: 2.6rem;
			}
			span {
				color: ${(props) => props.theme.color.brand_02};
				font-weight: bold;
			}
		}
	}
	.grid-card {
		display: grid;
		grid-gap: 4rem;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		}
	}
`;

const DashboardAssessment = ({ fetchHraResponse, type, companySize }) => {
	React.useEffect(() => {
		fetchHraResponse();
	}, [fetchHraResponse]);

	return (
		<DashboardLayout whatPage="Assessment">
			<Wrapper>
				<main className="content">
					<div className="heading">
						<Paper className="paper">
							<h1>Assessment</h1>
							<p>
								More and more people are struggling with
								obstacles that keep them from eating better,
								moving around more and making healthy lifestyle
								choices. We find both younger and older people
								coming down with serious non communicable
								diseases due to personal and workplace related
								reasons. They are also unable to adopt the
								healthy lifestyle needed to fend off preventable
								diseases..
							</p>
							<br />
							<p>
								Choose life provides you with assessments to
								help you understand your body, identify
								potential risks as well as make better decisions
								on your Health, Fitness, Lifestyle and
								Nutrition.
							</p>
						</Paper>
					</div>

					<div className="sub-heading flex">
						<img src={smallImg} alt="adornment" />
						<h3>
							Steps to Understanding your Health with Choose life
						</h3>
					</div>

					<div className="lower">
						<div className="grid-card">
							<PreliminaryCard
								btnValue="Start Assessment"
								cardInfo="Health Risk Assessment"
								btnTheme="deepYellowBtn"
								backgroundColor="orange"
								where={'/assessment/health'}
								image={pinkFlower}
								details="Take a health risk assessment, understand the risks to yourself and how your lifestyle can be improved."
							/>

							<PreliminaryCard
								btnValue="Coming Soon"
								cardInfo="InBody Comprehensive Check (COMING SOON)"
								image={greenFlower}
								btnTheme="purpleBtn"
								backgroundColor="green"
								details="An Inbody check will help you understand your body's composition which in invaluable for self improvement."
							/>

							<PreliminaryCard
								btnValue="Start Guide"
								cardInfo={'Meal & Fitness Guide'}
								image={yellowFlower}
								where={'/meals'}
								btnTheme="yellowBtn"
								backgroundColor="yellow"
								details="Explore fitness routines to keep your body in shape or create a meal plan to keep you eating healthy."
							/>
						</div>

						<Paper className="withAbsImg flex">
							<img
								src={absoluteImg}
								alt="absoluteImg"
								className="absolutePic"
							/>

							{type === 'EMPLOYEE' && (
								<div className="flex withPicture">
									<p>
										Others have completed this assessment.
										Fill and get ahead of your colleagues!
									</p>
									<Link
										className="linked-btn"
										to="/rewards/leaderboard"
									>
										<Button
											value="View Leaderboard"
											theme="darkGreenBtn"
										>
											View Leaderboard
										</Button>
									</Link>
								</div>
							)}

							{type === 'COMPANY' && (
								<div className="flex withPicture">
									<p>
										<span>
											{companySize > 1 ? companySize : 2}
										</span>{' '}
										Others have completed this assessment.
										Fill and qualify for the Wellness
										reward!
									</p>

									<Link
										className="linked-btn"
										to="/rewards/leaderboard"
									>
										<Button
											value="View Leaderboard"
											theme="darkGreenBtn"
										>
											View Leaderboard
										</Button>
									</Link>
								</div>
							)}
						</Paper>
					</div>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
};

DashboardAssessment.propTypes = {
	fetchHraResponse: PropTypes.func.isRequired,
	companySize: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
	const { companySize, type } = state.user.user;
	return { companySize, type };
};

export default connect(mapStateToProps, { fetchHraResponse })(
	DashboardAssessment,
);
