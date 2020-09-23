import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from '../../../../store/actions/hraActions';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../../../components/layouts/questionnaireLayout/Questionnaire';
import StressForm from '../../../../components/dashboard/assessment/hra_questionnaire/StressForm';


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
						whatQuestion="Gender Specific Risk"
						heading="Health Risk Assessment"
						detail="Our aim is to help you live your best lives, taking into consideration ispum dior iono."
					>
						<StressForm questions={questions} />
					</QuestionnaireLayout>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
}

Stress.propTypes = {
	getQuestions: PropTypes.func.isRequired,
	questions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	const questions = state.hra.questions.STRESS;
	return { questions: questions || [] };
};


export default connect(mapStateToProps, { getQuestions })(Stress);
