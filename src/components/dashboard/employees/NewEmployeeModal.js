import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNewEmployee } from '../../../store/actions/employeeActions';
import {onBoardEmployeeValidator} from '../../forms/validation';
import styled from 'styled-components';
import Modal from '../common/Modal';
import Grid from '@material-ui/core/Grid';
import { TextInput } from '../../common/inputs';
import Button from '../../common/Button';

const Wrapper = styled.div`
	.pd {
		padding-top: 4rem;
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
`;

const NewEmployeeModal = ({addNewEmployee}) => {
	const [show, setShow] = React.useState(false);
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [department, setDepartment] = React.useState('');
	const [branch, setBranch] = React.useState('');
	const [errors, setErrors] = React.useState({});

	const showModal = () => {
		setShow(true);
	};

	const hideModal = () => {
		setShow(false);
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		setErrors({});
		const data = {
			firstName, lastName, email };
		const { errors, isValid } = onBoardEmployeeValidator(data);
		if (!isValid) {
			return setErrors(errors);
		}

		if (department) data.department = department;
		if (branch) data.branch = branch;
		addNewEmployee(data);
		hideModal();
	};



	return (
		<Wrapper>
			<Modal
				show={show}
				handleClose={hideModal}
				position="modal-right"
				heading={<span> Add New Employee</span>}
			>
				<div className="select">
					<Grid container className="select-input">
						<Grid item xs={12}>
							<TextInput
								placeholder="Type here..."
								label="First name"
								value={firstName}
								onChange={setFirstName}
								error={errors.firstName}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextInput
								placeholder="Type here..."
								label="Last Name"
								value={lastName}
								onChange={setLastName}
								error={errors.lastName}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextInput
								placeholder="Type here..."
								label="Department"
								value={department}
								onChange={setDepartment}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextInput
								placeholder="Type here..."
								label="Branch"
								value={branch}
								onChange={setBranch}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextInput
								placeholder="Type here..."
								label="Email Address"
								type='email'
								value={email}
								onChange={setEmail}
								error={errors.email}
							/>
						</Grid>
						<Grid item xs={12} className="pd">
							<Button theme="darkGreen" text="Add Employee" onClick={onFormSubmit}/>
						</Grid>
					</Grid>
				</div>
			</Modal>

			<Button
				theme="darkGreen"
				text="Add Employee"
				onClick={showModal}
			/>
		</Wrapper>
	);
};

NewEmployeeModal.propTypes = {
	addNewEmployee: PropTypes.func.isRequired
};

export default connect(null, {addNewEmployee})(NewEmployeeModal);
