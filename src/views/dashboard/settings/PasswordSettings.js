import React, { useState } from 'react';
import SideBar from '../../../components/layouts/dashboardLayout/settingsSidebar/Sidebar';
import { PasswordInput } from '../../../components/common/inputs';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUserPassword } from '../../../store/actions/userActions';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Button from '../../../components/common/Button';

const Wrapper = styled.div`
.settings-body-main{
	@media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
		display:none;
	}
    p{
        padding-bottom: 1.3px
    }
}
.submit{
	.button{
		@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
			width:100% !important;
		}
	}
}
`;

const PasswordSettings = ({updateUserPassword}) => {
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errors] = useState({});

	const onFormSubmit = (event) => {
		event.preventDefault();
		const data = { oldPassword, newPassword, confirmPassword };

		updateUserPassword(data);

	};

	return (
		<SideBar>
			<Wrapper>
				<div className="settings-body-main">
					<h1 className="text">Password</h1>
					<p>Your password information is private, keep it safe.</p>
				</div>
				<form noValidate autoComplete="off">
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6}>
							<PasswordInput
								label="Old Password"
								value={oldPassword}
								onChange={setOldPassword}
								error={errors.oldPassword}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<PasswordInput
								label="New Password"
								value={newPassword}
								onChange={setNewPassword}
								error={errors.password2}
							/>
						</Grid>
					</Grid>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6}>
							<PasswordInput
								label="Confirm Password"
								value={confirmPassword}
								onChange={setConfirmPassword}
								error={errors.password2}
							/>
						</Grid>
					</Grid>
					<div className="submit">
						<Button value="Save changes" type="submit" theme="darkGreen" onClick={onFormSubmit}>
              Save Changes
						</Button>
					</div>
				</form>
			</Wrapper>
		</SideBar>
	);
};

PasswordSettings.propTypes = {
	updateUserPassword: PropTypes.func.isRequired
};

export default connect(null, { updateUserPassword })(PasswordSettings);
