import React, { useState } from 'react';
import AuthFormLayout from './AuthFormLayout';
import { TextInput, SelectInput, DateInput, PasswordInput } from '../../common/inputs';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import Button from '../../common/Button';
//import PropTypes from 'prop-types'

const Wrapper = styled.div`
	.submit {
		margin-top: 1.6rem;
		display: flex;
		justify-content: center;
	}
`;


function IndividualSignUpForm() {
	const [name, setName] = useState('');
	const [dob, setDob] = useState(new Date());
	return (
		<Wrapper>

			<AuthFormLayout
				title="Create an Account"
				description="Inspiring wholesome harmony for the mind, body and spirit, for everyone, everywhere."
			>
				<div>

					<Grid container spacing={2} justify="space-between">
						<Grid item xs={12} sm={6}>
							<TextInput
								label="Enter your first name"
								value= {name}
								onChange={setName}
								placeholder="Type here..."
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextInput
								label="Enter your last name"
								value= {name}
								onChange={setName}
								placeholder="Type here..."
							/>
						</Grid>
					</Grid>

					<Grid container spacing={2} justify="space-between">
						<Grid item xs={12} sm={6}>
							<SelectInput
								label="Gender"
								value= {name}
								onChange={setName}
								options={[{value:'', text: 'Select here'}]}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<DateInput
								label="Date of Birth"
								value= {dob}
								onChange={setDob}
								placeholder="Type here..."
							/>
						</Grid>
					</Grid>

					<Grid container spacing={2} justify="space-between">
						<Grid item xs={12} sm={6}>
							<TextInput
								label="Weight"
								value= {name}
								onChange={setName}
								placeholder="Type here..."
								inputAdornment="in Kg"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextInput
								label="Height"
								value= {name}
								onChange={setName}
								placeholder="Type here..."
								inputAdornment="in cm"
							/>
						</Grid>
					</Grid>

					<Grid container>
						<Grid item xs={12} sm={12}>
							<SelectInput
								label="Activity Level"
								value= {name}
								onChange={setName}
								options={[{value:'', text: 'Select here'}]}
							/>
						</Grid>
					</Grid>

					<Grid container spacing={2} justify="space-between">
						<Grid item xs={12} sm={6}>
							<PasswordInput
								label="Enter Password"
								value= {name}
								onChange={setName}
								options={[{value:'', text: 'Select here'}]}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<PasswordInput
								label="Re-enter your Password"
								value= {name}
								onChange={setName}
								options={[{value:'', text: 'Select here'}]}
							/>
						</Grid>

					</Grid>
					<div className="submit">
						<Button theme="yellow" style={{width: '100%'}}>Register</Button>
					</div>
				</div>
			</AuthFormLayout>
		</Wrapper>
	);
}

//IndividualSignUpForm.propTypes = {}

export default IndividualSignUpForm;

