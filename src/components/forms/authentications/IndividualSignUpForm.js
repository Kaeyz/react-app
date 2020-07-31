// eslint-disable-next-line
import React, { useState } from "react";
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
import NumberWithUnit from '../../common/inputs/NumberWithUnit';
const textInput = {
	placeholder: 'Type here...',
};

const optionGender = [
	{ value: 'MALE', text: 'Male' },
	{ value: 'FEMALE', text: 'Female' },
];
const optionActivity = [
	{ value: 'HIGH', text: 'High' },
	{ value: 'MEDIUM', text: 'Medium' },
	{ value: 'VERYACTIVE', text: 'Very Active' },
	{ value: 'SOMEWHATACTIVE', text: 'Some What Active' },
	{ value: 'LOWACTIVITY', text: 'Low Activity' },
];

const optionWeight = [
	{
		value: 'Kilogram',
		label: 'in KG',
	},
	{
		value: 'Pound',
		label: 'in Lb',
	},
	{
		value: 'Gram',
		label: 'in g',
	},
	{
		value: 'Ounces',
		label: 'in Oz',
	},
];

const optionHeight = [
	{
		value: 'Feet',
		label: 'in Ft',
	},
	{
		value: 'Centimeter',
		label: 'in Cm',
	},
	{
		value: 'Inches',
		label: 'in In',
	},
];
const IndividualSignUpForm = ({ history, registerIndividual }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [gender, setGender] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [activity, setActivityLevel] = useState('');
	const [weight,setWeight] = React.useState('Kilogram');
	const [height,setHeight] = React.useState('Feet');
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
		<AuthFormLayout
			title="Create an Account"
			description="Inspiring wholesome harmony for the mind, body and spirit, for everyone, everywhere."
		>
			<form noValidate autoComplete="off">
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextInput
							placeholder={textInput.placeholder}
							label="Enter your first name"
							value={firstName}
							onChange={setFirstName}
							error={errors.firstName}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextInput
							placeholder={textInput.placeholder}
							label="Enter your last name"
							value={lastName}
							onChange={setLastName}
							error={errors.lastName}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextInput
							placeholder={textInput.placeholder}
							label="Enter your email"
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
						<NumberWithUnit
							label="Weight"
							options={optionWeight}
							value={weight}
							onChange={setWeight}
							error={errors.weight}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<NumberWithUnit
							label="Height"
							options={optionHeight}
							value={height}
							onChange={setHeight}
							error={errors.height}
						/>
					</Grid>
					<Grid item xs={12}>
						<SelectInput
							label="Activity Level"
							options={optionActivity}
							value={activity}
							onChange={setActivityLevel}
							error={errors.activity}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<PasswordInput
							label="Enter your password"
							value={password}
							onChange={setPassword}
							error={errors.password}
						/>
						<p
							style={{
								fontSize: '1.2rem',
								lineHeight: '1.6rem',
								fontFamily: 'Futura',
								marginTop: '13px',
							}}
						>
              Your password needs to be at least 8 characters long.
						</p>
					</Grid>
					<Grid item xs={12} sm={6}>
						<PasswordInput
							label="Re-enter your password"
							value={password2}
							onChange={setPassword2}
							error={errors.password2}
						/>
					</Grid>
					<Grid item xs={12}></Grid>
				</Grid>
				<div className="submit">
					<Button
						value="Sign Up"
						type="submit"
						theme="yellow"
						onClick={onFormSubmit}
						style={{ width: '100%' }}
					>
            SIGN UP
					</Button>
				</div>
			</form>
		</AuthFormLayout>
	);
};

IndividualSignUpForm.propTypes = {
	history: PropTypes.object.isRequired,
	registerIndividual: PropTypes.func.isRequired,
};

export default connect(null, { registerIndividual })(IndividualSignUpForm);
