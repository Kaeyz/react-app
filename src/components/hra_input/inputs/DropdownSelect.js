/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Wrapper = styled.div`
margin-top: -1.2rem;
  .input_label {
    margin-bottom: 0.3rem;
    font-size: 1.4rem;
    line-height: 2.4rem;
    margin-top: 0;
    font-weight: normal;
  }
  .dropdown > .MuiInput-root {
    width: 20.3rem;
    margin-left: 1.6rem;
    .MuiSelect-select.MuiSelect-select {
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: ${(props) => props.theme.color.brand_02};
      font-family: Matteo;
    }
    .MuiSelect-icon {
		color: ${(props) => props.theme.color.brand_02};
    }
    
  }
  .MuiInput-underline:before {
	border-bottom: .1rem solid #2ec4b6;
  }
  .MuiInput-underline:after{
	border-bottom:  ${(props) => props.theme.color.text_01};

  }
`;
function DropdownSelect({placeholder,item1,item2,label}) {
	const [value, setValue] = React.useState('');

	const handleChange = (event) => {
		setValue(event.target.value);
	};
	return (
		<Wrapper>
			<h6 className="input_label">{label}</h6>

			<FormControl className="dropdown">
				<Select
					value={value}
					onChange={handleChange}
					displayEmpty
					inputProps={{ 'aria-label': 'Without label' }}
				>
					<MenuItem value="" disabled>
						{placeholder}
					</MenuItem>
					<MenuItem value={10}>{item1}</MenuItem>
					<MenuItem value={20}>{item2}</MenuItem>
				</Select>
			</FormControl>
		</Wrapper>
	);
}

DropdownSelect.propTypes = {};

export default DropdownSelect;
