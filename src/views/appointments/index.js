import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import appoint from '../../assets/appoint.svg';
import AppointReward from '../../components/common/AppointReward';
import CreateAppointmentModal from '../../components/dashboard/appointments/CreateAppointmentModal';
import WelcomeCard from '../../components/dashboard/dashboard_home/WelcomeBanner';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import { getAppointments } from '../../store/actions/appointmentActions';
import { convertDate } from '../../utils/helper';

const Wrapper = styled.div`
	.heading {
		font-weight: bold;
		line-height: 2.4rem;
		font-size: 2.4rem;
		letter-spacing: -0.2px;
		color: ${(props) => props.theme.color.ui_05};
		padding-bottom: 1rem;
	}
	.text {
		font-weight: normal;
	}
	.sub-heading {
		display: grid;
		align-items: center;
		grid-template-columns: max-content 1fr;
		padding-bottom: 1rem;
		.h-text {
			padding-right: 2rem;
			letter-spacing: -0.2px;
			color: ${(props) => props.theme.color.ui_06};
		}
		.null {
			border: 1px solid rgba(214, 216, 211, 0.5);
			margin: 10px 0px;
			width: 95%;
			height: 1px;
		}
	}
	.p-text {
		letter-spacing: 0.2px;
		color: ${(props) => props.theme.color.ui_05};
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 2rem;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
			justify-items: center;
		}
	}
	.ugly-cards {
		padding: 3rem 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 4rem;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
			justify-items: center;
		}
	}
	.heading-text {
		font-weight: bold;
		line-height: 2.4rem;
		letter-spacing: -0.2px;
		color: ${(props) => props.theme.color.ui_05};
		padding-bottom: 2rem;
	}
	.appoint-card {
		.grid-container {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
			grid-gap: 4rem;
			@media screen and (max-width: ${(props) =>
		props.theme.breakpoint.sm}) {
				grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
				justify-items: center;
			}
		}
	}
`;

function CreateAppointment({ appointments, getAppointments, isLoading }) {
	useEffect(() => {
		getAppointments();
	}, [getAppointments]);

	return (
		<Wrapper>
			<DashboardLayout whatPage="Appointments">
				<h1 className="heading">Appointments</h1>
				<WelcomeCard
					emoji="🎯 "
					heading="Welcome  to Appointments "
					detail="Create or view your appointment for meal plans and InBody
				Appointments"
				/>
				<div className="sub-heading">
					<h1 className="text h-text">Appointments</h1>
					<div className="null" />
				</div>
				<p className="text p-text">
					Any information is confidential to you and Choose Life.
					Choose Life does not share this information with your
					employer. This information is strictly to give you an
					assessment of where your health is, and we use this
					information in recommending active lifestyle choices.
				</p>

				<div container spacing={3} className="ugly-cards">
					<CreateAppointmentModal
						type="INBODY"
						cardTheme="pink"
						title="Set an Inbody Appointment"
						details="Understand your body with a scan"
					/>

					<CreateAppointmentModal
						type="PROFESSIONAL"
						cardTheme="green"
						title="Create a Meal Planning  Appointment"
						details="Discuss with a Nutritionist "
					/>
				</div>
				<div className="appoint-card">
					<h2 className="heading-text">Appointments</h2>
					<div className="grid-container">
						{!isLoading &&
							appointments.length == 0 ?  <p>No Appointment Record</p> :
							appointments.map((appointment) => (
								<AppointReward
									key={appointment.title}
									title={appointment.title}
									info={appointment.description}
									cardTheme="pinkCard"
									right={
										appointment.professional &&
										'Nutritionist'
									}
									left="Date"
									rightB={appointment.professional || ''}
									leftB={convertDate(
										appointment.appointmentTime,
									)}
									icon={appoint}
								/>
							))}
					</div>
				</div>
			</DashboardLayout>
		</Wrapper>
	);
}

CreateAppointment.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	appointments: PropTypes.array.isRequired,
	getAppointments: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	const { appointments, isLoading } = state.appointment;
	return { isLoading, appointments };
};

export default connect(mapStateToProps, { getAppointments })(CreateAppointment);
