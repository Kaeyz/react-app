import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { onHraInputChange } from '../../store/actions/hraActions';
import DropDownSelect from './inputs/DropdownSelect';
import NumberInput from './inputs/NumberInput';
import SelectInput from './inputs/SelectInput';
import TextInput from './inputs/TextInput';

const Wrapper = styled.div`
	margin: 2rem 0;
	.input_label {
		margin-bottom: 2rem;
		line-height: 1.5;
		font-size: 1.3rem;
		margin-top: 0;
		font-weight: normal;
		color: ${(props) => props.theme.color.ui_06};
	}
`;
function HraInput({
	label,
	prompt,
	number,
	inputs,
	id,
	onHraInputChange,
	hraInputValues,
	showInput,
}) {
	const displayRadio = (input, name) => {
		// console.log({v: input.values});
		return (
			<SelectInput
				options={input.values}
				limit={{ min: input.min, max: input.max }}
				unit={input.units}
				name={name}
				onChange={onHraInputChange}
				value={hraInputValues[name]}
				showHide={input.showhide || input.values}
			/>
		);
	};

	const displayText = (input, name) => (
		<TextInput
			options={input.values}
			limit={{ min: input.min, max: input.max }}
			unit={input.units}
			name={name}
			onChange={onHraInputChange}
			value={hraInputValues[name]}
			showHide={input.showhide}
		/>
	);

	const displayNumber = (input, name) => (
		<NumberInput
			limit={{ min: input.min, max: input.max }}
			unit={input.units}
			name={name}
			onChange={onHraInputChange}
			value={hraInputValues[name]}
			showHide={input.showhide}
		/>
	);

	const displaySelect = (input, name) => (
		<DropDownSelect
			options={input.values}
			unit={input.units}
			name={name}
			onChange={onHraInputChange}
			value={hraInputValues[name]}
			showHide={input.showhide}
		/>
	);
	const checkInputShowStatus = (name) => {
		if (name in showInput) {
			if (showInput[name] === false) {
				return false;
			}
			return true;
		}
		return true;
	};

	const displayInput = ({ input, name }) => (
		<React.Fragment>
			<div>
				{input.type === 'text' && displayText(input, name)}
				{input.type === 'number' && displayNumber(input, name)}
				{input.type === 'radio' && displayRadio(input, name)}
				{input.type === 'select' && displaySelect(input, name)}
			</div>
		</React.Fragment>
	);

	const displayLabel = () => {
		if (label === 'Weight' || label === 'Height') {
			return `${label}, ${prompt}`;
		}

		return prompt === null ? label : prompt === '' ? label : prompt;
	};

	return (
		<Wrapper>
			<React.Fragment>
				{inputs.length > 1 ? (
					<React.Fragment>
						{checkInputShowStatus(id) && (
							<h6 className="input_label">
								{`${number}. ${displayLabel()}`}
							</h6>
						)}
						{checkInputShowStatus(id) &&
							inputs.map((input, index) => (
								<div key={input.id || index}>
									{displayInput({
										input,
										name: `${id}_${input.units
											.split(' ')
											.join('_')
											.split('/')
											.join('_')}`,
									})}
								</div>
							))}
					</React.Fragment>
				) : (
					<div>
						{checkInputShowStatus(id) && (
							<React.Fragment>
								<h6 className="input_label">
									{`${number}. ${displayLabel()}`}
								</h6>
								{displayInput({ input: inputs[0], name: id })}
							</React.Fragment>
						)}
					</div>
				)}
			</React.Fragment>
		</Wrapper>
	);
}

HraInput.defaultProps = {
	type: 'text',
};

HraInput.propTypes = {
	type: PropTypes.oneOf(['text', 'number', 'select', 'dropdown']),
	label: PropTypes.string.isRequired,
	name: PropTypes.string,
	unit: PropTypes.string,
	number: PropTypes.number.isRequired,
	id: PropTypes.string.isRequired,
	prompt: PropTypes.string,
	inputs: PropTypes.any.isRequired,
	showInput: PropTypes.object.isRequired,
	hraInputValues: PropTypes.object.isRequired,
	input: PropTypes.object,
	onHraInputChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	const { inputs, showInput } = state.hra;
	return { hraInputValues: inputs, showInput };
};

export default connect(mapStateToProps, { onHraInputChange })(HraInput);
