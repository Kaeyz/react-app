import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from '../../../../store/actions/hraActions';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../../../components/layouts/questionnaireLayout/Questionnaire';
import TravelForm from '../../../../components/dashboard/assessment/hra_questionnaire/TravelForm';
import smallImg from '../../../../assets/Activity.svg';

const Wrapper = styled.div`
  .content {
    padding: 2rem;
  }
`;

function Travel({ getQuestions, questions }) {
	React.useEffect(() => {
		getQuestions('DRIVING');
	}, [getQuestions ]);

	return (
		<DashboardLayout>
			<Wrapper>
				<main className="content">
					<QuestionnaireLayout
						Image={smallImg}
						whatQuestion={'Travel & Alcohol'}
						heading="Health Risk Assessment"
						percent='98'
						detail="Our aim is to help you live your best lives, taking into consideration ispum dior iono."
					>
						<TravelForm questions={questions} />

					</QuestionnaireLayout>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
}

Travel.propTypes = {
	getQuestions: PropTypes.func.isRequired,
	questions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	const questions = state.hra.questions.DRIVING;
	return { questions: questions || [] };
};

export default connect(mapStateToProps, { getQuestions })(Travel);
