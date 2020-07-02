import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import { PasswordInput } from '../../components/common/inputs';
import { Grid } from '@material-ui/core';
import CommonAuthPaperPage from '../../components/forms/authentications/CommonAuthPaperPage';
import Frame from '../../assets/Frame.svg';

const Wrapper = styled.div`
	hr {
		border: 1px solid #f0f1f3;
	}
`;
function ResetPassword() {
	return (
		<Wrapper>
			<CommonAuthPaperPage
				img={Frame}
				alt={'frame'}
				title={'Enter new password'}
				buttonText={' CHANGE PASSWORD'}
			>

				<Grid container>
					<Grid item xs={12} sm={12}>
						<PasswordInput
							label="Enter your password"
							// value= {password}
							// onChange={setPassword}
							options={[{ value: '', text: 'Select here' }]}
							// error={errors.password}
						/>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={12} sm={12}>
						<PasswordInput
							label="Confirm your password"
							// value= {password}
							// onChange={setPassword}
							options={[{ value: '', text: 'Select here' }]}
							// error={errors.password}
						/>
					</Grid>
				</Grid>
			</CommonAuthPaperPage>
		</Wrapper>
	);
}

// ResetPassword.propTypes = {

// }

export default ResetPassword;
