import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import WelcomeCard from '../../components/dashboard/dashboard_home/WelcomeBanner';
import styled from 'styled-components';
import CreateAppointmentModal from '../../components/dashboard/appointments/CreateAppointmentModal';
import AppointReward from '../../components/common/AppointReward';
import appoint from '../../assets/appoint.svg';
import { SelectInput } from '../../components/common/inputs';

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
  .ugly-cards {
    padding: 3rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 4rem;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      justify-items: center;
    }
  }
  .heading-text {
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 2.4rem;
    letter-spacing: -0.2px;
    color: ${(props) => props.theme.color.ui_05};
    padding-bottom: 4rem;
  }
  .appoint-card {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-gap: 4rem;
      @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        justify-items: center;
      }
    }
  }
`;
const optionNutritionist = [
	{ value: 'Select a Nutritionist', text: 'Select a Nutritionist' },
	{ value: 'JOHN', text: 'John' },
	{ value: 'ADE', text: 'Ade' },
	{ value: 'TOMI', text: 'Tomi' },
	{ value: 'FELIX', text: 'Felix' },
	{ value: 'IBRAHIM', text: 'Ibrahim' },
];
const InbodyOption = [
	{ value: 'Select Purpose', text: 'Select Purpose' },
	{ value: 'INBODY', text: 'Inbody Appointment' },
];
const MealOption = [
	{ value: 'Select Purpose', text: 'Select Purpose' },
	{ value: 'MEAL', text: 'Meal Appointment' },
];

function CreateAppointment(props) {
	const [Nutritionist, setNutritionist] = useState('');

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
          Any information is confidential to you and Choose Life. Choose Life
          does not share this information with your employer. This information
          is strictly to give you an assessment of where your health is, and we
          use this information in recommending active lifestyle choices.
				</p>

				<div container spacing={3} className="ugly-cards">
					<CreateAppointmentModal
						cardTheme="pink"
						title="Set an Inbody Appointment"
						details="Understand your body with a scan"
						optionPurpose={InbodyOption}
					/>

					<CreateAppointmentModal
						cardTheme="green"
						title="Create a Meal Planning  Appointment"
						details="Discuss with a Nutritionist "
						optionPurpose={MealOption}
						Nutritionist={
							<SelectInput
								label="Nutritionist"
								options={optionNutritionist}
								value={Nutritionist}
								onChange={setNutritionist}
							/>
						}
					/>
				</div>
				<div className="appoint-card">
					<h1 className="heading-text">Appointments</h1>
					<div className="grid-container">
						<AppointReward
							title="Appointment  Title"
							info="Appointment Description in here lorem ipsum sample text with some more details"
							cardTheme="pinkCard"
							left="Nutritionist"
							right="Date"
							leftB="Dr. Lorem ipsu..."
							icon={appoint}
						/>
						<AppointReward
							title="Appointment  Title"
							info="Appointment Description in here lorem ipsum sample text with some more details"
							cardTheme="purpleCard"
							left="Nutritionist"
							right="Date"
							leftB="Dr. Lorem ipsu... "
							icon={appoint}
						/>
					</div>
				</div>
			</DashboardLayout>
		</Wrapper>
	);
}

CreateAppointment.propTypes = {};

export default CreateAppointment;
