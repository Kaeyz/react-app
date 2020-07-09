import React from 'react';
import PropTypes from 'prop-types';
import DropDownSelect from './inputs/DropdownSelect';
import NumberInput from './inputs/NumberInput';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';


function HraInput({ type, ...props }) {

	const displaySelect = () => <SelectInput {...props } />;
	const displayText = () => <TextInput {...props } />;
	const displayNumber = () => <NumberInput {...props } />;
	const displayDropDown = () => <DropDownSelect {...props } />;

	return (
		<div>
			{type === 'text' && displayText()}
			{type === 'number' && displayNumber()}
			{type === 'select' && displaySelect()}
			{type === 'dropdown' && displayDropDown()}
		</div>
	);
}

HraInput.defaultProps = {
	type: 'text'
};

HraInput.propTypes = {
	type: PropTypes.oneOf(['text', 'number', 'select', 'dropdown'])
};

export default HraInput;
