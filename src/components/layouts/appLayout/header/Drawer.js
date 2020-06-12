import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
	list: {
		height: 80,
	}
});

const Wrapper = styled.div`
	@media screen and ( min-width: ${props => props.theme.breakpoint.md}) {
		display: none;
	}
	.menu_icon {
		font-size: 3rem;
	}
`;

export default function AppDrawer() {
	const classes = useStyles();
	const [state, setState] = React.useState(false);

	const toggleDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState(open);
	};

	const overlay = (anchor) => (
		<div className={classes.list}
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			Navigation
		</div>
	);

	return (
		<Wrapper>
			<div className="drawer">
				<MenuIcon onClick={toggleDrawer('open')} className="menu_icon" />
				<Drawer anchor={'top'} open={state} onClose={toggleDrawer(false)}>
					{overlay('top')}
				</Drawer>
			</div>
		</Wrapper>
	);
}
