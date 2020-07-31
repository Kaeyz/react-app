import React from 'react';
import styled from 'styled-components';
//import PropTypes from 'prop-types';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../../../components/dashboard/assessment/hra_questionnaire/QuestionnaireLayout';
import ReviewCard from '../../../../components/dashboard/assessment/hra_questionnaire/ReviewCard';


const Wrapper = styled.div`

`;

function HealthReview() {

	return (
		<DashboardLayout>
			<QuestionnaireLayout>
				<Wrapper>
					<ReviewCard />
					<ReviewCard />
					<ReviewCard />
				</Wrapper>
			</QuestionnaireLayout>
		</DashboardLayout>
	);
}

export default HealthReview;
