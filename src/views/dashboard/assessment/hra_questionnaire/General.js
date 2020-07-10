import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from '../../../../store/actions/hraActions';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import BreadCrumb from '../../../../components/dashboard/assessment/BreadCrumb';
import HraInput from '../../../../components/hra_input';
import QuestionnaireLayout from '../../../../components/layouts/questionnaireLayout/Questionnaire';
import smallImg from '../../../../assets/Group.svg';
import bloodGuage from '../../../../assets/blood-pressure-gauge.svg';

const Wrapper = styled.div`
  .content {
    padding: 2rem;
  }
`;

function General({ getQuestions, questions }) {
	React.useEffect(() => {
		getQuestions('BASIC_INFORMATION');
	}, [getQuestions]);

	// eslint-disable-next-line no-console
	console.log(questions);

	return (
		<DashboardLayout>
			<Wrapper>
				<main className="content">
					<BreadCrumb />
					<QuestionnaireLayout
						Image={smallImg}
						whatQuestion="General Questions"
						howManyQuestion="7"
						ImageRight={bloodGuage}
					>
						<div className='questions-container'>
							<HraInput label="1. Text Inputs" />
							<br />

							<HraInput type="number" label="2. NUmber Inputs" />
							<br />

							<HraInput
								type="dropdown"
								label="3. Dropdown Input"
								placeholder="Click here"
								item1="world"
								item2="hello"
							/>
							<br />

							<HraInput type="select" />
						</div>
					</QuestionnaireLayout>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
}

General.propTypes = {
	getQuestions: PropTypes.func.isRequired,
	questions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	questions: state.hra.questions,
});

export default connect(mapStateToProps, { getQuestions })(General);
