/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const Wrapper = styled.div`
	.input_label {
		margin-bottom: 0.3rem;
		font-size: 1.4rem;
		line-height: 2.4rem;
		margin-top: 0;
		font-weight: normal;
	}
	.MuiFormLabel-root {
		font-size: 1.4rem;
		line-height: 2.4rem;
		font-family: Matteo;
		color: ${(props) => props.theme.color.text_01};
	}
	.MuiFormControl-root {
		display: block;
	}
	label + .MuiInput-formControl {
		margin-left: 1.2rem;
		width: 15.0rem;
		margin-top: 2.3rem;
	}
	.MuiInputBase-input {
		font-size: 1.2rem;
		width: 20.3rem;
		line-height: 2.4rem;
	}
	.MuiInputBase-input::placeholder {
		font-family: Matteo;
		font-size: 1.4rem;
		line-height: 2.4rem;
	}
	.MuiInput-underline:before,.MuiInput-underline:after {
		border-bottom: .1rem solid #2ec4b6;
	}
	.flex {
		display: flex;
		justify-content: start;
		h5 {
			color: ${(props) => props.theme.color.brand_02};
			font-weight: 100;
			margin: 0 1.8rem;
		}
	}

	.withPlaceholder > .MuiInput-root {
		width: 11.3rem;
	}
	.dropdown {
		margin-top: -.5rem;
		.MuiSelect-icon {
			color: #2ec4b6;
		}
		.MuiSelect-select.MuiSelect-select {
			font-size: 1.4rem;
			line-height: 1.9rem;
			color: ${(props) => props.theme.color.brand_02};
			font-family: Matteo;
		}
	}
`;

function TextInput({ label }) {
	const [value, setValue] = React.useState('');
	const [weight, setWeight] = React.useState('Kilogram');

	const handleChange = (event) => {
		setValue(event.target.value);
	};
	const handleWeight = (event) => {
		setWeight(event.target.value);
	};
	return (
		<Wrapper>
			<h6 className="input_label">{label}</h6>
			<div className="flex">
				<div className="plain">
					<TextField
						style={{ margin: 8 }}
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</div>

				<div className="withSideLabel flex">
					<TextField
						className="withPlaceholder "
						placeholder="Enter %"
						style={{ margin: 8 }}
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<h5>percent</h5>
				</div>

				<div className="withSeparateDropdown flex">
					<FormControl className="dropdown">
						<Select
							value={value}
							onChange={handleChange}
							displayEmpty
							inputProps={{ 'aria-label': 'Without label' }}
						>
							<MenuItem value="">Cigarettes per day</MenuItem>
							<MenuItem value={10}>Cigarettes per week</MenuItem>
							<MenuItem value={20}>Cigarettes per month</MenuItem>
						</Select>
					</FormControl>
				</div>


			</div>
		</Wrapper>
	);
}

TextInput.propTypes = {
	SerialNumber: PropTypes.number.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string,

};

export default TextInput;
