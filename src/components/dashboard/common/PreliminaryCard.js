import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '../../common/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  .orange {
    background: rgba(243, 121, 32, 0.03);
    border: 1px solid ${(props) => props.theme.color.ui_08};
  }
  .yellow {
    background: rgba(255, 198, 36, 0.06);
    border: 1px solid ${props => props.theme.color.ui_11};
  }
  .green {
    background: rgba(141, 184, 56, 0.03);
    border: 1px solid ${(props) => props.theme.color.brand_04};
  }
  .paper {
    flex-direction: column;
    align-items: start;
    height: 320px;
    position: relative;
    padding: 3rem;
    padding-top: 10rem;
        overflow: hidden;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      height: 210px;
      display: block;
      padding: 3rem;
    }
    img {
      right: 24px;
      bottom: -11px;
      position: absolute;
    }
  }
  h1 {
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    color: ${props => props.theme.color.ui_05};
  }
  p {
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 2.5rem;
    letter-spacing: 0.2px;
    color: ${props => props.theme.color.ui_05};
    margin: 1rem 0 2rem 0;
  }
`;

const PreliminaryCard = ({
	fontSize,
	backgroundColor,
	cardInfo,
	where,
	btnTheme,
	btnValue,
  image,
  details
}) => {
	return (
		<Wrapper>
			<Paper className={`paper ${backgroundColor}`}>
				<h1 className={`${fontSize}`}>{cardInfo}</h1>
				<p>
         {details}
				</p>
				<Link to={where || '/'}>
					<Button theme={btnTheme}>{btnValue}</Button>
				</Link>
				<img src={image} alt="Flower" />
			</Paper>
		</Wrapper>
	);
};

PreliminaryCard.propTypes = {
	image: PropTypes.any,
	cardValue: PropTypes.any,
	cardInfo: PropTypes.any,
	fontSize: PropTypes.any,
	where: PropTypes.string,
	btnTheme: PropTypes.any,
	btnValue: PropTypes.string,
	backgroundColor: PropTypes.string.isRequired,
	details: PropTypes.string.isRequired,
};

export default PreliminaryCard;
