import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { validateShowHide } from '../../../store/actions/hraActions';

const Wrapper = styled.div`
	margin-top: 1.5rem;
	margin-bottom: 1rem;
	.input_label {
		margin-bottom: 0.3rem;
		font-size: 1.3rem;
		margin-top: 0;
		font-weight: normal;
	}

	.MuiFormControl-root {
		border: 1px solid ${(props) => props.theme.color.ui_03};
		border-radius: 0px;
		padding: 1em;
		width: 100%;
		&:hover {
			border: 1px solid ${(props) => props.theme.color.brand_02};
			transition: 0.2s;
		}
	}
	.MuiInputBase-input {
		/* padding: 1px; */
	}

	.dropdown > .MuiInput-root {
		/* max-width: 33rem; */
		.MuiSelect-select.MuiSelect-select {
			/* font-family: Sofia; */
			letter-spacing: 0.2px;
			color: ${(props) => props.theme.color.ui_07};
			font-size: 1.3rem;

			&:focus {
				background-color: #fff;
			}
		}
		.MuiSelect-icon {
			color: ${(props) => props.theme.color.text_05};
		}
	}
	.MuiInput-underline:before,
	.MuiInput-underline:hover:not(.Mui-disabled):before {
		border-bottom: 0;
	}
	.MuiInput-underline:after {
		border-bottom: ${(props) => props.theme.color.text_01};
	}
`;
function DropdownSelect({
	options,
	name,
	onChange,
	value,
	showHide,
	validateShowHide,
}) {
	const handleChange = (event) => {
		onChange(event.target.value, name);
		validateShowHide(name, showHide);
	};

	const getLabel = (option) => {
		const { label, id, unitlabel } = option;
		if (label) {
			return label;
		}
		if (unitlabel) {
			return unitlabel.metric;
		}
		return id;
	};

	return (
		<Wrapper>
			<Grid xs={12} sm={6}>
				<FormControl className="dropdown">
					<Select
						value={value}
						onChange={handleChange}
						displayEmpty
						name={name}
					>
						{options.map((option) => (
							<MenuItem value={option.id} key={option.id}>
								{getLabel(option)}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
		</Wrapper>
	);
}

DropdownSelect.propTypes = {
	options: PropTypes.array,
	value: PropTypes.string,
	onChange: PropTypes.func,
	validateShowHide: PropTypes.func,
	showHide: PropTypes.any,
	name: PropTypes.string.isRequired,
};

export default connect(null, { validateShowHide })(DropdownSelect);
