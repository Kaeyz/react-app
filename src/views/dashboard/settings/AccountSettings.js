import React, { useState } from 'react';
import SideBar from '../../../components/layouts/dashboardLayout/settingsSidebar/Sidebar';

import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import {
	TextInput,
	SelectInput,
	DateInput,
	NumberInput,
} from '../../../components/common/inputs';
import Button from '../../../components/common/Button';
const Wrapper = styled.div`
.settings-body-main{
    p{
        padding-bottom: 1.3px
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

const AccountSettings = () => {

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [gender, setGender] = useState('SELECT HERE');
	const [activity, setActivityLevel] = useState('SELECT HERE');
	const [weight,setWeight] = React.useState('');
	const [height,setHeight] = React.useState('');
	const [dob, setDob] = useState(new Date('07/08/2020'));
	const [errors] = useState({});

	return (
		<SideBar>
			<Wrapper>
				<div className="settings-body-main">
					<h1 className='text'>General Information</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
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
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<NumberInput
								label="Weight"
								// options={optionWeight}
								value={weight}
								placeholder='Enter Weight'
								onChange={setWeight}
								error={errors.weight}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<NumberInput
								label="Height"
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
						>
            Save Changes
						</Button>
					</div>
				</form>

			</Wrapper>

		</SideBar>
	);
};

export default AccountSettings;
