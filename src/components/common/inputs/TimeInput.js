import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
} from '@material-ui/pickers';
import timePickerIcon from '../../../assets/time.svg';
import DateFnsUtils from '@date-io/date-fns';


const Wrapper = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  .input_label {
    margin-bottom: 0.3rem;
    font-size: 1.3rem;
    margin-top: 0;
  }
  .MuiFormControl-marginNormal {
    width: 100%;
    border: 1px solid ${(props) => props.theme.color.ui_text_06};
    border-radius: 8px;
  }
  .MuiInput-underline.Mui-error:after {
    border-bottom: none;
  }
  .MuiInputBase-input{
    padding: 1.8rem;
font-family: Sofia;
font-size: 1.4rem;

  }
  .MuiInput-underline:before,.MuiInput-underline:after{
      content: none;
  }
  .MuiInput-root{
    &:hover {
        border: 1px solid ${props => props.theme.color.ui_text_05};
        transition: .3s;
    }
    &:focus-within{
        outline: none;
        border-color: ${props => props.theme.color.brand_02};
        box-shadow: 0 0 3px ${props => props.theme.color.brand_02};
    }
  }
`;

const TimeInput = ({ label, error }) => {
	const [selectedDate, handleDateChange] = useState(new Date());
	return (
		<Wrapper>
      			<MuiPickersUtilsProvider utils={DateFnsUtils}>

				<h6 className="input_label">{label}</h6>
				<KeyboardTimePicker
					margin="normal"
					id="time-picker"
					value={selectedDate}
					onChange={date => handleDateChange(date)}
					KeyboardButtonProps={{
						'aria-label': 'change time',
					}}
					keyboardIcon={<img src={timePickerIcon} alt="datePickerIcon" />}
				/>
      			</MuiPickersUtilsProvider>

			<p className="error">{error && error}</p>
		</Wrapper>
	);
};

TimeInput.propTypes = {
	label: PropTypes.string,
	error: PropTypes.string,
	placeholder: PropTypes.string,
};

export { TimeInput };
