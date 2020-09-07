import React from 'react';
// import PropTypes from 'prop-types';
import AppointmentLayout from '../../components/layouts/dashboardLayout/AppointmentLayout';
import styled from 'styled-components';
import AppointReward from '../../components/common/AppointReward';
import CreateAppointmentModal from '../../components/dashboard/appointments/CreateAppointmentModal';
import appoint from '../../assets/appoint.svg';

const Wrapper = styled.div`
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

function CreateAppointment(props) {
	return (
		<Wrapper>
			<AppointmentLayout>
				<div className="appoint-card">
					<h1 className="heading-text">Appointments</h1>
					<div className="grid-container">
						<CreateAppointmentModal />{' '}
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
			</AppointmentLayout>
		</Wrapper>
	);
}

CreateAppointment.propTypes = {};

export default CreateAppointment;
