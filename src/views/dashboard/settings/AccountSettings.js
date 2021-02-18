/* eslint-disable no-console */
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from '../../../components/common/Button';
import {
	DateInput,
	NumberInput, SelectInput, TextInput
} from '../../../components/common/inputs';
import SideBar from '../../../components/layouts/dashboardLayout/settingsSidebar/Sidebar';
import { updateUser } from '../../../store/actions/userActions';


const Wrapper = styled.div`
	margin-top: 1.5rem;
	.settings-body-main {
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			display: none;
		}
	}
	p {
		padding-bottom: 1.3px;
	}
	.submit {
		.button {
			@media screen and (max-width: ${(props) =>
		props.theme.breakpoint.sm}) {
				width: 100% !important;
			}
		}
	}
`;
const textInput = {
	placeholder: 'Type here...',
};

const optionGender = [
	{ value: '', text: 'Select here' },
	{ value: 'MALE', text: 'Male' },
	{ value: 'FEMALE', text: 'Female' },
];
const optionActivity = [
	{ value: 'SELECT HERE', text: 'Select here' },
	{ value: 'LOWACTIVITY', text: 'Almost no physical activity' },
	{ value: 'SOMEWHATACTIVE', text: 'I often go for a walk' },
	{ value: 'MEDIUM', text: 'I exercise 1-2 times a week' },
	{ value: 'HIGH', text: 'I exercise 3-5 times a week' },
	{ value: 'VERYACTIVE', text: 'I exercise 5-7 times a week' },
];

const AccountSettings = ({ user, updateUser }) => {
	console.log(user);
	const names = user && user.name.split(' ');
	const [firstName, setFirstName] = useState(names[0]);
	const [lastName, setLastName] = useState(names[1]);
	const [gender, setGender] = useState(user.gender);
	const [activity, setActivityLevel] = useState(user.activity);
	const [weight, setWeight] = React.useState(user.weight);
	const [height, setHeight] = React.useState(user.height);
	const [dob, setDob] = useState(user.dob);
	const [companyName, setCompanyName] = useState(user.companyName);
	const [address, setAddress] = useState(user.address);
	const [errors] = React.useState({});


	const CompanyInformation = () => {
		return (
			<>
				<div
					className="settings-body-main"
					style={{ paddingTop: '20px' }}
				>
					<h1 className="text">Company Information</h1>
					<p>
						This section contains general information about the
						company.
					</p>
				</div>
				<form noValidate autoComplete="off">
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6}>
							<TextInput
								placeholder={textInput.placeholder}
								label="Enter your company name"
								value={companyName || 'no value'}
								onChange={setCompanyName}
								error={errors.companyName}
								readonly
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextInput
								placeholder={textInput.placeholder}
								label="Enter your company address"
								value={address || 'no value'}
								onChange={setAddress}
								error={errors.address}
								readonly
							/>
						</Grid>

						<Grid item xs={12} sm={6}>
							<TextInput
								placeholder={textInput.placeholder}
								label="Company size"
								value={user.companySize || 'no value'}
								// onChange={setAddress}
								// error={errors.address}
								readonly
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextInput
								placeholder={textInput.placeholder}
								label="Company url"
								value={user.companyUrl || 'no value'}
								// onChange={setAddress}
								// error={errors.address}
								readonly
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextInput
								placeholder={textInput.placeholder}
								label="Employee Limit"
								value={user.employeeLimit || 'no value'}
								// onChange={setAddress}
								// error={errors.address}
								readonly
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextInput
								placeholder={textInput.placeholder}
								label="Representative Email"
								value={user.representativeEmail || 'no value'}
								// onChange={setAddress}
								// error={errors.address}
								readonly
							/>
						</Grid>
						<Grid item xs={12}>
							<TextInput
								placeholder={textInput.placeholder}
								label="Company email"
								value={user.email || 'no value'}
								// onChange={setAddress}
								// error={errors.address}
								readonly
							/>
						</Grid>
					</Grid>
					{/* <div className="submit">
						<Button
							value="save changes"
							type="submit"
							theme="darkGreen"
							onClick={onFormSubmit}
						>
							Save Changes
						</Button>
					</div> */}
				</form>
			</>
		);
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		const data = {
			firstName,
			lastName,
			gender,
			activity,
			weight: Number(weight),
			height: Number(height),
			dob,
			company: user.company,
		};
		updateUser(data);
	};

	return (
		<SideBar>
			<Wrapper>
				<div className="settings-body-main">
					<h1 className="text">General Information</h1>
					<p>
						This section contains general information about yourself.
					</p>
				</div>
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
								textHelper="dd/mm/yyyy"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<NumberInput
								label="Weight (KG)"
								// options={optionWeight}
								value={weight}
								placeholder="Enter Weight"
								onChange={setWeight}
								error={errors.weight}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<NumberInput
								label="Height (CM)"
								// options={optionHeight}
								value={height}
								placeholder="Enter height here.. "
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
					</Grid>
					<div className="submit">
						<Button
							value="save changes"
							type="submit"
							theme="darkGreen"
							onClick={onFormSubmit}
						>
							Save Changes
						</Button>
					</div>
				</form>
				{	user.type === 'COMPANY' && <CompanyInformation />}
			</Wrapper>
		</SideBar>
	);
};

AccountSettings.propTypes = {
	user: PropTypes.object.isRequired,
	updateUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	const user = state.user.user;
	return { user };
};

export default connect(mapStateToProps, { updateUser })(AccountSettings);
