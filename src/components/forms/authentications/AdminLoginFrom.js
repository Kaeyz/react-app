import React from 'react'
// import PropTypes from 'prop-types'
import { TextInput, PasswordInput } from '../../common/inputs';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

function AdminLoginFrom() {
    return (
        <Wrapper>
            	<Grid container>
					<Grid item xs={12} sm={12}>
						<TextInput
							label="Enter your username"
							// value={username}
							type="username"
							// onChange={setUsername}
							placeholder="Type here..."
							// error={errors.username}
						/>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={12} sm={12}>
						<PasswordInput
							label="Enter your Password"
							// value={password}
							// onChange={setPassword}
							// options={[{ value: "", text: "Select here" }]}
							// error={errors.password}
						/>
					</Grid>
				</Grid>
        </Wrapper>
    )
}

// AdminLoginFrom.propTypes = {

// }

export default AdminLoginFrom

