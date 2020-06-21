// eslint-disable-next-line
import React, { useState } from "react";
import AuthFormLayout from './AuthFormLayout';
import { TextInput, SelectInput, DateInput, PasswordInput} from '../../common/inputs';
import { Grid } from '@material-ui/core';
import Button from '../../common/Button';
//import PropTypes from 'prop-types'

const textInput = {
	placeholder: 'Type here...',
};

const optionGender = [
	{ value: 'Male', text: 'Male' },
	{ value: 'Female', text: 'Female' },
];
const optionWeight = [
	{ value: '50', text: '50' },
	{ value: '70', text: '70' },
];
const optionHeight = [
	{ value: '102', text: '102' },
	{ value: '33', text: '33' },
];
const optionActivity = [
	{ value: 'Basic', text: 'Basic' },
	{ value: 'Intermediate', text: 'Intermediate' },
	{ value: 'Advanced', text: 'Advanced' },
];


function IndividualSignUpForm() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [gender, setGender] = useState('');
	const [height, setHeight] = useState('');
	const [password, setPassword] = useState('');
	const [activityLevel, setActivityLevel] = useState('');
	const [weight, setWeight] = useState('');
	const [date, setDate] = useState(new Date());


	return (
		<AuthFormLayout
			title="Create an Account"
			description="Inspiring wholesome harmony for the mind, body and spirit, for everyone, everywhere."
		>
			<form  noValidate autoComplete="off">
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextInput
							placeholder={textInput.placeholder}
							label="Enter your first name"
							value={firstName}
							onChange={setFirstName}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextInput
							placeholder={textInput.placeholder}
							label="Enter your last name"
							value={lastName}
							onChange={setLastName}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextInput
							placeholder={textInput.placeholder}
							label="Enter your email"
							value={email}
							onChange={setEmail}
						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<SelectInput
							label="Gender"
							options={optionGender}
							value={gender}
							onChange={setGender}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<DateInput
							label="Date of Birth"
							value={date}
							onChange={setDate}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<SelectInput
							label="Weight"
							options={optionWeight}
							value={weight}
							onChange={setWeight}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<SelectInput
							label="Height"
							options={optionHeight}
							value={height}
							onChange={setHeight}
						/>
					</Grid>
					<Grid item xs={12}>
						<SelectInput
							label="Activity Level"
							options={optionActivity}
							value={activityLevel}
							onChange={setActivityLevel}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<PasswordInput
							label="Enter your password"
							value={password}
							onChange={setPassword}
						/>
						<p style={{ fontSize: '1.2rem', lineHeight: '1.6rem', fontFamily:'Futura', marginTop:'13px' }}>
              Your password needs to be at least 8 characters long.
						</p>
					</Grid>
					<Grid item xs={12} sm={6}>
						<PasswordInput label="Re-enter your password" />
					</Grid>
					<Grid item xs={12}></Grid>
				</Grid>
				<div className="submit">
					<Button
						value="Sign Up"
						type="submit"
						theme="yellow"
						style={{ width: '100%' }}
					>
            SIGN UP
					</Button>{' '}
				</div>
			</form>
		</AuthFormLayout>
	);
}

//IndividualSignUpForm.propTypes = {}

export default IndividualSignUpForm;
