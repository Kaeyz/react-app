import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import undraw_through_the_park from '../../../assets/undraw_through_the_park.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
margin-bottom:2.4rem;
  .parkImage {
    width: 152px;
    height: 107px;
  }
  .info {
    width: 40.1rem;
    h1 {
      font-size: 3rem;
      line-height: 3.2rem;
      color: ${(props) => props.theme.color.text_01};
      margin-bottom: 1.4rem;
    }
    p {
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: ${(props) => props.theme.color.text_02};
    }
  }
`;
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(5),
		backgroundColor: '#CBF3F0',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
}));

export default function WelcomeBanner() {
	const classes = useStyles();

	return (
		<Wrapper>
			<div className={classes.root}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<div className="info">
							<h1>Welcome to ChooseLife!</h1>
							<p>
                Empowering you with the knowledge & opportunity to live the best
                life possible.
							</p>
						</div>
						<div>
							{' '}
							<img
								src={undraw_through_the_park}
								alt="undraw_through_the_park"
								className="parkImage"
							/>
						</div>
					</Paper>
				</Grid>{' '}
			</div>
		</Wrapper>
	);
}
