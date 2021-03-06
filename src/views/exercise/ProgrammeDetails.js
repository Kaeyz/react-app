import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { connect } from 'react-redux';
import styled from 'styled-components';
import smallImg from '../../assets/Activity.svg';
import QuestionnaireLayout from '../../components/dashboard/assessment/hra_questionnaire/QuestionnaireLayout';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import { getExercise } from '../../store/actions/exerciseActions';

const Wrapper = styled.div`
	.null {
		border: 1px solid rgba(214, 216, 211, 0.5);
		width: -webkit-fill-available;
		margin: 10px 0px;
	}
	.top-header {
		margin: 2rem 0;
		p {
			font-weight: normal;
			letter-spacing: -0.2px;
			color: ${(props) => props.theme.color.ui_06};
			margin-right: 2rem;
			min-width: 180px;
		}
	}
	.paper_bg {
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
		border-radius: 10px;
		padding: 2rem;
		.paper-img {
			width: 100%;
			height: 360px;
		}
		.img {
			width: 100%;
			height: 360px;
		}
	}
	.text {
		padding-top: 4rem;
		p {
			font-weight: 300;
			line-height: 2.5rem;
			letter-spacing: 0.2px;
			color: ${(props) => props.theme.color.ui_05};
			padding-bottom: 2rem;
		}
	}
`;

const ProgrammeDetails = ({ match, getExercise, isLoading, exercise }) => {
	const id = match.params.exerciseId;

	useEffect(() => {
		getExercise(Number(id));
	}, [getExercise, id]);

	return (
		<Wrapper>
			<DashboardLayout whatPage="Exercise">
				<QuestionnaireLayout
					heading="Exercise Guide"
					Image={smallImg}
					exerciseButton={true}
					Link="/exercise"
				>
					<div className="flex top-header">
						<p>
							{!isLoading && String(exercise.name).toUpperCase()}
						</p>
						<div className="null" />
					</div>
					<Paper className="paper_bg">
						<div className="paper-img">
							{!isLoading && (
								<LazyLoadImage
									className="img"
									alt="exercise"
									height={140}
									placeholder={<h5>Loading</h5>}
									placeholderSrc={
										'https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto/v1607309856/chooseLife/exercise_bg_ouhdef.svg'
									}
									effect="blur"
									src={exercise.image}
								/>
							)}
						</div>
					</Paper>
					<div className="text">
						<p>
							Exercise guides provide examples of what exercises
							you can partake in to get fit and healthy. All our
							guides are being currently expanded to provide you
							with more indepth information. Our aim is to help
							you live your best lives, taking into consideration,
							your wellbeing and taking the right steps to help
							you Choose Life, one day at a time.
						</p>
					</div>
				</QuestionnaireLayout>
			</DashboardLayout>
		</Wrapper>
	);
};

ProgrammeDetails.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	exercise: PropTypes.object.isRequired,
	getExercise: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	const { isLoading, exercise } = state.exercise;
	return { isLoading, exercise };
};

export default connect(mapStateToProps, { getExercise })(ProgrammeDetails);
