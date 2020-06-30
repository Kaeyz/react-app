import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "../common/Button";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "left",
    padding: "3.7rem 2rem" ,
  },
}));
const Wrapper = styled.div`
  h5 {
    font-size: 30px;
    line-height: 32px;
  }
  p {
    font-size: 12px;
    line-height: 16px;
    color: ${(props) => props.theme.color.text_02};
    margin: 1.4rem 0 2.3rem 0;
  }
`;

const PreliminaryCard = (props) => {
  const classes = useStyles();

  return (
    <Wrapper>
      <Paper className={classes.paper}>
        <img src={props.Image} alt="bodyMass" />
        <h5>{props.cardValue}</h5>
        <p>{props.cardInfo}</p>
        <Link to="">
          <Button value="View" theme={props.theme}>
            View
          </Button>
        </Link>
      </Paper>
    </Wrapper>
  );
};

export default PreliminaryCard;
