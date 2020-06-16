import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Select, FormControl, MenuItem, Typography } from '@material-ui/core';

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

const SelectInput = ({label, onChange, value, options}) => {

	const handleChange = (event) => {
		onChange(event.target.value);
	};

	return (
		<Wrapper>
			<FormControl variant="outlined" fullWidth 					className="input">
				<Typography variant="subtitle1" component="h6" className="label">{label}</Typography>
				<Select
					fullWidth
					margin="dense"
					variant="outlined"
					value={value}
					onChange={handleChange}
				>
					{options.map((option, index) => (
						<MenuItem key={index} value={option.value}>{option.text}</MenuItem>
					))}
				</Select>
			</FormControl>
		</Wrapper>
	);
};

SelectInput.propTypes = {
	label: PropTypes.string,
	options: PropTypes.array.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};


export { SelectInput };

