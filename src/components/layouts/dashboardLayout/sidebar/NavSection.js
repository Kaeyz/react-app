import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Icon from '../../../common/Icon';

const Wrapper = styled.div`
	.nav_item {
		display: grid;
		grid-template-columns: max-content 1fr;
		align-items: center;
		grid-gap: 1rem;
		color: inherit;
		text-decoration: none;
		padding-right: 3rem;
		:active {
			color: ${props => props.theme.color.brand_02};
		}
	}
`;


function NavSection({title, items}) {
	return (
		<Wrapper>
			<h5>{title}</h5>
			{items.map(item => (
				<Link className="nav_item" key={item.text} to={item.link}>
					<Icon name={item.icon} />
					<p>{item.text}</p>
				</Link>
			))}

		</Wrapper>
	);
}

NavSection.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired
};

export default NavSection;

