import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import undraw_through_the_park from '../../../assets/undraw_through_the_park.svg';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  margin-bottom: 6rem;
  .paper {
    display: flex;
    align-items: center;
    height: 200px;
    position: relative;
    padding: 5.5rem 6rem;
    padding-left: 3rem;
    background: ${(props) => props.theme.color.text_10};
    border: 1px solid ${(props) => props.theme.color.ui_12};
    box-sizing: border-box;
    border-radius: 10px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      padding: 1rem;
    }
  }
  .parkImage {
    width: 300px;
    height: 210px;
     bottom: 14px;
right: 11px;
    position: absolute;
    max-width: 40%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      max-width: 32%;
      margin-right: -50px;
      right: 54px;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      bottom: -32px;
      right: 36px;
    }
  }
  .info {
    width: 100%;
    max-width: 78%;
    z-index: 1;
        @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      max-width: 68%;
    }
        @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
          max-width: 78%;
        }
    h1 {
      font-weight: bold;
      font-size: 2.4rem;
      line-height: 2.4rem;
      letter-spacing: -0.2px;
      color: ${(props) => props.theme.color.brand_02};
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        font-size: 2rem;
        line-height: 2rem;
      }
      @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
        font-size: 1.4rem;
      }
    }
    p {
      font-size: 1.6rem;
      line-height: 2.5rem;
      margin-top: 1.6rem;
      letter-spacing: 0.2px;
      color: ${(props) => props.theme.color.ui_05};
      @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
        font-size: 1.4rem;
      }
      @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
        margin-top: 1rem;
      }
    }
  }
`;
const WelcomeBanner = ({detail,emoji, name}) => {
	return (
		<Wrapper>
			<div>
				<Grid item xs={12}>
					<Paper className="paper">
						<div className="info">
							<h1>
								<span role="img" aria-label="wave">
									{emoji}
								</span>{' '}
								{`Hello, ${name && name}`}
							</h1>
							<p>
								{detail}
							</p>
						</div>
						<img
							src={undraw_through_the_park}
							alt="undraw_through_the_park"
							className="parkImage"
						/>
					</Paper>
				</Grid>{' '}
			</div>
		</Wrapper>
	);
};
WelcomeBanner.defaultProps = {
	detail:'Empowering you with the knowledge & opportunity to live the best life possible.',
	emoji:'👋🏽 ',
};

WelcomeBanner.propTypes = {
	detail: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	emoji: PropTypes.any.isRequired,
};

const mapStateToProps = state => {
	const name = state.user.user.name;
	return { name };
};


export default connect(mapStateToProps)(WelcomeBanner);