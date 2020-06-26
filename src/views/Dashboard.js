import React from 'react';
import Button from '../components/common/Button';
import { logoutUser } from '../store/actions/userActions';

export default function Dashboard() {
	return (
		<div>
			Welcome to choose life
			<Button onClick={logoutUser} theme="darkGreen">Logout</Button>
		</div>
	);
}
