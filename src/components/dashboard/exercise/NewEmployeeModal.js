import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import Modal from "../../dashboard/common/Modal";
import Grid from "@material-ui/core/Grid";
import { TextInput } from "../../common/inputs";
import Button from "../../common/Button";

const Wrapper = styled.div`
  .pd {
    padding-top: 4rem;
  }
  .select {
    padding-bottom: 2rem;
    .flex {
      justify-content: space-between;
    }
  }
  .select-input {
    pfont-weight: 300;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: ${(props) => props.theme.color.ui_05};
  }
`;

class NewEmployeeModal extends React.Component {
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
          heading={<span> Add New Employee</span>}
        >
          <div className="select">
            <Grid container className="select-input">
              <Grid item xs={12}>
                <TextInput
                  placeholder="Type here..."
                  label="First name"
                  value={this.state.firstName}
                  onChange={this.setFirstName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  placeholder="Type here..."
                  label="Last Name"
                  value={this.state.lastName}
                  onChange={this.setlastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  placeholder="Type here..."
                  label="Department"
                  value={this.state.department}
                  onChange={this.setDepartment}
                />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  placeholder="Type here..."
                  label="Branch"
                  value={this.state.branch}
                  onChange={this.setBranch}
                />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  placeholder="Type here..."
                  label="Email Address"
                  value={this.state.emailAddress}
                  onChange={this.setEmailAddress}
                />
              </Grid>
              <Grid item xs={12} className="pd">
                <Button theme="darkGreen" text="Add Employee" />
              </Grid>
            </Grid>
          </div>
        </Modal>

        <Button
          theme="darkGreen"
          text="Add Employee"
          onClick={this.showModal}
        />
      </Wrapper>
    );
  }
}

NewEmployeeModal.propTypes = {};

export default NewEmployeeModal;
