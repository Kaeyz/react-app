import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './header';
import Container from '../../common/Container';
import Frame from '../../../assets/Frame.svg';
import Button from '../../common/Button';


const Wrapper = styled.div`
	background-color: ${props => props.theme.color.ui_03};
  .main {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 0rem;
		justify-content: center;
  }
	.logo_details {
		display: grid;
		grid-gap: 1.6rem;
	}
  .logo_section {
    width: 40%;
    display: grid;
    align-content: center;
  }
  .item {
  	width: 60%;
  }
  .logo_div {
    width: 10rem;
    height: 10rem;
  }
  .logo_img {
    width: 100%;
    height: 100%;
    margin-left: -1rem
  }
	.link {
		text-decoration: none;
		color: inherit;
	}

  @media screen and (max-width: ${props => props.theme.breakpoint.md}) {
    .logo_section {
      width: 100%;
			display: flex;
			margin-bottom: 2rem;
    }
    .item {
      width: 100%;
    }
		.logo_details {
			display: flex;
			align-items: center;
		}
  }
`;


export default function AuthLayout({ children, sidebar, data }) {

	const displayLogo = () => (
		<div className="logo_section">
			<div className="logo_div">
				<img src={Frame} alt="frame" className="logo_img" />
			</div>
			<div className="logo_details">
				<div className="details_text" >
					<h3>{data.title}</h3>
					<p>{data.description}</p>
				</div>
				<Button
					theme="darkGreen"
					style={{ width: '20rem', padding: '1.4rem 0rem' }} >
					<Link to={data.buttonLink} className="link">
						{data.buttonText}
					</Link>
				</Button>
			</div>
		</div>
	);

	return (
		<Wrapper>
			<Header />
			<Container>
				<div className="main">
					{ sidebar && displayLogo() }
					<div className="item">
						{children}
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}

AuthLayout.defaultProps = {
	sidebar: true,
};

AuthLayout.propTypes = {
	children: PropTypes.any.isRequired,
	sidebar: PropTypes.bool.isRequired,
	data: PropTypes.object
};