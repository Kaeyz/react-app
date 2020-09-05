import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import FilterSearchLayout from '../../components/layouts/FilterSearchLayout';
import Button from '../../components/common/Button';
import PaginationTable from '../../components/common/PaginationTable';
import Table from '../../components/dashboard/common/Table';
import { tableConstants6 } from '../../components/dashboard/companies/tableConstant6';
import { data6 } from '../../components/dashboard/companies/mockData6';
import { Link } from 'react-router-dom';

const Wrapper = styled.div``;
function index() {
	return (
		<Wrapper>
			<DashboardLayout whatPage="Employees">
				<FilterSearchLayout
					text="Companies"
					buttons={
						<>
							<Link to="/companies/pending_activation">
								{' '}
								<Button theme="darkGreen" text="Pending Activation" />
							</Link>
						</>
					}
					oneGrid='oneButton'
				>
					<Table cols={tableConstants6()} data={data6} />
					<PaginationTable/>
				</FilterSearchLayout>
			</DashboardLayout>
		</Wrapper>
	);
}

index.propTypes = {};

export default index;
