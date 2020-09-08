import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../../store/actions/userActions';
import { Paper, Divider } from '@material-ui/core';

import toggleLogo from '../../../../assets/Frame.svg';
import UserInfo from './UserInfo';
import NavSection from './NavSection';
import sideBarData from './sideBarData';


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

function SideBar({ logoutUser, user, type }) {

	const [isLoading, setIsLoading] = React.useState(true);
	const [navItems, setNavItem] = React.useState({});

	const logoutItem = { icon: 'logout', text: 'Logout', onClick: logoutUser };

	React.useEffect(() => {
		if (type) {
			setIsLoading(false);
			setNavItem(sideBarData[type]);
		} else {
			setIsLoading(true);
		}
	}, [type, setIsLoading, setNavItem]);

	return (
		<React.Fragment>
			{!isLoading &&
		<Wrapper elevation={2}>
			<div className="sidebar">
				<div className="top">
					<div className='top_section'>
						<img src={toggleLogo} alt="toggle" className="logo" />
						<h3>{navItems.navTitle}</h3>
					</div>
					<Divider variant="middle" />
					<div className="nav">
						<UserInfo name={user.name} type={type} />
						<NavSection title={type} items={navItems.topSection} />
						<Divider variant="middle" />
						<NavSection title="OTHER" items={[...navItems.otherSection, logoutItem]} />
					</div>
				</div>
			</div>
		</Wrapper>
			}
		</React.Fragment>
	);
}

SideBar.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
	type: PropTypes.string.isRequired
};

const mapStateToProps = state => {
	const { name, type } = state.user.user;
	const user = { name, type };
	return { user, type };
};

export default connect(mapStateToProps, { logoutUser })(SideBar);
