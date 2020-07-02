import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextInput, SelectInput } from '../../../components/common/inputs';
import Button from '../../common/Button';
import { Grid } from '@material-ui/core';
import { forgotPassword } from '../../../store/actions/userActions';
import { forgotPasswordValidator } from '../validation';

const Wrapper = styled.div``;

function ForgotPasswordForm({forgotPassword, history}) {
	const [email, setEmail] = React.useState('');
	const [accountType, setAccountType] = React.useState('');
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
			<Grid container>
				<Grid item xs={12} sm={12}>
					<TextInput
						label="Enter your email address"
						value={email}
						type="email"
						onChange={setEmail}
						placeholder="Type here..."
						error={errors.email}
					/>
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={12} sm={12}>
					<SelectInput
						label="Account Type"
						value= {accountType}
						onChange={setAccountType}
						options={[{ value: '', text: 'Select here' }]}
					/>
				</Grid>
			</Grid>
			<div className="submit">
				<Button
					onClick={onFormSubmit}
					theme="darkGreen"
					style={{ width: '100%' }}
				>
					SEND RESET LINK
				</Button>
			</div>
		</Wrapper>
	);
}

ForgotPasswordForm.propTypes = {
	forgotPassword: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired
};


export default connect(null, {forgotPassword})(ForgotPasswordForm);
