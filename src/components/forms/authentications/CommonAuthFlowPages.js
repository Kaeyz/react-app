import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../common/Button';
import Container from '../../common/Container';

const Wrapper = styled.div`
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: -webkit-fill-available;
	flex-direction: column;
	width: 100%;
	.images{
		position: relative;
		img{
			width: 381px;
		}
		.absImg{
			top: 36%;
			width: 181px;
			position: absolute;
			left: 36%;
		}
		}
	}

	.pd{
		padding: 5rem 0  3rem 0;
		font-weight: 600;
		font-size: 3rem;
		line-height: 3.2rem;
		text-align: center;
		color: ${(props) => props.theme.color.text_01};
		width: 52%;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			width:100% ;
			font-size: 2rem;
		}

	}
    p{
			text-align:center;
    }
  }
  .submit {
    width: 20.9rem;
    margin-top: 2.7rem;
  }
`;
function CommonAuthFlowPage({ absImg, link, title, detail, buttonText, img, onClick }) {
	return (
		<Wrapper>
			<Container flexy="centered">
				<div className="content">
					<div className="images">
						<img src={img} alt="frame" />
						<img className="absImg" src={absImg} alt="" />
					</div>
					<h1 className="pd">{title}</h1>
					<p>{detail} </p>
					<div className="submit">
						{title === 'Reset Link Sent!' ? (
							<Button theme="darkGreen" style={{ width: '100%' }} onClick={onClick}>
								{buttonText}
							</Button>
						) : (
							<Link to={link}>
								<Button theme="darkGreen" style={{ width: '100%' }}>
									{buttonText}
								</Button>
							</Link>
						)}
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}

CommonAuthFlowPage.propTypes = {
	img: PropTypes.any,
	absImg: PropTypes.any,
	title: PropTypes.string,
	detail: PropTypes.string,
	link: PropTypes.string,
	buttonText: PropTypes.string,
	onClick: PropTypes.func,
};

export default CommonAuthFlowPage;
