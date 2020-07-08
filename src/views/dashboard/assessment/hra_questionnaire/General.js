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

function General({ getQuestions }) {
	React.useEffect(() => {
		getQuestions('BASIC_INFORMATION');
	},[getQuestions]);

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
	getQuestions: PropTypes.func.isRequired
};

export default connect(null, {getQuestions})(General);

