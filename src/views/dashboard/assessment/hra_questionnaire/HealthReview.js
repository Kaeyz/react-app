import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import smallImg from '../../../../assets/Activity.svg';
import Button from '../../../../components/common/Button';
import QuestionnaireLayout from '../../../../components/dashboard/assessment/hra_questionnaire/QuestionnaireLayout';
import ReviewCard from '../../../../components/dashboard/assessment/hra_questionnaire/ReviewCard';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import { saveQuestions } from '../../../../store/actions/hraActions';

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
	// const nextLink = '/assessment/health/questionnaire_completed';
	const nextLink = '/reports';
	const onSaveClick = (event) => {
		event.preventDefault();
		const input = { stage: 'SUBMIT' };
		// console.log(input);
		saveQuestions(input, nextLink, history);
	};

	return (
		<DashboardLayout whatPage="Assessment">
			<QuestionnaireLayout
				heading='Review Health Assessment Submission'
				Image={smallImg}
				previousLink="/assessment/health/food"
			>
				{isLoading ? (
					<div>Loading ...</div>
				) : (
					<Wrapper>
						<ReviewCard
							title="General Questions"
							category="BASIC_INFORMATION"
						/>
						<ReviewCard title="Covid Risk" category="COUGH_AND_HAND_HYGIENE" />
						<ReviewCard title="Blood pressure and Cholesterol" category="BLOOD_PRESSURE" />
						<ReviewCard title="Gender Specific Risk" category="GENDER_SPECIFIC" />
						<ReviewCard title="Food and Nutrition" category="NUTRITION" />
						<ReviewCard title="Activity Risk" category="ACTIVITIES" />
						<ReviewCard title="Smoking and Vaping" category="SMOKING" />
						<ReviewCard title="Travel and Alcohol" category="DRIVING" />
						<ReviewCard title="Sleep" category="SLEEP" />
						<ReviewCard title="Mental Risk" category="MENTAL_HEALTH" />
						<ReviewCard title="Stress Risk" category="STRESS" />
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
