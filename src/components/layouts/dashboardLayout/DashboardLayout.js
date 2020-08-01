import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SideBar from './sidebar/SideBar';

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: max-content 1fr;
	min-height: 100vh;
	.layout {
		background: #FBFBFB;
		padding: 2rem;
	}
`;


function DashboardLayout({children}) {
	return (
		<Wrapper>
			<SideBar />
			<div className="layout">
				{children}
			</div>
		</Wrapper>
	);
}

DashboardLayout.propTypes = {
	children: PropTypes.any.isRequired
};

export default DashboardLayout;

