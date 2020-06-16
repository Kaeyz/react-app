import React from 'react';
import {FormControlLabel, Checkbox, Typography } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: flex-start;
  .checkbox {
    padding: 0;
    margin-right: 0;
    display: grid;
    align-items: flex-start;
    margin-bottom: 0;
  }
  .check {
    margin: 0;
    color: black;
  }
`;


const CheckBox = () => {
	const [state, setState] = React.useState(false);

	const handleChange = (event) => {
		setState(event.target.checked );
	};

	return (
		<Wrapper>
			<FormControlLabel
				className="checkbox"
				control={<Checkbox checked={state} onChange={handleChange} className="check"/>}
			/>
			<Typography variant="subtitle1" component="p">Accept terms and conditions</Typography>
		</Wrapper>
	);
};

export { CheckBox };