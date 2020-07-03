import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import { resetPasswordValidator } from '../validation';
import { resetPassword } from '../../../store/actions/userActions';

import { Grid } from '@material-ui/core';
import Button from '../../common/Button';
import { PasswordInput } from '../../../components/common/inputs';

const Wrapper = styled.div``;

function ResetPasswordForm({ resetToken, resetPassword, history }) {
	const [token, setToken] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errors, setErrors] = useState({});

	useEffect(() => {
		setToken(resetToken);
	}, [resetToken, setToken]);

	const onFormSubmit = (event) => {
		event.preventDefault();
		setErrors({});
		const inputs = {password, confirmPassword };
		const { isValid, errors } = resetPasswordValidator(inputs);
		if (!isValid) {
			return setErrors(errors);
		}

		const resetData = {resetToken: token, ...inputs };
		resetPassword(resetData, history);
	};

	return (
		<Wrapper>
			<Grid container>
				<Grid item xs={12} sm={12}>
					<PasswordInput
						label="Enter your password"
						value= {password}
						onChange={setPassword}
						error={errors.password}
					/>
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={12} sm={12}>
					<PasswordInput
						label="Confirm your password"
						value= {confirmPassword}
						onChange={setConfirmPassword}
						error={errors.confirmPassword}
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

ResetPasswordForm.propTypes = {
	resetToken: PropTypes.string.isRequired,
	history: PropTypes.object.isRequired,
	resetPassword: PropTypes.func.isRequired
};

export default connect(null, {resetPassword})(ResetPasswordForm);

