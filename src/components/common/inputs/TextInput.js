import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Typography, TextField } from '@material-ui/core';

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


const TextInput = ({ label, onChange, value, placeholder }) => {

	const handleChange = (event) => {
		onChange(event.target.value);
	};


	return (
		<Wrapper>
			<Typography variant="subtitle1" component="h6" className="label">{label}</Typography>
			<TextField
				placeholder={placeholder}
				fullWidth
				margin="dense"
				variant="outlined"
				className="input"
				value={value}
				onChange={handleChange}
			/>
		</Wrapper>
	);
};

TextInput.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export { TextInput };