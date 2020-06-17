import React, { useState } from 'react';
import AuthFormLayout from './AuthFormLayout';
import { TextInput, SelectInput } from '../../common/inputs';
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

function CompanySignUpForm() {
	const [name, setName] = useState('');


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
								value= {name}
								onChange={setName}
								placeholder="Type here..."
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextInput
								label="Last Name of Representative"
								value= {name}
								onChange={setName}
								placeholder="Type here..."
							/>
						</Grid>
					</Grid>

					<Grid container>
						<Grid item xs={12} sm={12}>
							<TextInput
								label="Last Name of Representative"
								value= {name}
								onChange={setName}
								placeholder="Type here..."
							/>
						</Grid>
					</Grid>

					<Grid container>
						<Grid item xs={12} sm={12}>
							<TextInput
								label="Your company designated email"
								value= {name}
								onChange={setName}
								placeholder="Type here..."
							/>
						</Grid>
					</Grid>

					<Grid container spacing={2} justify="space-between">
						<Grid item xs={12} sm={6}>
							<SelectInput
								label="Job Title of Representative"
								value= {name}
								onChange={setName}
								options={[{value:'', text: 'Select here'}]}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<SelectInput
								label="Organization size"
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

//CompanySignUpForm.propTypes = {}

export default CompanySignUpForm;

