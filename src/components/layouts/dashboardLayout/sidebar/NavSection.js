import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Icon from '../../../common/Icon';

const Wrapper = styled.div`
	display: grid;
	grid-gap: 0.5rem;
	.nav_item {
		display: grid;
		grid-template-columns: max-content 1fr;
		align-items: center;
		grid-gap: 1rem;
		color: inherit;
		text-decoration: none;
		padding-right: 3rem;
		:hover {
			color: ${props => props.theme.color.brand_02};
		}
	}
	.isActive {
		color: ${props => props.theme.color.brand_02};
	}
`;


function Link({item}) {
	const [iconName, setIconName] = React.useState(item.icon);
	const [isActive, setIsActive] = React.useState(false);

	return (
		<NavLink
			className="nav_item"
			to={item.link}
			isActive={match => {
				if (match) {
					setIconName(`${item.icon}IsActive`);
					setIsActive(true);
					return;
				}
				return;
			}}
		>
			<Icon name={iconName} />
			<p className={isActive && 'isActive'}>{item.text}</p>
		</NavLink>
	);
}


function NavSection({title, items}) {
	return (
		<Wrapper>
			<h5>{title}</h5>
			{items.map(item => (
				<Link item={item} key={item.text} />
			))}

		</Wrapper>
	);
}

NavSection.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired
};

Link.propTypes = {
	item: PropTypes.object.isRequired
};

export default NavSection;

