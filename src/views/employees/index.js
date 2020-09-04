import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import FilterSearchLayout from '../../components/layouts/FilterSearchLayout';
import Button from '../../components/common/Button';
import PaginationTable from '../../components/common/PaginationTable';
import Table from '../../components/dashboard/common/Table';
import { tableConstants4 } from '../../components/dashboard/exercise/tableConstant4';
import { data4 } from '../../components/dashboard/exercise/mockData4';
import { Link } from 'react-router-dom';

const Wrapper = styled.div``;
function index() {
	return (
		<Wrapper>
			<DashboardLayout whatPage="Employees">
				<FilterSearchLayout
					text="Employees"
					buttons={
						<>
							<Link to="/employees/pending_invites">
								{' '}
								<Button theme="whiteBtn blackText" text="Pending Invites" />
							</Link>
							<Button theme="darkGreen" text="Add Employee" />
						</>
					}
				>
					<Table cols={tableConstants4()} data={data4} />
					<PaginationTable/>
				</FilterSearchLayout>
			</DashboardLayout>
		</Wrapper>
	);
}

index.propTypes = {};

export default index;
