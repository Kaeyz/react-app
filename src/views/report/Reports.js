import React from 'react';

import Table from '../../components/dashboard/report/Table';
import { data } from '../../components/dashboard/report/mockData';
import { tableConstants } from '../../components/dashboard/report/tableConstant';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';

const Wrapper = styled.div`
.paper{
    background: ${(props) => props.theme.color.text_03};
box-shadow: 20px 12px 20px rgba(233, 233, 233, 0.25);
border-radius: 0px;
padding: 2rem;
.heading{
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 1.6rem;
       color: ${(props) => props.theme.color.text_05};
	}
}
`;

const Reports = () => {
	return (
		<Wrapper>
			<DashboardLayout whatPage="Reports">
				<Paper className="paper">
					<h1 className="heading">Reports</h1>
				</Paper>

				<Table cols={tableConstants()} data={data} />
			</DashboardLayout>
		</Wrapper>

	);
};

export default Reports;