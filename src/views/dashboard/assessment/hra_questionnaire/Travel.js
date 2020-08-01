import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from '../../../../store/actions/hraActions';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../../../components/layouts/questionnaireLayout/Questionnaire';
import TravelForm from '../../../../components/dashboard/assessment/hra_questionnaire/TravelForm';
import smallImg from '../../../../assets/Group.svg';

const Wrapper = styled.div`
  .content {
    padding: 2rem;
  }
`;

function Travel({ getQuestions, questions }) {
	React.useEffect(() => {
		getQuestions('DRIVING');
	}, [getQuestions]);

	return (
		<DashboardLayout>
			<Wrapper>
				<main className="content">
					<QuestionnaireLayout
						Image={smallImg}
						whatQuestion="Travel & Alcohol"
						howManyQuestion="7"
					>
						<div className='questions-container'>
							<TravelForm questions={questions} />
						</div>
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

const mapStateToProps = (state) => ({
	questions: state.hra.questions,
});

export default connect(mapStateToProps, { getQuestions })(Travel);
