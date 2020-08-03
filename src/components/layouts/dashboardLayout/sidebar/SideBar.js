import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../../store/actions/userActions';
import { Paper } from '@material-ui/core';

import toggleLogo from '../../../../assets/Frame.svg';
import Icon from '../../../common/Icon';
import UserInfo from './UserInfo';
import NavSection from './NavSection';

const Wrapper = styled(Paper)`
  border-radius: 1.3rem;
  max-height: 94vh;
  position: sticky;
  top: 2.0rem;
  left: 1.8rem;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0.5em;
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
    padding: 1.5rem;
    height: 100%;
  }
  .top {
  }
  .logo {
    width: 5rem;
    height: 5rem;
    margin-left: -0.5rem;
    margin-bottom: 2rem;
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

const employeeItems = [
	{ icon: 'dashboard_home', text: 'Dashboard', link: '/dashboard' },
	{ icon: 'assessments', text: 'Assessments', link: '/assessments' },
	{ icon: 'exercise', text: 'Exercise', link: '/exercise' },
	{ icon: 'meals', text: 'Meals', link: '/meals' },
	{ icon: 'appointments', text: 'Appointments', link: '/appointments' },
];
const otherItems = [
	{ icon: 'download', text: 'Download Reports', link: '/reports' },
	{ icon: 'rewards', text: 'Rewards', link: '/rewards' },
	{ icon: 'account', text: 'Accounts', link: '/account' },
];

function SideBar({ logoutUser }) {
	return (
		<Wrapper elevation={2}>
			<div className="sidebar">
				<div className="top">
					<div>
						<img src={toggleLogo} alt="toggle" className="logo" />
					</div>
					<div className="nav">
						<UserInfo />
						<NavSection title="EMPLOYEE" items={employeeItems} />
						<NavSection title="OTHER" items={otherItems} />
					</div>
				</div>
				<div className="nav_item footer" onClick={logoutUser}>
					<Icon name="logout" />
					<p>LOGOUT</p>
				</div>
			</div>
		</Wrapper>
	);
}

SideBar.propTypes = {
	logoutUser: PropTypes.func.isRequired,
};

export default connect(null, { logoutUser })(SideBar);
