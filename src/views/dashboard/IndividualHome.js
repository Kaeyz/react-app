import React from 'react';
import WelcomeBanner from '../../components/dashboard/dashboard_home/WelcomeBanner';
import PreliminaryCard from '../../components/dashboard/common/PreliminaryCard';
import pinkFlower from '../../assets/pinkFlower.svg';
import yellowFlower from '../../assets/yellowFlower.svg';
import greenFlower from '../../assets/greenFlower.svg';
import LeaderboardCard from '../../components/dashboard/dashboard_home/LeaderboardCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding-top: 3rem;
  .heading {
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 2.4rem;
    letter-spacing: -0.2px;
    color: ${props => props.theme.color.ui_05};
    padding-bottom: 4rem;
  }
  .grid-card {
    display: grid;
    grid-gap: 4rem;
    padding-bottom: 6rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
`;

const DashboardHome = () => {
	return (
		<Wrapper>
			<main className="content">
				<h1 className="heading">Dashboard</h1>
				<WelcomeBanner />
				<h1 className="heading">Quick Assessment</h1>
				<div className="grid-card">
					<PreliminaryCard
						btnValue="Start Assessment"
						cardInfo="Health Risk Assessment"
						btnTheme="deepYellowBtn"
						backgroundColor="orange"
						where={'/assessment/health'}
						image={pinkFlower}
					/>

					<PreliminaryCard
						btnValue="Start Check"
						cardInfo="InBody Comprehensive Check"
						image={greenFlower}
						btnTheme="purpleBtn"
						backgroundColor="green"
					/>

					<PreliminaryCard
						btnValue="Start Guide"
						cardInfo={'Meal & Fitness Guide'}
						image={yellowFlower}
						btnTheme="yellowBtn"
						backgroundColor="yellow"
					/>
				</div>

				<Link to='/rewards/leaderboard'>
					<h1 className="heading">Leaderboard</h1>
					<div className="grid-card">
						<LeaderboardCard />
					</div>
				</Link>
			</main>
		</Wrapper>
	);
};

export default DashboardHome;
