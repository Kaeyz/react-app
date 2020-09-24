import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';

const Wrapper = styled.div`
.MuiTypography-caption{
	font-weight: bold;
font-size: 1.4rem;
line-height: 1.4rem;
color: ${(props) => props.theme.color.text_05};
font-family: Matteo;
}
.MuiCircularProgress-static{
	transform: rotate(90deg) !important;
	width: 50px !important;
    height: 50px !important;
}
`;
function CircularProgressWithLabel(props) {
	return (
		<Wrapper>
			<Box position="relative" display="inline-flex">
				<CircularProgress variant="static" {...props} />
				<Box
					top={0}
					left={0}
					bottom={0}
					right={0}
					position="absolute"
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<Typography variant="caption" component="div">
						{`${Math.round(props.value)}%`}
					</Typography>
				</Box>
			</Box>
		</Wrapper>
	);
}

CircularProgressWithLabel.propTypes = {
	/**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
	value: PropTypes.number.isRequired,
};

export default function CircularStatic({value}) {

	return <CircularProgressWithLabel value={value || 0} />;
}

CircularStatic.propTypes = {
	value: PropTypes.number
};