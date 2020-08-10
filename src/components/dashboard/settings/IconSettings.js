import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//icons
import helpIcon from '../../../assets/helpIcon.svg';
import passwordIcon from '../../../assets/passwordIcon.svg';
import passwordIconIsActive from '../../../assets/passwordIconIsActive.svg';
import accountIcon from '../../../assets/accountIcon.svg';
import accountIconIsActive from '../../../assets/accountIconIsActive.svg';


const Wrapper = styled.div`
height: max-content;
padding: 0px;
display: grid;
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
		'accountIcon',
		'passwordIcon',
		'passwordIconIsActive',
		'help',
		'helpIsActive',
	]).isRequired
};

export default Icon;

