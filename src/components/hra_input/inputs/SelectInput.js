import React from 'react';
//import PropTypes from 'prop-types'
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

function SelectInput() {
	return (
		<Wrapper>
			<p className="label" >1. How many times have you washed your hands today?</p>
			<div className="options">
				<div className="option isSelected">
					<p className="tag">A</p>
					<p className="label">Never Smoke</p>
					<img src={check_all} alt="check-all"/>
				</div>
				<div className="option">
					<p className="tag">B</p>
					<p className="label" >Never Smoke</p>
				</div>
			</div>
			<p className="other_option">Other? Please identify:</p>
			<input type="text" className="other_input" />
		</Wrapper>
	);
}

//SelectInput.propTypes = {}

export default SelectInput;

