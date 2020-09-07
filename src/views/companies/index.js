import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import FilterSearchLayout from '../../components/layouts/FilterSearchLayout';
import Button from '../../components/common/Button';
import PaginationTable from '../../components/common/PaginationTable';
import Table from '../../components/dashboard/common/Table';
import { tableConstants6 } from '../../components/dashboard/companies/tableConstant6';
import { Link } from 'react-router-dom';
import { sortTableData } from '../../utils/helper';

import { connect } from 'react-redux';
import { getCompanies } from '../../store/actions/companyActions';


const Wrapper = styled.div``;
function Companies({ getCompanies, companies, isLoading }) {

	React.useEffect(() => {
		getCompanies();
	}, [getCompanies]);

	return (
		<Wrapper>
			<DashboardLayout whatPage="Employees">
				<FilterSearchLayout
					text="Companies"
					buttons={
						<>
							<Link to="/companies/pending_activation">
								<Button theme="darkGreen" text="Pending Activation" />
							</Link>
						</>
					}
					oneGrid='oneButton'
				>
					{
						isLoading ?
							<div>Loading ...</div> :
							<React.Fragment>
								<Table cols={tableConstants6()} data={companies} />
								<PaginationTable/>
							</React.Fragment>
					}
				</FilterSearchLayout>
			</DashboardLayout>
		</Wrapper>
	);
}

Companies.propTypes = {
	getCompanies: PropTypes.func.isRequired,
	companies: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
};

const key = {
	createdAt: 'DATE JOINED',
	name: 'REPRESENTATIVE',
	companyName: 'COMPANY NAME',
	email: 'EMAIL ADDRESS',
};

const mapStateToProps = state => {
	const { companies, isLoading } = state.company;
	const data = sortTableData(companies, key);
	return { companies: data, isLoading };
};

export default connect(mapStateToProps, { getCompanies })(Companies);
