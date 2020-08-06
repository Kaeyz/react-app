import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import {TextField, MenuItem} from '@material-ui/core';
import {Input, FormControl} from '@material-ui/core';
import styled from 'styled-components';
import { validateShowHide } from '../../../store/actions/hraActions';

const Wrapper = styled.div`
	margin-top: 1.5rem;
	margin-bottom: 1rem;
  .input_label {
    margin-bottom: 2rem;
    font-size: 1.4rem;
    line-height: 2.4rem;
    margin-top: 0;
    font-weight: normal;
  }
  .flex{
	justify-content: start;
	.MuiInput-underline:before,.MuiInput-underline:after {
		border-bottom: 0;
	  }
  }
  .withSideDropdown {
    margin-top: -0.9rem;
    .MuiSelect-icon {
      color: ${(props) => props.theme.color.brand_02};
    }
    .MuiFormControl-root{
        border: 1px solid #F0F0F0;
    border-radius: 2px;
	padding: 1.5rem;
	&:hover{
		border: 1px solid ${props => props.theme.color.brand_02};
		transition: .2s;
	}
	}
		.MuiFormControl-marginNormal {
			margin-left: 2.7rem;
			width: 7rem;
		}
		.MuiInput-root {
			width: 33rem;
		}
    .MuiInputBase-input {
	  font-size: 1.6rem;
	  line-height: 2rem;
	  font-family:Sofia;
	  letter-spacing: 0.2px;
      color: ${(props) => props.theme.color.ui_07};
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


function NumberInput({ limit, unit, name, value, onChange, validateShowHide, showHide}) {

	const handleChange = (event) => {
		onChange(event.target.value, name);
		validateShowHide(name, showHide);
	};

	return (
		<Wrapper>
			<div className='flex'>
				<div className=" withSideDropdown flex">
					<FormControl>
						<Input
							type="number"
							inputProps={{
								min: limit.min,
								max: limit.max,
								step: '1'
							}}
							value={value}
							onChange={handleChange}
							// endAdornment={
							// 	<div>
							// 		<p>{unit}</p>
							// 		{/* 	{weights.map((option) => (
							// 			<MenuItem key={option.value} value={option.value}>
							// 				{option.label}
							// 			</MenuItem>
							// 		))} */}
							// 	</div>
							// }
						/>
					</FormControl>
				</div>

				{/* 	<div className="plain">
					<FormControl>
						<Input
							type="number"
							onChange={handleChange('level')}
							placeholder="High"
						/>
					</FormControl>
				</div> */}
			</div>
		</Wrapper>
	);
}

NumberInput.defaultProps = {
	limit: { min: 0, max: 9999999999 }
};

NumberInput.propTypes = {
	limit: PropTypes.object,
	unit: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	validateShowHide: PropTypes.func,
	showHide: PropTypes.any,
};

export default connect(null, {validateShowHide})(NumberInput);