import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Wrapper = styled.div`
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  .input_label {
    margin-bottom: 0.3rem;
    font-size: 1.4rem;
    line-height: 2.4rem;
    margin-top: 0;
    font-weight: normal;
  }
  .dropdown > .MuiInput-root {
    width: 20.3rem;
    margin-left: 1.6rem;
    .MuiSelect-select.MuiSelect-select {
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: ${(props) => props.theme.color.brand_02};
      font-family: Matteo;
    }
    .MuiSelect-icon {
		color: ${(props) => props.theme.color.brand_02};
    }

  }
  .MuiInput-underline:before {
	border-bottom: .1rem solid #2ec4b6;
  }
  .MuiInput-underline:after{
	border-bottom:  ${(props) => props.theme.color.text_01};

  }
`;
function DropdownSelect({options, name, onChange, value}) {

	const handleChange = (event) => {
		onChange(event.target.value, name);
	};

	return (
		<Wrapper>

			<FormControl className="dropdown">
				<Select
					value={value}
					onChange={handleChange}
					displayEmpty
					name={name}
				>
					{options.map((option) => (
						<MenuItem value={option.id} key={option.id}>
							{option.label || option.id}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Wrapper>
	);
}

DropdownSelect.propTypes = {
	options: PropTypes.array,
	value: PropTypes.string,
	onChange: PropTypes.func,
	name: PropTypes.string.isRequired,
};

export default DropdownSelect;
