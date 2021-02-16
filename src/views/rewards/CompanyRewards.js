/* eslint-disable no-console */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CreateRewardModal from '../../components/dashboard/companyRewards/CreateRewardModal';
import RewardDetailsModal from '../../components/dashboard/companyRewards/RewardDetailsModal';
import LeaderboardCard from '../../components/dashboard/dashboard_home/LeaderboardCard';
import WelcomeCard from '../../components/dashboard/dashboard_home/WelcomeBanner';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import { getClosedRewards, getRewards } from '../../store/actions/rewardActions';


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
.grid-container{
	display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-gap: 4rem;
	@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
		justify-items: center;
	}
}
.add {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding:2rem;
	align-items:center;
	box-shadow: none;
	cursor: pointer;
	border-radius: 10px;
	min-width: 284px;
	height: 200px;
	max-width: 380px;
	&:hover {
		transform: scale(.95);
		transition: .3s;
	  }
h1 {
	font-weight: bold;
	font-size: 1.4rem;
	padding-top: 3rem;
	line-height: 1.4rem;
	letter-spacing: 0.2px;
	color: ${props => props.theme.color.ui_06};
	}
}

`;
function CompanyRewards({ isLoading, getClosedRewards, getRewards, openReward, closedRewards }) {
	const themes = ['purple', 'blue', 'blue', 'pink', 'green'];

	React.useEffect(() => {
		getRewards();
		getClosedRewards();
	}, [getClosedRewards, getRewards]);

	return (
		<Wrapper>
			<DashboardLayout whatPage="Rewards">
				<WelcomeCard
					emoji="Reward"
					heading="🎉"
					detail="See how well you compare to your colleagues. Complete activities to gain more points. Top the leaderboard and possibly qualify for rewards from your company."
				/>
				<div className="rewards">
					<p className="sub-heading">Running Rewards</p>
					<div  className='grid-container'>
						<CreateRewardModal />
						{isLoading ?
							<div>Loading...</div> :
							openReward && <RewardDetailsModal theme='pink' reward={openReward}/>
						}
					</div>
				</div>

				<div className="rewards">
					<p className="sub-heading">Closed Rewards</p>
					<div className='grid-container'>
						{isLoading ?
							<div>Loading ...</div> :
							closedRewards < 1 ?
								<div>No Closed Rewards Found</div> :
								closedRewards.map((reward, index) => {
									// console.log(
									// 	(closedRewards.length -
									// 		1) / (themes.length - 1)
									// );
									return (
										<React.Fragment key={index}>
											<RewardDetailsModal
												theme={
													themes[
														Math.trunc(Math.random() * themes.length)
													]
												}
												reward={reward}
											/>
										</React.Fragment>
									);})
						}
					</div>
				</div>
				<Link to='/rewards/leaderboard' className='leaderboard'>
					<p className="sub-heading">Leaderboard</p>
					<div  className='grid-container'>
						<LeaderboardCard />
					</div>
				</Link>
			</DashboardLayout>
		</Wrapper>
	);
}

CompanyRewards.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	openReward: PropTypes.object.isRequired,
	closedRewards: PropTypes.array.isRequired,
	getRewards: PropTypes.func.isRequired,
	getClosedRewards: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	const { isLoading, rewards } = state.reward;
	const { openReward, closedRewards } = rewards;
	return { openReward, closedRewards, isLoading };
};

export default connect(mapStateToProps, {getRewards, getClosedRewards})(CompanyRewards);
