/*eslint-disable */

import React from 'react'
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';


const Wrapper = styled.div`
	width: 100%;
    margin-top: 2rem;
    	.label {
		margin-bottom: 1rem;
		margin-top: 0;
		font-family:Sofia;
		letter-spacing: 0.1px;
		font-weight: 600;
		font-size: 1.3rem;
		line-height: 1.4rem;
		color: ${props => props.theme.color.ui_text_05};
    }
    .MuiInputBase-input.Mui-disabled{
        font-family: Sofia;
        font-weight: normal;
        font-size: 1.4rem;
        line-height: 1.4rem;
              color: #787885;
              background-color: ${props => props.theme.color.ui_text_06};
              border-radius: 8px;
    }
    .MuiInputBase-root.Mui-disabled{
        border-radius: 8px;
    }
    .MuiFormControl-root{
        width:100%;
        
    }
	
`;

function TextFieldDIsabled({label, value}) {
    return (
        <Wrapper>
            			<Typography variant="subtitle1" component="h6" className="label">{label}</Typography>

            <TextField
          disabled
          id="outlined-disabled"
          defaultValue={value}
          variant="outlined"
        /> 
        </Wrapper>
    )
}

TextFieldDIsabled.propTypes = {
label: PropTypes.string.isRequired,
value: PropTypes.string.isRequired,
}

export default TextFieldDIsabled;

