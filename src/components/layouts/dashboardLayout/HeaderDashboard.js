import React from "react";
//import PropTypes from 'prop-types'
import styled from "styled-components";
import inboxIcon from "../../../assets/inboxIcon.svg";
import notificationIcon from "../../../assets/Notifications.svg";
import dp from "../../../assets/dp.svg";
import noteIcon from "../../../assets/noteIcon.svg";
import arrowDown from "../../../assets/arrow-down.svg";
import MenuItem from "@material-ui/core/MenuItem";

import Menu from "@material-ui/core/Menu";


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  .flex {
    display: flex;
    align-items: center;
  }
  .left-header-content {
    width: 326px;
    height: 40px;

    justify-content: space-between;
  }
  .dp {
    p {
      font-size: 16px;
      line-height: 24px;
      margin-right: 12px;
      color: #201f1e;
    }
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

function HeaderDashboard() {
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
      <div className="left-header-content flex">
        <img src={noteIcon} alt="noteIcon" />
        <img src={inboxIcon} alt="inboxIcon" />
        <img src={notificationIcon} alt="notificationIcon" />
        <div className="dp flex">
          {" "}
          <p style={{}}>Mona Kane</p> <img src={dp} alt="dp" />
        </div>
        <div>
          <img
            src={arrowDown}
            alt="arrow-down"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
			onClick={handleMenu}
			style={{cursor:"pointer"}}
          />
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </div>
      </div>
    </Wrapper>
  );
}

//HeaderDashboard.propTypes = {}

export default HeaderDashboard;
