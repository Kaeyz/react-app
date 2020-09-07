import React from 'react';
import PropTypes from 'prop-types';
import DashboardLayout from '../../../components/layouts/dashboardLayout/DashboardLayout';
import WelcomeCard from '../../../components/dashboard/dashboard_home/WelcomeBanner';
import AppointmentUglyCard from '../../../components/dashboard/appointments/AppointmentUglyCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  .heading {
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 2.4rem;
    letter-spacing: -0.2px;
    color: ${(props) => props.theme.color.ui_05};
    padding-bottom: 4rem;
  }
  .text {
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 1.5rem;
  }
  .sub-heading {
    display: grid;
    align-items: center;
    grid-template-columns: max-content 1fr;
    padding-bottom: 4rem;
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
    line-height: 25px;
  }
  .ugly-cards{
    padding: 3rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 4rem;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      justify-items: center;
    }
  }
`;

function AppointmentLayout({ children }) {
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
					<h1 className="text h-text">Appointment Lorem ipsum</h1>
					<div className="null" />
				</div>
				<p className="text p-text">
          Any information is confidential to you and Choose Life. Choose Life
          does not share this information with your employer. This information
          is strictly to give you an assessment of where your health is, and we
          use this information in recommending active lifestyle choices.
				</p>

				<div container spacing={3} className="ugly-cards">

					<Link to="/appointments/create_appointment">
						<AppointmentUglyCard
							cardTheme='pink'
							title="Set an Inbody Appointment"
							details="Understand your body with a scan"
						/>
					</Link>

					<Link to="/appointments/create_appointment">
						<AppointmentUglyCard
							cardTheme='green'
							title="Create a Meal Planning  Appointment"
							details="Discuss with a Nutritionist"
						/>
					</Link>
				</div>
				{children}
			</DashboardLayout>
		</Wrapper>
	);
}

AppointmentLayout.propTypes = {
	children: PropTypes.any.isRequired,
};

export default AppointmentLayout;
