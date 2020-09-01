import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import Header from './header';
import Container from '../../common/Container';
import Frame from '../../../assets/Frame.svg';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.brand_05};
  min-height: 100vh;
  .main {
    display: flex;
    flex-wrap: wrap;
    padding: 5rem 0rem;
    align-items: start;
    justify-content: space-between;
  }
  .alignCenter {
    align-items: center;
  }
  .logo_details {
    display: grid;
    grid-gap: 1.6rem;
    h3 {
      font-weight: bold;
      font-size: 4rem;
      line-height: 5rem;
      letter-spacing: -0.8px;
      color: ${(props) => props.theme.color.ui_05};
      padding: 1rem 0 2rem 0;
      max-width: 370px;
      @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
        font-size: 3rem;
        line-height: 4rem;
      }
    }
    p {
      font-size: 1.6rem;
      line-height: 2.5rem;
      color: ${(props) => props.theme.color.text_06};
    }
  }
  .logo_section {
    width: 46%;
    display: grid;
    align-content: center;
  }
  .item {
    width: 50%;
  }
  .logo_div {
    width: 10rem;
    height: 10rem;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      height: auto;
    }
  }
  .logo_img {
    width: 77.33px;
    height: 80px;
    margin-left: -1rem;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      width: 38.67px;
      height: 40px;
      margin-left: 0rem;
    }
  }
  .link {
    text-decoration: none;
    color: inherit;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    .logo_section {
      width: 100%;
      margin-bottom: 2rem;
    }
    .item {
      width: 100%;
      margin-top: 2rem;
    }
    .logo_details {
      display: flex;
      align-items: center;
    }
  }
`;

export default function AuthLayout({ children, sidebar, data, centered }) {
	const displayLogo = () => (
		<div className="logo_section">
			<Link to='/' className="logo_Link">
				<img src={Frame} alt="frame" className="logo_img" />
			</Link>
			<div className="logo_details">
				<div className="details_text">
					<h3>{data.title}</h3>
					<p>{data.description}</p>
				</div>
				{/* <Button
					theme="darkGreen"
					style={{ width: '20rem', padding: '1.4rem 0rem' }} >
					<Link to={data.buttonLink} className="link">
						{data.buttonText}
					</Link>
				</Button> */}
			</div>
		</div>
	);

	return (
		<Wrapper>
			{/* <Header /> */}
			<Container flexy="centered">
				<div className={`${centered} main`}>
					{sidebar && displayLogo()}
					<div className="item">{children}</div>
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
	data: PropTypes.object,
};
