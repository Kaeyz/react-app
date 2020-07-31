import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SideBar from './sidebar/SideBar';
import Container from '../../common/Container';

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: max-content 1fr;
	// grid-gap: 1rem;
	min-height: 100vh;
	.layout {

    background: #fff;

	}
`;


function DashboardLayout({children}) {
	return (
		<Wrapper>
			<SideBar />
			<div className="layout">
				<Container>
					{children}
				</Container>

			</div>
		</Wrapper>
	);
}

DashboardLayout.propTypes = {
	children: PropTypes.any.isRequired
};

export default DashboardLayout;

