import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import FoodForm from '../../../../components/dashboard/assessment/hra_questionnaire/FoodForm';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../../../components/layouts/questionnaireLayout/Questionnaire';
import { getQuestions } from '../../../../store/actions/hraActions';
// import smallImg from '../../../../assets/Activity.svg';

const Wrapper = styled.div`
.content {
	padding: 2rem;
	@media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
		padding:0;	}
	  }
`;

function Food({ getQuestions, questions }) {
	React.useEffect(() => {
		getQuestions('NUTRITION');
	}, [getQuestions]);

	return (
		<DashboardLayout whatPage="Assessment">
			<Wrapper>
				<main className="content">
					<QuestionnaireLayout
						whatQuestion={'Food & Nutrition'}
						heading="Health Risk Assessment"
						percent='70'
						detail={questions.prompt || ''}
					>
						<FoodForm questions={questions.q || []} />

					</QuestionnaireLayout>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
}

Food.propTypes = {
	getQuestions: PropTypes.func.isRequired,
	questions: PropTypes.any.isRequired,
};

const mapStateToProps = (state) => {
	const questions = state.hra.questions.NUTRITION;
	return { questions: questions || [] };
};

export default connect(mapStateToProps, { getQuestions })(Food);
