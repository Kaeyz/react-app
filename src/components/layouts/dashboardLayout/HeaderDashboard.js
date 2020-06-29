/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
//import PropTypes from 'prop-types'
import styled from 'styled-components';
import inboxIcon from '../../../assets/inboxIcon.svg';
import notificationIcon from '../../../assets/Notifications.svg';
import noteIcon from '../../../assets/noteIcon.svg';
import DpDropdown from './DpDropdown';
import dp from '../../../assets/dp.svg';



const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  .flex {
    display: flex;
    align-items: center;
  }
  .left-header-content {
    width: 326px;
    height: 40px;

    justify-content: space-between;
  }
  .flex {
    display: flex;
    align-items: center;
  }
  .dp {
	  margin-right:2.1rem;
    p {
      font-size: 16px;
      line-height: 24px;
      margin-right: 12px;
      color: #201f1e;
    }
    img {
      width: 40px;
      height: 40px;
    }
  }

`;

function HeaderDashboard() {


	return (
		<Wrapper>
			<div className="left-header-content flex">
				<img src={noteIcon} alt="noteIcon" />
				<img src={inboxIcon} alt="inboxIcon" />
				<img src={notificationIcon} alt="notificationIcon" />
				<div className="dp flex">
					{' '}
					<p style={{}}>Mona Kane</p> <img src={dp} alt="dp" />
	  </div>
				<DpDropdown />
			</div>
		</Wrapper>
	);
}

//HeaderDashboard.propTypes = {}

export default HeaderDashboard;
