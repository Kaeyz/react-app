import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from '../../../../store/actions/hraActions';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../../../components/layouts/questionnaireLayout/Questionnaire';
import CovidForm from '../../../../components/dashboard/assessment/hra_questionnaire/CovidForm';
import smallImg from '../../../../assets/Group.svg';

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
						howManyQuestion="7"
					>
						<div className='questions-container'>
							<CovidForm questions={questions} />
						</div>
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

const mapStateToProps = (state) => ({
	questions: state.hra.questions,
});

export default connect(mapStateToProps, { getQuestions })(Covid);
