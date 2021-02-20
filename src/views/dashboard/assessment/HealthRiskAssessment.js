import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import smallImg from '../../../assets/Activity.svg';
import GHM from '../../../assets/GHM.svg';
import Back from '../../../assets/greenBackArrow.svg';
import CircularProgressCard from '../../../components/dashboard/assessment/CircularProgressCard';
import QuestionnaireLayout from '../../../components/dashboard/assessment/hra_questionnaire/QuestionnaireLayout';
import DashboardLayout from '../../../components/layouts/dashboardLayout/DashboardLayout';

const Wrapper = styled.div`
	.flex {
		margin: 4rem 0;
		p {
			min-width: max-content;
			font-size: 1.6rem;
			line-height: 1.5rem;
			letter-spacing: -0.2px;
			color: #0a2523;
			margin-right: 2rem;
		}
	}
	.lower {
		.lower-content {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			&::-webkit-scrollbar {
				height: 0.3rem;
			}

			&::-webkit-scrollbar-track {
				-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
				box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
			}

			&::-webkit-scrollbar-thumb {
				background-color: darkgrey;
				outline: 1px solid slategrey;
			}
			@media screen and (max-width: ${(props) =>
		props.theme.breakpoint.md}) {
				overflow: scroll;
				overflow-y: hidden;
			}
		}
		.info-2 {
			font-size: 1.6rem;
			line-height: 2.4rem;
			color: ${(props) => props.theme.color.text_02};
			margin: 4.8rem 0 1.5rem 0;
		}
	}
	.heading2 {
		display: flex;
		justify-content: space-between;
		margin: 3.2rem 0;
		padding: 0 2px;
		h1 {
			font-size: 1.8rem;
			line-height: 2.4rem;
			font-weight: 600;
			margin-right: 4.1rem;
			color: ${(props) => props.theme.color.text_01};
		}
		.null {
			border-bottom: 1px solid #d6d8d3;
			width: 53.4rem;
			margin-bottom: 0.5rem;
		}
	}
	.middle {
		margin-bottom: 6rem;
	}
	.footer {
		font-size: 1.6rem;
		line-height: 1.5rem;
		align-items: center;
		text-decoration-line: underline;
		color: ${(props) => props.theme.color.ui_05};
		display: flex;
		margin-top: 14rem;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			font-size: 1.3rem;
		}
		img {
			margin-left: 1rem;
		}
	}
	.darkP {
		font-size: 1.6rem;
		line-height: 2.5rem;
		display: flex;
		align-items: center;
		letter-spacing: 0.2px;
		color: ${(props) => props.theme.color.ui_05};
	}
	.top-header3 {
		margin-top: -50px;
		p {
			font-weight: bold;
			font-size: 2rem;
			line-height: 2rem;
			letter-spacing: -0.2px;
		}
	}
	.top-header4 {
		margin-bottom: 2rem;
	}
	.review-back {
		margin-top: -60px;
	}
	.top-header5 {
		grid-template-columns: max-content 1fr;
	}
	.mt {
		margin-top: 2rem;
	}
	.MuiCircularProgress-colorPrimary {
		color: ${(props) => props.theme.color.brand_02};
	}
`;

const HealthRiskAssessment = ({ percentageCompleted }) => {
	return (
		<Wrapper>
			<DashboardLayout whatPage="Assessment">
				<QuestionnaireLayout previousLink="/assessment">
					<Link className="review-back" to="/assessment">
						<img src={Back} alt="go back" />
						<p>Health Risk Assessment</p>
					</Link>
					<div className="top-header2 top-header3">
						<img src={smallImg} alt="adornment" />
						<p>Health Risk Assessment</p>
					</div>
					<div className="top-header2 top-header4 top-header5">
						<p>Preliminary Assessment</p>
						<div className="null" />
					</div>
					<div className="top-header2 review-mobile-only top-header4 mt">
						<img src={Back} alt="adornment" />
						<p>Preliminary Assessment</p>
						<div className="null" />
					</div>
					<main className="content">
						<div className="middle">
							<Grid container spacing={1}>
								<Grid item xs={12}>
									<p className="darkP">
										Any information is confidential to you
										and Choose Life. Choose Life does not
										share this information with your
										employer. This information is strictly
										to give you an assessment of where your
										health is, and we use this information
										in recommending active lifestyle
										choices.
									</p>
								</Grid>

								<Grid item xs={12}>
									<p className="darkP">
										Our aim is to help you live your best
										lives, taking into consideration, your
										wellbeing and taking the right steps to
										help you Choose Life, one day at a time.
									</p>
								</Grid>
							</Grid>
						</div>
						<div className="lower">
							<Grid
								container
								spacing={3}
								className="lower-content"
							>
								<Grid item xs={12}>
									<CircularProgressCard
										btnValue={
											percentageCompleted > 0
												? 'Continue'
												: 'Start'
										}
										cardInfo={'Health Assessment'}
										btnTheme="darkGreenBtn"
										backgroundColor="blue"
										where={
											percentageCompleted > 0
												? '/assessment/health/general'
												: '/assessment/health/start'
										}
										progress={percentageCompleted}
									/>
								</Grid>
								<Grid item xs={12}>
									<CircularProgressCard
										btnValue={
											percentageCompleted > 0
												? 'Continue'
												: 'Start'
										}
										showButton={
											percentageCompleted > 0
												? true
												: false
										}
										cardInfo={'Lifestyle Assessment'}
										btnTheme="deepYellowBtn"
										backgroundColor="orange"
										progress={percentageCompleted}
										where={
											percentageCompleted > 0
												? '/assessment/health/smoking'
												: '/assessment/health/start'
										}
									/>
								</Grid>

								<Grid item xs={12}>
									<CircularProgressCard
										btnValue={
											percentageCompleted > 0
												? 'Continue'
												: 'Start'
										}
										showButton={
											percentageCompleted > 0
												? true
												: false
										}
										cardInfo={'Fitness Assessment'}
										btnTheme="yellowBtn"
										backgroundColor="yellow"
										progress={percentageCompleted}
										where={
											percentageCompleted > 0
												? '/assessment/health/activity'
												: '/assessment/health/start'
										}
									/>
								</Grid>

								<Grid item xs={12}>
									<CircularProgressCard
										btnValue={
											percentageCompleted > 0
												? 'Continue'
												: 'Start'
										}
										showButton={
											percentageCompleted > 0
												? true
												: false
										}
										cardInfo={'Nutrition Assessment'}
										btnTheme="purpleBtn"
										backgroundColor="green"
										progress={percentageCompleted}
										where={
											percentageCompleted > 0
												? '/assessment/health/food'
												: '/assessment/health/start'
										}
									/>
								</Grid>
							</Grid>
							<p className="footer">
								This assessment is powered by{' '}
								<a
									href="https://healthylifehra.org/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={GHM} alt="GHM" />
								</a>
							</p>
						</div>
					</main>
				</QuestionnaireLayout>
			</DashboardLayout>
		</Wrapper>
	);
};

HealthRiskAssessment.propTypes = {
	percentageCompleted: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
	const percentageCompleted = state.hra.percentageCompleted;
	return { percentageCompleted };
};

export default connect(mapStateToProps)(HealthRiskAssessment);
