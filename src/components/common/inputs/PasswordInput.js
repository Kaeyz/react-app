import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  .input_label {
    margin-bottom: 0.3rem;
    font-size: 1.3rem;
    margin-top: 0;
  }
  .input_div {
    border: 2px solid ${(props) => props.theme.color.ui_text_01};
    height: 4.8rem;
    display: grid;
    grid-template-columns: 1fr max-content;
    border-radius: 5px;
    :hover {
      border: 2px solid ${(props) => props.theme.color.active_primary};
    }
  }
  .input {
    margin: 0;
    outline: none;
    border: none;
    height: 100%;
    padding-left: 1rem;
    :focus :hover {
      outline: none;
    }
  }
  .adornment {
    width: max-content;
    padding-right: 1rem;
  }
  .error {
    color: red;
  }
`;

const PasswordInput = ({ label, onChange, value, placeholder, error }) => {
	const [values, setValues] = React.useState({
		showPassword: false,
	});

	const handleChange = (event) => {
		onChange(event.target.value);
	};

	const handleClickShowPassword = () => {
		setValues({ showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<Wrapper>
			<h6 className="input_label">{label}</h6>
			<div className="input_div">
				<input
					placeholder={placeholder}
					className="input"
					type={values.showPassword ? 'text' : 'password'}
					value={value}
					onChange={handleChange}
				/>
				<div className="adornment">
					<IconButton
						onClick={handleClickShowPassword}
						onMouseDown={handleMouseDownPassword}
						edge="end"
					>
						{values.showPassword ? <Visibility /> : <VisibilityOff />}
					</IconButton>
				</div>
				<p className="error">{error && error}</p>
			</div>
		</Wrapper>
	);
};

PasswordInput.propTypes = {
	label: PropTypes.string,
	error: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export { PasswordInput };
