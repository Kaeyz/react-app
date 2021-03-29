import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SmokingForm from '../../../../components/dashboard/assessment/hra_questionnaire/SmokingForm';
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

function Smoking({ getQuestions, questions }) {
	React.useEffect(() => {
		getQuestions('SMOKING');
	}, [getQuestions]);

	return (
		<DashboardLayout whatPage="Assessment">
			<Wrapper>
				<main className="content">
					<QuestionnaireLayout
						// Image={smallImg}
						whatQuestion={'Smoking & Vaping'}
						heading="Health Risk Assessment"
						percent='20'
						detail={questions.prompt || ''}
					>
						<SmokingForm questions={questions.q || []} />

					</QuestionnaireLayout>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
}

Smoking.propTypes = {
	getQuestions: PropTypes.func.isRequired,
	questions: PropTypes.any.isRequired,
};

const mapStateToProps = (state) =>{
	const questions = state.hra.questions.SMOKING;
	return { questions: questions || [] };
};

export default connect(mapStateToProps, { getQuestions })(Smoking);
