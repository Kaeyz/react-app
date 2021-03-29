import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import smallImg from '../../../assets/Activity.svg';
import Back from '../../../assets/greenBackArrow.svg';

const Wrapper = styled.div`
	.flex-back {
		display: flex;
		align-items: flex-end;
		justify-content: start;
		padding: 1rem 0;
		text-decoration: none;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			display: none;
		}
	}
	.back {
		font-weight: bold;
		line-height: 1.4rem;
		color: #2ec4b6;
		padding-left: 0.8rem;
	}
	.titleWithNull {
		width: 100%;
		padding: 3.8rem 0;
		align-items: center;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			justify-content: start;
		}
	}
	h1 {
		font-weight: bold;
		font-size: 2rem;
		line-height: 2rem;
		letter-spacing: -0.2px;
		color: #000b0a;
		width: 275px;
		max-width: 100%;
	}
	.title {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr max-content;
		align-items: center;
		img {
			max-width: max-content;
		}
		.img {
			@media screen and (max-width: ${(props) =>
		props.theme.breakpoint.md}) {
				display: none;
			}
		}
	}
	.img2 {
		display: none;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			display: block;
		}
	}
	.null {
		border: 1px solid rgba(214, 216, 211, 0.5);
		margin: 10px 0px;
		width: 100%;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			display: none;
		}
	}
	.questions-container {
		box-shadow: 20px 12px 20px rgba(233, 233, 233, 0.25);
		border-radius: 10px;
		padding: 3rem;
		display: grid;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			display: block;
			background-color: #fbfbfb;
			box-shadow: 0px 0px 0px rgba(233, 233, 233, 0.25);
			padding: 0;
		}
	}
	.gridy {
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			display: block;
		}
	}
	.gridy1 {
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			max-width: 100%;
		}
	}
	.paper-question {
		box-shadow: 0px 0px 0px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			box-shadow: 20px 12px 20px rgba(233, 233, 233, 0.25);
			border-radius: 4px;
			background-color: #fff;
			padding: 2.4rem 1rem;
		}
	}
	.what-question {
		position: sticky;
		top: 40px;
		h5 {
			font-weight: bold;
			font-size: 2.1rem;
			line-height: 3rem;
			color: #171f46;
			padding: 2.9rem 0 1rem 0;
		}
		p {
			align-items: center;
			letter-spacing: 0.2px;
			color: #000b0a;
		}
		.pointBar {
			h2 {
				line-height: 1.1rem;
				color: #737373;
				padding-bottom: 1rem;
			}
			.flex {
				justify-content: space-between;
				.show_mobile {
					display: none;
					@media screen and (max-width: ${(props) =>
		props.theme.breakpoint.md}) {
						display: block;
					}
				}
			}
		}
	}
	.MuiLinearProgress-barColorPrimary {
		background-color: #f37920;
		border-radius: 100px;
	}
	.MuiLinearProgress-colorPrimary {
		background-color: rgba(243, 121, 32, 0.1);
		border-radius: 100px;
	}
`;

const QuestionnaireLayout = ({
	children,
	heading,
	history,
	whatQuestion,
	detail,
	percentageCompleted,
}) => {
	React.useEffect(() => {
	},[percentageCompleted]);
	return (
		<Wrapper>
			<section className="top">
				<div className="flex-back grid" onClick={history.goBack}>
					<img src={Back} alt="go back" />
					<p className="back">Back</p>
				</div>

				<div className="flex titleWithNull">
					<div className="title">
						<img src={smallImg} alt="adornment" className="img" />
						<img src={Back} alt="go back" className="img2" />
						<h1>{heading}</h1>
					</div>
					<div className="null" />
				</div>
			</section>

			<Paper className="questions-container">
				<Grid container spacing={3} className="gridy">
					<Grid item sm={4} xs={12} className="gridy1">
						<div className="what-question">
							<div className="pointBar">
								<div className="flex">
									<h2>
										{percentageCompleted || 0}% Completed
									</h2>
								</div>
								<LinearProgress
									variant="determinate"
									value={percentageCompleted || 0}
									valueBuffer={100}
								/>
							</div>
							<h5>{whatQuestion}</h5>
							<p>{detail}</p>
						</div>
					</Grid>
					<Grid item sm={8} xs={12} className="gridy1">
						<Paper className="paper-question">{children}</Paper>
					</Grid>
				</Grid>
			</Paper>
		</Wrapper>
	);
};

QuestionnaireLayout.defaultProps = {
	detail:
		'All questions are aimed at helping you live your best life, taking into consideration your wellbeing.',
};

QuestionnaireLayout.propTypes = {
	alt: PropTypes.string,
	alt2: PropTypes.string,
	ImageRight: PropTypes.any,
	history: PropTypes.object.isRequired,
	Image: PropTypes.any,
	heading: PropTypes.string.isRequired,
	percentageCompleted: PropTypes.number.isRequired,
	whatQuestion: PropTypes.string.isRequired,
	detail: PropTypes.string.isRequired,
	previousLink: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	reportButton: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
	return { percentageCompleted: state.hra.percentageCompleted };
};

export default connect(mapStateToProps)(withRouter(QuestionnaireLayout));
