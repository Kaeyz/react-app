import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MobileNavBar from './sidebar/MobileNavBar';
import SideBar from './sidebar/SideBar';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  min-height: 100vh;
  background-color: #fbfbfb;
  @media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
		display: block;	}
	  }
     .layout {
    background: #fbfbfb;
    padding: 3rem 2rem;
    padding-left: 5rem;
    @media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
      padding-left: 2rem;
      margin-top:5rem;	}
      }
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
    @media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
      display:none;	}
      }
     }
`;

function DashboardLayout({ children, whatPage }) {
	return (
		<Wrapper>
			<div className="shadow"></div>
			<SideBar />
			<div className="layout">
				<MobileNavBar whatPage={whatPage}/>
				{children}</div>
		</Wrapper>
	);
}

DashboardLayout.propTypes = {
	children: PropTypes.any.isRequired,
	whatPage: PropTypes.string.isRequired,
};

export default DashboardLayout;
