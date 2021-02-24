import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import GenderForm from '../../../../components/dashboard/assessment/hra_questionnaire/GenderForm';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../../../components/layouts/questionnaireLayout/Questionnaire';
import { getQuestions } from '../../../../store/actions/hraActions';


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
						detail={
							'THIS PAGE IS TARGETED AT SPECIFIC GENDER APPLICANTS, PLEASE SKIP QUESTIONS NOT RELATED TO YOUR GENDER. '
						}
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
