import React from 'react';
//import PropTypes from 'prop-types';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../../../components/dashboard/assessment/hra_questionnaire/QuestionnaireLayout';
import ReviewCard from '../../../../components/dashboard/assessment/hra_questionnaire/ReviewCard';


function HealthReview() {

	return (
		<DashboardLayout>
			<QuestionnaireLayout>
				<ReviewCard />
				<ReviewCard />
				<ReviewCard />
			</QuestionnaireLayout>
		</DashboardLayout>
	);
}

export default HealthReview;
