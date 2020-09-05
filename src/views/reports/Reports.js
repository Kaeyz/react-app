import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

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

const month = new Array(12);
month[0] = 'January';
month[1] = 'February';
month[2] = 'March';
month[3] = 'April';
month[4] = 'May';
month[5] = 'June';
month[6] = 'July';
month[7] = 'August';
month[8] = 'September';
month[9] = 'October';
month[10] = 'November';
month[11] = 'December';

const mapStateToProps = state => {
	let reports = state.report.reports;
	const { name } = state.user.user;

	reports.forEach((report, index) => {
		const date = new Date(report.updatedAt);
		report['Date Taken'] = `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
		report.Name = name;
		report['Serial Number'] = String(index + 1);
		return report;
	});

	reports = reports.filter(report => report.reportId !== null);

	return { reports };
};

export default connect(mapStateToProps, {getReports})(Reports);