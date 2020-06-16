import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers';


const Wrapper = styled.div`
	width: 100%;
	.label {
		margin: 0;
		font-weight: normal;
		font-size: 1.3rem;
	}
	.input {
		margin: 0;
		min-width: 100%;
		padding-top: 1rem;
		padding-left: 1rem;
		border: 1px solid grey;
		border-radius: 5px;
	}
`;

const DateInput = ({label, value, onChange }) => {
	return (
		<Wrapper>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Typography variant="subtitle1" component="h6" className="label">{label}</Typography>
				<KeyboardDatePicker
					fullWidth
					margin="dense"
					inputVariant="outlined"
					className="input"
					format="dd/MM/yyyy"
					value={value}
					onChange={onChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
			</MuiPickersUtilsProvider>
		</Wrapper>
	);
};

DateInput.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any.isRequired,
};


export {DateInput};