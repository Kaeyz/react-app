import { Grid, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import add from '../../../assets/Add.svg';
import pinkIcon from '../../../assets/pinkIcon.svg';
import Button from '../../../components/common/Button';
import { DateInput, TextArea, TextInput } from '../../../components/common/inputs';
import { addNewReward } from '../../../store/actions/rewardActions';
import Modal from '../../dashboard/common/Modal';
import { rewardInputValidator } from '../../forms/validation';

const Wrapper = styled.div`
	#mb {
		.button {
			width: 100% !important;
		}
	}
`;

const CreateRewardModal = ({addNewReward}) => {
	const [show, setShow] = React.useState(false);
	const [title, setTitle] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [startDate, setStartDate] = React.useState(new Date());
	const [endDate, setEndDate] = React.useState(new Date());
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
		const data = { title, description, startDate, endDate };

		// check if the startDate is greater than the end date

		const { errors, isValid } = rewardInputValidator(data);
		if (!isValid) {
			// eslint-disable-next-line no-console
			console.log(errors);
			return setErrors(errors);
		}

		addNewReward(data);
		hideModal();
	};

	return (
		<Wrapper>
			<Modal
				show={show}
				info="One of the great power that this platform offers is the creation of rewards to motivate employees of a company to stay focused on the four pillars of choose life (health, nutrition, lifestyle and fitness. The rewards offer a mechanism to rate individual progress with a feature named leaderboard(link to the leaderboard should be added). Our goal is to give you and your employees all the tools to monitor and improve your general wellbeing."
				handleClose={hideModal}
				position="modal-right"
				heading={
					<span>
						<img src={pinkIcon} alt="icon" /> Create New Reward
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
							text="Create Reward"
							onClick={onFormSubmit}
						/>
					</Grid>
				</Grid>
			</Modal>

			<div onClick={showModal}>
				<Paper className="add">
					<img src={add} alt="add" />
					<h1>CREATE NEW REWARD</h1>
				</Paper>
			</div>
		</Wrapper>
	);
};

CreateRewardModal.propTypes = {
	addNewReward: PropTypes.func.isRequired
};

export default connect(null, {addNewReward})(CreateRewardModal);
