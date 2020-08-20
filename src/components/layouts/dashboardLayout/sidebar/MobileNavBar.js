/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import MobileSidebar from './MobileSidebar';
import Menu from '../../../../assets/hamburger.svg';
import Back from '../../../../assets/greenBackArrow.svg';
import DP from '../../../../assets/dp.svg';

const Wrapper = styled.div`
display:none;
@media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
	display: block;
}
nav {
  position: fixed;
  width: 100%;
	top: 0;
	z-index:1111;
	left: 0;
	background: #FFFFFF;
	padding: 0rem;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
  img {
      padding-right: 12px;
    }
}
.MuiDrawer-paperAnchorDockedLeft{
    padding: 0px;
    background-color: #FFFFFF;
}

`;

function DashboardLayout({whatPage}) {
	const [open, setOpen] = React.useState(false);
	const theme = useTheme();

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (
		<Wrapper>
			<nav>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="end"
					onClick={handleDrawerOpen}
				// className={clsx(open && classes.hide)}
				>
					<img src={Menu} alt='show-sidebar'/>
				</IconButton>
				<h1>{whatPage}</h1>
				<img src={DP} alt='profile'/>
			</nav>
			<Drawer
				variant="persistent"
				anchor="left"
				open={open}
			>
				<div>
					<IconButton onClick={handleDrawerClose} >
						{theme.direction === 'rtl' ? <img src={Back} alt='hide-sidebar' className='close'/> : <img src={Back} alt='close'/>}
					</IconButton>
				</div>
				<MobileSidebar/>
			</Drawer>
      	</Wrapper>
	);
}

DashboardLayout.propTypes = {
	whatPage: PropTypes.string.isRequired,
};

export default DashboardLayout;
