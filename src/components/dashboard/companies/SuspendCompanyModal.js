import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import Modal from '../../dashboard/common/Modal';
import Grid from '@material-ui/core/Grid';
import Button from '../../../components/common/Button';
import suspend from '../../../assets/suspend.svg';


const Wrapper = styled.div`
 .withBtn{
		 .button{
				 margin: auto;
		 }
		 #pd{
				padding-bottom: 1rem;
		 }
 }
`;

const SuspendCompanyModal = () => {

	const [show, setShow] = React.useState(false);


	const showModal = () => {
		setShow(true);
	};

	const hideModal = () => {
		setShow(false);
	};

	return (
		<Wrapper>
			{/* <Modal show={show} handleClose={hideModal} textBtn='Complete' heading={<><img src={close} alt="adornment" id='adorn'/> <span> Questions on Protein</span></>} info='A balanced diet lorem ipsum blished fact that a reader will be distracted by the readable content.'> */}
			{/* THE COMMENTED CODE ABOVE IS IF THE HEADING TEXT IS GOING TO HAVE AN IMAGE BY ITS SIDE */}
			<Modal
				align='centered'
				img={suspend}
				alt='suspend'
				show={show}
				handleClose={hideModal}
				textBtn="Confirm Suspension"
				btn2={<Button theme="whiteBtn" text="Cancel " />}
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
			<div className="trigger" onClick={showModal}>
				<Button theme="darkGreen" text="Activate " />
			</div>
		</Wrapper>
	);
};

SuspendCompanyModal.propTypes = {};

export default SuspendCompanyModal;
