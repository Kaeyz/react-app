import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerCompany } from '../../../store/actions/userActions';
import AuthFormLayout from './AuthFormLayout';
import { TextInput, SelectInput } from '../../common/inputs';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import Button from '../../common/Button';
import { onBoardCompanyValidator } from '../validation';


const Wrapper = styled.div`
	.submit {
		margin-top: 1.6rem;
		display: flex;
		justify-content: center;
	}
`;


function CompanySignUpForm({history, registerCompany}) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [organizationName, setOrganizationName] = useState('');
	const [organizationEmail, setOrganizationEmail] = useState('');
	const [jobTitle, setJobTitle] = useState('');
	const [organizationSize, setOrganizationSize] = useState('');
	const [errors, setErrors] = useState({});

	const sizeOptions = [
		{ value: '50', text: '50' },
		{ value: '70', text: '70' },
	];

	const jobOptions = [
		{ value: 'HIGH', text: 'Hight' },
		{ value: 'MEDIUM', text: 'Medium' },
		{ value: 'VERYACTIVE', text: 'Very Active' },
		{ value: 'SOMEWHATACTIVE', text: 'Some What Active' },
		{ value: 'LOWACTIVITY', text: 'Low Activity' },
	];

	const onFormSubmit = () => {
		setErrors({});
		const data = { firstName, lastName, organizationName, organizationEmail, organizationSize, jobTitle };
		const { isValid, errors } = onBoardCompanyValidator(data);
		if (!isValid) {
			return	setErrors(errors);
		}
		const company = { firstName, lastName, organizationName, organizationEmail, jobTitle, organizationSize: Number(organizationSize) };
		registerCompany(company, history);
	};

	return (
		<Wrapper>

			<AuthFormLayout
				title="Company Registration"
				description="Inspiring wholesome harmony for the mind, body and spirit, for everyone, everywhere."
			>
				<div>

					<Grid container spacing={2} justify="space-between">
						<Grid item xs={12} sm={6}>
							<TextInput
								label="First Name of Representative"
								value= {firstName}
								onChange={setFirstName}
								placeholder="Type here..."
								error={errors.firstName}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextInput
								label="Last Name of Representative"
								value= {lastName}
								onChange={setLastName}
								placeholder="Type here..."
								error={errors.lastName}
							/>
						</Grid>
					</Grid>

					<Grid container>
						<Grid item xs={12} sm={12}>
							<TextInput
								label="Organization Name"
								value= {organizationName}
								onChange={setOrganizationName}
								placeholder="Type here..."
								error={errors.organizationName}
							/>
						</Grid>
					</Grid>

					<Grid container>
						<Grid item xs={12} sm={12}>
							<TextInput
								label="Your company designated email"
								value= {organizationEmail}
								onChange={setOrganizationEmail}
								placeholder="Type here..."
								error={errors.organizationEmail}
							/>
						</Grid>
					</Grid>

					<Grid container spacing={2} justify="space-between">
						<Grid item xs={12} sm={6}>
							<SelectInput
								label="Job Title of Representative"
								value= {jobTitle}
								onChange={setJobTitle}
								options={jobOptions}
								error={errors.jobTitle}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<SelectInput
								label="Organization size"
								value= {organizationSize}
								onChange={setOrganizationSize}
								options={sizeOptions}
								error={errors.organizationSize}
							/>
						</Grid>

					</Grid>
					<div className="submit">
						<Button theme="yellow" onClick={onFormSubmit} style={{width: '100%'}}>Register</Button>
					</div>

				</div>
			</AuthFormLayout>
		</Wrapper>
	);
}

CompanySignUpForm.propTypes = {
	history: PropTypes.object.isRequired,
	registerCompany: PropTypes.func.isRequired
};

export default connect(null, {registerCompany})(CompanySignUpForm);
