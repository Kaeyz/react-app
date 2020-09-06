import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import WelcomeCard from '../../components/dashboard/dashboard_home/WelcomeBanner';
import LeaderboardCard from '../../components/dashboard/dashboard_home/LeaderboardCard';
import { Link } from 'react-router-dom';
import pinkIcon from '../../assets/pinkIcon.svg';
import blueIcon from '../../assets/blueIcon.svg';
import orangeIcon from '../../assets/orangeIcon.svg';
import greenIcon from '../../assets/greenIcon.svg';
import purpleIcon from '../../assets/purpleIcon.svg';
import RewardDetailsModal from '../../components/dashboard/companyRewards/RewardDetailsModal';
import CreateRewardModal from '../../components/dashboard/companyRewards/CreateRewardModal';


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
.add{
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
	&:hover{
		transform: scale(.95);
		transition: .3s;
	  }
h1{
		font-weight: bold;
font-size: 1.4rem;
padding-top: 3rem;
line-height: 1.4rem;
letter-spacing: 0.2px;
color: ${props => props.theme.color.ui_06};
	}
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
					<div  className='grid-container'>
						<CreateRewardModal/>
						<RewardDetailsModal theme='pinkCard' icon={pinkIcon}/>

						<RewardDetailsModal theme='blueCard' icon={blueIcon}/>

					</div>
				</div>

				<div className="rewards">
					<p className="sub-heading">Closed Rewards</p>
					<div className='grid-container'>
						<RewardDetailsModal theme='orangeCard' icon={orangeIcon}/>
						<RewardDetailsModal theme='greenCard' icon={greenIcon}/>
						<RewardDetailsModal theme='purpleCard' icon={purpleIcon}/>

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

CompanyRewards.propTypes = {};

export default CompanyRewards;
