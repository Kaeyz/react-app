import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Drawer from './Drawer';

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: max-content max-content;
	grid-gap: 6rem;
	align-items: center;

	img{
		height: 55px;
	}
	.white{
		color: ${props => props.theme.color.text_03};
	}
	.black{
		color: ${props => props.theme.color.text_05};
	}
`;

function Logo({brand}) {
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
	brand: PropTypes.any.isRequired,
};

export default Logo;
