import React, { useState } from 'react';
import SideBar from '../../../components/layouts/dashboardLayout/settingsSidebar/Sidebar';
import { PasswordInput } from '../../../components/common/inputs';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Button from '../../../components/common/Button';

const Wrapper = styled.div`
.settings-body-main{
    p{
        padding-bottom: 1.3px
    }
}
`;

const PasswordSettings = () => {
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [errors] = useState({});

	return (
		<SideBar>
			<Wrapper>
				<div className="settings-body-main">
					<h1 className="text">Password</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
				</div>
				<form noValidate autoComplete="off">
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6}>
							<PasswordInput
								label="Old Password"
								value={password}
								onChange={setPassword}
								error={errors.password}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<PasswordInput
								label="New Password"
								value={password2}
								onChange={setPassword2}
								error={errors.password2}
							/>
						</Grid>
					</Grid>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6}>
							<PasswordInput
								label="Confirm Password"
								value={password2}
								onChange={setPassword2}
								error={errors.password2}
							/>
						</Grid>
					</Grid>
					<div className="submit">
						<Button value="Save changes" type="submit" theme="darkGreen">
              Save Changes
						</Button>
					</div>
				</form>
			</Wrapper>
		</SideBar>
	);
};

export default PasswordSettings;
