import React from 'react';
import Button from '../components/common/Button';
import { logoutUser } from '../store/actions/userActions';
import { connect } from 'react-redux';

const Dashboard = ({logoutUser}) => {

	const onLogoutClick = () => {
		logoutUser();
	};
	return (
		<div>
			Welcome to choose life
			<Button onClick={onLogoutClick} theme="darkGreen">Logout</Button>
		</div>
	);
};

export default connect(null, { logoutUser })(Dashboard);

