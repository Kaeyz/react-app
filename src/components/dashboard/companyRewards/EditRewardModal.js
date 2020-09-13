import React from 'react';
import { connect } from 'react-redux';
import { updateReward } from '../../../store/actions/rewardActions';
import PropTypes from 'prop-types';
import { rewardInputValidator } from '../../forms/validation';
import styled from 'styled-components';
import Modal from '../common/Modal';
import Button from '../../common/Button';
import { TextInput, DateInput, TextArea } from '../../common/inputs';
import pinkIcon from '../../../assets/pinkIcon.svg';
import { Grid } from '@material-ui/core';

const Wrapper = styled.div`
	#mb {
		.button {
			width: 100% !important;
		}
	}
`;

const EditRewardModal = ({updateReward, reward}) => {
	const [show, setShow] = React.useState(false);
	const [title, setTitle] = React.useState(reward.title);
	const [description, setDescription] = React.useState(reward.description);
	const [startDate, setStartDate] = React.useState(reward.startDate);
	const [endDate, setEndDate] = React.useState(new Date(reward.endDate));
	const [errors, setErrors] = React.useState({});


	const	showModal = () => {
		setShow(true);
	};

	const hideModal = () => {
		setShow(false);
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		setErrors({});
		const data = {id: reward._id, title, description, startDate, endDate };


		const { errors, isValid } = rewardInputValidator(data);
		if (!isValid) {
			return setErrors(errors);
		}

		updateReward(data);
		hideModal();
	};

	return (
		<Wrapper>
			<Modal
				show={show}
				handleClose={hideModal}
				position="modal-right"
				heading={
					<span>
						<img src={pinkIcon} alt="icon" />
						Edit Reward
					</span>
				}
			>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<TextInput
							label="Reward Title"
							value={title}
							onChange={setTitle}
							error={errors.title}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextArea
							label="Description"
							placeholder='Type here ...'
							value={description}
							onChange={setDescription}
							error={errors.description}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<DateInput
							label="Start Date"
							value={startDate}
							onChange={setStartDate}
							errors={errors.startDate}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<DateInput
							label="End Date"
							value={endDate}
							onChange={setEndDate}
							errors={errors.endDate}
						/>
					</Grid>
					<Grid item xs={12} id="mb">
						<Button
							theme="darkGreen"
							text="Create Reward"
							onClick={onFormSubmit}
						/>
					</Grid>
				</Grid>
			</Modal>

			<div onClick={showModal}>
				<Grid item xs={12} id="mb">
					<Button theme="darkGreen" text="Edit Reward" />
				</Grid>
			</div>
		</Wrapper>
	);
};

EditRewardModal.propTypes = {
	updateReward: PropTypes.func.isRequired,
	reward: PropTypes.object.isRequired
};

export default connect(null, {updateReward})(EditRewardModal);
