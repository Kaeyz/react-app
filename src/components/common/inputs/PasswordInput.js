import React from 'react';
import styled from 'styled-components';
import { Typography, InputAdornment, OutlinedInput, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	width: 100%;
	.label {
		margin: 0;
		font-weight: normal;
		font-size: 1.3rem;
	}
	.input {
		margin: 0;
		min-width: 100%;
	}
`;

const PasswordInput = ({ label, onChange, value, placeholder }) => {

	const [values, setValues] = React.useState({
		showPassword: false,
	});

	const handleChange = (event) => {
		onChange(event.target.value);
	};

	const handleClickShowPassword = () => {
		setValues({ showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<Wrapper>
			<Typography variant="subtitle1" component="h6" className="label">{label}</Typography>
			<OutlinedInput
				placeholder={placeholder}
				fullWidth
				margin="dense"
				variant="outlined"
				className="input"
				type={values.showPassword ? 'text' : 'password'}
				value={value}
				onChange={handleChange}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge="end"
						>
							{values.showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				}
			/>
		</Wrapper>
	);
};

PasswordInput.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};


export { PasswordInput };
