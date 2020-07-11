import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from '../../../../store/actions/hraActions';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import BreadCrumb from '../../../../components/dashboard/assessment/BreadCrumb';
import QuestionnaireLayout from '../../../../components/layouts/questionnaireLayout/Questionnaire';
import SmokingForm from '../../../../components/dashboard/assessment/hra_questionnaire/SmokingForm';
import smallImg from '../../../../assets/Group.svg';

const Wrapper = styled.div`
  .content {
    padding: 2rem;
  }
`;

function Smoking({ getQuestions, questions }) {
	React.useEffect(() => {
		getQuestions('SMOKING');
	}, [getQuestions]);

	return (
		<DashboardLayout>
			<Wrapper>
				<main className="content">
					<BreadCrumb />
					<QuestionnaireLayout
						Image={smallImg}
						whatQuestion="Smoking & Vaping"
						howManyQuestion="7"
					>
						<div className='questions-container'>
							<SmokingForm questions={questions} />
						</div>
					</QuestionnaireLayout>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
}

Smoking.propTypes = {
	getQuestions: PropTypes.func.isRequired,
	questions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	questions: state.hra.questions,
});

export default connect(mapStateToProps, { getQuestions })(Smoking);
