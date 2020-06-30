/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import styled from 'styled-components';
import { Badge } from '@material-ui/core';
import inboxIcon from '../../../assets/inboxIcon.svg';
import notificationIcon from '../../../assets/Notifications.svg';
import noteIcon from '../../../assets/noteIcon.svg';
import DpDropdown from './DpDropdown';
import dp from '../../../assets/dp.svg';
//import PropTypes from 'prop-types';


const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	padding:2rem;
	marginRight:3rem;
	.flex {
		display: flex;
		height: max-content;
		align-items: center;
	}
	.left-header-content {
		width: 300px;
		height: max-content;
		justify-content: space-between;
	}
	.flex {
		display: flex;
		align-items: center;
	}
	.dp {
		margin-right:0.5rem;
		p {
			font-size: 16px;
			line-height: 24px;
			margin-right: 5px;
			color: #201f1e;
		}
		img {
			width: 35px;
			height: 35px;
		}
	}

`;

function HeaderDashboard() {


	return (
		<Wrapper>

			<div className="left-header-content flex">
				<img src={noteIcon} alt="noteIcon" />
				<img src={inboxIcon} alt="inboxIcon" />
				<Badge badgeContent={4} color="secondary">
					<img src={notificationIcon} alt="notificationIcon" />
				</Badge>
				<div className="flex">
					<div className="dp flex">
						<p>Mona Kane</p>
						<img src={dp} alt="dp" />
					</div>
					<DpDropdown />
				</div>
			</div>
		</Wrapper>
	);
}

//HeaderDashboard.propTypes = {}

export default HeaderDashboard;
