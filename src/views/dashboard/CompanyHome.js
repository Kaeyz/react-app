import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import greenFlower from '../../assets/greenFlower.svg';
import pinkFlower from '../../assets/pinkFlower.svg';
import yellowFlower from '../../assets/yellowFlower.svg';
import PreliminaryCard from '../../components/dashboard/common/PreliminaryCard';
import WelcomeBanner from '../../components/dashboard/dashboard_home/WelcomeBanner';

const Wrapper = styled.div`
	padding-top: 3rem;
	.heading {
		font-weight: bold;
		font-size: 2.4rem;
		line-height: 2.4rem;
		letter-spacing: -0.2px;
		color: ${(props) => props.theme.color.ui_05};
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

const DashboardHome = ({ companySize }) => {
	return (
		<Wrapper>
			<main className="content">
				<h1 className="heading">Dashboard</h1>
				<WelcomeBanner />

				<h1 className="heading">Quick Summary</h1>
				<div className="grid-card">
					<PreliminaryCard
						btnValue="View Employees"
						cardInfo="Employees"
						btnTheme="deepYellowBtn"
						backgroundColor="orange"
						where={'/employees'}
						image={pinkFlower}
						details={`You have ${companySize} employees on the Choose Life platform`}
					/>

					<PreliminaryCard
						btnValue="View Rewards"
						cardInfo="Create Rewards"
						image={greenFlower}
						where={'/rewards'}
						btnTheme="purpleBtn"
						backgroundColor="green"
						details="Empowering you with the knowledge and opportunity to live the best life possible."
					/>

					<PreliminaryCard
						btnValue="View Reports"
						cardInfo={'Reports'}
						image={yellowFlower}
						where={'/reports'}
						btnTheme="yellowBtn"
						backgroundColor="yellow"
						details="Empowering you with the knowledge and opportunity to live the best life possible.."
					/>
				</div>
			</main>
		</Wrapper>
	);
};

DashboardHome.propTypes = {
	companySize: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
	const companySize = state.user.user.companySize;
	return { companySize };
};

export default connect(mapStateToProps)(DashboardHome);
