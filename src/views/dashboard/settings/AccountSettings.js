import React, { useState } from 'react';
import SideBar from '../../../components/layouts/dashboardLayout/settingsSidebar/Sidebar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { TextInput, SelectInput, DateInput, NumberInput } from '../../../components/common/inputs';
import Button from '../../../components/common/Button';
import { updateUser } from '../../../store/actions/userActions';


const Wrapper = styled.div`
margin-top:1.5rem;
.settings-body-main{
	@media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
	display:none;
}
  }
    p{
        padding-bottom: 1.3px
    }
}
.submit{
	.button{
		@media screen and ( max-width: ${props => props.theme.breakpoint.sm}) {
			width:100% !important;	}
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
	const names = user && user.name.split(' ');
	const [firstName, setFirstName] = useState(names[0]);
	const [lastName, setLastName] = useState(names[1]);
	const [gender, setGender] = useState(user.gender);
	const [activity, setActivityLevel] = useState(user.activity);
	const [weight,setWeight] = React.useState(user.weight);
	const [height,setHeight] = React.useState(user.height);
	const [dob, setDob] = useState(user.dob);
	const [errors] = React.useState({});

	const onFormSubmit = (event) => {
		event.preventDefault();
		const data = {
			firstName, lastName, gender, activity, weight: Number(weight), height: Number(height), dob, company: user.company
		};
		updateUser(data);
	};


	return (
		<SideBar>
			<Wrapper>
				<div className="settings-body-main">
					<h1 className='text'>General Information</h1>
					<p>This section contains general informaton about yourself.</p>
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

			</Wrapper>

		</SideBar>
	);
};

AccountSettings.propTypes = {
	user: PropTypes.object.isRequired,
	updateUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	const user = state.user.user;
	return { user };
};

export default connect(mapStateToProps, {updateUser})(AccountSettings);
