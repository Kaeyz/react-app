import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function SimpleBackdrop() {

	return (
		<Backdrop open={true}>
			<CircularProgress color="inherit" />
		</Backdrop>
	);
}
