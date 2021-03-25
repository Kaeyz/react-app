import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import styled from 'styled-components';
import arrowDown from '../../../assets/arrow-down.svg';

const Wrapper = styled.div`
	display: flex;
	.flex {
		display: flex;
		align-items: center;
	}
`;

function DpDropdown() {
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	return (
		<Wrapper>
			<div>
				<img
					alt="arrowDown"
					src={arrowDown}
					onClick={handleMenu}
					style={{ cursor: 'pointer' }}
				/>
				<Menu
					anchorEl={anchorEl}
					anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
					keepMounted
					transformOrigin={{ vertical: 'top', horizontal: 'right' }}
					open={open}
					onClose={handleClose}
				>
					<MenuItem onClick={handleClose}>Profile</MenuItem>
					<MenuItem onClick={handleClose}>My account</MenuItem>
				</Menu>
			</div>
		</Wrapper>
	);
}

//DpDropdown.propTypes = {};

export default DpDropdown;
