import { IconButton } from '@material-ui/core';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import show from '../../../assets/show.svg';

const Wrapper = styled.div`
	.MuiIconButton-edgeEnd {
		height: 100%;
		/* width: 30%; */
	}
	margin-top: 3rem;
	width: 100%;
	.input_label {
		margin-bottom: 1rem;
		margin-top: 0;
		/* font-family: Sofia; */
		letter-spacing: 0.1px;
		font-weight: 600;
		font-size: 1.4rem;
		color: ${(props) => props.theme.color.ui_text_05};
	}
	.input_div {
		border: 1px solid ${(props) => props.theme.color.ui_text_06};
		height: 4.8rem;
		display: grid;
		grid-template-columns: 1fr max-content;
		grid-template-rows: 100%;
		/* border-radius: 8px; */
		&:hover {
			border: 1px solid ${(props) => props.theme.color.ui_text_05};
			transition: 0.3s;
		}
		&:focus-within {
			outline: none;
			border-color: ${(props) => props.theme.color.brand_02};
			box-shadow: 0 0 3px ${(props) => props.theme.color.brand_02};
		}
	}
	.input {
		font-size: 1.4rem;
		background-color: rgba(255, 255, 255, 0);
		margin: 0;
		outline: none;
		border: none;
		height: 100%;
		width: 100%;
		padding-left: 1rem;
		&::placeholder {
			letter-spacing: 0.2px;
			color: ${(props) => props.theme.color.text_06};
		}
		:focus :hover {
			outline: none;
		}
	}
	.adornment {
		padding-right: 1rem;
	}
	.error {
		color: #b40001;
		padding-top: 5px;
		width: 30ch;
		grid-column: 1/-1;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			width: 40ch;
		}
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
						{values.showPassword ? (
							<img src={show} alt="showPassword" />
						) : (
							<VisibilityOff />
						)}
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
