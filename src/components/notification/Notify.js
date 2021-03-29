import { Snackbar, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
	@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
		margin-top: 45px;
	}
	@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		margin-top: 45px;
	}
`;

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
			<div>
				<Snackbar
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}
					style={{ width: '100%' }}
					anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				>
					<Alert
						style={{ width: '50%' }}
						onClose={handleClose}
						severity={alerts.type ? alerts.type : undefined}
					>
						<Typography variant="h5" component="h5">
							{alerts.msg}
						</Typography>
					</Alert>
				</Snackbar>
			</div>
		);
	};

	const { status } = alerts;
	return <Wrapper>{status && display(alerts)}</Wrapper>;
};

Notify.propTypes = {
	alerts: PropTypes.object,
	isAuthenticated: PropTypes.any,
};

const mapStateToProps = (state) => {
	return {
		alerts: state.alerts,
	};
};

export default connect(mapStateToProps)(Notify);
