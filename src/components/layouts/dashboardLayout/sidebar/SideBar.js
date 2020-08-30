import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../../store/actions/userActions';
import { Paper } from '@material-ui/core';

import toggleLogo from '../../../../assets/Frame.svg';
// import Icon from '../../../common/Icon';
import UserInfo from './UserInfo';
import NavSection from './NavSection';
import Divider from '@material-ui/core/Divider';

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
    height: 100%;
  }
  .top {
    .MuiDivider-middle{
      background-color: #a6a6a6;
      width: 19rem;
      height: 0.5px;
      margin: auto;
      opacity: 0.2;
    }
    .flex{
      display: grid;
      grid-template-columns: 1fr max-content;
      margin-bottom: 2rem;
      h1{
        font-size: 16px;
        line-height: 15px;
        color: #000000;
      }
    }
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


function SideBar({ logoutUser }) {
	const employeeItems = [
		{ icon: 'dashboard_home', text: 'Dashboard', link: '/dashboard' },
		{ icon: 'assessments', text: 'Assessments', link: '/assessments' },
		{ icon: 'exercise', text: 'Exercise', link: '/exercise' },
		{ icon: 'exercise', text: 'Meals', link: '/meals' },
		{ icon: 'exercise', text: 'Appointments', link: '/appointments' },
	];
	const otherItems = [
		{ icon: 'download', text: 'Reports', link: '/assessment/health/reports' },
		{ icon: 'rewards', text: 'Rewards', link: '/rewards' },
		{ icon: 'settings', text: 'Settings', link: '/settings/account' },
		{ icon: 'logout', text: 'Logout', onClick: logoutUser },
	];
	return (
		<Wrapper elevation={2}>
			<div className="sidebar">
				<div className="top">
					<div className='flex'>
						<img src={toggleLogo} alt="toggle" className="logo" />
						<h1>Employee Portal</h1>
					</div>
					<Divider variant="middle" />
					<div className="nav">
						<UserInfo />
						<NavSection title="EMPLOYEE" items={employeeItems} />
						<Divider variant="middle" />
						<NavSection title="OTHER" items={otherItems} />
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

SideBar.propTypes = {
	logoutUser: PropTypes.func.isRequired,
};

export default connect(null, { logoutUser })(SideBar);
