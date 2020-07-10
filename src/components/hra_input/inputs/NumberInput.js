/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
//import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

const Wrapper = styled.div`
  .input_label {
    margin-bottom: 0.3rem;
    font-size: 1.4rem;
    line-height: 2.4rem;
    margin-top: 0;
    font-weight: normal;
  }
  .flex{
	justify-content: start;
	.MuiInput-underline:before,.MuiInput-underline:after {
		border-bottom: .1rem solid #2ec4b6;

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
  .plain{
		margin: 0 0 1px .8rem;
    .MuiInputBase-input {
			font-size: 1.4rem;
			line-height: 1.4rem;
			font-family: Matteo;
			font-weight:100;
		}
  }
`;
const weights = [
	{
		value: 'Pound',
		label: 'in LBS',
	},
	{
		value: 'Kilogram',
		label: 'in KG',
	},
];

function NumberInput({ label }) {
	const [values, setValues] = React.useState({
		weight: '',
		level: '',
	});
	const [weight, setWeight] = React.useState('Kilogram');

	const handleWeight = (event) => {
		setWeight(event.target.value);
	};
	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	return (
		<Wrapper>
			<h6 className="input_label">{label}</h6>
			<div className='flex'>
				<div className=" withSideDropdown flex">
					<FormControl>
						<Input
							id="standard-adornment-weight"
							value={values.weight}
							type="number"
							inputProps={{ min: '10', max: '80', step: '1' }}
							onChange={handleChange('weight')}
							endAdornment={
								<TextField
									id="standard-select-currency"we
									select
									// label="Select"
									value={weight}
									onChange={handleWeight}
								>
									{weights.map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>
							}
						// aria-describedby="standard-weight-helper-text"
						// inputProps={{
						// 	'aria-label': 'weight',
						// }}
						/>
					</FormControl>
				</div>

				<div className="plain">
					<FormControl>
						<Input
							id="standard-adornment-weight"
							// value={values.weight}
							type="number"
							// inputProps={{ min: '10', max: '80', step: '1' }}
							onChange={handleChange('level')}
							placeholder="High"
						/>
					</FormControl>
				</div>
			</div>
		</Wrapper>
	);
}

//NumberInput.propTypes = {}

export default NumberInput;
