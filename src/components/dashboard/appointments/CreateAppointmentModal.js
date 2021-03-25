import { Grid, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import icon from '../../../assets/money.svg';
import Button from '../../../components/common/Button';
import {
	DateInput,

	SelectInput, TextArea, TextInput,



	TimeInput
} from '../../../components/common/inputs';
import { addNewAppointment } from '../../../store/actions/appointmentActions';
import Modal from '../../dashboard/common/Modal';
import { createAppointmentValidator } from '../../forms/validation';

const Wrapper = styled.div`
	.appoint-body {
		margin-top: -5.5rem;
	}
	.bottom {
		.button {
			width: 100% !important;
		}
		#mb {
			padding: 3rem 0;
		}
	}
	#trigger{
		height: 100%;
		&:hover{
			transform: scale(.95);
			transition: .3s;
		}
	}
.uglyCard{
		padding: 3rem;
		border-radius: 8px;
		box-shadow: none;
		min-height: 170px;
		cursor: pointer;
		height: 100%;
}
.pink{
		background-color:#fff1ed;
		border: 1px solid #F37920;
}
.green{
		background-color:#f3f6eb;
		border: 1px solid #9ECD43;
}
.text{
		h1{
			/* font-family: Sofia; */
			font-weight: bold;
			padding-bottom: 1rem;
			letter-spacing: -0.2px;
			color: #000B0A;
		}
		p {
			font-weight: 300;
			 14px;
			line-height: 25px;
			letter-spacing: 0.2px;
			color: #0A2523;
		}
	}
`;

const optionNutritionist = [
	{ value: '', text: 'Select a Nutritionist' },
	{ value: 'JOHN', text: 'John' },
	{ value: 'ADE', text: 'Ade' },
	{ value: 'TOMI', text: 'Tomi' },
	{ value: 'FELIX', text: 'Felix' },
	{ value: 'IBRAHIM', text: 'Ibrahim' },
];

const purposeOptions = {
	INBODY: [
		{ value: 'Select Purpose', text: 'Select Purpose' },
		{ value: 'INBODY', text: 'Inbody Appointment' },
	],
	PROFESSIONAL: [
		{ value: 'Select Purpose', text: 'Select Purpose' },
		{ value: 'PROFESSIONAL', text: 'Meal Appointment' },
	],
};

const CreateAppointmentModal = ({type, title, cardTheme, details, addNewAppointment  }) => {

	const [show, setShow] = useState(false);

	const [formTitle, setTitle] = useState('');
	const [purpose, setPurpose] = useState(type);
	const [date, setDate] = useState(new Date());
	const [professional, setProfessional] = useState('');
	const [time, setTime] = useState(new Date());
	const [description, setDescription] = useState('');
	const [errors, setErrors] = useState({});

	const toggleModal = () => {
		setShow(!show);
	};

	const onFormSubmit = (e) => {
		setErrors({});
		e.preventDefault();
		const data = {
			type, formTitle, purpose, date, professional, time, description
		};

		const { isValid, errors } = createAppointmentValidator(data);
		if (!isValid) {
			return setErrors(errors);
		}

		const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

		const timeString = `${time.getHours()}:${time.getMinutes()}`;
		const payload = {
			title: formTitle, purpose, description, date: dateString, time: timeString, type,
		};

		if (professional) payload.professional = professional;

		addNewAppointment(payload);
		toggleModal();
	};

	return (
		<Wrapper>
			<Modal
				show={show}
				handleClose={toggleModal}
				position="modal-right"
				heading={<span> Create Appointment</span>}
				info='Create an Inbody or a meal planning
					appointment.'
			>
				<Grid container spacing={3} className="appoint-body">
					<Grid item xs={12}>
						<TextInput
							label="Appointment Title"
							value={formTitle}
							onChange={setTitle}
							error={errors.formTitle}
						/>
					</Grid>
					<Grid item xs={12}>
						<SelectInput
							label="Purpose"
							options={purposeOptions[type]}
							value={purpose}
							onChange={setPurpose}
							error={errors.purpose}
						/>
					</Grid>
					<Grid item xs={12}>
						<DateInput
							label="Date"
							value={date}
							onChange={setDate}
							error={errors.date}
						/>
					</Grid>
					{
						type === 'PROFESSIONAL' &&
						<SelectInput
							label="Select Nutritionist"
							options={optionNutritionist}
							value={professional}
							onChange={setProfessional}
							error={errors.professional}
						/>
					}
					<Grid item xs={12}>
						<TimeInput
							label="Propose a time (the time is subject to review)"
							value={time}
							onDateChange={setTime}
							error={errors.time}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextArea
							label="Description" placeholder="Give a short description on what you need..."
							value={description}
							onChange={setDescription}
							error={errors.description}
						/>
					</Grid>
				</Grid>

				<div className="bottom">
					<Grid item xs={12} id="mb">
						<Button
							theme="darkGreen"
							text="Create Appointment"
							onClick={onFormSubmit}
						/>
					</Grid>
				</div>
			</Modal>

			<div onClick={toggleModal} id="trigger">
				<Paper className={`uglyCard flex ${cardTheme}`} >
					<div className="text">
						<h1 className="title">{title}</h1>
						<p className="details">{details}</p>
					</div>

					<img src={icon} alt="icon" />

				</Paper>
			</div>
		</Wrapper>
	);
};

CreateAppointmentModal.propTypes = {
	optionPurpose: PropTypes.array.isRequired,
	Purpose: PropTypes.string.isRequired,
	Nutritionist: PropTypes.string,
	title: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	cardTheme: PropTypes.string.isRequired,
	details: PropTypes.string.isRequired,
	addNewAppointment: PropTypes.func.isRequired,
};

export default connect(null, {addNewAppointment})(CreateAppointmentModal);
