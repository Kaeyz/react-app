import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import FilterSearchLayout from '../../components/layouts/FilterSearchLayout';
import Button from '../../components/common/Button';
import PaginationTable from '../../components/common/PaginationTable';
import Table from '../../components/dashboard/common/Table';
import { tableConstants4 } from '../../components/dashboard/employees/tableConstant4';
import { Link } from 'react-router-dom';
import NewEmployeeModal from '../../components/dashboard/employees/NewEmployeeModal';
import BatchUploadModal from '../../components/dashboard/employees/BatchUploadModal';
import { getActiveEmployees } from '../../store/actions/employeeActions';
import { sortTableData } from '../../utils/helper';

const Wrapper = styled.div``;

const Employees = ({ getActiveEmployees, employees, isLoading }) => {

	React.useEffect(() => {
		getActiveEmployees();
	}, [getActiveEmployees]);

	return (
		<Wrapper>
			<DashboardLayout whatPage="Employees">
				<FilterSearchLayout
					text="Employees"
					wrap="wrap"
					buttons={
						<React.Fragment>
							<BatchUploadModal />

							<Link to="/employees/suspended">
								<Button theme="whiteBtn blackText" text="Suspended Employees" />
							</Link>
							<Link to="/employees/pending">
								<Button theme="whiteBtn blackText" text="Pending Invites" />
							</Link>
							<NewEmployeeModal />
						</React.Fragment>
					}
				>
					{
						isLoading ?
							<div>Loading ...</div> :
							employees.length < 1 ?
								<div>Add New Employee</div> :
								<React.Fragment>
									<Table cols={tableConstants4()} data={employees} />
									<PaginationTable />
								</React.Fragment>
					}
				</FilterSearchLayout>
			</DashboardLayout>
		</Wrapper>
	);
};

Employees.propTypes = {
	getActiveEmployees: PropTypes.func.isRequired,
	employees: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired
};

const key = {
	name: 'EMPLOYEE NAME',
	department: 'DEPARTMENT',
	branch: 'BRANCH',
	createdAt: 'DATE CREATED'
};

const mapStateToProps = state => {
	const { employees, isLoading } = state.employee;
	const data = sortTableData(employees || [], key);
	return { employees: data, isLoading };
};

export default connect(mapStateToProps, { getActiveEmployees })(Employees);
