import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import Modal from "../../dashboard/common/Modal";
import Button from "../../../components/common/Button";
import { TextInput, DateInput, TextArea } from "../../../components/common/inputs";
import pinkIcon from "../../../assets/pinkIcon.svg";
import add from "../../../assets/Add.svg";
import { Paper, Grid } from "@material-ui/core";

const Wrapper = styled.div`
  #mb {
    .button {
      width: 100% !important;
    }
  }
`;

class CreateRewardModal extends React.Component {
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
              <img src={pinkIcon} alt="icon" /> Create New Reward
            </span>
          }
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextInput label="Reward Title" />
            </Grid>
            <Grid item xs={12}>
              <TextArea label="Description" placeholder='Type here ...'/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DateInput label="Start Date" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DateInput label="End Date" />
            </Grid>
            <Grid item xs={12} id="mb">
              <Button theme="darkGreen" text="Create Reward" />
            </Grid>
          </Grid>
        </Modal>

        <div onClick={this.showModal}>
          <Paper className="add">
            <img src={add} alt="add" />
            <h1>CREATE NEW REWARD</h1>
          </Paper>
        </div>
      </Wrapper>
    );
  }
}

CreateRewardModal.propTypes = {};

export default CreateRewardModal;
