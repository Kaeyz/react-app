import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import Modal from "../common/Modal";
import Button from "../../common/Button";

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
      border: 1px solid ${(props) => props.theme.color.ui_08};
      color: ${(props) => props.theme.color.text_05};
      text-align: center;
      border-radius: 6px;
      padding: 0;
      position: absolute;
      z-index: 1;
      left: -83px;
      top: 30px;
    }
  }
  .select{
    .flex{
        justify-content: space-between;
                padding-bottom: 2rem;
                p{
                  @media screen and ( max-width: ${props => props.theme.breakpoint.sm}) {
                    font-size:1.3rem;
                  }
                }
        }
  }
  .select-input{
      pfont-weight: 300;
      font-size: 1.4rem;
      line-height: 2.2rem;
          color: ${(props) => props.theme.color.ui_05};
  }
`;

class PendingInvitesModal extends React.Component {
  state = { show: false };

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
          textBtn="Suspend Employee"
          position='modal-right'
          btn2={            <Button theme="pinkBtn" text='Remove Employee' />
        }
          heading={<span> View Employee</span>}
        >
          <div className="select">
                            <div className="flex">
                <p>Employee Name</p>
                <p className='bold'>Durodola Anuoluwapo</p>
                </div>
                <div className="flex">
                <p>Department</p>
                <p className='bold'>Business Department</p>
                </div>
             <div className="flex">   <p>Branch</p>
              <p className='bold'>Lorem Ipsum</p></div>
              <div className="flex"><p>Email Address</p>
              <p className='bold'>Durodola@total.com.ng</p></div>
              <div className="flex">
              <p>Date Created</p>
              <p className='bold'>March 28,2020</p>
              </div>
          </div>
        </Modal>
        <p className="trigger" onClick={this.showModal}>
          View <span class="tooltiptext">click to view employee</span>
        </p>
      </Wrapper>
    );
  }
}

PendingInvitesModal.propTypes = {};

export default PendingInvitesModal;
