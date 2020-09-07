import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { suspendCompany } from '../../../store/actions/companyActions';
import styled from 'styled-components';
import Modal from '../common/Modal';
import Grid from '@material-ui/core/Grid';
import Button from '../../common/Button';
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

const SuspendCompanyModal = ({suspendCompany, companyId}) => {

	const [show, setShow] = React.useState(false);


	const showModal = () => {
		setShow(true);
	};

	const hideModal = () => {
		setShow(false);
	};

	const onSuspendClick = (event) => {
		event.preventDefault();
		suspendCompany(companyId);
		hideModal();
	};

	return (
		<Wrapper>
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
						<Button theme="whiteBtn" text="Cancel" onClick={hideModal} />
					</Grid>
					<Grid item xs={12} sm={6} >
						<Button theme="darkGreen" text="Confirm Suspension" onClick={onSuspendClick}/>
					</Grid>
				</Grid>

			</Modal>
			<div className="trigger" onClick={showModal}>
				<Button theme="darkGreen" text="Suspend " />
			</div>
		</Wrapper>
	);
};

SuspendCompanyModal.propTypes = {
	companyId: PropTypes.string.isRequired,
	suspendCompany: PropTypes.func.isRequired
};

export default connect(null, {suspendCompany})(SuspendCompanyModal);