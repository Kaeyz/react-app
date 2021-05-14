import { Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import dp from '../../../../assets/dp.svg';
import { capitalizeFirstLetter } from '../../../../utils/helper';

const Wrapper = styled.div`
  margin-top: 3.45rem;
  display: flex;
  justify-content: space-between;
  min-width: 15rem;
  .user_details {
    width: max-content;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr max-content;
    grid-gap: 1rem;
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
    font-weight: bold;
    color: #000000;
    letter-spacing: -0.4px;
    margin-bottom: 5px;
  }
  .sub {
    color: #828282;
    line-height: 12px;
  }
`;

function UserInfo({ name, type, companyName }) {
	return (
		<Wrapper>
			<div className="user_details">
				{/* implement the image upload */}
				<Avatar alt="users name" src={dp} className="avatar" />
				<div className="details">
					<p className="details_text main">
						{' '}
						{type === 'COMPANY' ? (companyName?.length > 10 ? `${capitalizeFirstLetter(companyName?.substring(0, 10))}...` : capitalizeFirstLetter(companyName)) : (name?.length > 10 ? `${capitalizeFirstLetter(name?.substring(0, 10))}...` : capitalizeFirstLetter(name))}
					</p>

					<p className="details_text sub">{String(type).toLowerCase()}</p>
				</div>
			</div>
		</Wrapper>
	);
}

UserInfo.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	companyName: PropTypes.string,
};

export default UserInfo;
