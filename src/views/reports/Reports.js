import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { sortTableData } from '../../utils/helper';
import Table from '../../components/dashboard/common/Table';
import { tableConstants } from '../../components/dashboard/report/tableConstant';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getReports } from '../../store/actions/reportActions';

const Wrapper = styled.div`
.paper{
    background: ${props => props.theme.color.text_03};
		box-shadow: 20px 12px 20px rgba(233, 233, 233, 0.25);
		border-radius: 0px;
		padding: 2rem;
.heading{
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 1.6rem;
       color: ${props => props.theme.color.text_05};
	}
}
`;

const Reports = ({reports, isLoading, getReports}) => {

	React.useEffect(() => {
		getReports();
	}, [getReports]);

	return (
		<Wrapper>
			<DashboardLayout whatPage="Reports">
				<Paper className="paper">
					<h1 className="heading">Reports</h1>
				</Paper>
				{isLoading ?
					<div>Loading ...</div> :
					<Table cols={tableConstants()} data={reports} />

				}
			</DashboardLayout>
		</Wrapper>

	);
};

Reports.propTypes = {
	reports: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
	getReports: PropTypes.func.isRequired
};

const key = {
	updatedAt: 'Date Taken',
	reportId: '_id'
};

const mapStateToProps = state => {
	let reports = state.report.reports;
	const { name } = state.user.user;
	reports = sortTableData(reports, key, (report) => {
		return report.Name = name;
	});

	reports = reports.filter(report => report._id !== null);

	return { reports };
};

export default connect(mapStateToProps, {getReports})(Reports);