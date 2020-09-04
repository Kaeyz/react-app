import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import Modal from "../../dashboard/common/Modal";
import Grid from "@material-ui/core/Grid";
import {TextInput} from "../../common/inputs";

const Wrapper = styled.div`
  .pd {
    padding-bottom: 4rem;
  }
  .trigger {
    text-decoration-line: underline;
    cursor: pointer;
    position: relative;
    &:hover .tooltiptext {
      visibility: visible;
    }
    .tooltiptext {
      visibility: hidden;
      width: 112px;
      font-size: 1.2rem;
      background: rgba(243, 121, 32, 0.05);
      border: 1px solid #f37920;
      color: ${(props) => props.theme.color.text_05};
      text-align: center;
      border-radius: 6px;
      padding: 0;
      position: absolute;
      z-index: 1;
      left: -83px;
      top: -43px;
        }
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
    showButton: false
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
          textBtn="Add Employee"
          position="modal-right"
          heading={<span> Add New Employee</span>}
        >
          <div className="select">
            <Grid container className="select-input">
              <Grid item xs={12} >
                <TextInput
                  placeholder="Type here..."
                  label="First name"
                  value={this.state.firstName}
                  onChange={this.setFirstName}
                />
              </Grid>
              <Grid item xs={12} >
                <TextInput
                  placeholder="Type here..."
                  label="Last Name"
                  value={this.state.lastName}
                  onChange={this.setlastName}
                />
              </Grid>             
              <Grid item xs={12} >
                <TextInput
                  placeholder="Type here..."
                  label="Department"
                  value={this.state.department}
                  onChange={this.setDepartment}
                />
              </Grid>
              <Grid item xs={12} >
                <TextInput
                  placeholder="Type here..."
                  label="Branch"
                  value={this.state.branch}
                  onChange={this.setBranch}
                />
              </Grid>
              <Grid item xs={12} >
                <TextInput
                  placeholder="Type here..."
                  label="Email Address"
                  value={this.state.emailAddress}
                  onChange={this.setEmailAddress}
                />
              </Grid>
            </Grid>
          </div>
        </Modal>

    <p className="trigger" onClick={this.showModal}>
View <span class="tooltiptext">click to add new employee</span>
</p>
        
      </Wrapper>
    );
  }
}

NewEmployeeModal.propTypes = {};

export default NewEmployeeModal;
