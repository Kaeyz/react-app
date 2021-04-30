import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import PaginationTable from '../../components/common/PaginationTable';
import Table from '../../components/dashboard/common/Table';
import { tableConstants7 } from '../../components/dashboard/companyRewards/tableConstant7';
import WelcomeCard from '../../components/dashboard/dashboard_home/WelcomeBanner';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import { getCompanyLeaderBoard } from '../../store/actions/rewardActions';
import { sortTableData } from '../../utils/helper';

const Wrapper = styled.div`

`;
const Leaderboard = ({ isLoading, leaderboard, getCompanyLeaderBoard }) => {


	React.useEffect(() => {
		getCompanyLeaderBoard();
	}, [getCompanyLeaderBoard]);

	return (
		<Wrapper>
			<DashboardLayout whatPage="Rewards">
				<WelcomeCard
					emoji="🎉"
					heading="Leaderboard "
					detail="See how well you compare to your colleagues. Complete activities to gain more points. Top the leaderboard and possibly qualify for rewards from your company."
				/>
				{
					isLoading ?
						<div>Loading ...</div> :
						leaderboard < 1 ?
							<div>No current User in leaderboard</div> :
							<React.Fragment>
								<Table cols={tableConstants7()} data={leaderboard} whichTable='longTable' />
								{/* <PaginationTable /> */}
							</React.Fragment>
				}
			</DashboardLayout>
		</Wrapper>
	);
};

Leaderboard.propTypes = {
	isLoading: PropTypes.func.isRequired,
	leaderboard: PropTypes.array.isRequired,
	getCompanyLeaderBoard: PropTypes.func.isRequired,
};

const key = {
	name: 'EMPLOYEE NAME',
	department: 'DEPARTMENT',
	branch: 'BRANCH',
	points: 'POINTS'
};

const mapStateToProps = state => {
	const { leaderboard, isLoading } = state.reward;
	const data = sortTableData(leaderboard, key, (data) => {
		return data['Serial Number'] === '01' ? data['Serial Number'] = '🏆' : data;
	});
	return { leaderboard: data, isLoading };
};

export default connect(mapStateToProps, {getCompanyLeaderBoard})(Leaderboard);
