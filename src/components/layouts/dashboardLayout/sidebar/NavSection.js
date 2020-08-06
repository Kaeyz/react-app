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
		padding: 1rem;
		cursor: pointer;

    &:hover p{
		color: ${(props) => props.theme.color.text_05};
		transition: .3s;
    }
    p {
      font-size: 15px;
      line-height: 14px;
      letter-spacing: -0.4px;
      color: ${(props) => props.theme.color.text_04};
	  font-weight: normal;

    }
  }
  .isActive {
    line-height: 15px;
	background: rgba(46, 196, 182, 0.04);
border: 1px solid #2EC4B6;
border-radius: 4px;
padding: 1.8rem;
p{
	color: ${(props) => props.theme.color.text_05};

}
  }
`;

function Link({ item }) {
	const [iconName, setIconName] = React.useState(item.icon);
	const [isActive, setIsActive] = React.useState(false);

	return (
		<React.Fragment>

			{
				item.link ?
					<NavLink
						className={`${isActive ? 'isActive' : ''} nav_item`}
						to={item.link}
						isActive={(match) => {
							if (match) {
								setIconName(`${item.icon}IsActive`);
								setIsActive(true);
								return;
							}
							return;
						}}
					>
						<Icon name={iconName} />
						<p >{item.text}</p>
					</NavLink>
					:
					<div className="nav_item" onClick={() => item.onClick()}>
						<Icon name={iconName} />
						<p >{item.text}</p>
					</div>

			}
		</React.Fragment>
	);
}

function NavSection({ items }) {
	return (
		<Wrapper>
			{items.map((item) => (
				<Link item={item} key={item.text} />
			))}
		</Wrapper>
	);
}

NavSection.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired,
};

Link.propTypes = {
	item: PropTypes.object.isRequired,
};

export default NavSection;
