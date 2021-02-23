/*eslint-disable */

import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import csvFile from '../../../assets/excel/batch_upload.xlsx';
import { addNewEmployee } from '../../../store/actions/employeeActions';
import Button from '../../common/Button';
import { CsvUpload } from '../../common/inputs';
import Modal from '../common/Modal';

const Wrapper = styled.div`
	.inlineP {
		font-size: 1.5rem;
		line-height: 2.1rem;
		letter-spacing: 0.6px;
		color: #0a2523;
		padding-bottom: 15px;
		#link {
			color: #2ec4b6;
			text-decoration: underline;
		}
	}
	.smallerP {
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

const BatchUploadModal = ({ addNewEmployee }) => {
	const [show, setShow] = React.useState(false);
	const [csv, setCsv] = React.useState([]);
	const [errors, setErrors] = React.useState('');

	const showModal = () => {
		setShow(true);
	};

	const hideModal = () => {
		setShow(false);
	};

	React.useEffect(() => {
		// console.log(errors)
		setErrors(errors);
		// return () => setErrors('');
	}, [errors]);

	const onSubmit = (event) => {
		event.preventDefault();
		setCsv(csv)
		if (csv.length === 0) {
			// console.log('inside batch')
			setErrors('csv file not present');
			return;
		}
		addNewEmployee(csv);
		hideModal();
	};

	return (
		<Wrapper>
			<Modal
				show={show}
				handleClose={hideModal}
				position="modal-right"
				info={
					<>
						<p className="inlineP">
							To add multiple employees,
							<a id="link" href={csvFile} download="Batch_Upload">
								{' '}
								click this link	to see the sample excel file.
							</a>{' '}
						</p>
						<p
							className="inlineP"
							style={{
								fontStyle: 'italic',
								color: '#646060',
								fontSize: '1.1rem',
							}}
						>
							The format of the excel file must be followed
							properly, if you encounter any error while using
							this multiple upload, contact the chooselife admin
							for help.
						</p>
					</>
				}
				heading={<span>Batch Upload</span>}
			>
				<div className="select">
					<Grid container className="select-input">
						<Grid item xs={12}>
							<CsvUpload
								label="Upload CSV"
								value={csv}
								onFileUpload={setCsv}
								csvError={setErrors}
								error={errors}
							/>
						</Grid>

						<Grid item xs={4} className="pd">
							<Button
								theme="darkGreen"
								onClick={onSubmit}
								text="Add"
								// isLoading={csv.length === 0 }
								title={csv === '' ? 'not allowed' : ''}
							/>
						</Grid>
					</Grid>
				</div>
			</Modal>

			<Button theme="whiteBtn" text="Batch Upload" onClick={showModal} />
		</Wrapper>
	);
};

BatchUploadModal.propTypes = {
  addNewEmployee: PropTypes.func
}


export default connect(null, { addNewEmployee })(BatchUploadModal);
