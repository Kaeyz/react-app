import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../common/Button';
import Container from '../../common/Container';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: -webkit-fill-available;
    flex-direction: column;
    p{
			width: 605px;
			text-align:center;
    }
  }
  .submit {
    width: 20.9rem;
    margin-top: 2.7rem;
  }
`;
function CommonAuthFlowPage(props) {
	return (
		<Wrapper>
			<Container>
				<div className="content">
					<img src={props.img} alt="frame" />
					<h1>{props.title}</h1>
					<p>{props.detail} </p>
					<div className="submit">
						<Link
							to={props.link}
						>
							<Button
								theme="darkGreen"
								style={{ width: '100%' }}
							>
								{props.buttonText}
							</Button>
						</Link>
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}

CommonAuthFlowPage.propTypes = {
	img: PropTypes.any,
	title: PropTypes.string,
	detail: PropTypes.string,
	link: PropTypes.string,
	buttonText: PropTypes.string
};

export default CommonAuthFlowPage;
