import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reactivateCompany } from '../../../store/actions/companyActions';
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

const ReActivateCompanyModal = ({reactivateCompany, companyId}) => {

	const [show, setShow] = React.useState(false);


	const showModal = () => {
		setShow(true);
	};

	const hideModal = () => {
		setShow(false);
	};

	const onActivateClick = (event) => {
		event.preventDefault();
		reactivateCompany(companyId);
		hideModal();
	};

	return (
		<Wrapper>
			<Modal
				align='centered'
				img={suspend}
				alt='reactivate'
				show={show}
				handleClose={hideModal}
				textBtn="Confirm Reactivation"
				btn2={<Button theme="whiteBtn" text="Cancel " />}
				info='Are you sure you want to reactivate this company?'
				heading={<span> Reactivate Company?</span>}
			>
				<Grid container className='withBtn'>
					<Grid item xs={12} sm={6} id='pd'>
						<Button theme="whiteBtn" text="Cancel" onClick={hideModal} />
					</Grid>
					<Grid item xs={12} sm={6} >
						<Button theme="darkGreen" text="Confirm Reactivation" onClick={onActivateClick}/>
					</Grid>
				</Grid>

			</Modal>
			<div className="trigger" onClick={showModal}>
				<Button theme="darkGreen" text="Reactivate"  />
			</div>
		</Wrapper>
	);
};

ReActivateCompanyModal.propTypes = {
	companyId: PropTypes.string.isRequired,
	reactivateCompany: PropTypes.func.isRequired
};

export default connect(null, {reactivateCompany})(ReActivateCompanyModal);
