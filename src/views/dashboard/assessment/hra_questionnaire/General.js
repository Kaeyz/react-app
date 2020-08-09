import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from '../../../../store/actions/hraActions';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../../../components/layouts/questionnaireLayout/Questionnaire';
import GeneralForm from '../../../../components/dashboard/assessment/hra_questionnaire/GeneralForm';
// import smallImg from '../../../../assets/Activity.svg';
import { device } from '../../../../Device';


const Wrapper = styled.div`
  .content {
	padding: 2rem;
	${device.tablet`
    padding:0;
  `}
  }
`;

function General({ getQuestions, questions }) {
	React.useEffect(() => {
		getQuestions('BASIC_INFORMATION');
	}, [getQuestions]);

	return (
		<DashboardLayout>
			<Wrapper>
				<main className="content">

					<QuestionnaireLayout
						// Image={smallImg}
						whatQuestion="General Questions"
						heading="Health Risk Assessment"
						percent='70'
						detail="Our aim is to help you live your best lives, taking into consideration ispum dior iono."
					>
						<GeneralForm questions={questions} />

					</QuestionnaireLayout>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
}

General.propTypes = {
	getQuestions: PropTypes.func.isRequired,
	questions: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
	const questions = state.hra.questions.BASIC_INFORMATION;
	return { questions: questions || [] };
};

export default connect(mapStateToProps, { getQuestions })(General);
