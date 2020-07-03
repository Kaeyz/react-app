import React from 'react';
import DashboardLayout from '../../../components/layouts/dashboardLayout/DashboardLayout';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import DashedProgressCard from '../../../components/dashboard/assessment/DashedProgessCard';
import HraImg from '../../../assets/hraImg.svg';
import inbodyImg from '../../../assets/inbodyImg.svg';
import mealImg from '../../../assets/mealImg.svg';
// import ProgressSection from '../../../components/dashboard/commonDashboard/ProgressSection';
import Button from '../../../components/common/Button';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../../components/dashboard/assessment/BreadCrumb';

const Wrapper = styled.div`
  .content {
    padding: 2rem;
  }
  .heading {
    color: ${(props) => props.theme.color.text_01};
    font-weight: 600;
margin-top:2.9rem;
    p {
      font-size: 3rem;
      line-height: 3.2rem;
    }
  }
  .lower {
    .info-2 {
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: ${(props) => props.theme.color.text_02};
      margin: 4.8rem 0 1.5rem 0;
    }
  }
  .heading2 {
    display: flex;
    justify-content: space-between;
    margin: 3.2rem 0;
    padding: 0 2px;
    h1 {
      font-size: 1.8rem;
      line-height: 2.4rem;
      font-weight: 600;
      margin-right: 4.1rem;
      color: ${(props) => props.theme.color.text_01};
    }
    .null {
      border-bottom: 1px solid #d6d8d3;
      width: 53.4rem;
      margin-bottom: .5rem;
    }
  }
  .middle {
	  width:80.2rem;
	  margin-bottom:4.6rem;

  }
  .footer{
	  margin-top:7.6rem;
	  text-transform: uppercase;
	  span{
		color: ${(props) => props.theme.color.brand_01};
	}
  }
  .darkP {
	font-size: 1.4rem;
	line-height: 2.4rem;
	color: ${(props) => props.theme.color.text_02};
  }
 
`;


const HealthRiskAssessment = () => {
	return (
		<DashboardLayout>
			<Wrapper>
				<main className="content">
					<BreadCrumb />
					<div className="heading">
						<p>Health Risk Assessments</p>
					</div>

					<div className="middle">
						<div className="heading2">
							<h1>Preliminary assessment</h1>
							<div className="null"></div>
						</div>{' '}
						<Grid container spacing={1}>
							<Grid item xs={6}>
								<p className="darkP">
                  Any information is confidential to you and Choose Life. Choose
                  Life does not share this information with your employer.
								</p>
								<br />
								<p className="darkP">
                  This information is strictly to give you an assessment of
                  where your health is, and we use this information in
                  recommending active lifestyle choices.
								</p>
							</Grid>

							<Grid item xs={6}>
								<p className="darkP">
                  Our aim is to help you live your best lives, taking into
                  consideration, your wellbeing and taking the right steps to
                  help you Choose Life, one day at a time.{' '}
								</p>
							</Grid>
						</Grid>
					</div>
					<div className="lower">
						<Grid container spacing={3}>
							<Grid item xs={3}>
								<DashedProgressCard
									btnValue={'Start'}
									cardInfo={'Health Risk Assessment'}
									Image={HraImg}
									btnTheme="whiteBtn"
									backgroundColor="white"
								/>
							</Grid>
							<Grid item xs={3}>
								<DashedProgressCard
									btnValue={'Start'}
									cardInfo={'Lifestyle Assessment'}
									Image={inbodyImg}
									btnTheme="whiteBtn"
									backgroundColor="white"
								/>
							</Grid>

							<Grid item xs={3}>
								<DashedProgressCard
									btnValue={'Start'}
									cardInfo={'Fitness Assessment'}
									Image={mealImg}
									btnTheme="whiteBtn"
									backgroundColor="white"
								/>
							</Grid>

							<Grid item xs={3}>
								<DashedProgressCard
									btnValue={'Start'}
									cardInfo={'Nutrition Assessment'}
									Image={mealImg}
									btnTheme="whiteBtn"
									backgroundColor="white"
								/>
							</Grid>
						</Grid>
						<p className="info-2">
              4,000 others have completed this assessment. Fill and qualify for
              the Wellness reward!
						</p>
						<Link to="">
							<Button value="View Leaderboard" theme="green">
                View Leaderboard
							</Button>
						</Link>

						<p className="footer darkP">This assessment is powered by <span>GHM Healthy Life HRA</span></p>
					</div>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
};

export default HealthRiskAssessment;
