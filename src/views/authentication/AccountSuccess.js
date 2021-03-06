
import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import Button from '../../components/common/Button';
import Container from '../../components/common/Container';

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
      color: ${(props) => props.theme.color.ui_05};
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        font-size: 2.4rem;
        line-height: 130%;
      }
       /* span {
         color: ${(props) => props.theme.color.brand_02};
         font-weight: 600;
       } */
    }
    h5 {
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
					<img
						src="https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto/v1607309840/chooseLife/checkk_k1bie4.gif"
						alt="check-gif"
					/>
					<h2>
						{' '}
						Your initial registration has been successfully
						completed.
					</h2>
					<h5>
						A ChooseLife representative will contact you to complete
						your registration and begin onboarding your
						organisation.
					</h5>
					<Link to="/settings/account" className="submit">
						<Button theme="darkGreenBtn">Continue</Button>
					</Link>
				</div>
			</Container>
		</Wrapper>
	);
}

export default AccountSuccess;
