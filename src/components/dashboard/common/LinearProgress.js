import React from 'react';
import PropTypes from 'prop-types';
import { LinearProgress } from '@material-ui/core';

import styled from 'styled-components';

const Wrapper = styled.div`
	.MuiLinearProgress-barColorPrimary {
 	 	background-color: ${props => props.theme.color.brand_01} ;
	}
`;

export default function LinearProgressBar(props) {
	return (
		<Wrapper>
			<LinearProgress variant="buffer" valueBuffer={100} {...props} />
		</Wrapper>
	);
}

LinearProgress.propTypes = {
	value: PropTypes.number.isRequired,
};

