import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TravelForm from '../../../../components/dashboard/assessment/hra_questionnaire/TravelForm';
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

function Travel({ getQuestions, questions }) {
	React.useEffect(() => {
		getQuestions('DRIVING');
	}, [getQuestions ]);

	return (
		<DashboardLayout whatPage="Assessment">
			<Wrapper>
				<main className="content">
					<QuestionnaireLayout
						// Image={smallImg}
						whatQuestion={'Travel & Alcohol'}
						heading="Health Risk Assessment"
						percent='98'
						detail={questions.prompt || ''}
					>
						<TravelForm questions={questions.q || []} />

					</QuestionnaireLayout>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
}

Travel.propTypes = {
	getQuestions: PropTypes.func.isRequired,
	questions: PropTypes.any.isRequired,
};

const mapStateToProps = (state) => {
	const questions = state.hra.questions.DRIVING;
	return { questions: questions || [] };
};

export default connect(mapStateToProps, { getQuestions })(Travel);
