import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SideBar from './sidebar/SideBar';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  min-height: 100vh;
  background-color: #fbfbfb;
  .layout {
    background: #fbfbfb;
    padding: 2rem;
    padding-left: 5rem;
  }
  .shadow {
    filter: blur(6.0rem);
    height: 94vh;
    width: 20.0rem;
    background-color: #000b0a;
    opacity: 0.1;
    left: 7.7rem;
    top: 1.9rem;
    position: fixed;
    border-radius: 1.0rem;
  }
`;

function DashboardLayout({ children }) {
	return (
		<Wrapper>
			<div className="shadow"></div>
			<SideBar />
			<div className="layout">{children}</div>
		</Wrapper>
	);
}

DashboardLayout.propTypes = {
	children: PropTypes.any.isRequired,
};

export default DashboardLayout;
