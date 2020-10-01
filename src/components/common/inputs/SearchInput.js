import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Icon from '../../../assets/searchIcon.svg';

const Wrapper = styled.div`
.MuiFormControl-root{
		background: ${(props) => props.theme.color.ui_01};
		border: 1px solid ${(props) => props.theme.color.ui_15};
		box-sizing: border-box;
		padding: 9px 12px;
		width: 300px;
		border-radius: 8px;
		&:focus-within{
				border: 1px solid ${(props) => props.theme.color.brand_02};
		}
		.MuiInputBase-input{
				font-family: Matteo;
				font-size: 1.4rem;
				line-height: 2.2rem;
				color: ${(props) => props.theme.color.ui_05};
				padding:0;
		}
		.MuiInput-underline:before{
				content: none;
		}
		.MuiInput-underline:after{
				content: none;
		}
}
.search_icon {
	cursor: pointer;
}
`;

function SearchInput({onSubmit, placeholder, onChange, value,}) {
	return (
		<Wrapper>
			<FormControl>
				<Input
					startAdornment={
						<InputAdornment position="start" onClick={() => onSubmit(value)} className='search_icon'>
							<img src={Icon} alt="icon"/>
						</InputAdornment>
					}
					placeholder={placeholder}
					value={value}
					onChange={event => onChange(event.target.value)}
				/>
			</FormControl>
		</Wrapper>
	);
}

SearchInput.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

export { SearchInput };

