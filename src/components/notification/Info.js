import { Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const Info = ({ info, isAuthenticated }) => {

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
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.user.isAuthenticated,
		info: state.info,
	};
};

export default connect(mapStateToProps)(Info);
