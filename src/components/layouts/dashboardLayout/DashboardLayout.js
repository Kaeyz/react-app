import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../../common/Container';

import SideBar from './SideBar';
import HeaderDashboard from './HeaderDashboard';

const Wrapper = styled.div`
	min-height: 100vh;
	display: flex;
`;


function DashboardLayout({children}) {
	return (
		<Wrapper>
			<SideBar />
			<Container>
				<HeaderDashboard />
				{children}
			</Container>
		</Wrapper>
	);
}

DashboardLayout.propTypes = {
	children: PropTypes.any.isRequired,
};

export default DashboardLayout;

