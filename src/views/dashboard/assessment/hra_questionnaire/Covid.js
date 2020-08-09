import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from '../../../../store/actions/hraActions';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../../../components/layouts/questionnaireLayout/Questionnaire';
import CovidForm from '../../../../components/dashboard/assessment/hra_questionnaire/CovidForm';
import smallImg from '../../../../assets/Activity.svg';

const Wrapper = styled.div`
  .content {
    padding: 2rem;
  }
`;

function Covid({ getQuestions, questions }) {
	React.useEffect(() => {
		getQuestions('COUGH_AND_HAND_HYGIENE');
	}, [getQuestions]);

	return (
		<DashboardLayout>
			<Wrapper>
				<main className="content">
					<QuestionnaireLayout
						Image={smallImg}
						whatQuestion="Covid Risk"
						heading="Health Risk Assessment"
						percent='70'
						detail="Our aim is to help you live your best lives, taking into consideration ispum dior iono."

					>
						<CovidForm questions={questions} />
					</QuestionnaireLayout>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
}

Covid.propTypes = {
	getQuestions: PropTypes.func.isRequired,
	questions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	const questions = state.hra.questions.COUGH_AND_HAND_HYGIENE;
	return { questions: questions || [] };
};


export default connect(mapStateToProps, { getQuestions })(Covid);
