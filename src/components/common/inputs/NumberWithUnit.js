/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';

const Wrapper = styled.div`
	margin-top: 1.5rem;
	.input_label {
		margin-bottom: 0.3rem;
		font-size: 1.4rem;
		line-height: 2;
		margin-top: 0;
		font-weight: bold;
		color: rgba(0, 0, 0, 0.87);
	}
	.MuiSelect-select.MuiSelect-select {
		padding-right: 0;
	}
	.MuiFormControl-root {
		width: 100%;
	}
	.MuiOutlinedInput-root {
		border: 1px solid #2ec4b6;
	}
	.input {
		margin: 0;
		min-width: 100%;
	}
	.MuiOutlinedInput-adornedEnd {
		height: 47.81px;
	}
	#outlined-adornment-weight::placeholder {
		font-family: Matteo;
		font-size: 1.4rem;
		line-height: 2.4rem;
		color: #1d1d1d;
	}
	.MuiInput-root {
		width: 44px;
	}
	.MuiSelect-icon {
		color: #2ec4b6 !important;
	}
	.MuiFormControl-root {
		width: 5rem;
	}

	.MuiSelect-selectMenu {
		font-family: Matteo;
		font-size: 1rem;
		line-height: 24px;
		color: #1d1d1d;
	}
	.flex {
		justify-content: start;
		.MuiInput-underline:before,
		.MuiInput-underline:after {
			border-bottom: 0.1rem solid #2ec4b6;
		}
	}
	.withSideDropdown {
		margin-top: -0.9rem;
		margin-left: 1rem;
		.MuiSelect-icon {
			color: ${(props) => props.theme.color.brand_02};
		}
		.MuiSelect-select.MuiSelect-select {
			font-size: 0.8rem;
			line-height: 2.4rem;
			color: ${(props) => props.theme.color.text_01};
			width: 3.2rem;
			padding-right: 7px;
			background-color: #fff;
		}

		.MuiFormControl-marginNormal {
			margin-left: 2.7rem;
			width: 7rem;
		}

		.MuiInputBase-input {
			width: 11rem;
			color: ${(props) => props.theme.color.text_01};
		}
	}
	.plain {
		margin: 0 0 1px 0.8rem;
		.MuiInputBase-input {
			font-size: 1.4rem;
			line-height: 1.4rem;
			font-family: Matteo;
			font-weight: 100;
		}
	}
	.error {
		color: red;
	}
`;
const weights = [
	{
		value: 'Kilogram',
		label: 'in KG',
	},
	{
		value: 'Pound',
		label: 'in Lb',
	},
	{
		value: 'Gram',
		label: 'in g',
	},
	{
		value: 'Ounces',
		label: 'in Oz',
	},
];

function NumberWithUnit({ label , value, onChange, error }) {
 	const [unit, setUnit] = React.useState('Kilogram');

	const handleUnitChange = (event) => {
		setUnit(event.target.value);
	};

	const handleChange = (event) => {
		onChange(event.target.value);
	};

	return (
		<Wrapper>
			<h6 className="input_label">{label}</h6>

			<FormControl className="input" variant="outlined">
				<OutlinedInput
					id="outlined-adornment-weight"
					value={value}
					type="number"
					placeholder="Type here..."
					onChange={handleChange}
					endAdornment={
						<TextField
							id="standard-select-weight"
							select
							value={unit}
							onChange={handleUnitChange}
						>
							{weights.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					}
					labelWidth={0}
				/>
			</FormControl>
			<p className="error">{error && error}</p>
		</Wrapper>
	);
}

NumberWithUnit.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string,
};

export default NumberWithUnit;
