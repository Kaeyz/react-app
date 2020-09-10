import styled from 'styled-components';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import Button from '../../common/Button';
import { registerIndividual } from '../../../store/actions/userActions';
import AuthFormLayout from './AuthFormLayout';
import {
	TextInput,
	SelectInput,
	DateInput,
	PasswordInput,
} from '../../common/inputs';
import PropTypes from 'prop-types';
import { onBoardIndividualValidator } from '../validation';
import {NumberInput} from '../../common/inputs/NumberInput';
import TextFieldDisabled from '../../common/inputs/TextFieldDIsabled';

const Wrapper = styled.div`
	.submit{
		padding-top: 4rem;
		.button{
			width: 100% !important;
		}
	}
`;
const textInput = {
	placeholder: 'Type here...',
};

const optionGender = [
	{ value: 'SELECT HERE', text: 'Select here' },
	{ value: 'MALE', text: 'Male' },
	{ value: 'FEMALE', text: 'Female' },
];
const optionActivity = [
	{ value: 'SELECT HERE', text: 'Select here' },
	{ value: 'HIGH', text: 'High' },
	{ value: 'MEDIUM', text: 'Medium' },
	{ value: 'VERYACTIVE', text: 'Very Active' },
	{ value: 'SOMEWHATACTIVE', text: 'Some What Active' },
	{ value: 'LOWACTIVITY', text: 'Low Activity' },
];

const IndividualSignUpForm = ({ history, registerIndividual }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [gender, setGender] = useState('SELECT HERE');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [activity, setActivityLevel] = useState('SELECT HERE');
	const [weight,setWeight] = React.useState('');
	const [height,setHeight] = React.useState('');
	const [dob, setDob] = useState(new Date());
	const [errors, setErrors] = useState({});

	const onFormSubmit = (event) => {
		event.preventDefault();
		setErrors({});
		const data = {
			firstName,
			lastName,
			email,
			gender,
			height,
			password,
			activity,
			weight,
			dob,
			password2,
		};
		const { errors, isValid } = onBoardIndividualValidator(data);
		if (!isValid) {
			return setErrors(errors);
		}

		const user = {
			firstName,
			lastName,
			email,
			password,
			activity,
			dob,
			gender,
			height: Number(height),
			weight: Number(weight),
		};
		registerIndividual(user, history);
	};
	return (
		<Wrapper>
			<AuthFormLayout
				title="Create an Account"
				description="Inspiring wholesome harmony for the mind, body and spirit, for everyone, everywhere."
			>
				<form noValidate autoComplete="off">
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6}>
							<TextInput
								placeholder={textInput.placeholder}
								label="First name"
								value={firstName}
								onChange={setFirstName}
								error={errors.firstName}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextInput
								placeholder={textInput.placeholder}
								label="Last name"
								value={lastName}
								onChange={setLastName}
								error={errors.lastName}
							/>
						</Grid>

						<Grid item xs={12}>
							<TextInput
								placeholder={textInput.placeholder}
								label="E-mail Address"
								value={email}
								type="email"
								onChange={setEmail}
								error={errors.email}
							/>
						</Grid>

						<Grid item xs={12} sm={6}>
							<SelectInput
								label="Gender"
								options={optionGender}
								value={gender}
								onChange={setGender}
								error={errors.gender}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<DateInput
								label="Date of Birth"
								value={dob}
								onChange={setDob}
								error={errors.dob}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<NumberInput
								label="Weight (KG)"
								// options={optionWeight}
								value={weight}
								placeholder='Enter Weight'
								onChange={setWeight}
								error={errors.weight}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<NumberInput
								label="Height (CM)"
								// options={optionHeight}
								value={height}
								placeholder='Enter height here.. '
								onChange={setHeight}
								error={errors.height}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<SelectInput
								label="Activity Level"
								options={optionActivity}
								value={activity}
								onChange={setActivityLevel}
								error={errors.activity}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextFieldDisabled label="Company" value='Dualingo'/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<PasswordInput
								label="Password"
								value={password}
								onChange={setPassword}
								error={errors.password}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<PasswordInput
								label="Re-enter Password"
								value={password2}
								onChange={setPassword2}
								error={errors.password2}
							/>
						</Grid>
					</Grid>
					<div className="submit">
						<Button
							value="Sign Up"
							type="submit"
							theme="darkGreenBtn"
							onClick={onFormSubmit}
							style={{ width: '100%' }}
						>
Register					</Button>
					</div>
				</form>
			</AuthFormLayout>
		</Wrapper>
	);
};

IndividualSignUpForm.propTypes = {
	history: PropTypes.object.isRequired,
	registerIndividual: PropTypes.func.isRequired,
};

export default connect(null, { registerIndividual })(IndividualSignUpForm);
