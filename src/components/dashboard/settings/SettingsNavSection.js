import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Icon from '../settings/IconSettings';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  @media screen and ( max-width: ${(props) => props.theme.breakpoint.md}) {
	display:flex;
	background: ${(props) => props.theme.color.text_03};
    width: 100%;
	justify-content: space-around;
	}
	@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
		flex-wrap:wrap;
}
  }
  .nav_item {
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;
    grid-gap: 2.3rem;
    color: inherit;
    text-decoration: none;
		padding: 1.5rem;
		cursor: pointer;
		@media screen and ( max-width: ${(props) => props.theme.breakpoint.md}) {
			display:flex;
			padding: 0.5rem;
	}
	
		  }
    &:hover p{
		color: ${(props) => props.theme.color.text_05};
		transition: .3s;
    }
    p {
      font-size: 1.6rem;
      line-height: 1.5rem;
      color: ${(props) => props.theme.color.text_06};
	  font-weight: normal;
	  @media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
		font-size: 1.3rem;	}
	  }
    }
  }
  .isActive {
    
p{
	color: ${(props) => props.theme.color.text_05};
    font-weight: bold;
    font-size: 1.6rem;
	line-height: 1.6rem;
	@media screen and ( max-width: ${(props) => props.theme.breakpoint.md}) {
		color: ${(props) => props.theme.color.brand_02};
		background: rgba(46, 196, 182, 0.04);
border: 0.5px solid #2EC4B6;
border-radius: 4px;
padding: 1rem 3.5rem;
	}
	@media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
		font-size: 1.3rem;	}
	  }
	  }
}
  }
`;

function Link({ item }) {
	const [iconName, setIconName] = React.useState(item.icon);
	const [isActive, setIsActive] = React.useState(false);

	return (
		<React.Fragment>
			{item.link ? (
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
					<p>{item.text}</p>
				</NavLink>
			) : (
				<div className="nav_item" onClick={() => item.onClick()}>
					<Icon name={iconName} />
					<p>{item.text}</p>
				</div>
			)}
		</React.Fragment>
	);
}

function SettingsNavSection({ items }) {
	return (
		<Wrapper>
			{items.map((item) => (
				<Link item={item} key={item.text} />
			))}
		</Wrapper>
	);
}

SettingsNavSection.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired,
};

Link.propTypes = {
	item: PropTypes.object.isRequired,
};

export default SettingsNavSection;
