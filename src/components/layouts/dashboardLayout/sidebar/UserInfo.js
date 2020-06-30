import React from 'react';
//import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import dp from '../../../../assets/dp.svg';
import DpDropdown from '../DpDropdown';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	min-width: 15rem;
	.user_details {
		display: flex;
		width: max-content;
		align-items: center;
	}
	.avatar {
		height: 4rem;
		width: 4rem;
	}
	.details {
		margin-left: 0.6rem;
	}
	.details_text {
		padding: 0rem;
		line-height: 1.5rem;
	}
	.main {
		font-size: 1.6rem;
	}
	.sub {
		font-size: 1.1rem;
	}
`;


function UserInfo() {
	return (
		<Wrapper>
			<div className="user_details">
				<Avatar alt="users name" src={dp} className="avatar"/>
				<div className="details">
					<p className="details_text main">Mona Kane</p>
					<p className="details_text sub">Employee</p>
				</div>
			</div>
			<DpDropdown />
		</Wrapper>
	);
}

//UserInfo.propTypes = {}

export default UserInfo;

