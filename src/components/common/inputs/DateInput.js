import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


const Wrapper = styled.div`
	margin-top: 1.5rem;
	width: 100%;
	.input_label {
		margin-bottom: 0.3rem;
		font-size: 1.3rem;
		margin-top: 0;
	}
	.input {
		margin: 0;
		min-width: 100%;
		border: 2px solid ${props => props.theme.color.ui_text_01};
		outline: none;
		color: ${props => props.theme.color.active_primary};
		border-radius: 5px;
		:hover {
			border: 2px solid ${props => props.theme.color.active_primary};
		}
	}
	.error {
		color: red;
	}
`;

const inputStyle = {
	paddingTop: '1.5rem',
	paddingBottom: '1.5rem',
	fontSize: '1.3rem',
	borderColor: 'none',
	outline: 'none'
};

const DateInput = ({label, value, onChange, error }) => {
	return (
		<Wrapper>
			<MuiPickersUtilsProvider utils={DateFnsUtils} >
				<h6 className="input_label">{label}</h6>
				<KeyboardDatePicker
					fullWidth
					inputVariant="outlined"
					className="input"
					format="dd/MM/yyyy"
					value={value}
					inputProps={{ style: inputStyle }}
					onChange={onChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
			</MuiPickersUtilsProvider>
			<p className="error">{error && error}</p>
		</Wrapper>
	);
};

DateInput.propTypes = {
	label: PropTypes.string,
	error: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any.isRequired,
};


export {DateInput};