import React from 'react';
// import PropTypes from 'prop-types'
// import Header from '../../components/layouts/appLayout/header';
import mailGif from '../../assets/mailGif.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../../components/common/Container';

import Frame from '../../assets/Frame.svg';

const Wrapper = styled.div`
background-color:#f7fdfc;
.body{
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin:auto;
    @media screen and (max-width: ${props => props.theme.breakpoint.md}) {
        width: 60%;
            }
    @media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
        width: 80%;
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
        h2{
        font-weight: 300;
        font-size: 4rem;
line-height: 5rem;
letter-spacing: -0.8px;
color: #000B0A;
@media screen and (max-width: ${props => props.theme.breakpoint.md}) {
    font-size: 2.4rem;
line-height: 130%;
        }
    }
    p{
        font-size: 2.0rem;
line-height: 1.9rem;
letter-spacing: 0.2px;
text-decoration-line: underline;
color: #2EC4B6;
padding: 2.4rem 0 2rem 0;
font-weight: normal;
    }
    h5{
        font-size: 1.4rem;
line-height: 2.5rem;
font-weight: normal;
@media screen and (max-width: ${props => props.theme.breakpoint.md}) {
    line-height: 2.0rem;
        }
    }
}
`;


function MailConfirmation() {
	return (
		<Wrapper>
			{/* <Header /> */}
			<Container flexy='centered'>

				<div className='body'>
					<Link to='/' className="logo_Link">
						<img src={Frame} alt="frame" className="logo_img" />
					</Link>
					<img src={mailGif} alt="mail-gif"/>
					<h2>A confirmation mail has been sent to the email below</h2>
					<Link to=''> <p>tolu.imani@gmail.com</p></Link>
					<h5>click on the verification link to confirm your email address</h5>
				</div>
			</Container>

		</Wrapper>
	);
}

// MailConfirmation.propTypes = {

// }

export default MailConfirmation;
