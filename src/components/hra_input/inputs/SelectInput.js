import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import check_all from '../../../assets/check-all.svg';

const Wrapper = styled.div`
	.options {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		margin-top: 1rem;
	}
	.option {
		border: 1px solid ${props => props.theme.color.brand_02};
		color: ${props => props.theme.color.brand_02};
		width: max-content;
		display: grid;
		align-items: center;
		grid-template-columns: max-content max-content max-content;
		grid-gap: 1rem;
		padding: 1.5rem 2rem;
		border-radius: 7px;
		background-color: ${props => props.theme.color.ui_01};
		margin-right: 1rem;
	}
	.label {
		font-size: 1.4rem;
		font-weight: normal;
		margin-top: 1.5rem;
	}
	.isSelected {
		background-color: ${props => props.theme.color.ui_text_01};
	}
	.tag {
		border: 1px solid ${props => props.theme.color.brand_02};
		padding: 0rem 0.5rem;
		font-size: 1.4rem;
		font-weight: normal;
		text-align: center;
		line-height: normal;
		border-radius: 5px;
		background-color: ${props => props.theme.color.ui_01};
	}
	.other_option {
		color: ${props => props.theme.color.brand_02};
		margin-top: 1rem;
		font-size: 1.4rem;
		font-weight: normal;
	}
	.option_label {
		font-size: 1.4rem;
		font-weight: normal;
	}
	.other_input {
		border: none;
		border-bottom: 1px solid ${props => props.theme.color.brand_02};
		width: 25rem;
		font-size: 1.4rem;
		font-weight: normal;
		:focus {
			outline: none;
		}
	}
`;

function SelectInput({label, values, otherInput, otherLabel}) {
	return (
		<Wrapper>
			<p className="label" >{label}</p>
			<div className="options">
				<div className="option isSelected">
					<p className="tag">A</p>
					<p className="option_label">Selected</p>
					<img src={check_all} alt="check-all"/>
				</div>
				{values && values.map((value) => (
					<div key={value.id} >
						{
							value.label !== 'choose an answer' &&
						<div className="option">
							<p className="tag">B</p>
							<p className="option_label" >{value.label}</p>
						</div>
						}
					</div>
				))}
			</div>
			{
				otherInput &&
				<React.Fragment>
					<p className="other_option">{otherLabel}</p>
					<input type="text" className="other_input" />
				</React.Fragment>
			}
		</Wrapper>
	);
}

SelectInput.defaultProps = {
	otherInput: false
};

SelectInput.propTypes = {
	label: PropTypes.string,
	otherInput: PropTypes.bool,
	otherLabel: PropTypes.string,
	values: PropTypes.array
};

export default SelectInput;

