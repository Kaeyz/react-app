import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const Wrapper = styled.div`
	width: 100%;
	.label {
		margin: 0;
		font-weight: normal;
		font-size: 1.3rem;
	}
	.input {
		height: 3.4rem;
		margin: 0;
		min-width: 100%;
    padding: 0.5rem;
		padding-left: 1.2rem;
    border: 1px solid grey;
    border-radius: 5px;
    :focus {
      outline-color: blue;
    }
	}
	.error {
		color: red;
	}
`;


const NumberInput = ({ label, onChange, value, placeholder, error }) => {

	return (
		<Wrapper>
			<Typography variant="subtitle1" component="h6" className="label">{label}</Typography>
			<NumberFormat
				placeholder={placeholder}
				className="input"
				value={value}
				onValueChange={(values) => onChange(values.value)}
				isNumericString
			/>
			<p className="error">{error && error}</p>
		</Wrapper>
	);
};

NumberInput.propTypes = {
	label: PropTypes.string,
	error: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export { NumberInput };