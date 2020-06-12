import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './Footer';

const Wrapper = styled.div`

`;


export default function AppLayout({children}) {
	return (
		<Wrapper>
			<Header />
			{children}
			<Footer />
		</Wrapper>
	);
}


AppLayout.propTypes = {
	children: PropTypes.array.isRequired,
};