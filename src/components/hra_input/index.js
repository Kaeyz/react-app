import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DropDownSelect from './inputs/DropdownSelect';
import NumberInput from './inputs/NumberInput';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';


const Wrapper = styled.div`
		.input_label {
		margin-bottom: 0.3rem;
		font-size: 1.4rem;
		line-height: 2.4rem;
		margin-top: 0;
		font-weight: normal;
	}
`;

function HraInput({ label, prompt, inputs }) {

	const displayRadio = (input) => <SelectInput
		values={input.values}
		limit={{ min: input.min, max: input.max }}
		unit={input.units}
	/>;
	const displayText = (input) => <TextInput
		values={input.values}
		limit={{ min: input.min, max: input.max }}
		unit={input.units}
	/>;
	const displayNumber = (input) => <NumberInput
		values={input.values}
		limit={{ min: input.min, max: input.max }}
		unit={input.units}
	/>;
	const displaySelect = (input) => <DropDownSelect
		values={input.values}
		limit={{ min: input.min, max: input.max }}
		unit={input.units}
	/>;

	const displayInput = (input) => (
		<div>
			{input.type === 'text' && displayText(input)}
			{input.type === 'number' && displayNumber(input)}
			{input.type === 'radio' && displayRadio(input)}
			{input.type === 'select' && displaySelect(input)}
		</div>
	);


	return (
		<Wrapper>
			<h6 className="input_label">{prompt.includes(null) ? label : prompt}</h6>
			{inputs.map(input => (
				<div key={input.id}>
					{ displayInput(input) }
				</div>
			))}
		</Wrapper>
	);
}

HraInput.defaultProps = {
	type: 'text'
};

HraInput.propTypes = {
	type: PropTypes.oneOf(['text', 'number', 'select', 'dropdown']),
	label: PropTypes.string.isRequired,
	prompt: PropTypes.string.isRequired,
};

export default HraInput;
