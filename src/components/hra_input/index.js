import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { onHraInputChange } from '../../store/actions/hraActions';
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

function HraInput({ label, prompt, inputs, id, onHraInputChange, hraInputs }) {

	const displayRadio = (input, name) => <SelectInput
		options={input.values}
		limit={{ min: input.min, max: input.max }}
		unit={input.units}
		name={name}
		onChange={onHraInputChange}
		value={hraInputs[name]}
	/>;

	const displayText = (input, name) => <TextInput
		options={input.values}
		limit={{ min: input.min, max: input.max }}
		unit={input.units}
		name={name}
		onChange={onHraInputChange}
		value={hraInputs[name]}
	/>;

	const displayNumber = (input, name) => <NumberInput
		limit={{ min: input.min, max: input.max }}
		unit={input.units}
		name={name}
		onChange={onHraInputChange}
		value={hraInputs[name]}
	/>;

	const displaySelect = (input, name) => <DropDownSelect
		options={input.values}
		unit={input.units}
		name={name}
		onChange={onHraInputChange}
		value={hraInputs[name]}
	/>;

	const displayInput = ({ input, name }) => (
		<div>
			{input.type === 'text' && displayText(input, name)}
			{input.type === 'number' && displayNumber(input, name)}
			{input.type === 'radio' && displayRadio(input, name)}
			{input.type === 'select' && displaySelect(input, name)}
		</div>
	);


	return (
		<Wrapper>
			<h6 className="input_label">{prompt.includes(null) ? label : prompt}</h6>

			{inputs.length > 1 ?
				inputs.map((input, index) => (
					<div key={input.id || index }>
						{displayInput({
							input,
							name: `${id}_${input.units.split(' ').join('_').split('/').join('_')}`
						})}
					</div>
				)) :
				<div>
					{displayInput({
						input: inputs[0],
						name: id
					})}
				</div>

			}
		</Wrapper>
	);
}

HraInput.defaultProps = {
	type: 'text'
};

HraInput.propTypes = {
	type: PropTypes.oneOf(['text', 'number', 'select', 'dropdown']),
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	prompt: PropTypes.string.isRequired,
	inputs: PropTypes.array.isRequired,
	hraInputs: PropTypes.array.isRequired,
	input: PropTypes.object.isRequired,
	onHraInputChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	const hraInputs = state.hra.inputs;
	return { hraInputs };
};

export default connect(mapStateToProps, {onHraInputChange})(HraInput);
