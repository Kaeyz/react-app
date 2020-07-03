import React from 'react';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import WelcomeBanner from '../../components/dashboard/dashboard_home/WelcomeBanner';
import GetStartedCard from '../../components/dashboard/dashboard_home/GetStartedCard';
import LeaderboardCard from '../../components/dashboard/dashboard_home/LeaderboardCard';
// import Container from '../../components/common/Container';
import Grid from '@material-ui/core/Grid';

import styled from 'styled-components';

const Wrapper = styled.div`
.content{
  padding: 2rem;
}
`;

const DashboardHome = () => {

	return (
		<DashboardLayout>
			<Wrapper>
				<main className="content">
					<WelcomeBanner />
					<Grid container spacing={4}>
						<Grid item xs={6}>
							<GetStartedCard/>
						</Grid>
						<Grid item xs={6}>
							<LeaderboardCard />
						</Grid>
					</Grid>
				</main>
			</Wrapper>

		</DashboardLayout>
	);
};

export default DashboardHome;
