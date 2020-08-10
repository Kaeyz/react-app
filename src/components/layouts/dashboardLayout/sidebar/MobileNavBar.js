/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { device } from '../../../../Device';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useTheme } from '@material-ui/core/styles';
import MobileSidebar from './MobileSidebar';

const Wrapper = styled.div`
display:none;
${device.tablet`
display:block;
`}
.MuiDrawer-paperAnchorDockedLeft{
    padding: 20px;
}
`;

function DashboardLayout() {
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
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="end"
				onClick={handleDrawerOpen}
				// className={clsx(open && classes.hide)}
			>
				<MenuIcon />
			</IconButton>
            			<Drawer
				variant="persistent"
				anchor="left"
				open={open}

			>
				<div>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<MobileSidebar/>
			</Drawer>
      	</Wrapper>
	);
}

// DashboardLayout.propTypes = {
// 	children: PropTypes.any.isRequired,
// };

export default DashboardLayout;
