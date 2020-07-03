import React from 'react';
import DashboardLayout from '../../../components/layouts/dashboardLayout/DashboardLayout';
// import Container from '../../components/common/Container';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import PreliminaryCard from '../../../components/dashboard/common/PreliminaryCard';
import HraImg from '../../../assets/hraImg.svg';
import inbodyImg from '../../../assets/inbodyImg.svg';
import mealImg from '../../../assets/mealImg.svg';
import ProgressSection from '../../../components/dashboard/common/ProgressSection';
import Button from '../../../components/common/Button';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  .content {
    flex-frow: 1;
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

const DashboardAssessment = () => {
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
									btnValue={'Continue'}
									cardInfo={'Health Risk Assessment'}
									Image={HraImg}
									btnTheme="whiteBtn"
									backgroundColor="white"
									where="/Assessment/health_risk_assessment"
								/>
							</Grid>
							<Grid item xs={3}>
								<PreliminaryCard
									btnValue={'Start'}
									cardInfo={'InBody Comprehensive Check'}
									Image={inbodyImg}
									btnTheme="whiteBtn"
									backgroundColor="white"
								/>
							</Grid>

							<Grid item xs={3}>
								<PreliminaryCard
									btnValue={'Start'}
									cardInfo={'Meal & Fitness Guides'}
									Image={mealImg}
									btnTheme="whiteBtn"
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
						<Grid container spacing={3}  style={{marginTop:"5.4rem"}}>

							<Grid item xs={6}>
								<ProgressSection />
+        </Grid>
+        </Grid>
					</div>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
};

export default DashboardAssessment;
