import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchHraResponse } from '../../../store/actions/hraActions';

import DashboardLayout from '../../../components/layouts/dashboardLayout/DashboardLayout';
import ProgressSection from '../../../components/dashboard/common/ProgressSection';
import PreliminaryCard from '../../../components/dashboard/common/PreliminaryCard';
import Button from '../../../components/common/Button';
import HraImg from '../../../assets/hraImg.svg';
import inbodyImg from '../../../assets/inbodyImg.svg';
import mealImg from '../../../assets/mealImg.svg';


const Wrapper = styled.div`
  .content {
    padding: 2rem;
  }
  .heading {
    color: ${(props) => props.theme.color.text_01};
    font-weight: 600;

    h3 {
      font-size: 1.8rem;
      line-height: 2.4rem;
      margin: 3.7rem 0;
    }
    p {
      font-size: 3rem;
      line-height: 3.2rem;
    }
  }
  .lower{
	.info-2{
	  font-size: 16px;
	  line-height: 24px;
	  color: ${(props) => props.theme.color.text_02};
	  margin: 4.8rem 0 1.5rem 0;
	}
}
`;

const DashboardAssessment = ({ fetchHraResponse, percentageCompleted }) => {

	React.useEffect(() => {
		fetchHraResponse();
	}, [fetchHraResponse]);

	return (
		<DashboardLayout>
			<Wrapper>
				<main className="content">
					<div className="heading">
						<p>Assessments</p>
						<h3>Three steps to understanding your health with ChooseLife.</h3>
					</div>

					<div className="lower">
						<Grid container spacing={3}>
							<Grid item xs={3}>
								<PreliminaryCard
									btnValue={percentageCompleted > 0 ? 'Continue' : 'Start'}
									cardInfo='Health Risk Assessment'
									Image={HraImg}
									btnTheme="white"
									backgroundColor="white"
									where={'/assessment/health'}
								/>
							</Grid>
							<Grid item xs={3}>
								<PreliminaryCard
									btnValue='Start'
									cardInfo='InBody Comprehensive Check'
									Image={inbodyImg}
									btnTheme="white"
									backgroundColor="white"
								/>
							</Grid>

							<Grid item xs={3}>
								<PreliminaryCard
									btnValue='Start'
									cardInfo={'Meal & Fitness Guides'}
									Image={mealImg}
									btnTheme="white"
									backgroundColor="white"
								/>
							</Grid>
						</Grid>
						<p className="info-2">4,000 others have completed this assessment. Fill and qualify for the Wellness reward!</p>
						<Link to="">
							<Button value="View Leaderboard" theme="green">
          View Leaderboard
							</Button>
						</Link>

						{
							percentageCompleted > 0 &&
							<Grid container spacing={3}  style={{marginTop:'5.4rem'}}>
								<Grid item xs={6}>
									<ProgressSection
										percentageCompleted={percentageCompleted}
									/>
+        				</Grid>
+        			</Grid>
						}
					</div>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
};

DashboardAssessment.propTypes = {
	fetchHraResponse: PropTypes.func.isRequired,
	percentageCompleted: PropTypes.number.isRequired,
};

const mapStateToProps = state => {
	const percentageCompleted = state.hra.percentageCompleted;
	return { percentageCompleted };
};

export default connect(mapStateToProps, { fetchHraResponse })(DashboardAssessment);
