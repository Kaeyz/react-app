import DateFnsUtils from '@date-io/date-fns';
import {
	KeyboardDatePicker, MuiPickersUtilsProvider
} from '@material-ui/pickers';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import datePickerIcon from '../../../assets/datePickerIcon.svg';

const Wrapper = styled.div`
	margin-top: 1.5rem;
	width: 100%;
	.input_label {
		font-size: 1.4rem;
		margin-bottom: 0.3rem;
		margin-top: 0;
	}
	.input {
		margin: 0;
		// min-width: 100%;
		max-width: 100%;
		outline: none;
		color: ${(props) => props.theme.color.active_primary};
		border-radius: 8px;
	}

	.MuiOutlinedInput-root {
		border: 1px solid ${(props) => props.theme.color.ui_text_06};
		border-radius: 2px;
		&:hover {
			border: 1px solid ${(props) => props.theme.color.ui_text_05};
			transition: 0.3s;
		}
		:focus-within {
			background-color: ${(props) => props.theme.color.text_03};
			outline: none;
			border-color: ${(props) => props.theme.color.brand_02};
			box-shadow: 0 0 3px ${(props) => props.theme.color.brand_02};
		}
	}
	.error {
		color: #b40001;
		padding-top: 2px;
	}
	.MuiOutlinedInput-notchedOutline {
		border: none;
	}
	.MuiOutlinedInput-inputAdornedEnd {
		/* font-family: Sofia; */
		font-weight: 300;
		line-height: 2rem;
		letter-spacing: 0.2px;
		color: ${(props) => props.theme.color.text_06};
	}
`;



const DateInput = ({label, value, onChange, error, textHelper }) => {
	return (
		<Wrapper>
			<MuiPickersUtilsProvider utils={DateFnsUtils} >
				<h6 className="input_label">{label}</h6>
				<KeyboardDatePicker
					fullWidth
					id="outlined-helperText"
					inputVariant="outlined"
					className="input"
					format="dd/MM/yyyy"
					label={textHelper}
					value={value}
					onChange={onChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
					keyboardIcon={<img src={datePickerIcon} alt="datePickerIcon"/>}
				/>
			</MuiPickersUtilsProvider>
			<p className="error">{error && error}</p>
		</Wrapper>
	);
};

DateInput.propTypes = {
	label: PropTypes.string,
	textHelper: PropTypes.string,
	error: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any,
};


export { DateInput };
