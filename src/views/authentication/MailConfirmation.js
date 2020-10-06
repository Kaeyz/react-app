import React from 'react';
import PropTypes from 'prop-types';
// import Header from '../../components/layouts/appLayout/header';
import mailGif from '../../assets/Sendmail.gif';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import { connect } from 'react-redux';

const Wrapper = styled.div`
  background-color: #f7fdfc;
  .body {
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: auto;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: 60%;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      width: 80%;
    }
    img {
        margin-top: -116px;
        width: 217px;
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
    }
    p {
      font-size: 2rem;
      line-height: 1.9rem;
      letter-spacing: 0.2px;
      text-decoration-line: underline;
      color: ${(props) => props.theme.color.brand_02};
      padding: 2.4rem 0 2rem 0;
      font-weight: normal;
    }
    h5 {
      font-size: 1.4rem;
      line-height: 2.5rem;
      font-weight: normal;
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        line-height: 2rem;
      }
    }
  }
  .submit {
    padding-top: 2rem;
    .button {
      width: 20rem !important;
    }
  }
`;

function MailConfirmation({email}) {
	return (
		<Wrapper>
			<Container flexy="centered">
				<div className="body">
					<img src={mailGif} alt="mail-gif" />
					<h2>A confirmation mail has been sent to the email below</h2>
					<Link to="">
						{' '}
						<p>{email}</p>
					</Link>
					<h5>click on the verification link to confirm your email address</h5>
					<Link to="/dashboard" className="submit">
						<Button theme="darkGreenBtn">Proceed to Dashboard</Button>
					</Link>
				</div>
			</Container>
		</Wrapper>
	);
}

MailConfirmation.propTypes = {
	email: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
	const email  = state.user.user.email ;
	return { email };
};

export default connect(mapStateToProps)(MailConfirmation);
