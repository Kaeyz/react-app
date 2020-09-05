import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import WelcomeCard from '../../components/dashboard/dashboard_home/WelcomeBanner';
import LeaderboardCard from '../../components/dashboard/dashboard_home/LeaderboardCard';
import AppointReward from '../../components/common/AppointReward';
// import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const Wrapper = styled.div`
.rewards{
    padding-bottom: 3rem;
}
.sub-heading{
    font-size: 1.6rem;
    line-height: 2.5rem;
       letter-spacing: 0.2px;
    color: ${props => props.theme.color.ui_05};
    padding-bottom: 3rem;
    font-weight: bold;
}
`;
function CompanyRewards() {
	return (
		<Wrapper>
			<DashboardLayout whatPage="Rewards">
				<WelcomeCard
					emoji="Reward"
					heading="🎉"
					detail="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				/>
				<div className="rewards">
					<p className="sub-heading">Running Rewards</p>
					<Grid container spacing={4}>
						<Grid item xs={12} sm={4}>
							<AppointReward />
						</Grid>
						<Grid item xs={12} sm={4}>
							<AppointReward />
						</Grid>
						<Grid item xs={12} sm={4}>
							<AppointReward />
						</Grid>
					</Grid>
				</div>

				<div className="rewards">
					<p className="sub-heading">Closed Rewards</p>
					<Grid container spacing={4}>
						<Grid item xs={12} sm={4}>
							<AppointReward />
						</Grid>
						<Grid item xs={12} sm={4}>
							<AppointReward />
						</Grid>
						<Grid item xs={12} sm={4}>
							<AppointReward />
						</Grid>
					</Grid>
				</div>
				<Link to='/leaderboard'>
					<p className="sub-heading">Leaderboard</p>
					<Grid container>
						<Grid item xs={12} sm={4}>
							<LeaderboardCard />

						</Grid>
					</Grid>
				</Link>
			</DashboardLayout>
		</Wrapper>
	);
}

CompanyRewards.propTypes = {};

export default CompanyRewards;
