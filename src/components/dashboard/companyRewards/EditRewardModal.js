import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import pinkIcon from '../../../assets/pinkIcon.svg';
import { updateReward } from '../../../store/actions/rewardActions';
import Button from '../../common/Button';
import { DateInput, TextArea, TextInput } from '../../common/inputs';
import { rewardInputValidator } from '../../forms/validation';
import Modal from '../common/Modal';

const Wrapper = styled.div`
	#mb {
		.button {
			width: 100% !important;
		}
	}
`;

const EditRewardModal = ({ updateReward, reward }) => {

	const [show, setShow] = React.useState(false);
	const [title, setTitle] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [startDate, setStartDate] = React.useState('');
	const [endDate, setEndDate] = React.useState('');
	const [errors, setErrors] = React.useState({});

	React.useEffect(() => {
		if (show) {
			setTitle(reward.title);
			setDescription(reward.description);
			setStartDate(reward.startDate);
			setEndDate(reward.endDate);
		}
	}, [reward, show]);

	const showModal = () => {
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
							error={errors.startDate}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<DateInput
							label="End Date"
							value={endDate}
							onChange={setEndDate}
							error={errors.endDate}
						/>
					</Grid>
					<Grid item xs={12} id="mb">
						<Button
							theme="darkGreen"
							text="Edit Reward"
							onClick={onFormSubmit}
						/>
					</Grid>
				</Grid>
			</Modal>

			<div onClick={showModal}>
				<Grid item xs={12} id="mb">
					<Button theme="darkGreen" text="Edit Reward"/>
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
