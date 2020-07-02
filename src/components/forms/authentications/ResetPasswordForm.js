import React from 'react'
import styled from 'styled-components';
import { PasswordInput } from '../../../components/common/inputs';
import { Grid } from '@material-ui/core';

const Wrapper = styled.div`
`

function ResetPasswordForm(props) {
    return (
        <Wrapper>
           
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
        </Wrapper>
    )
}

ResetPasswordForm.propTypes = {

}

export default ResetPasswordForm

