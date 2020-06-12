import React from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	.container {
		max-width: ${props => props.theme.breakpoint.lg};
	}
`;


const MyContainer = ({ children }) => {
	return (
		<Wrapper>
			<Container className="container">
				{children}
			</Container>
		</Wrapper>
	);
};

MyContainer.propTypes = {
	children: PropTypes.any.isRequired,
};

export default MyContainer;