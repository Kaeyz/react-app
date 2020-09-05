/* eslint-disable no-use-before-define */
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styled from 'styled-components';
import InputAdornment from '@material-ui/core/InputAdornment';
import sort from '../../../assets/sort.svg';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
.MuiAutocomplete-input{
    background: ${(props) => props.theme.color.ui_01};
border: 1px solid ${(props) => props.theme.color.ui_14};
padding: 1px 15px;
border-radius: 8px;
}
.MuiInputBase-input{
    font-weight: normal;
font-size: 1.3rem;
line-height: 1.3rem;
color: ${(props) => props.theme.color.ui_05};
font-family: Matteo;
}
.MuiInput-underline:before,.MuiInput-underline:after{
    content: none;
}


`;

function Filter({Icon, alt, placeholder, options, width}) {
	return (
		<Wrapper>
			<Autocomplete
				id="custom-input-demo"
				options={options}
				renderInput={(params) => (
					<div ref={params.InputProps.ref}>
						<Input
							style={width}
							type="text"
							{...params.inputProps}
							id="input-with-icon-adornment"
							startAdornment={
								<InputAdornment position="start">
									<img src={Icon} alt={alt} />
								</InputAdornment>
							}
							endAdornment={
								<InputAdornment position="end">
									<img src={sort} alt="icon" />
								</InputAdornment>
							}
							placeholder={placeholder}
						/>
					</div>
				)}
			/>
		</Wrapper>
	);
}

Filter.propTypes ={
	Icon: PropTypes.any,
	placeholder: PropTypes.string,
	alt: PropTypes.string,
	options: PropTypes.array.isRequired,
	width: PropTypes.any,
}

export { Filter };
