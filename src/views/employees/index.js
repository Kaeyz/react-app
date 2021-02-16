/*eslint-disable */

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/common/Button';
// import PaginationTable from '../../components/common/PaginationTable';
import Table from '../../components/dashboard/common/Table';
import BatchUploadModal from '../../components/dashboard/employees/BatchUploadModal';
import NewEmployeeModal from '../../components/dashboard/employees/NewEmployeeModal';
import { tableConstants4 } from '../../components/dashboard/employees/tableConstant4';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import FilterSearchLayout from '../../components/layouts/FilterSearchLayout';
import {
	getActiveEmployees,
	searchEmployees
} from '../../store/actions/employeeActions';
import { sortTableData } from '../../utils/helper';

const Wrapper = styled.div`
  .placeholderHeader {
    padding: 1.5rem 5rem;
    justify-content: space-between;
    background: rgba(243, 121, 32, 0.05);
    border: 1px solid ${(props) => props.theme.color.ui_08};
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      padding: 1.5rem;
      overflow-x: scroll;
      overflow-y: hidden;
      margin: 3rem 0 6rem 0;
      &::-webkit-scrollbar {
        height: 0.1rem;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.color.ui_08};
        border-radius: 0.5rem;
      }
    }
    h1 {
      font-weight: normal;
      font-size: 1.2rem;
      line-height: 1.8rem;
      color: ${(props) => props.theme.color.ui_05};
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        min-width: 115px;
      }
    }
  }
  .placeholderDetail {
    text-align: center;
	padding: 16rem 0;
	@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		padding: 4rem 0;
		}
    .buttons-center {
      display: grid;
      justify-items: center;
      width: 36%;
      margin: auto;
      grid-gap: 1rem;
      grid-template-columns: 1fr 1fr;
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        width: 70%;
      }
      @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
        width: 100%;
      }
    }
    p {
      font-weight: normal;
      font-size: 1.5rem;
      line-height: 1.4rem;
      padding-bottom: 3rem;
      letter-spacing: -0.4px;
      color: ${(props) => props.theme.color.text_04};
    }
  }
`;

const Employees = ({
	getActiveEmployees,
	employees,
	isLoading,
	searchEmployees,
}) => {
	React.useEffect(() => {
		getActiveEmployees();
	}, [getActiveEmployees]);

	return (
		<Wrapper>
			<DashboardLayout whatPage="Employees">
				<FilterSearchLayout
					searchPlaceholder="Search Employees ... and press Enter"
					title="Type a name and press enter"
					onSearchSubmit={searchEmployees}
					text="Employees"
					wrap="wrap"
					buttons={
						<React.Fragment>

							<Link to="/employees/suspended">
								<Button theme="whiteBtn blackText" text="Suspended Employees" />
							</Link>
							<Link to="/employees/pending">
								<Button theme="whiteBtn blackText" text="Pending Invites" />
							</Link>
							<BatchUploadModal />
              <NewEmployeeModal btnTheme="darkGreen" />
						</React.Fragment>
					}
				>
					{isLoading ? (
						<div>Loading ...</div>
					) : employees.length < 1 ? (
						<div>
							<div>
								<div className="placeholderHeader flex">
									<h1>EMPLOYEE NAME</h1>
									<h1>DEPARTMENT</h1>
									<h1>BRANCH</h1>
									<h1>DATE CREATED</h1>
								</div>
							</div>
							<div className="placeholderDetail">
								<p>
                  Add your employees to the platform. Create An Employee
                  Account.
								</p>
								<div className="buttons-center">
									<NewEmployeeModal btnTheme="whiteBtn blackText" />
									<BatchUploadModal />
								</div>
							</div>
						</div>
					) : (
						<React.Fragment>
							<Table cols={tableConstants4()} data={employees} />
							{/* <PaginationTable /> */}
						</React.Fragment>
					)}
				</FilterSearchLayout>
			</DashboardLayout>
		</Wrapper>
	);
};

Employees.propTypes = {
	getActiveEmployees: PropTypes.func.isRequired,
	searchEmployees: PropTypes.func.isRequired,
	employees: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
};

const key = {
	name: 'EMPLOYEE NAME',
	department: 'DEPARTMENT',
	branch: 'BRANCH',
	createdAt: 'DATE CREATED',
};

const mapStateToProps = (state) => {
	const { employees, isLoading } = state.employee;
	const data = sortTableData(employees || [], key);
	return { employees: data, isLoading };
};

export default connect(mapStateToProps, {
	getActiveEmployees,
	searchEmployees,
})(Employees);
