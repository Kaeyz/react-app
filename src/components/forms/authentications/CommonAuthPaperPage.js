import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Container from '../../common/Container';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: -webkit-fill-available;
  margin-top: 3rem;
  .paper {
    padding: 8rem;
    width: 55rem;
    height: auto;
    position: relative;
    box-shadow: none;
    .auth_title {
      text-align: center;
      font-size: 3.2rem;
      line-height: 3.1rem;
      font-weight: bold;
      color: ${(props) => props.theme.color.ui_05};
      padding-bottom: 1rem;
    }
    .auth_text {
      text-align: center;
      font-size: 1.6rem;
      line-height: 1.5rem;
      color: ${(props) => props.theme.color.text_06};
      padding-bottom: 6rem;
    }
  }
  .submit {
    margin-top: 2.6rem;
    height: 4.8rem;
    Button {
      height: 4.8rem;
    }
  }

  .img {
    padding-bottom: 4rem;
    img {
      width: 40px;
    }
  }
`;
function CommonAuthPaperPage({ children, img, alt, title, detail }) {
	return (
		<Wrapper className="flex">
			<Container>
				<Paper className="paper" elevation={3}>
					<Link to="/" className="img flex">
						<img src={img} alt={alt} />
					</Link>{' '}
					<h1 className="auth_title">{title}</h1>
					<p className="auth_text">{detail}</p>
					{children}
				</Paper>
			</Container>
		</Wrapper>
	);
}

CommonAuthPaperPage.propTypes = {
	img: PropTypes.any,
	alt: PropTypes.string,
	title: PropTypes.string,
	children: PropTypes.any,
	detail: PropTypes.string,
};

export default CommonAuthPaperPage;
