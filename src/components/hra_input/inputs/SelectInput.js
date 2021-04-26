import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import check_all from '../../../assets/check-all.svg';
import { validateShowHide } from '../../../store/actions/hraActions';


const Wrapper = styled.div`
	.options {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		margin-top: 1rem;
		.options-div {
			width: max-content;
			margin-right: 1.6rem;
		}
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.option {
		border: 1px solid ${(props) => props.theme.color.brand_02};
		color: ${(props) => props.theme.color.brand_02};
		width: max-content;
		width: 100%;
		justify-content: space-between;
		padding: 1.2rem 1rem;
		border-radius: 0px;
		background-color: ${(props) => props.theme.color.ui_01};
		margin-right: 1rem;
		margin-bottom: 1rem;
		cursor: pointer;
		transition: transform 0.2s;
		&:hover {
			transform: scale(0.9);
		}
		.gridy {
			display: grid;
			align-items: center;
			grid-template-columns: max-content max-content max-content;
			grid-gap: 1rem;
		}
	}

	.label {
		font-weight: normal;
		margin-top: 1.3rem;
	}
	.isSelected {
		background-color: ${(props) => props.theme.color.ui_text_01};
		transition: 2sec;
		height: 3.8rem;
	}
	.tag {
		border: 1px solid ${(props) => props.theme.color.brand_02};
		padding: 0rem 0.5rem;
		font-weight: 600;
		text-align: center;
		line-height: normal;
		border-radius: 0px;
		/* font-family: Sofia; */
		background-color: ${(props) => props.theme.color.ui_01};
	}
	.other_option {
		color: ${(props) => props.theme.color.brand_02};
		margin-top: 1rem;
		font-weight: normal;
	}
	.option_label {
		font-weight: 600;
	}
	.other_input {
		border: none;
		border-bottom: 1px solid ${(props) => props.theme.color.brand_02};
		width: 25rem;
		font-weight: normal;
		:focus {
			outline: none;
		}
	}
`;

const optionLabel = {
	1: 'A',
	2: 'B',
	3: 'C',
	4: 'D',
	5: 'E',
	6: 'F',
	7: 'G',
	8: 'H',
	9: 'I',
	10: 'J',
	11: 'K',
	12: 'L',
	13: 'M',
	14: 'N',
	15: 'O',
	16: 'P',
	17: 'Q',
	18: 'R',
	19: 'S',
	20: 'T',
};
/* eslint-disable */
function SelectInput({
	options,
	otherInput,
	otherLabel,
	name,
	value,
	onChange,
	grid,
	validateShowHide,
	showHide
}) {
	const [isSelected, setIsSelected] = React.useState('');

	React.useEffect(() => {
		setIsSelected(value);
	}, [value, setIsSelected]);

	const handleChange = (value) => {
		onChange(value, name);
		// console.clear();
		validateShowHide(name, showHide);
	};

	return (
		<Wrapper>
			<div className={`options ${classNames(grid)}`}>
				{options &&
					options.map((option, index) => (
						<div key={option.id} className="options-div">
							{option.label !== 'choose an answer' && (
								<div
									className={`option flex ${
										isSelected === option.id && 'isSelected'
									}`}
									onClick={() => handleChange(option.id)}
								>
									<div className="gridy">
										<p className="tag">
											{optionLabel[index + 1]}
										</p>
										<p className="option_label">
											{option.label}
										</p>
									</div>
									{isSelected === option.id && (
										<img src={check_all} alt="check-all" />
									)}
								</div>
							)}
						</div>
					))}
			</div>
			{otherInput && (
				<React.Fragment>
					<p className="other_option">{otherLabel}</p>
					<input type="text" className="other_input" />
				</React.Fragment>
			)}
		</Wrapper>
	);
}

SelectInput.defaultProps = {
	otherInput: false,
};

SelectInput.propTypes = {
	prompt: PropTypes.string,
	grid: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	name: PropTypes.string,
	otherInput: PropTypes.bool,
	otherLabel: PropTypes.string,
	options: PropTypes.array,
	validateShowHide: PropTypes.func,
	showHide: PropTypes.any,
};

export default connect(null, { validateShowHide })(SelectInput);
