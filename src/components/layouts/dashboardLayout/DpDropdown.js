/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
//import PropTypes from 'prop-types';
import arrowDown from '../../../assets/arrow-down.svg';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import styled from 'styled-components';

const Wrapper = styled.div`

display:flex;
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
		  src={arrowDown}
		  alt="arrow-down"
		  aria-label="account of current user"
		  aria-controls="menu-appbar"
		  aria-haspopup="true"
		  onClick={handleMenu}
		  style={{cursor:'pointer'}}
				/>
				<Menu
		  id="menu-appbar"
		  anchorEl={anchorEl}
		  anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
		  }}
		  keepMounted
		  transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
		  }}
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

