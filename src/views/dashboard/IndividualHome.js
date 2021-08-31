
import React from 'react';
import styled from 'styled-components';
import greenFlower from '../../assets/greenFlower.svg';
import pinkFlower from '../../assets/pinkFlower.svg';
import yellowFlower from '../../assets/yellowFlower.svg';
import PreliminaryCard from '../../components/dashboard/common/PreliminaryCard';
import BodyMassCard from '../../components/dashboard/dashboard_home/BodyMassCard';
import WelcomeBanner from '../../components/dashboard/dashboard_home/WelcomeBanner';

const Wrapper = styled.div`
	padding-top: 2rem;
	.heading {
		font-weight: bold;
		font-size: 2.4rem;
		line-height: 2.4rem;
		letter-spacing: -0.2px;
		color: ${(props) => props.theme.color.ui_05};
		padding-bottom: 2rem;
	}
	.grid-card {
		display: grid;
		grid-gap: 1rem;
		padding-bottom: 3rem;
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
				<h1 className="heading">BMI Dashboard</h1>
				<BodyMassCard />
				<h1 className="heading">Quick Assessment</h1>
				<div className="grid-card">
					<PreliminaryCard
						btnValue="Start Assessment"
						cardInfo="Health Risk Assessment"
						btnTheme="deepYellowBtn"
						backgroundColor="orange"
						where={'/assessment/health'}
						image={pinkFlower}
						details="Take a Health Risk Assessment, understand the risks, and how your lifestyle can improve."
					/>

					<PreliminaryCard
						btnValue="Coming Soon"
						cardInfo="InBody Comprehensive Check(Coming Soon)"
						image={greenFlower}
						btnTheme="purpleBtn"
						backgroundColor="green"
						details="InBody Analysis will provide accurate information on your body's composition which is valuable to track your wellness journey,"
					/>

					<PreliminaryCard
						btnValue="Start Guide"
						cardInfo={'Meal & Fitness Guide'}
						image={yellowFlower}
						where={'/meals'}
						btnTheme="yellowBtn"
						backgroundColor="yellow"
						details="Explore fitness routines to keep your body in shape or create a meal plan to keep you eating healthy."
					/>
				</div>
			</main>
		</Wrapper>
	);
};

export default DashboardHome;
