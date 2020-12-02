import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import check from '../../../assets/check-all.svg';

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	grid-gap: 1rem;
	height: max-content;
	.options {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		margin-top: 1rem;
	}
	.options-div{
		border: 1px solid ${props => props.theme.color.brand_02};
		color: ${props => props.theme.color.brand_02};
		min-width: 10rem;
		width: max-content;
		padding: 1rem;
		border-radius: 7px;
		background-color: ${props => props.theme.color.ui_01};
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		transition: transform .2s;
		&:hover{
			transform: scale(0.9);
		}
	}
	.selected {
		background-color: ${props => props.theme.color.ui_text_01};
		transition: 2sec;
	}
	.label {
		font-size: 1.3rem;
	}

`;


const MultiSelectInput = ({options, values, onChange}) => {


	const isSelected = (value) => {
		return values.includes(value);
	};

	const onSelect = (value) => {
		!isSelected(value) && onChange([...values, value]);
	};

	const deSelect = (value) => {
		if (isSelected(value)) {
			const filtered = values.filter(item => item !== value);
			return onChange(filtered);
		}
		return;
	};

	return (
		<Wrapper>
			{options.map((option) => (
				<div
					className={`options-div ${isSelected(option.value) && 'selected'}`} key={option.value}
					onClick={() => {
						isSelected(option.value) ? deSelect(option.value) : onSelect(option.value);
					}}
				>
					<p className="label">{option.label}</p>
					{isSelected(option.value) && <img src={check} alt="check-all" />}
				</div>
			))}
		</Wrapper>
	);
};

MultiSelectInput.propTypes = {
	options: PropTypes.array.isRequired,
	values: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
};

export {MultiSelectInput};
