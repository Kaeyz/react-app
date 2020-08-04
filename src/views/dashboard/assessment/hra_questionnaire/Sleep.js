import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from '../../../../store/actions/hraActions';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../../../components/layouts/questionnaireLayout/Questionnaire';
import SleepForm from '../../../../components/dashboard/assessment/hra_questionnaire/SleepForm';
import smallImg from '../../../../assets/Group.svg';

const Wrapper = styled.div`
  .content {
    padding: 2rem;
  }
`;

function Sleep({ getQuestions, questions }) {
	React.useEffect(() => {
		getQuestions('SLEEP');
	}, [getQuestions]);

	return (
		<DashboardLayout>
			<Wrapper>
				<main className="content">

					<QuestionnaireLayout
						Image={smallImg}
						whatQuestion="Sleep"
						howManyQuestion="7"
					>
						<div className='questions-container'>
							<SleepForm questions={questions} />
						</div>
					</QuestionnaireLayout>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
}

Sleep.propTypes = {
	getQuestions: PropTypes.func.isRequired,
	questions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	const questions = state.hra.questions.SLEEP;
	return { questions: questions || [] };
};


export default connect(mapStateToProps, { getQuestions })(Sleep);
