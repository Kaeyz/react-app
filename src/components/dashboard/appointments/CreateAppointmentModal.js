import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import Modal from "../../dashboard/common/Modal";
import Button from "../../../components/common/Button";
import { Paper, Grid } from "@material-ui/core";
import {
  TextInput,
  DateInput,
  TextArea,
  SelectInput,
  TimeInput
} from "../../../components/common/inputs";
import icon from '../../../assets/money.svg';

const Wrapper = styled.div`
  .appoint-body {
    margin-top: -5.5rem;
  }
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
  #trigger{
    height: 100%;
    &:hover{
      transform: scale(.95);
      transition: .3s;
    }
  }
.uglyCard{
    padding: 3rem;
    border-radius: 8px;
    box-shadow: none;
    min-height: 170px;
    cursor: pointer;
    height: 100%;
}
.pink{
    background-color:#fff1ed;
    border: 1px solid #F37920;
}
.green{
    background-color:#f3f6eb;
    border: 1px solid #9ECD43;
}
.text{
    h1{
        font-family: Sofia;
font-weight: bold;
font-size: 16px;
line-height: 24px;
padding-bottom: 1rem;
letter-spacing: -0.2px;
color: #000B0A;
    }
    p{
        font-weight: 300;
font-size: 14px;
line-height: 25px;
letter-spacing: 0.2px;
color: #0A2523;
    }
}
`;

class CreateAppointmentModal extends React.Component {
  state = {
    show: false,
    showButton: false,
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
                options={this.props.optionPurpose}
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
              {this.props.Nutritionist}
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

        <div onClick={this.showModal} id="trigger">
        <Paper className={`uglyCard flex ${this.props.cardTheme}`} >
				<div className="text">
					<h1 className="title">{this.props.title}</h1>
					<p className="details">{this.props.details}</p>
				</div>

				<img src={icon} alt="icon"/>

			</Paper>
        </div>
      </Wrapper>
    );
  }
}

CreateAppointmentModal.propTypes = {};

export default CreateAppointmentModal;
