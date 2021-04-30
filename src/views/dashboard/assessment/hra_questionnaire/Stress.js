import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import StressForm from '../../../../components/dashboard/assessment/hra_questionnaire/StressForm';
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

function Stress({ getQuestions, questions }) {
	React.useEffect(() => {
		getQuestions('STRESS');
	}, [getQuestions]);

	return (
		<DashboardLayout whatPage="Assessment">
			<Wrapper>
				<main className="content">
					<QuestionnaireLayout
						whatQuestion="Stress"
						heading="Health Risk Assessment"
						detail={questions.prompt || ''}
					>
						<StressForm questions={questions.q || []} />
					</QuestionnaireLayout>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
}

Stress.propTypes = {
	getQuestions: PropTypes.func.isRequired,
	questions: PropTypes.any.isRequired,
};

const mapStateToProps = (state) => {
	const questions = state.hra.questions.STRESS;
	return { questions: questions || [] };
};


export default connect(mapStateToProps, { getQuestions })(Stress);
