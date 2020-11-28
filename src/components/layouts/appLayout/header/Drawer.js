/*eslint-disable */

import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';



const Wrapper = styled.div`
	@media screen and ( min-width: 769px) {
		display: none;
	}
	.menu_icon {
		font-size: 3rem;
		vertical-align: middle;
		fill: ${props => props.theme.color.brand_02};
	}
	.MuiListItem-button{
		border-bottom: 1px solid rgba(141, 184, 56, 0.6);
	}
`;
const Wrap = styled.div`
	.MuiListItem-button{
		border-bottom: 1px solid rgba(141, 184, 56, 0.6);
		text-align: center;
	}
	.MuiTypography-body1 {
		font-size: 1.5rem;
	}
	.no-border{
		border: 0;
	}
	.MuiList-padding{
		padding: 0;
	}
	.MuiListItem-button:hover{
		background-color: rgb(141, 184, 56);

	}
`;

export default function AppDrawer() {
	const [state, setState] = React.useState(false);

	const toggleDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState(open);
	};

	const overlay = (anchor) => (
	<Wrap>	
			<div 
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
			<ListItem button component="a" href="/blog">
    <ListItemText primary="Blog" />
  </ListItem>
			<ListItem button component="a" href="/team">
    <ListItemText primary="Team" />
  </ListItem>
			<ListItem button component="a" href="/login">
    <ListItemText primary="Login" />
  </ListItem>
			<ListItem className="no-border" button component="a" href="/onboarding/company">
    <ListItemText primary="Sign up" />
  </ListItem>
      </List>
		</div>
	</Wrap>
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
