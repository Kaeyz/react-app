import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from '../../../../store/actions/hraActions';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import BreadCrumb from '../../../../components/dashboard/assessment/BreadCrumb';


const Wrapper = styled.div`
	 .content {
    padding: 2rem;
  }
`;

function General({ getQuestions, questions }) {
	React.useEffect(() => {
		getQuestions('BASIC_INFORMATION');
	},[getQuestions]);

	console.log(questions);
	return (
		<DashboardLayout>
			<Wrapper>
				<main className="content">
					<BreadCrumb />
					General Questions
				</main>
			</Wrapper>
		</DashboardLayout>
	);
}

General.propTypes = {
	getQuestions: PropTypes.func.isRequired,
	questions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	questions: state.hra.questions
});

export default connect(mapStateToProps, {getQuestions})(General);
