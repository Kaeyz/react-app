import React from 'react';
// import PropTypes from 'prop-types';

import styled from 'styled-components';
import Modal from '../common/Modal';
import Grid from '@material-ui/core/Grid';
import { TextInput } from '../../common/inputs';
import Button from '../../common/Button';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
.inlineP{
    font-size: 1.6rem;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
	color: ${(props) => props.theme.color.ui_06};
    #link{
        color: ${(props) => props.theme.color.brand_02};
        text-decoration: underline;
    }
}
.smallerP{
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

const BatchUploadModal = () => {
	const [show, setShow] = React.useState(false);
	const [csv, setCsv] = React.useState('');
	const [errors] = React.useState('');


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
				position="modal-right"
				info={<><p className='inlineP'>Add multiple employees at once via a CSV upload.</p> <p className='inlineP smallerP'>Download a sample CSV <Link id='link' to ="">here</Link> to see how to format your upload.</p></>}
				heading={<span>Batch Upload</span>}
			>
				<div className="select">
					<Grid container className="select-input">
						<Grid item xs={12}>
							<TextInput
								label="Upload CSV"
								value={csv}
								onChange={setCsv}
								error={errors.csv}
							/>
						</Grid>

						<Grid item xs={4} className="pd">
							<Button theme="darkGreen" text="Save Changes" />
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
};

export default BatchUploadModal;
