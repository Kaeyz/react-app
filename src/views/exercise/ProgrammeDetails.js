import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../components/dashboard/assessment/hra_questionnaire/QuestionnaireLayout';
import smallImg from '../../assets/Activity.svg';
import img from '../../assets/exercise_bg.svg';
import ExerciseTable from '../../components/dashboard/exercise/ExerciseTable';
import ExerciseCalendar from '../../components/dashboard/exercise/ExerciseCalendar';
import Button from '../../components/common/Button';
import ExerciseMinitable from '../../components/dashboard/exercise/ExerciseMinitable';
import Routine from '../../components/dashboard/exercise/Routine';



const Wrapper = styled.div`
  .null {
    border: 1px solid rgba(214, 216, 211, 0.5);
    width: -webkit-fill-available;
    margin: 10px 0px;
  }
  .top-header {
	margin: 2rem 0;
    p {
      font-weight: normal;
      font-size: 1.6rem;
      line-height: 1.5rem;
      letter-spacing: -.2px;
      color: ${(props) => props.theme.color.ui_06};
      margin-right: 2rem;
      min-width: 180px;
	      }
  }
  .paper_bg{
    
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
border-radius: 10px;
padding:2rem;
    .paper-img{
        width: 100%;
    height: 360px;
        background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    
    }
  }
  .text{
    padding-top: 4rem;
      p{
        font-weight: 300;
        font-size: 1.6rem;
        line-height: 2.5rem;
             letter-spacing: 0.2px;
                color: ${(props) => props.theme.color.ui_05};
                padding-bottom: 2rem;
      }
  }
  .btn{
    display: none;
    padding-bottom: 4rem;
    @media screen and ( max-width: ${(props) => props.theme.breakpoint.sm}) {
      display: block;
  }
  .button{
    width: 100%!important;
  }
  }
`;

function ProgrammeDetails() {


	return (
		<Wrapper>
			<DashboardLayout whatPage="Reports">
				<QuestionnaireLayout
					heading="Programme Details"
					Image={smallImg}
					exerciseButton={true}

					Link="/exercise"
				>
					<div className="flex top-header">
						<p>HIIT Adaptive Training</p>
						<div className="null" />
					</div>
					<Paper className="paper_bg">
						<div className="paper-img">

						</div>
					</Paper>
					<div className="text">
						<p>Any information is confidential to you and Choose Life. Choose Life does not share this information with your employer. This information is strictly to give you an assessment of where your health is, and we use this information in recommending active lifestyle choices.</p>

						<p>Our aim is to help you live your best lives, taking into consideration, your wellbeing and taking the right steps to help you Choose Life, one day at a time.</p>
					</div>
					<ExerciseTable maxW='width' />
					<ExerciseMinitable/>

					<ExerciseCalendar/>
					<div className="btn">
						<Button
							theme="darkGreen"
							text="Add Programme"
						>
						</Button>
					</div>
					<Routine/>
				</QuestionnaireLayout>
			</DashboardLayout>
		</Wrapper>
	);
}

ProgrammeDetails.propTypes = {

};



export default (ProgrammeDetails);
