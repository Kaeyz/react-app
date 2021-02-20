/* eslint-disable no-unused-vars */
import { Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

/* eslint-disable */
const Info = ({ info, isAuthenticated }) => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setOpen(true);
	}, [info]);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const { status } = info;

	return (
		<React.Fragment>
			{isAuthenticated && (
				!status && (<Alert
					// style={{width: '50%'}}
					severity="info"
				>
					<Typography variant="h5" component="h5">
						{info.msg}
					</Typography>
				</Alert>)
			)}
		</React.Fragment>
	);
};

Info.propTypes = {
	info: PropTypes.object,
};

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.user.isAuthenticated,
		info: state.info,
	};
};

export default connect(mapStateToProps)(Info);
