import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from '../../../../store/actions/hraActions';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../../../components/layouts/questionnaireLayout/Questionnaire';
import BloodPressureForm from '../../../../components/dashboard/assessment/hra_questionnaire/BloodPressureForm';
import smallImg from '../../../../assets/Group.svg';
import bloodGuage from '../../../../assets/blood-pressure-gauge.svg';

const Wrapper = styled.div`
  .content {
    padding: 2rem;
  }
`;

function BloodPressure({ getQuestions, questions }) {
	React.useEffect(() => {
		getQuestions('BLOOD_PRESSURE');
	}, [getQuestions]);

	return (
		<DashboardLayout>
			<Wrapper>
				<main className="content">
					<QuestionnaireLayout
						Image={smallImg}
						whatQuestion="Blood Pressure & Cholesterol"
						howManyQuestion="5"
						ImageRight={bloodGuage}
					>
						<div className='questions-container'>
							<BloodPressureForm questions={questions} />
						</div>
					</QuestionnaireLayout>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
}

BloodPressure.propTypes = {
	getQuestions: PropTypes.func.isRequired,
	questions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	questions: state.hra.questions,
});

export default connect(mapStateToProps, { getQuestions })(BloodPressure);
