import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const Wrapper = styled.div`
  .MuiFormLabel-root {
    font-size: 14px;
    line-height: 24px;
    font-family: Matteo;
    color: ${(props) => props.theme.color.text_01};
  }
  .MuiFormControl-root {
    display: block;
  }
  label + .MuiInput-formControl {
	margin-left: 12px;
	width: 150px;
	
    margin-top: 23px;

  }
  .MuiInputBase-input{
	  font-size:12px;
	  
	  }
  .MuiInput-underline:before{
	border-bottom: 1px solid #2EC4B6;
  }
  .MuiInput-underline:after{
	border-bottom: 1px solid #2EC4B6;

  }
`;

function TextInput(props) {
	return (
		<Wrapper>
      Text Input
			<TextField
				label={`${props.SerialNumber }. Who is your primary care provider?`}
				style={{ margin: 8 }}
				margin="normal"
				InputLabelProps={{
					shrink: true,
				}}
			/>
		</Wrapper>
	);
}

TextInput.propTypes = {
	SerialNumber: PropTypes.number.isRequired,
}

export default TextInput;
