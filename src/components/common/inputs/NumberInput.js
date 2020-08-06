import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const Wrapper = styled.div`
	width: 100%;
    margin-top: 1.5rem;
	.label {
		margin-bottom: 1rem;
		margin-top: 0;
		font-family:Sofia;
		letter-spacing: 0.1px;
		font-weight: 600;
font-size: 1.4rem;
line-height: 1.4rem;
color: ${props => props.theme.color.ui_text_05};
	}
	.input {
		height: 100%;
		margin: 0;
		min-width: 100%;
		padding: 1.5rem;
		border: 1px solid ${props => props.theme.color.ui_text_06};
		border-radius: 2px;
    :focus {
		outline: none;
		border-color: ${props => props.theme.color.brand_02};
		box-shadow: 0 0 3px ${props => props.theme.color.brand_02};
  
	}
	&:hover {
		border: 1px solid ${props => props.theme.color.ui_text_05};
		transition: .3s;
    }
	&::placeholder{
		font-family: Sofia;
font-size: 1.4rem;
line-height: 2.0rem;
letter-spacing: 0.2px;
color: ${props => props.theme.color.text_06};
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