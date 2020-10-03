import React from 'react';
import styled from 'styled-components';
import WelcomeBanner from '../../components/dashboard/dashboard_home/WelcomeBanner';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import ExerciseCard from '../../components/dashboard/exercise/ExerciseCard';
import exerciseData from './exerciseData';


const Wrapper = styled.div`
padding-top: 6rem;
.heading	{
    display: grid;
    align-items: center;
    grid-template-columns: max-content 1fr;
    padding-bottom: 4rem;
    h1	{
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
.row	{
    padding-bottom: 10rem;
}
.exercise-programmes	{
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


const Exercise = () => {

	return (
		<DashboardLayout whatPage="Exercise">
			<Wrapper>
				<main className="content">

					<WelcomeBanner detail='Discover fitness programs to keep you in shape and in the best of health' />

					{Object.keys(exerciseData).map(key => (
						<div className="row" key={key}>
							<div className="heading">
								<h1>{key.toUpperCase()}</h1>
								<div className="null" />
							</div>
							<div className="exercise-programmes">
								{exerciseData[key].map(item => (
									<ExerciseCard
										key={item.text}
										image={item.img}
										text={item.text}
									/>
								))}
							</div>
						</div>
					))
					}
				</main>
			</Wrapper>
		</DashboardLayout>
	);
};

export default Exercise;