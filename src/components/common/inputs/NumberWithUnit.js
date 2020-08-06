/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
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
    height: 4.781rem;
  }
  #outlined-adornment-weight::placeholder {
    font-family: Matteo;
    font-size: 1.4rem;
    line-height: 2.4rem;
	color: ${(props) => props.theme.color.text_01};
  }
  .MuiInput-root {
    width: 4.4rem;
  }
  .MuiSelect-icon {
    color: #2ec4b6 !important;
  }
  .MuiFormControl-root {
    width: 5rem;
  }
  .MuiSelect-select:focus{
	  background-color: ${(props) => props.theme.color.text_03};
  }
  .MuiInput-underline:before,.MuiInput-underline:after{
	  border-bottom: none;
  }
  }
  }
`;

function NumberWithUnit({ label, value, options, onChange }) {
	const [values, setValues] = React.useState({
		weight: '',
	});

	const handleChange = (event) => {
		setUnit(event.target.value);
	};

	const handleChange2 = (event) => {

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
							value={value}
							onChange={handleChange2}
						>
							{options.map((option, index) => (
								<MenuItem key={index} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					}
					labelWidth={0}
				/>
			</FormControl>
		</Wrapper>
	);
}

NumberWithUnit.propTypes = {
	label: PropTypes.string,
	options: PropTypes.array.isRequired,
	value: PropTypes.any.isRequired,
	onChange: PropTypes.func.isRequired,
};
export default NumberWithUnit;