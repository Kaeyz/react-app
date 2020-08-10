import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MobileNavBar from './sidebar/MobileNavBar'
import SideBar from './sidebar/SideBar';
import { device } from '../../../Device';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  min-height: 100vh;
  background-color: #fbfbfb;
   ${device.tablet`
  display: block;
  `}
  .layout {
    background: #fbfbfb;
    padding: 2rem;
    padding-left: 5rem;
    ${device.tablet`
    padding-left: 2rem;
  `}
  }
  .shadow {
    filter: blur(6rem);
    height: 94vh;
    width: 20rem;
    background-color: #000b0a;
    opacity: 0.1;
    left: 7.7rem;
    top: 1.9rem;
    position: fixed;
    border-radius: 1rem;
    ${device.tablet`
    display:none;
  `}
  }
`;

function DashboardLayout({ children }) {
	return (
		<Wrapper>
			<div className="shadow"></div>
			<SideBar />
			<div className="layout">
				<MobileNavBar/>
				{children}</div>
		</Wrapper>
	);
}

DashboardLayout.propTypes = {
	children: PropTypes.any.isRequired,
};

export default DashboardLayout;
