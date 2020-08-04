import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//icons
import dashboardIcon from '../../assets/dashboardIcon.svg';
import dashboardIsActiveIcon from '../../assets/dashboardIsActiveIcon.svg';
import assessments from '../../assets/assessments.svg';
import assessmentsIsActive from '../../assets/assessmentsIsActive.svg';
import downloadIcon from '../../assets/downloadIcon.svg';
import downloadIconIsActive from '../../assets/downloadIconIsActive.svg';
import settingsIcon from '../../assets/settingsIcon.svg';
import settingIconIsActive from '../../assets/settingIconIsActive.svg';
import appointmentsIcon from '../../assets/appointmentsIcon.svg';
import appointmentsIconIsActive from '../../assets/appointmentsIconIsActive.svg';
import exerciseIcon from '../../assets/exerciseIcon.svg';
import exerciseIconIsActive from '../../assets/exerciseIconIsActive.svg';
import logoutIcon from '../../assets/logoutIcon.svg';
import mealsIcon from '../../assets/mealsIcon.svg';
import mealsIconIsActive from '../../assets/mealsIconIsActive.svg';
import rewardsIcon from '../../assets/rewardsIcon.svg';
import rewardsIconIsActive from '../../assets/rewardsIconIsActive.svg';


const Wrapper = styled.div`
height: max-content;
padding: 0px;
display: grid;
	.icon {
  	display: inline-block;
  	width: 2rem;
		height: 2rem;
  	background-size: cover;
	}
	.rewards {
  	background-image: url(${rewardsIcon});
	}
	.rewardsIsActive {
  	background-image: url(${rewardsIconIsActive});
	}
	.meals {
  	background-image: url(${mealsIcon});
	}
	.mealsIsActive {
  	background-image: url(${mealsIconIsActive});
	}
	.logout {
  	background-image: url(${logoutIcon});
	}
	.logoutIsActive {
  	background-image: url(${logoutIcon});
	}
	.exercise {
  	background-image: url(${exerciseIcon});
	}
	.exerciseIsActive {
  	background-image: url(${exerciseIconIsActive});
	}
	.appointments {
  	background-image: url(${appointmentsIcon});
	}
	.appointmentsIsActive {
  	background-image: url(${appointmentsIconIsActive});
		}
	.settings {
  	background-image: url(${settingsIcon});
	}
	settingsIsActive {
  	background-image: url(${settingIconIsActive});
	}
	.download {
  	background-image: url(${downloadIcon});
	}
	.downloadIsActive {
  	background-image: url(${downloadIconIsActive});
	}
	.dashboard_home {
  	background-image: url(${dashboardIcon});
	}
	.dashboard_homeIsActive {
  	background-image: url(${dashboardIsActiveIcon});
		}
	.assessments {
  	background-image: url(${assessments});
	}
	.assessmentsIsActive {
  	background-image: url(${assessmentsIsActive});
	}
`;



function Icon({name}) {
	return (
		<Wrapper>
			<span className={`icon ${name}`} />
		</Wrapper>
	);
}

Icon.propTypes = {
	name: PropTypes.oneOf([
		'dashboard_homeIsActive',
		'dashboard_home',
		'assessments',
		'assessmentsIsActive',
		'download',
		'downloadIsActive',
		'account',
		'accountIsActive',
		'appointments',
		'appointmentsIsActive',
		'rewards',
		'rewardsIsActive',
		'meals',
		'mealsIsActive',
		'logout',
		'exercise',
		'exerciseIsActive',
	]).isRequired
};

export default Icon;

