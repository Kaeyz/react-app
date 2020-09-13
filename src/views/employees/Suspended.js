import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSuspendedEmployees } from '../../store/actions/employeeActions';
import styled from 'styled-components';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import FilterSearchLayout from '../../components/layouts/FilterSearchLayout';
import Table from '../../components/dashboard/common/Table';
import { tableConstants5 } from '../../components/dashboard/employees/tableConstant5';
import back from '../../assets/greenBackArrow.svg';
import { Link } from 'react-router-dom';
import { sortTableData } from '../../utils/helper';

const Wrapper = styled.div`
  #back {
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: ${(props) => props.theme.color.brand_02};
    padding-right: 1rem;
    img {
      padding-right: 0.5rem;
    }
  }
`;


const Suspended = ({ isLoading, getSuspendedEmployees, employees }) => {

	React.useEffect(() => {
		getSuspendedEmployees();
	}, [getSuspendedEmployees]);

	return (
		<Wrapper>
			<DashboardLayout whatPage="Employees">
				<FilterSearchLayout
					text={
						<React.Fragment>
							<Link to="/employees">
								<p id="back">
									<img src={back} alt="go-back" />
                  Back
								</p>
							</Link>
							<span>Suspended Employees</span>
						</React.Fragment>
					}
					display="none"
				>
					{
						isLoading ?
							<div>Loading ...</div> :
							employees.length < 1 ?
								<div>No Suspended Employee</div> :
								<React.Fragment>
									<Table cols={tableConstants5()} data={employees} />
								</React.Fragment>
					}
				</FilterSearchLayout>
			</DashboardLayout>
		</Wrapper>
	);
};

Suspended.propTypes = {
	getSuspendedEmployees: PropTypes.func.isRequired,
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
	const data = sortTableData(employees, key);
	return { employees: data, isLoading };
};

export default connect(mapStateToProps, {getSuspendedEmployees})(Suspended);
