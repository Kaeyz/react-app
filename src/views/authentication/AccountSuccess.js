import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import Frame from '../../assets/Frame.svg';

const Wrapper = styled.div`
  background-color: #f7fdfc;
  .body {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: auto;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: 70%;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      width: 100%;
    }
    .logo_Link {
      padding-bottom: 5rem;
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
    h2 {
      font-weight: 300;
      font-size: 4rem;
      line-height: 5rem;
      letter-spacing: -0.8px;
      color: #000b0a;
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        font-size: 2.4rem;
        line-height: 130%;
      }
      span {
        color: ${(props) => props.theme.color.brand_02};
        font-weight: 600;
      }
    }
    h5 {
      font-size: 1.4rem;
      line-height: 2.5rem;
      font-weight: normal;
      padding: 2rem 0 4rem 0;
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        line-height: 2rem;
      }
    }
  }
  .submit {
    .button {
      width: 20rem !important;
    }
  }
`;

function AccountSuccess() {
	return (
		<Wrapper>
			{/* <Header /> */}
			<Container flexy="centered">
				<div className="body">
					<Link to="/" className="logo_Link">
						<img src={Frame} alt="frame" className="logo_img" />
					</Link>
					<h2>
						{' '}
            Congratulations, you’ve created a <span>Choose Life</span> account!
					</h2>
					<h5>
            Start benefiting from the wellness experience. For companies looking
            on increasing productivity, and improving organization wellness.
					</h5>
					<Link to="/dashboard" className="submit">
						<Button theme="darkGreenBtn">Proceed to Dashboard</Button>
					</Link>
				</div>
			</Container>
		</Wrapper>
	);
}

// AccountSuccess.propTypes = {

// }

export default AccountSuccess;
