import React from 'react';
//import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import dp from '../../../../assets/dp.svg';
// import DpDropdown from '../DpDropdown';

const Wrapper = styled.div`
margin-top: 3.45rem;
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
		line-height: 1.4rem;
	}
	.main {
		font-size: 1.4rem;
		font-weight: bold;
		color: #000000;
		letter-spacing: -0.4px;
		margin-bottom: 5px;
	}
	.sub {
		font-size: 1.3rem;
		color: #828282;
		line-height: 12px;
	}
`;


function UserInfo() {
	return (
		<Wrapper>
			<div className="user_details">
				<Avatar alt="users name" src={dp} className="avatar"/>
				<div className="details">
					<p className="details_text main">Durodola Imani</p>
					<p className="details_text sub">Employee</p>
				</div>
			</div>
			{/* <DpDropdown /> */}
		</Wrapper>
	);
}

//UserInfo.propTypes = {}

export default UserInfo;

