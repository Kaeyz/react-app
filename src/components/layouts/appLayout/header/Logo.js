import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import brand from '../../../../assets/brand.png';
import Drawer from './Drawer';

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: max-content max-content;
	grid-gap: 1rem;
`;

function Logo() {
	return (
		<Wrapper>
			<Drawer />
			<Link to="/" className="nav-title">
				<img src={brand} alt="logo" />
			</Link>
		</Wrapper>
	);
}

Logo.propTypes = {

};

export default Logo;

