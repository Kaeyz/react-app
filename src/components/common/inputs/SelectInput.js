import { MenuItem, Select } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin-top: 1.5rem;
	width: 100%;
	.input_label {
		margin-bottom: 0.9rem;
		margin-top: 0rem;
		line-height: 1.4rem;
		font-size: 1.4rem;
	}
	.input {
		font-size: 1.4rem;
		line-height: 1.4rem;
		margin: 0;
		min-width: 100%;
	}
	.error {
		color: #b40001;
		padding-top: 2px;
	}
	.MuiSelect-select:focus {
		background-color: ${(props) => props.theme.color.text_03};
		outline: none;
		border-color: ${(props) => props.theme.color.brand_02};
		box-shadow: 0 0 3px ${(props) => props.theme.color.brand_02};
	}

	.MuiOutlinedInput-root {
		border: 1px solid ${(props) => props.theme.color.ui_text_06};
		border-radius: 0px;
		&:hover {
			border: 1px solid ${(props) => props.theme.color.ui_text_05};
			transition: 0.3s;
		}
		&:focus-within {
			background-color: ${(props) => props.theme.color.text_03};
			outline: none;
			border-color: ${(props) => props.theme.color.brand_02};
			box-shadow: 0 0 3px ${(props) => props.theme.color.brand_02};
		}
	}
	.MuiOutlinedInput-notchedOutline {
		border: none;
	}
	.MuiSelect-select {
		/* font-family: Sofia; */
		/* line-height: 2rem; */
		letter-spacing: 0.2px;
		color: ${(props) => props.theme.color.text_06};
		/* border: 1px solid red; */
		transition: 0.3s;
		display: block;
		height: 1rem;
		border-radius: 0px;
	}
	.MuiSelect-root {
		/* height: 4.5rem; */
	}
	.MuiSelect-select.MuiSelect-select {
		padding-right: 10px;
	}
	.MuiSelect-outlined {
		outline: 0;
	}
`;

const SelectInput = ({ label, onChange, value, options, error }) => {
	const handleChange = (event) => {
		onChange(event.target.value);
	};

	return (
		<Wrapper>
			<h6 className="input_label">{label}</h6>
			<Select
				className="input"
				variant="outlined"
				value={value === null ? '' : value}
				onChange={handleChange}
			>
				{options &&
					options.map((option, index) => (
						<MenuItem key={index} value={option.value}>
							{option.text}
						</MenuItem>
					))}
			</Select>
			<p className="error">{error && error}</p>
		</Wrapper>
	);
};

SelectInput.propTypes = {
	label: PropTypes.string,
	error: PropTypes.string,
	options: PropTypes.array.isRequired,
	value: PropTypes.any,
	onChange: PropTypes.func.isRequired,
};

export { SelectInput };
