import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SleepForm from '../../../../components/dashboard/assessment/hra_questionnaire/SleepForm';
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

function Sleep({ getQuestions, questions }) {
	React.useEffect(() => {
		getQuestions('SLEEP');
	}, [getQuestions]);

	return (
		<DashboardLayout whatPage="Assessment">
			<Wrapper>
				<main className="content">

					<QuestionnaireLayout
						// Image={smallImg}
						whatQuestion="Sleep"
						heading="Health Risk Assessment"
						percent='90'
						detail={questions.prompt || ''}
					>
						<SleepForm questions={questions.q || []} />

					</QuestionnaireLayout>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
}

Sleep.propTypes = {
	getQuestions: PropTypes.func.isRequired,
	questions: PropTypes.any.isRequired,
};

const mapStateToProps = (state) => {
	const questions = state.hra.questions.SLEEP;
	return { questions: questions || [] };
};


export default connect(mapStateToProps, { getQuestions })(Sleep);
