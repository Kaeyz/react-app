import React from 'react';
import styled from 'styled-components';
//import PropTypes from 'prop-types';
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
}
`;

function HealthReview() {

	return (
		<DashboardLayout>
			<QuestionnaireLayout
				heading='Review Health Assessment Submission'
				Image={smallImg}
				button='hideButton'
				null='null'>
				<Wrapper>
					<ReviewCard
						heading='General Questions' />
					<ReviewCard
						heading='Covid Risk'/>
					<ReviewCard
						heading='Blood pressure and Cholesterol' />
					<ReviewCard
						heading='Smoking and Vaping' />
					<ReviewCard
						heading='Travel and Alcohol' />
					<ReviewCard
						heading='Demographics' />
					<div className="submit">
						<Button theme="darkGreenBtn" style={{width:'16.3rem'}}>Submit all Assessment</Button>
					</div>
				</Wrapper>
			</QuestionnaireLayout>
		</DashboardLayout>
	);
}

export default HealthReview;
