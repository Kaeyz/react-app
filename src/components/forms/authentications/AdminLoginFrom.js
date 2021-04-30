
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { loginUser } from '../../../store/actions/userActions';
import Button from '../../common/Button';
import { PasswordInput, TextInput } from '../../common/inputs';
import { loginValidator } from '../validation';

const Wrapper = styled.div`
	.forgot {
		/* font-family: Sofia; */
		line-height: 1.4rem;
		letter-spacing: 0.2px;
		padding: 2rem 0;
		text-align: right;
		color: ${(props) => props.theme.color.brand_02};
	}
`;

function AdminLoginFrom({ history, loginUser }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});

	const onFormSubmit = (event) => {
		event.preventDefault();
		setErrors({});
		const user = { email, password };
		const { isValid, errors } = loginValidator(user);

		if (!isValid) {
			return setErrors(errors);
		}

		loginUser(user, history);
	};

	return (
		<Wrapper>
			<Grid container>
				<Grid item xs={12} sm={12}>
					<TextInput
						label="Username"
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
					<PasswordInput
						label="Password"
						value={password}
						onChange={setPassword}
						error={errors.password}
					/>
				</Grid>
			</Grid>
			<div className="submit">
				<Button
					onClick={onFormSubmit}
					theme="darkGreen"
					style={{ width: '100%' }}
				>
					Log in
				</Button>
			</div>
			<Link to="/forgot_password">
				{' '}
				<p className="forgot">Forgot Password?</p>
			</Link>
		</Wrapper>
	);
}

AdminLoginFrom.propTypes = {
	history: PropTypes.object.isRequired,
	loginUser: PropTypes.func.isRequired,
};

export default connect(null, { loginUser })(AdminLoginFrom);
