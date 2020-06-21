import React, { useState, useEffect } from 'react';
import { Alert } from '@material-ui/lab';
import { Snackbar, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Notify = ({ alerts }) => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setOpen(true);
	}, [alerts]);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const display = (alerts) => {
		return (
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				style={{width: '100%'}}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			>
				<Alert
					style={{width: '50%'}}
					onClose={handleClose} severity={alerts.type ? alerts.type : undefined}>
					<Typography variant="h5" component="h5">{alerts.msg}</Typography>
				</Alert>
			</Snackbar>
		);
	};

	const { status } = alerts;

	return (
		<React.Fragment>
			{status && display(alerts)}
		</React.Fragment>
	);
};

Notify.propTypes = {
	alerts: PropTypes.object,
};

const mapStateToProps = state => ({
	alerts: state.alerts
});

export default connect(mapStateToProps)(Notify);
