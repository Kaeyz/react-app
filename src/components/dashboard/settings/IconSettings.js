import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import accountIcon from '../../../assets/accountIcon.svg';
import accountIconIsActive from '../../../assets/accountIconIsActive.svg';
//icons
import helpIcon from '../../../assets/helpIcon.svg';
import passwordIcon from '../../../assets/passwordIcon.svg';
import passwordIconIsActive from '../../../assets/passwordIconIsActive.svg';



const Wrapper = styled.div`
height: max-content;
padding: 0px;
display: grid;
@media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
	display:none;	}
  }
	.icon {
  	display: inline-block;
  	width: 2rem;
		height: 2rem;
        background-repeat: no-repeat;
		background-size: contain;

	}
	.account {
  	background-image: url(${accountIcon});
	}
	.accountIsActive {
  	background-image: url(${accountIconIsActive});
	}
	.password {
  	background-image: url(${passwordIcon});
	}
	.passwordIsActive {
  	background-image: url(${passwordIconIsActive});
	}
	.help {
  	background-image: url(${helpIcon});
	}
	.helpIsActive {
  	background-image: url(${helpIcon});

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
		'accountIconIsActive',
		'accountIsActive',
		'accountIcon',
		'account',
		'passwordIcon',
		'passwordIconIsActive',
		'help',
		'helpIsActive',
		'password'
	]).isRequired,
};

export default Icon;
