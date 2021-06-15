import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import back from '../../assets/greenBackArrow.svg';
import PaginationTable from '../../components/common/PaginationTable';
import Table from '../../components/dashboard/common/Table';
import { tableConstants6 } from '../../components/dashboard/companies/tableConstant6';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import FilterSearchLayout from '../../components/layouts/FilterSearchLayout';
import { getPendingCompanies } from '../../store/actions/companyActions';
import { sortTableData } from '../../utils/helper';

const Wrapper = styled.div`
	#back {
		font-weight: bold;
		color: ${(props) => props.theme.color.brand_02};
		padding-right: 1rem;
		img {
			padding-right: 0.5rem;
		}
	}
`;

function PendingCompanies({ getPendingCompanies, companies, isLoading }) {
	React.useEffect(() => {
		getPendingCompanies();
	}, [getPendingCompanies]);

	return (
		<Wrapper>
			<DashboardLayout whatPage="Employees">
				<FilterSearchLayout
					text={
						<>
							<Link to="/companies">
								<p id="back">
									{' '}
									<img src={back} alt="go-back" />
									Back
								</p>
							</Link>{' '}
							<span>Pending Invites</span>
						</>
					}
					display="none"
				>
					{isLoading ? (
						<div>Loading ...</div>
					) : (
						<React.Fragment>
							<Table cols={tableConstants6()} data={companies} />
							<PaginationTable />
						</React.Fragment>
					)}
				</FilterSearchLayout>
			</DashboardLayout>
		</Wrapper>
	);
}

PendingCompanies.propTypes = {
	getPendingCompanies: PropTypes.func.isRequired,
	companies: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
};

const key = {
	createdAt: 'DATE JOINED',
	name: 'REPRESENTATIVE',
	companyName: 'COMPANY NAME',
	email: 'EMAIL ADDRESS',
};

const mapStateToProps = (state) => {
	const { companies, isLoading } = state.company;
	const data = sortTableData(companies, key);
	return { companies: data, isLoading };
};

export default connect(mapStateToProps, { getPendingCompanies })(
	PendingCompanies,
);
