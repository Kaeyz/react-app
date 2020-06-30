import React from 'react';
import styled from 'styled-components';
//import PropTypes from 'prop-types';

import SideBar from './sidebar/SideBar';
import HeaderDashboard from './HeaderDashboard';

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: max-content 1fr;
	grid-gap: 1rem;
	min-height: 100vh;
	.layout {
		padding: 2rem;
		margin-right: 3rem;
	}
`;


function DashboardLayout() {
	return (
		<Wrapper>
			<SideBar />
			<div className="layout">
				<HeaderDashboard />
				<p>Body </p>
			</div>
		</Wrapper>
	);
}

//DashboardLayout.propTypes = {}

export default DashboardLayout;

