import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import icon from '../../assets/file_icon.svg';
import { Paper, Divider } from '@material-ui/core';

const Wrapper = styled.div`
  .paper {
    background: rgba(46, 196, 182, 0.06);
    border: 1px solid ${props => props.theme.color.ui_12};
    border-radius: 10px;
    padding: 2rem;
    box-shadow: none;
  }
  .MuiDivider-root{
    margin: 1rem 0;
  }
 .subHeading{
     p{
        font-weight: bold;
        font-size: 2rem;
        line-height: 2rem;
               letter-spacing: 0.2px;
               color: ${props => props.theme.color.ui_05};
     }
 }
 .grid{
     display: grid;
     grid-template-columns: 1fr 1fr;
}
 }
 .detail{
     .info{
        font-size: 1.3rem;
        line-height: 2.5rem;
        letter-spacing: 0.2px;
              color: ${props => props.theme.color.ui_05};
                  padding-bottom: 3rem;
     }
 }
 .grid{
     .bold{
        font-weight: bold;
        font-size: 1.1rem;
        line-height: 1.1rem;
        letter-spacing: 0.2px;
        text-transform: uppercase;
                color: ${props => props.theme.color.ui_06};
                padding-bottom: 1rem;
     }
     .date{
        font-size: 1.4rem;
        line-height: 1.3rem;
               letter-spacing: 0.2px;
        color: ${props => props.theme.color.ui_05};
     }
 }
`;

function AppointReward({cardTheme}) {
	return (
		<Wrapper>
			<Paper className={`paper ${cardTheme}`} >
				<div>
					<div className="subHeading flex">
						<img src={icon} alt="icon"/>
						<p>Reward Title</p>
					</div>
					<Divider/>
					<div className="detail">
						<p className="info">
                        Empowering you with the knowledge and loren opportunity to live the best life possible.
						</p>
						<div className="sub-info">
							<div className="grid">
								<div><p className='bold'>Start Date </p> <p className='date'>Feb 24, 2019</p></div>
								<div><p className='bold'>End Date</p> <p className='date'>June 09, 2019</p></div>
							</div>
						</div>
					</div>
				</div>
			</Paper>
		</Wrapper>
	);
}

// AppointReward.propTypes = {

// }

export default AppointReward;
