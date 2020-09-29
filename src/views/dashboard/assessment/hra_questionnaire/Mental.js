import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from '../../../../store/actions/hraActions';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../../../components/layouts/questionnaireLayout/Questionnaire';
import MentalForm from '../../../../components/dashboard/assessment/hra_questionnaire/MentalForm';

const Wrapper = styled.div`
.content {
	padding: 2rem;
	@media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
		padding:0;	}
	  }
`;

function Mental({ getQuestions, questions }) {
	React.useEffect(() => {
		getQuestions('MENTAL_HEALTH');
	}, [getQuestions]);

	return (
		<DashboardLayout whatPage="Assessment">
			<Wrapper>
				<main className="content">
					<QuestionnaireLayout
						whatQuestion="Mental Risk"
						heading="Health Risk Assessment"
						detail={questions.prompt || ''}
					>
						<MentalForm questions={questions.q || []} />
					</QuestionnaireLayout>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
}

Mental.propTypes = {
	getQuestions: PropTypes.func.isRequired,
	questions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	const questions = state.hra.questions.MENTAL_HEALTH;
	return { questions: questions || [] };
};


export default connect(mapStateToProps, { getQuestions })(Mental);
