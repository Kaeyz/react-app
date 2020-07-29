import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Box, Typography } from '@material-ui/core';

import styled from 'styled-components';

const Wrapper = styled(Box)`
	.MuiCircularProgress-colorPrimary {
  	color: ${props => props.theme.color.brand_01};
	}
`;

export default function CircularStatic(props) {

	const displayProgressWithLabel = (value) => (
		<Wrapper position="relative" display="inline-flex">
			<CircularProgress variant="static" {...props} />
			<Box
				top={0} left={0} bottom={0} right={0}
				position="absolute"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Typography variant="p" component="h4" >
					{`${Math.round(value)}%`}
				</Typography>
			</Box>
		</Wrapper>
	);

	return (
		<React.Fragment>
			{displayProgressWithLabel(props.value) }
		</React.Fragment>
	);
}

CircularStatic.propTypes = {
	value: PropTypes.number.isRequired
};
