import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPendingEmployees } from '../../store/actions/employeeActions';
import styled from 'styled-components';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import FilterSearchLayout from '../../components/layouts/FilterSearchLayout';
import Table from '../../components/dashboard/common/Table';
import { tableConstants5 } from '../../components/dashboard/exercise/tableConstant5';
import { data4 } from '../../components/dashboard/employees/mockData4';
import back from '../../assets/greenBackArrow.svg';
import { Link } from 'react-router-dom';

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


const PendingInvites = ({ isLoading, getPendingEmployees, employees }) => {

	React.useEffect(() => {
		getPendingEmployees();
	}, [getPendingEmployees]);

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
							<span>Pending Invites</span>
						</React.Fragment>
					}
					display="none"
				>
					{
						isLoading ?
							<div>Loading ...</div> :
							employees.length < 1 ?
								<div>No Pending Invites</div> :
								<React.Fragment>
									<Table cols={tableConstants5()} data={data4} />
								</React.Fragment>
					}
				</FilterSearchLayout>
			</DashboardLayout>
		</Wrapper>
	);
};

PendingInvites.propTypes = {
	getPendingEmployees: PropTypes.func.isRequired,
	employees: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	const { employees, isLoading } = state.employee;
	return { employees, isLoading };
};

export default connect(mapStateToProps, {getPendingEmployees})(PendingInvites);
