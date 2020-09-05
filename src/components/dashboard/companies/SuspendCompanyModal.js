import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import Modal from "../../dashboard/common/Modal";
import Grid from "@material-ui/core/Grid";
import Button from '../../../components/common/Button';
import suspend from '../../../assets/suspend.svg'
const Wrapper = styled.div`
 .withBtn{
     .button{
         margin:auto;
     }
     #pd{
        padding-bottom: 1rem; 
     }
 }
`;

class SuspendCompanyModal extends React.Component {
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
        align='centered'
        img={suspend}
        alt='suspend'
          show={this.state.show}
          handleClose={this.hideModal}
          textBtn="Confirm Suspension"
          btn2={	<Button theme="whiteBtn" text="Cancel " />}
          info='Are you sure you want to  suspend this company?'
          heading={<span> Suspend Company?</span>}
               >
       <Grid container className='withBtn'>
      
                    <Grid item xs={12} sm={6} id='pd'>
                    <Button theme="whiteBtn" text="Cancel" />
                </Grid>
					<Grid item xs={12} sm={6} >
                    <Button theme="darkGreen" text="Confirm Suspension" />
					</Grid>
       </Grid>

        </Modal>
             <p className="trigger" onClick={this.showModal}>
             <Button theme="darkGreen" text="Activate " />
             </p>
        
      </Wrapper>
    );
  }
}

SuspendCompanyModal.propTypes = {};

export default SuspendCompanyModal;
