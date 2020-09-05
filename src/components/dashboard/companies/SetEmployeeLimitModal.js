import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import Modal from "../../dashboard/common/Modal";
import Grid from "@material-ui/core/Grid";
import {TextInput} from "../../common/inputs";
import Button from '../../../components/common/Button';

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
  #mb{
    margin-bottom: 120px;
  }
`;

class SetEmployeeLimitModal extends React.Component {
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
          heading={<span> Set Employee limit</span>}
          info='Id et elementum arcu convallis ornare cursus nisl cursus. Vulputate adipiscing iaculis orci placerat ac..'
        >
          <Grid item xs={12}>
							<TextInput
                label="Employee Limit"
                placeholder="200"
								// value={firstName}
								// onChange={setFirstName}
							/>
						</Grid>
          <Grid item xs={3} id="mb">
          <Button theme="darkGreen" text="Save Changes " />
						</Grid>

        </Modal>
             <p className="trigger" onClick={this.showModal}>
Edit Limit <span class="tooltiptext">click to set employee limit</span>
</p>
        
      </Wrapper>
    );
  }
}

SetEmployeeLimitModal.propTypes = {};

export default SetEmployeeLimitModal;
