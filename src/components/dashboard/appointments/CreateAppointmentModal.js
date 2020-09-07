import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import Modal from "../../dashboard/common/Modal";
import Button from "../../../components/common/Button";
import add from "../../../assets/Add.svg";
import { Paper, Grid } from "@material-ui/core";
import {
  TextInput,
  DateInput,
  TextArea,
  SelectInput,
  TimeInput
} from "../../../components/common/inputs";

const Wrapper = styled.div`
  .appoint-body {
    margin-top: -5.5rem;
  }
  .add {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    align-items: center;
    box-shadow: none;
    cursor: pointer;
    border-radius: 10px;
    min-width: 284px;
    height: 200px;
    max-width: 380px;
    &:hover {
      transform: scale(0.95);
      transition: 0.3s;
    }
    h1 {
      font-weight: bold;
      font-size: 1.4rem;
      padding-top: 3rem;
      line-height: 1.4rem;
      letter-spacing: 0.2px;
      color: ${(props) => props.theme.color.ui_06};
    }
  }

  .bottom {
    .button {
      width: 100% !important;
    }
    #mb {
      padding: 3rem 0;
    }
  }
`;

class CreateAppointmentModal extends React.Component {
  state = {
    show: false,
    showButton: false,
    Nutritionist: "Select a Nutritionist",
    Purpose: "Select Purpose",
    date: new Date('07/08/2020'),
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  setTime = (e) => {
    this.setState({
      Time: e.target.value,
    });
  };

  setNutritionist = (e) => {
    this.setState({
      Nutritionist: e.target.value,
    });
  };
 
  setPurpose = (e) => {
    this.setState({
      Purpose: e.target.value,
    });
  };

  render() {
    const optionNutritionist = [
      { value: "Select a Nutritionist", text: "Select a Nutritionist" },
      { value: "JOHN", text: "John" },
      { value: "ADE", text: "Ade" },
      { value: "TOMI", text: "Tomi" },
      { value: "FELIX", text: "Felix" },
      { value: "IBRAHIM", text: "Ibrahim" },
    ];
   
    const optionPurpose = [
      { value: "Select Purpose", text: "Select Purpose" },
      { value: "JOHN", text: "John" },
    ];

    return (
      <Wrapper>
        {/* <Modal show={this.state.show} handleClose={this.hideModal} textBtn='Complete' heading={<><img src={close} alt="adornment" id='adorn'/> <span> Questions on Protein</span></>} info='A balanced diet lorem ipsum blished fact that a reader will be distracted by the readable content.'> */}
        {/* THE COMMENTED CODE ABOVE IS IF THE HEADING TEXT IS GOING TO HAVE AN IMAGE BY ITS SIDE */}
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          position="modal-right"
          heading={<span> Create Appointment</span>}
        >
          <Grid container spacing={3} className="appoint-body">
            <Grid item xs={12}>
              <TextInput label="Appointment Title" />
            </Grid>
            <Grid item xs={12}>
              <SelectInput
                label="Purpose"
                options={optionPurpose}
                value={this.state.Purpose}
                onChange={this.state.setPurpose}
              />
            </Grid>
            <Grid item xs={12}>
              <DateInput
                label="Date"
                value={this.state.date}
                onChange={this.state.setDate}
              />
            </Grid>
            <Grid item xs={12}>
              <SelectInput
                label="Nutritionist"
                options={optionNutritionist}
                value={this.state.Nutritionist}
                onChange={this.state.setNutritionist}
              />
            </Grid>
            <Grid item xs={12}>
              <TimeInput
                label="Propose a time (the time is subject to review)"
              />
            </Grid>
            <Grid item xs={12}>
              <TextArea label="Description" placeholder="Give a short description on what you need..." />
            </Grid>
          </Grid>

          <div className="bottom">
            <Grid item xs={12} id="mb">
              <Button theme="darkGreen" text="Create Appointment" />
            </Grid>
          </div>
        </Modal>

        <div onClick={this.showModal}>
          <Paper className="add">
            <img src={add} alt="add" />
            <h1>CREATE NEW APPOINTMENT</h1>
          </Paper>
        </div>
      </Wrapper>
    );
  }
}

CreateAppointmentModal.propTypes = {};

export default CreateAppointmentModal;
