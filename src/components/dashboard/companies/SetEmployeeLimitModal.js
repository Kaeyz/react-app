import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setEmployeeLimit } from '../../../store/actions/companyActions';
import styled from 'styled-components';
import Modal from '../../dashboard/common/Modal';
import Grid from '@material-ui/core/Grid';
import {NumberInput} from '../../common/inputs';
import Button from '../../../components/common/Button';

const Wrapper = styled.div`
	.pd {
		padding-bottom: 4rem;
	}
	.trigger {
		text-decoration-line: underline;
		cursor: pointer;
		position: relative;
		&:hover .tooltiptext {
			visibility: visible;
		}
		.tooltiptext {
			visibility: hidden;
			width: 112px;
			font-size: 1.2rem;
			background: rgba(243, 121, 32, 0.05);
			border: 1px solid #f37920;
			color: ${(props) => props.theme.color.text_05};
			text-align: center;
			border-radius: 6px;
			padding: 0;
			position: absolute;
			z-index: 1;
			left: -83px;
			top: -43px;
				}
	}
	.select {
		padding-bottom: 2rem;
		.flex {
			justify-content: space-between;
		}
	}
	.select-input {
		font-weight: 300;
		font-size: 1.4rem;
		line-height: 2.2rem;
		color: ${(props) => props.theme.color.ui_05};
	}
	#mb{
		margin-bottom: 120px;
	}
`;

const SetEmployeeLimitModal = ({ setEmployeeLimit, companyId }) => {

	const [show, setShow] = React.useState(false);
	const [amount, setAmount] = React.useState(0);

	const showModal = () => {
		setShow(true);
	};

	const hideModal = () => {
		setShow(false);
	};

	const onSetLimitClick = (event) => {
		event.preventDefault();
		setEmployeeLimit(amount, companyId);
		hideModal();
	};

	return (
		<Wrapper>

			<Modal
				show={show}
				handleClose={hideModal}
				heading={<span> Set Employee limit</span>}
				info='Id et elementum arcu convallis ornare cursus nisl cursus. Vulputate adipiscing iaculis orci placerat ac..'
			>
				<Grid item xs={12}>
					<NumberInput
						label="Employee Limit"
						placeholder="200"
						value={amount}
						onChange={setAmount}
					/>
				</Grid>
				<Grid item xs={3} id="mb">
					<Button theme="darkGreen" text="Save Changes" onClick={onSetLimitClick} />
				</Grid>

			</Modal>
			<p className="trigger" onClick={showModal}>
				Edit Limit
				<span className="tooltiptext">click to set employee limit</span>
			</p>

		</Wrapper>
	);
};

SetEmployeeLimitModal.propTypes = {
	companyId: PropTypes.string.isRequired,
	setEmployeeLimit: PropTypes.func.isRequired
};

export default connect(null, {setEmployeeLimit})(SetEmployeeLimitModal);
