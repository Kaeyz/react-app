import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import back from '../../../assets/keyboard-backspace.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  .home-flex {
    display: flex;
    align-items: center;
    img {
      margin-right: 1rem;
    }
  }
  .MuiTypography-root {
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-family: Matteo;
    color: #9c9b7c;
  }
  .MuiTypography-colorTextPrimary {
    color: #2f3930;
  }
  .MuiSvgIcon-root {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

function handleClick(event) {
	event.preventDefault();
	// eslint-disable-next-line no-console
	console.info('You clicked a breadcrumb.');
}

export default function BreadCrumb() {
	return (
		<Wrapper>
			<Breadcrumbs
				separator={<NavigateNextIcon fontSize="small" />}
			>
				<Link href="/" onClick={handleClick} className="home-flex">
					<img src={back} alt="go_back" />
          Home
				</Link>
				<Link href="/getting-started/installation/" onClick={handleClick}>
          Assessments
				</Link>
				<Link
					color="textPrimary"
					href="/components/breadcrumbs/"
					onClick={handleClick}
				>
          Health Risk Assessments
				</Link>
			</Breadcrumbs>
		</Wrapper>
	);
}
