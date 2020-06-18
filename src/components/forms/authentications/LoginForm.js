import React, { useState } from 'react';
import AuthFormLayout from './AuthFormLayout';
import { TextInput, SelectInput, PasswordInput } from '../../common/inputs';
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

function LoginForm() {
	const [name, setName] = useState('');
	return (
		<Wrapper>
			<AuthFormLayout
				title="Log in to your Account"
				description="Inspiring wholesome harmony for the mind, body and spirit, for everyone, everywhere."
				showFormAgreement={false}
			>
				<div>


					<Grid container>
						<Grid item xs={12} sm={12}>
							<TextInput
								label="Enter your email address"
								value= {name}
								onChange={setName}
								placeholder="Type here..."
							/>
						</Grid>
					</Grid>

					<Grid container>
						<Grid item xs={12} sm={12}>
							<PasswordInput
								label="Enter Password"
								value= {name}
								onChange={setName}
								options={[{value:'', text: 'Select here'}]}
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

					<div className="submit">
						<Button theme="yellow" style={{width: '100%'}}>Login</Button>
					</div>
				</div>
			</AuthFormLayout>
		</Wrapper>
	);
}

//LoginForm.propTypes = {}

export default LoginForm;

