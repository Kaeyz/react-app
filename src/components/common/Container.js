import React from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
.centered{
	display: flex;
	align-items: center;
	min-height: 550px;
}
	.container {
		max-width: ${props => props.theme.breakpoint.lg};
	}
`;


const MyContainer = ({ children, flexy }) => {
	return (
		<Wrapper>
			<Container className={`${flexy} container`}>
				{children}
			</Container>
		</Wrapper>
	);
};

MyContainer.propTypes = {
	children: PropTypes.any.isRequired,
	flexy: PropTypes.any,
};

export default MyContainer;