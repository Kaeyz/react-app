import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { TextInput, PasswordInput } from '../../common/inputs';
import Button from '../../common/Button';
import { loginValidator } from '../validation';
import { loginUser } from '../../../store/actions/userActions';

const Wrapper = styled.div``;

function AdminLoginFrom({history, loginUser}) {
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
						label="Enter your email"
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
						label="Enter your Password"
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
					LOGIN
				</Button>
			</div>
		</Wrapper>
	);
}

AdminLoginFrom.propTypes = {
	history: PropTypes.object.isRequired,
	loginUser: PropTypes.func.isRequired
};

export default connect(null, {loginUser})(AdminLoginFrom);

