/*eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Modal from '../common/Modal';
import Grid from '@material-ui/core/Grid';
import { CsvUpload } from '../../common/inputs';
import Button from '../../common/Button';
import csvFile from '../../../assets/csv/Batch_Upload.csv';
import { addNewEmployee } from '../../../store/actions/employeeActions';

const Wrapper = styled.div`

.inlineP	{
	font-size: 1.6rem;
	line-height: 1.6rem;
	letter-spacing: 0.2px;
	color: #0A2523;
	#link{
		color: #2EC4B6;
		text-decoration: underline;
	}
}
.smallerP	{
	font-size: 1.2rem;
	margin-top: 1rem;
}
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

const BatchUploadModal = ({addNewEmployee}) => {
	const [show, setShow] = React.useState(false);
	const [csv, setCsv] = React.useState('');
	const [errors] = React.useState('');

	const showModal = () => {
		setShow(true);
	};

	const hideModal = () => {
		setShow(false);
	};

	const onSubmit = event => {
		event.preventDefault();
		addNewEmployee(csv);
		hideModal();
	};
console.log(csv)

	return (
		<Wrapper>
			<Modal
				show={show}
				handleClose={hideModal}
				position="modal-right"
				info={<>
					<p className='inlineP'>Add multiple employees at once via a CSV upload.</p>
					<p className='inlineP smallerP'>
						To add multiple employees, click this
						<a id='link' href={csvFile} download="Batch_Upload"> link</a> to use the csv batch upload.
					</p>
				</>}
				heading={<span>Batch Upload</span>}
			>
				<div className="select">
					<Grid container className="select-input">
						<Grid item xs={12}>
							<CsvUpload
								label="Upload CSV"
								value={csv}
								onFileUpload={setCsv}
								error={errors.csv}
							/>
						</Grid>

						<Grid item xs={4} className="pd">
							<Button
								theme="darkGreen"
								onClick={onSubmit}
								isLoading={csv === "" ? true : false}
								text="Add"
								/>
							</Grid>
					</Grid>
				</div>
			</Modal>

			<Button
				theme="whiteBtn blackText"
				text="Batch Upload"
				onClick={showModal}
			/>
		</Wrapper>
	);
};

BatchUploadModal.propTypes = {
	addNewEmployee: PropTypes.func.isRequired
};

export default connect(null, {addNewEmployee})(BatchUploadModal);
