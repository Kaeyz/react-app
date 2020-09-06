import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import Modal from "../../dashboard/common/Modal";
import Grid from "@material-ui/core/Grid";
import Button from "../../../components/common/Button";
import pinkIcon from "../../../assets/pinkIcon.svg";
import AppointReward from "../../../components/common/AppointReward";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  .body {
    .grid {
      display: grid;
      padding-bottom: 4rem;
      grid-template-columns: 1fr 1fr;
      .text {
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 2.2rem;
        color: ${props => props.theme.color.ui_05};
      }
      .bolder {
        font-weight: bold;
      }
    }
  }
  .bottom {
    #link {
      color: ${props => props.theme.color.ui_08};
      text-decoration: underline;
      &:hover{
        color: ${props => props.theme.color.ui_05};
        transition:.3s;
      }
    }
    .button {
      width: 100% !important;
    }
    #mb{
        padding: 3rem 0;
    }
  }
`;

class RewardDetailsModal extends React.Component {
  state = {
    show: false,
    showButton: false,
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Wrapper>
        {/* <Modal show={this.state.show} handleClose={this.hideModal} textBtn='Complete' heading={<><img src={close} alt="adornment" id='adorn'/> <span> Questions on Protein</span></>} info='A balanced diet lorem ipsum blished fact that a reader will be distracted by the readable content.'> */}
        {/* THE COMMENTED CODE ABOVE IS IF THE HEADING TEXT IS GOING TO HAVE AN IMAGE BY ITS SIDE */}
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          position="modal-right"
          heading={
            <span>
              {" "}
              <img src={pinkIcon} alt="icon" /> Reward Title
            </span>
          }
        >
          <div className="body">
            <div className="detail grid">
              <p className="text">Date Created</p>
              <h1 className="bolder text">March 28,2020</h1>
            </div>
            <div className="detail grid">
              <p className="text">Start Date</p>
              <h1 className="bolder text">February 12,2020</h1>
            </div>
            <div className="detail grid">
              <p className="text">End Date</p>
              <h1 className="bolder text">July 12,2020</h1>
            </div>
          </div>

          <div className="bottom">
            <p>See how your employee are performing.</p>
            <Link to="/leaderboard" id="link">
              View Leaderboard
            </Link>
          </div>

          <div className="bottom">
            <Grid item xs={12} id="mb">
              <Button theme="darkGreen" text="Edit Reward" />
            </Grid>
            <Grid item xs={12} >
              <Button theme="pinkBtn" text="Delete Reward" />
            </Grid>
          </div>
        </Modal>

        <div onClick={this.showModal}>
          <AppointReward cardTheme={this.props.theme} icon={this.props.icon} />
        </div>
      </Wrapper>
    );
  }
}

RewardDetailsModal.propTypes = {};

export default RewardDetailsModal;
