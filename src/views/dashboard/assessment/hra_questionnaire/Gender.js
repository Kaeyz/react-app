import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from '../../../../store/actions/hraActions';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../../../components/layouts/questionnaireLayout/Questionnaire';
import GenderForm from '../../../../components/dashboard/assessment/hra_questionnaire/GenderForm';


const Wrapper = styled.div`
.content {
	padding: 2rem;
	@media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
		padding:0;	}
	  }
`;

function Gender({ getQuestions, questions }) {
	React.useEffect(() => {
		getQuestions('GENDER_SPECIFIC');
	}, [getQuestions]);

	return (
		<DashboardLayout whatPage="Assessment">
			<Wrapper>
				<main className="content">
					<QuestionnaireLayout
						whatQuestion="Gender Specific Risk"
						heading="Health Risk Assessment"
						detail={questions.prompt || ''}

					>
						<GenderForm questions={questions.q || []} />
					</QuestionnaireLayout>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
}

Gender.propTypes = {
	getQuestions: PropTypes.func.isRequired,
	questions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	const questions = state.hra.questions.GENDER_SPECIFIC;
	return { questions: questions || [] };
};


export default connect(mapStateToProps, { getQuestions })(Gender);
