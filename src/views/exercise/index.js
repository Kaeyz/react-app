import React from 'react';
import styled from 'styled-components';
import WelcomeBanner from '../../components/dashboard/dashboard_home/WelcomeBanner';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import ExerciseCard from '../../components/dashboard/exercise/ExerciseCard';
import exercise1 from '../../assets/exercise1.svg';
import exercise2 from '../../assets/exercise2.svg';
import exercise3 from '../../assets/exercise3.svg';
import exercise4 from '../../assets/exercise4.svg';
import exercise5 from '../../assets/exercise5.svg';
import exercise6 from '../../assets/exercise6.svg';
import exercise7 from '../../assets/exercise7.svg';
import exercise8 from '../../assets/exercise8.svg';
import exercise9 from '../../assets/exercise9.svg';
import exercise10 from '../../assets/exercise10.svg';
import exercise11 from '../../assets/exercise11.svg';
import exercise12 from '../../assets/exercise12.svg';
import exercise13 from '../../assets/exercise13.svg';
import exercise14 from '../../assets/exercise14.svg';
import exercise15 from '../../assets/exercise15.svg';
import exercise16 from '../../assets/exercise16.svg';
import exercise17 from '../../assets/exercise17.svg';

const Wrapper = styled.div`
padding-top: 6rem;
.heading{
    display: grid;
    align-items: center;
    grid-template-columns: max-content 1fr;
    padding-bottom: 4rem;
    h1{
        text-transform: uppercase;
        padding-right: 2rem;
        font-weight: bold;
font-size: 1.6rem;
line-height: 1.6rem;
letter-spacing: 1.8px;
color: ${(props) => props.theme.color.ui_05};
    }
    .null {
        border: 1px solid rgba(214, 216, 211, 0.5);
        margin: 10px 0px;
        width: 95%;
        height: 1px;
    }
}
.row{
    padding-bottom: 10rem;

}
.exercise-programmes{
    display: grid;
    width: 1028px;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding-bottom: 1rem;
    max-width: 100%;
            overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
	  height: .5rem;
	  
    }
      &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.color.ui_12};
	  border-radius: 0.5rem;
	    }
}
`;

const index = () => {

	return (
		<DashboardLayout whatPage="Assessment">
			<Wrapper>
				<main className="content">

					<WelcomeBanner/>
					<div className="row">
						<div className="heading">
							<h1>Joined programme</h1>
							<div className="null" />
						</div>
						<div className="exercise-programmes">
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise2} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise3} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise4} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise5} text='HIIT Adaptive Training'/>
						</div>
					</div>

                	<div className="row">
						<div className="heading">
							<h1>GENERAL FITNESS WORKOUT</h1>
							<div className="null" />
						</div>
						<div className="exercise-programmes">
							<ExerciseCard image={exercise5} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise6} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise7} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise8} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise9} text='HIIT Adaptive Training'/>
						</div>
					</div>


					<div className="row">
                	<div className="heading">
							<h1>WEIGHT LOSS</h1>
							<div className="null" />
						</div>
						<div className="exercise-programmes">
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise9} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise10} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise11} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise12} text='HIIT Adaptive Training'/>
						</div>
					</div>

					<div className="row">

                	<div className="heading">
							<h1>posture correction</h1>
							<div className="null" />
						</div>
						<div className="exercise-programmes">
							<ExerciseCard image={exercise12} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise13} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise14} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise15} text='HIIT Adaptive Training'/>
						</div>
					</div>

					<div className="row">

                	<div className="heading">
							<h1>RUNNING</h1>
							<div className="null" />
						</div>
						<div className="exercise-programmes">
							<ExerciseCard image={exercise15} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise1} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise16} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise17} text='HIIT Adaptive Training'/>
							<ExerciseCard image={exercise7} text='HIIT Adaptive Training'/>
						</div>
					</div>
				</main>	</Wrapper>
		</DashboardLayout>
	);
};

// index.propTypes = {

// }

export default index;