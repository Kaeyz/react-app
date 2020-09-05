import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../../store/actions/userActions';
import { Paper, Divider } from '@material-ui/core';

import toggleLogo from '../../../../assets/Frame.svg';
import UserInfo from './UserInfo';
import NavSection from './NavSection';


// temporary type source;
import type from '../../../../views/dashboard/dashboardType';

const Wrapper = styled(Paper)`
	border-radius: 1.3rem;
	max-height: 94vh;
	position: sticky;
	top: 2.0rem;
	left: 1.8rem;
	overflow-y: scroll;
	overflow-x: hidden;
	@media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
		display:none;
		}
		&::-webkit-scrollbar {
		width: 0.3em;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #2ec4b6;
		outline: .1rem solid #fff;
		border-radius: 0.5rem;
	}
	.sidebar {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 2rem 2.5rem;
		min-height: 92vh;
	}
	.top {
		.MuiDivider-middle{
			background-color: #a6a6a6;
			width: 19rem;
			height: 0.5px;
			margin: auto;
			opacity: 0.2;
		}
	}
	.top_section {
		display: grid;
		grid-template-columns: max-content max-content;
		align-items: center;
		justify-content: start;
	}
	.logo {
		width: 5rem;
		height: 5rem;
		margin-left: -0.5rem;
	}
	.nav {
		display: grid;
		grid-gap: 2rem;
	}
	.footer {
		display: grid;
		grid-template-columns: max-content 1fr;
		align-items: center;
		grid-gap: 1rem;
		text-decoration: none;
		padding-right: 3rem;
		cursor: pointer;
	}
`;


function SideBar({ logoutUser, user }) {
	const navItems = {
		ADMIN: {
			navTitle: 'Admin Portal',
			topSection: [
				{ icon: 'dashboard_home', text: 'Overview', link: '/dashboard' },
				{ icon: 'assessments', text: 'Companies', link: '/companies' },
				{ icon: 'download', text: 'Reports', link: '/reports' }
			],
			otherSection: [
				{ icon: 'settings', text: 'Settings', link: '/settings/account' },
				{ icon: 'logout', text: 'Logout', onClick: logoutUser },
			],
		},
		COMPANY: {
			navTitle: 'Admin Portal',
			topSection: [
				{ icon: 'dashboard_home', text: 'Overview', link: '/dashboard' },
				{ icon: 'assessments', text: 'Employees', link: '/employees' },
				{ icon: 'download', text: 'Reports', link: '/reports' },
			],
			otherSection: [
				{ icon: 'rewards', text: 'Rewards', link: '/rewards' },
				{ icon: 'settings', text: 'Settings', link: '/settings/account' },
				{ icon: 'logout', text: 'Logout', onClick: logoutUser },
			],
		},
		INDIVIDUAL: {
			navTitle: 'Employee Portal',
			topSection: [
				{ icon: 'dashboard_home', text: 'Dashboard', link: '/dashboard' },
				{ icon: 'assessments', text: 'Assessments', link: '/assessments' },
				{ icon: 'exercise', text: 'Exercise', link: '/exercise' },
				{ icon: 'exercise', text: 'Meals', link: '/meals' },
				{ icon: 'exercise', text: 'Appointments', link: '/appointments' },
			],
			otherSection: [
				{ icon: 'download', text: 'Reports', link: '/reports' },
				{ icon: 'rewards', text: 'Rewards', link: '/rewards' },
				{ icon: 'settings', text: 'Settings', link: '/settings/account' },
				{ icon: 'logout', text: 'Logout', onClick: logoutUser },
			],
		},
	};

	return (
		<Wrapper elevation={2}>
			<div className="sidebar">
				<div className="top">
					<div className='top_section'>
						<img src={toggleLogo} alt="toggle" className="logo" />
						<h3>{navItems[type].navTitle}</h3>
					</div>
					<Divider variant="middle" />
					<div className="nav">
						<UserInfo name={user.name} type={type} />
						<NavSection title={type} items={navItems[type].topSection} />
						<Divider variant="middle" />
						<NavSection title="OTHER" items={navItems[type].otherSection} />
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

SideBar.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	const { name, type } = state.user.user;
	const user = { name, type };
	return { user };
};

export default connect(mapStateToProps, { logoutUser })(SideBar);
