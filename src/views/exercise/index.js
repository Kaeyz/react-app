import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import WelcomeBanner from '../../components/dashboard/dashboard_home/WelcomeBanner';
import ExerciseCard from '../../components/dashboard/exercise/ExerciseCard';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import { getExercises } from '../../store/actions/exerciseActions';

const Wrapper = styled.div`
	padding-top: 3rem;
	.heading {
		display: grid;
		align-items: center;
		grid-template-columns: max-content 1fr;
		padding-bottom: 4rem;
		h1 {
			text-transform: uppercase;
			padding-right: 2rem;
			font-weight: bold;
			color: ${(props) => props.theme.color.ui_05};
		}
		.null {
			border: 1px solid rgba(214, 216, 211, 0.5);
			margin: 10px 0px;
			width: 95%;
			height: 1px;
		}
	}
	.row {
		padding-bottom: 10rem;
	}
	.exercise-programmes {
		display: grid;
		width: 1028px;
		grid-gap: 2rem;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		padding-bottom: 1rem;
		max-width: 100%;
		overflow-x: scroll;
		overflow-y: hidden;
		&::-webkit-scrollbar {
			height: 0.5rem;
		}
		&::-webkit-scrollbar-thumb {
			background-color: ${(props) => props.theme.color.ui_12};
			border-radius: 0.5rem;
		}
	}
`;

const Exercise = ({ getExercises, isLoading, exercises }) => {
	useEffect(() => {
		getExercises();
	}, [getExercises]);

	return (
		<DashboardLayout whatPage="Exercise">
			<h1>Exercise</h1>
			<Wrapper>
				<main className="content">
					<WelcomeBanner detail="Discover fitness programs to keep you in shape and in the best of health" />

					{(!isLoading &&
						Object.keys(exercises).map((key) => (
							<div className="row" key={key}>
								<div className="heading">
									<h1>{key.toUpperCase()}</h1>
									<div className="null" />
								</div>
								<div className="exercise-programmes">
									{exercises[key].map((item) => (
										<ExerciseCard
											key={item.uuid}
											id={item.id}
											image={item.image}
											text={item.name}
										/>
									))}
								</div>
							</div>
						))) || <div>loading...</div>}
				</main>
			</Wrapper>
		</DashboardLayout>
	);
};

Exercise.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	exercises: PropTypes.object.isRequired,
	getExercises: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	const { isLoading, exercises } = state.exercise;
	return { isLoading, exercises };
};

export default connect(mapStateToProps, { getExercises })(Exercise);
