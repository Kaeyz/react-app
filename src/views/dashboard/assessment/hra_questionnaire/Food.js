import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from '../../../../store/actions/hraActions';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../../../components/layouts/questionnaireLayout/Questionnaire';
import FoodForm from '../../../../components/dashboard/assessment/hra_questionnaire/FoodForm';
import smallImg from '../../../../assets/Activity.svg';

const Wrapper = styled.div`
  .content {
    padding: 2rem;
  }
`;

function Food({ getQuestions, questions }) {
	React.useEffect(() => {
		getQuestions('NUTRITION');
	}, [getQuestions]);

	return (
		<DashboardLayout>
			<Wrapper>
				<main className="content">
					<QuestionnaireLayout
						Image={smallImg}
						whatQuestion={'Food & Nutrition'}
						heading="Health Risk Assessment"
						percent='70'
						detail="Our aim is to help you live your best lives, taking into consideration ispum dior iono."
					>
						<FoodForm questions={questions} />

					</QuestionnaireLayout>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
}

Food.propTypes = {
	getQuestions: PropTypes.func.isRequired,
	questions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	const questions = state.hra.questions.NUTRITION;
	return { questions: questions || [] };
};

export default connect(mapStateToProps, { getQuestions })(Food);
