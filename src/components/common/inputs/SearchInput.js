import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Icon from '../../../assets/searchIcon.svg';

const Wrapper = styled.div`
	.MuiFormControl-root {
		background: ${(props) => props.theme.color.ui_01};
		border: 1px solid ${(props) => props.theme.color.ui_15};
		box-sizing: border-box;
		padding: 9px 12px;
		width: 300px;
		/* border-radius: 8px; */
		&:focus-within {
			border: 1px solid ${(props) => props.theme.color.brand_02};
		}
		.MuiInputBase-input {
			font-family: Matteo;
			color: ${(props) => props.theme.color.ui_05};
			padding: 0;
		}
		.MuiInput-underline:before {
			content: none;
		}
		.MuiInput-underline:after {
			content: none;
		}
	}
	.search_icon {
		cursor: pointer;
	}
`;

function SearchInput({ onSubmit, placeholder, onChange, value, title }) {
	const onEnterPress = (event) => {
		if (event.key === 'Enter') {
			onSubmit(value);
		}
	};

	return (
		<Wrapper>
			<FormControl>
				<Input
					startAdornment={
						<InputAdornment
							position="start"
							onClick={() => onSubmit(value)}
							className="search_icon"
						>
							<img src={Icon} alt="icon" />
						</InputAdornment>
					}
					title={title}
					placeholder={placeholder}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					onKeyPress={(e) => onEnterPress(e)}
				/>
			</FormControl>
		</Wrapper>
	);
}

SearchInput.propTypes = {
	onSubmit: PropTypes.func,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	title: PropTypes.string,
};

export { SearchInput };
