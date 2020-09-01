import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextInput } from '../../../components/common/inputs';
import Button from '../../common/Button';
import { Grid } from '@material-ui/core';
import { forgotPassword } from '../../../store/actions/userActions';
import { forgotPasswordValidator } from '../validation';
import AuthFormLayout from './AuthFormLayout';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
.submit{
	margin-top: 3rem;
	.button{
		width: 100% !important;
			}
}
	.info{
		font-family: Sofia;
font-size: 1.4rem;
line-height: 2.5rem;
color: ${props => props.theme.color.ui_13};
padding-top: 3rem;
span{
	a{
		color: ${props => props.theme.color.brand_02};
	text-decoration: underline;
	font-weight: bold;
	}
}
	}
`;

function ForgotPasswordForm({forgotPassword, history}) {
	const [email, setEmail] = React.useState('');
	const [errors, setErrors] = React.useState({});

	const onFormSubmit = (event) => {
		event.preventDefault();
		setErrors({});
		const { isValid, errors } = forgotPasswordValidator({ email });
		if (!isValid) {
			return setErrors(errors);
		}
		forgotPassword(email, history);
	};

	return (
		<Wrapper>
			<AuthFormLayout show ='none'>
				<Grid container>
					<Grid item xs={12} sm={12}>
						<TextInput
							label="E-mail address"
							value={email}
							type="email"
							onChange={setEmail}
							placeholder="Type here..."
							error={errors.email}
						/>
					</Grid>
				</Grid>

				<div className="submit">
					<Button
						onClick={onFormSubmit}
						theme="darkGreen"
					>
Send Reset Link				</Button>
				</div>
			</AuthFormLayout>
			<p className="info">Remembered your password?<span> <Link to ='/login'>Sign In</Link></span>  </p>
		</Wrapper>
	);
}

ForgotPasswordForm.propTypes = {
	forgotPassword: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired
};


export default connect(null, {forgotPassword})(ForgotPasswordForm);
