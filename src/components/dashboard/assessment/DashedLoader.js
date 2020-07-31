import React from 'react';
import { CircularProgress, Box, Typography } from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  .MuiCircularProgress-circleStatic {
    // stroke-width: 7.84;
  }
  .MuiCircularProgress-colorPrimary {
    color: #2EC4B6;
    position: absolute;
    // color: #D6D8D3;
  }

  .MuiCircularProgress-svg,
  .MuiCircularProgress-root {
    width: 11.8rem !important;
    height: 11.8rem !important;
  }
  .bottom {
	color: #D6D8D3;
	z-index:22;
	position: relative;
	.MuiCircularProgress-circle{
		stroke-dasharray: 1, 3 !important;
    // stroke-width: 7.84;
	stroke-dashoffset: 5px !important;
	}
  }
  .MuiTypography-colorTextSecondary {
    font-size: 24px;
    line-height: 29px;
    font-family: Matteo;
  }
`;

function CircularProgressWithLabel(props) {
	return (
		<Wrapper>
			<Box position="relative" display="inline-flex">
				<CircularProgress
					variant="determinate"
					className="bottom"
					size={40}
					thickness={4}
					{...props}
					value={100}
				/>
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
					<Typography
						variant="caption"
						component="div"
						color="textSecondary"
					>{`${Math.round(props.value)}%`}</Typography>
				</Box>
			</Box>
		</Wrapper>
	);
}

const CircularStatic = ({ value }) => {
	CircularProgressWithLabel.propTypes = {
		value: PropTypes.number.isRequired,
	};
	return <CircularProgressWithLabel value={value || 0 } />;
};

CircularStatic.defaultProps = {
	value: 0,
};

CircularStatic.propTypes = {
	value: PropTypes.number.isRequired
};


export default CircularStatic;
