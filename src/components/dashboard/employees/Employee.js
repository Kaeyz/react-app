import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { suspendEmployee, unSuspendEmployee } from '../../../store/actions/employeeActions';
import styled from 'styled-components';
import Modal from '../common/Modal';
import Button from '../../common/Button';
import Grid from '@material-ui/core/Grid';

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
			border: 1px solid ${(props) => props.theme.color.ui_08};
			color: ${(props) => props.theme.color.text_05};
			text-align: center;
			border-radius: 6px;
			padding: 0;
			position: absolute;
			z-index: 1;
			left: -83px;
			top: 30px;
		}
	}
	.select{
		.flex{
				justify-content: space-between;
					padding-bottom: 2rem;
					p{
						@media screen and ( max-width: ${props => props.theme.breakpoint.sm}) {
							font-size:1.3rem;
						}
					}
				}
	}
	.select-input{
			font-weight: 300;
			font-size: 1.4rem;
			line-height: 2.2rem;
			color: ${(props) => props.theme.color.ui_05};
	}
	.pd{
		button{
			width:100% !important;
		}
	}
`;

const Employee = ({ employee, suspendEmployee, unSuspendEmployee }) => {

	//const { _id } = employee;
	const [show, setShow] = React.useState(false);

	const showModal = () => {
		setShow(true);
	};

	const hideModal = () => {
		setShow(false);
	};

	return (
		<Wrapper>
			<Modal
				show={show}
				handleClose={hideModal}
				position='modal-right'
				heading={<span> View Employee</span>}
			>
				<div className="select">
					<div className="flex">
						<p>Employee Name</p>
						<p className='bold'>Durodola Anuoluwapo</p>
					</div>
					<div className="flex">
						<p>Department</p>
						<p className='bold'>Business Department</p>
					</div>
					<div className="flex">   <p>Branch</p>
						<p className='bold'>Lorem Ipsum</p></div>
					<div className="flex"><p>Email Address</p>
						<p className='bold'>Durodola@total.com.ng</p></div>
					<div className="flex">
						<p>Date Created</p>
						<p className='bold'>March 28,2020</p>
					</div>
				</div>
				<Grid container>
					<Grid item xs={12} className="pd">
						<Button theme="darkGreen" text="Suspend Employee" onClick={() => suspendEmployee()} />
					</Grid>
					<Grid item xs={12} className="pd">
						<Button theme="pinkBtn" text="Remove Employee" />
					</Grid>
				</Grid>
			</Modal>
			<p className="trigger" onClick={showModal}>
				View <span className="tooltiptext">click to view employee</span>
			</p>
		</Wrapper>
	);
};

Employee.propTypes = {
	employee: PropTypes.object.isRequired,
	suspendEmployee: PropTypes.func.isRequired,
	unSuspendEmployee: PropTypes.func.isRequired,
};

export default connect(null, {suspendEmployee, unSuspendEmployee})(Employee);
