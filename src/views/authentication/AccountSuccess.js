/*eslint-disable */

import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import check from '../../assets/checkk.gif';

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
    img{
      width: 217px;
    }
      }
    h2 {
      font-weight: 300;
      font-size: 4rem;
      line-height: 5rem;
      letter-spacing: -0.8px;
      color: ${props => props.theme.color.ui_05};
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        font-size: 2.4rem;
        line-height: 130%;
      }
      // span {
      //   color: ${(props) => props.theme.color.brand_02};
      //   font-weight: 600;
      // }
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
			<Container flexy="centered">
				<div className="body">
        <img src={check} alt="check-gif"/>
					<h2>
						{' '}
            Your initial registration has been successfully completed.
            					</h2>
					<h5>
          A ChooseLife representative will contact you to complete your registration and begin onboarding your organisation.
					</h5>
					<Link to="/settings/account" className="submit">
						<Button theme="darkGreenBtn">Continue</Button>
					</Link>
				</div>
			</Container>
		</Wrapper>
	);
}

// AccountSuccess.propTypes = {

// }

export default AccountSuccess;
