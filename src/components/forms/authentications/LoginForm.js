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
import AuthFormLayout from './AuthFormLayout';

const Wrapper = styled.div`
  .submit {
    margin-top: 1.6rem;
    display: flex;
    justify-content: center;
    .button {
      width: 100% !important;
    }
  }
  .forgot {
    margin-top: 1rem;
    display: grid;
  }
  .forgot_link {
    text-decoration: none;
    color: inherit;
  }
  .link_text {
    /* font-family: Sofia; */
    color: ${(props) => props.theme.color.brand_02};
    letter-spacing: 0.2px;
    padding: 1rem 0 1.4rem 0;
  }
  .join-us {
    justify-content: start;
    display: flex;
    padding-top: 2.4rem;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      justify-content: center;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      display: block;
      text-align: center;
    }
    p {
      /* font-family: Sofia; */
      line-height: 2.5rem;
      color: ${(props) => props.theme.color.ui_13};
    }
    .link {
      color: ${(props) => props.theme.color.brand_02};
      font-weight: bold;
      padding-left: 0.5rem;
      text-decoration: underline;
      @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
        padding-left: 0rem;
      }
    }
  }
  .link:hover {
    color: ${(props) => props.theme.color.ui_13};
    transition: 0.4s;
  }
`;

function LoginForm({ history, loginUser }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [accountType] = useState('');
	const [errors, setErrors] = useState({});

	const onFormSubmit = (event) => {
		event.preventDefault();
		setErrors({});
		const user = { email, password, accountType };
		const { isValid, errors } = loginValidator(user);

		if (!isValid) {
			return setErrors(errors);
		}

		loginUser(user, history);
	};

	return (
		<Wrapper>
			<AuthFormLayout showFormAgreement={false}>
				<div>
					<Grid container>
						<Grid item xs={12} sm={12}>
							<TextInput
								label="E-mail Address"
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
								options={[{ value: '', text: 'Select here' }]}
								error={errors.password}
							/>
						</Grid>
					</Grid>
					<div className="forgot">
						<Link className="forgot_link" to="/forgot_password">
							<p className="link_text link">Forgot password?</p>
						</Link>
					</div>

					<div className="submit">
						<Button theme="darkGreenBtn" onClick={onFormSubmit}>
              Log in
						</Button>
					</div>
				</div>
			</AuthFormLayout>
			<div className="join-us">
				<p>Don’t have a choose life account?</p>
				<Link to="/onboarding/company">
					<p className="link"> Let’s create one now</p>{' '}
				</Link>{' '}
			</div>
		</Wrapper>
	);
}

LoginForm.propTypes = {
	history: PropTypes.object.isRequired,
	loginUser: PropTypes.func.isRequired,
};

export default connect(null, { loginUser })(LoginForm);
