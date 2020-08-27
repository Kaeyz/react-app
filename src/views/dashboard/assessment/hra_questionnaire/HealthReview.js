import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { saveQuestions } from '../../../../store/actions/hraActions';

import Back from '../../../../assets/greenBackArrow.svg';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../../../components/dashboard/assessment/hra_questionnaire/QuestionnaireLayout';
import ReviewCard from '../../../../components/dashboard/assessment/hra_questionnaire/ReviewCard';
import smallImg from '../../../../assets/Activity.svg';
import Button from '../../../../components/common/Button';

const Wrapper = styled.div`
.submit {
	margin-top: 1rem;
	display: grid;
	grid-template-columns: max-content max-content;
	grid-gap: 2rem;
	justify-content: end;
	@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
		display:block;
	}
}
  .button {
		@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
		width:100% !important;
		}
}
`;

function HealthReview({ isLoading, saveQuestions, history }) {
	const nextLink = '/assessment/health/report';
	const onSaveClick = (event) => {
		event.preventDefault();
		const input = { stage: 'SUBMIT' };
		saveQuestions(input, nextLink, history);
	};

	return (
		<DashboardLayout whatPage="Assessment">
			<QuestionnaireLayout
				// heading='Review Health Assessment Submission'
				// Image={smallImg}
				previousLink="/assessment/health/food"
				// reportButton={false}
			>
				<Link className="review-back flex" to="/assessment/health/food">
					<img src={Back} alt="go back" />
					<p>Health Risk Assessment</p>
				</Link>
				<div className="top-header2">
					<img src={smallImg} alt="adornment" />
					<p>Review Health Assessment Submission</p>
					<div className="null" />
				</div>
				<div className="top-header2 review-mobile-only">
					<img src={smallImg} alt="adornment" />
					<p>Review H. Assessmentsubmission</p>
					<div className="null" />
				</div>
				{isLoading ? (
					<div>Loading ...</div>
				) : (
					<Wrapper>
						<ReviewCard
							title="General Questions"
							category="BASIC_INFORMATION"
						/>
						<ReviewCard title="Covid Risk" category="COUGH_AND_HAND_HYGIENE" />
						<ReviewCard
							title="Blood pressure and Cholesterol"
							category="BLOOD_PRESSURE"
						/>
						<ReviewCard title="Smoking and Vaping" category="SMOKING" />
						<ReviewCard title="Travel and Alcohol" category="DRIVING" />
						<ReviewCard title="Food and Nutrition" category="NUTRITION" />
						<ReviewCard title="Sleep" category="SLEEP" />
						<div className="submit">
							<Button
								theme="darkGreen"
								style={{ width: '16.3rem' }}
								onClick={onSaveClick}
							>
                Submit all Assessment
							</Button>
						</div>
					</Wrapper>
				)}
			</QuestionnaireLayout>
		</DashboardLayout>
	);
}

HealthReview.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	history: PropTypes.object.isRequired,
	saveQuestions: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	const { isLoading } = state.hra;
	return { isLoading };
};

export default connect(mapStateToProps, { saveQuestions })(
	withRouter(HealthReview)
);
