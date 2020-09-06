import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import WelcomeCard from '../../components/dashboard/dashboard_home/WelcomeBanner';
import PaginationTable from '../../components/common/PaginationTable';
import Table from '../../components/dashboard/common/Table';
import { tableConstants7 } from '../../components/dashboard/companyRewards/tableConstant7';
import { data7 } from '../../components/dashboard/companyRewards/mockdata7';

const Wrapper = styled.div`

`;
function Leaderboard() {
	return (
		<Wrapper>
			<DashboardLayout whatPage="Rewards">
				<WelcomeCard
					emoji="🎉"
					heading="Leaderboard "
					detail="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				/>
				<Table cols={tableConstants7()} data={data7} whichTable='longTable'/>
				<PaginationTable/>
			</DashboardLayout>
		</Wrapper>
	);
}

Leaderboard.propTypes = {};

export default Leaderboard;
